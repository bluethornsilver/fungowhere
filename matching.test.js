import {singaporeToday} from './events.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {places} from './data.js';
import {defaultAnswers} from './quiz.js';
import {rankPlaces,parseSaved,savedPlaces,pickAlternatives} from './matching.js';
test('Every combination respects group, activity time, price ceiling and strict indoor selection',()=>{
 for(const group of ['solo','pair','friends','family'])for(const duration of [1,2,3])for(const budget of [0,1,2,3])for(const weather of ['either','indoor','mostly-indoor','outdoor']){
  const a={...defaultAnswers,group,duration,budget,weather};
  for(const {place:p} of rankPlaces(places,a)){assert.ok(p.groups.includes(group));assert.ok(p.duration<=duration);assert.ok(p.budget<=budget);if(weather==='indoor')assert.equal(p.setting,'indoor');}
 }
});
test('Saved collection does not inherit recommendation filters',()=>{const p=places.find(p=>p.duration===3);const ids=[p.id];assert.deepEqual(savedPlaces(places,ids),[p]);assert.ok(!rankPlaces(places,{...defaultAnswers,duration:1}).some(r=>r.place.id===p.id));});
test('Invalid saved JSON, wrong types and unknown IDs are safe',()=>{assert.deepEqual(parseSaved('broken',places),[]);assert.deepEqual(parseSaved('{}',places),[]);assert.deepEqual(parseSaved(JSON.stringify([null,42,'missing',places[0].id,places[0].id]),places),[places[0].id]);});
test('Alternatives differ from current cards and retain eligibility',()=>{const ranked=rankPlaces(places,{...defaultAnswers,budget:0,duration:3});const current=ranked.slice(0,3).map(r=>r.place.id);const next=pickAlternatives(ranked,current,3,()=>0.4);assert.ok(next.length);for(const r of next){assert.ok(!current.includes(r.place.id));assert.equal(r.place.budget,0);}assert.equal(new Set(next.map(r=>r.place.id)).size,next.length);});
test('Existing catalogue IDs are unique and source links use HTTPS',()=>{assert.equal(new Set(places.map(p=>p.id)).size,places.length);for(const p of places)assert.ok(p.source.startsWith('https://'));});
import {shortlist} from './matching.js';
import {readRoute,routeURL} from './routing.js';
import {quizQuestions} from './quiz.js';
import {venueInfo} from './venue-info.js';
import {stat} from 'node:fs/promises';
const areas=[...new Set(places.map(p=>p.area))];
test('Neutral preferences contribute no hidden activity or crowd score',()=>{const ranked=rankPlaces(places,defaultAnswers);assert.ok(ranked.length);assert.ok(ranked.every(r=>r.score===0));});
test('Multiple interests and area preference affect order without excluding eligible places',()=>{const a={...defaultAnswers,interests:['nature','culture'],area:'Tanglin'};const neutral=rankPlaces(places,defaultAnswers),ranked=rankPlaces(places,a);assert.deepEqual(new Set(ranked.map(r=>r.place.id)),new Set(neutral.map(r=>r.place.id)));const gardens=ranked.find(r=>r.place.id==='singapore-botanic-gardens');assert.equal(gardens.score,54);assert.ok(gardens.reasons.includes('In your preferred area'));assert.ok(ranked.some(r=>r.tradeoffs.includes('Outside your preferred area')));});
test('Shortlist diversifies the third option and random alternatives make no ranking claim',()=>{const ranked=rankPlaces(places,{...defaultAnswers,budget:0});const list=shortlist(ranked);assert.equal(list[0].place.id,ranked[0].place.id);assert.equal(list[0].role,'Best fit');assert.equal(new Set(list.map(r=>r.place.id)).size,3);assert.ok(list[2].place.interests[0]!==list[0].place.interests[0]||list[2].place.setting!==list[0].place.setting);assert.ok(pickAlternatives(ranked,[]).every(r=>r.role==='Another idea'));});
test('Preference, quiz, shuffled results and place URLs survive refresh roundtrip',()=>{const route={eventDate:singaporeToday(),eventCost:'affordable',eventQuery:'',comparison:false,compareIds:[],view:'quiz',step:5,answers:{...defaultAnswers,interests:['nature','culture'],area:'Tanglin',energy:1,crowd:null},mode:'shuffle',ids:[places[0].id],place:places[1].id};assert.deepEqual(readRoute(routeURL(route),areas,places),route);});
test('Malformed URLs cannot crash the quiz or introduce unknown filters or places',()=>{for(const step of ['NaN','Infinity','-2','1.5','999']){const r=readRoute('?view=quiz&step='+step+'&group=unknown&interest=bad&energy=oops&idea=missing&place=missing',areas,places);assert.ok(Number.isInteger(r.step));assert.ok(quizQuestions(areas)[r.step]);assert.equal(r.answers.group,'pair');assert.equal(r.answers.energy,null);assert.deepEqual(r.answers.interests,[]);assert.deepEqual(r.ids,[]);assert.equal(r.place,null);}});
test('Checked venue photos have existing assets, attribution and explicit practical fields',async()=>{for(const [id,info] of Object.entries(venueInfo)){assert.ok(places.some(p=>p.id===id));assert.ok((await stat('public'+info.photo)).size>1000);for(const field of ['alt','credit','license','licenseUrl','photoSource','checked','source','hours','admission','booking','access'])assert.ok(info[field]);assert.ok(info.source.startsWith('https://'));}});
test('Shortlist includes a close-scoring preferred-area option when the best fit is elsewhere',()=>{const a={...defaultAnswers,budget:0,interests:['nature','culture'],area:'Tanglin'};const list=shortlist(rankPlaces(places,a),a);assert.ok(list.some(r=>r.place.area==='Tanglin'));assert.equal(new Set(list.map(r=>r.place.id)).size,list.length);});
test('Comparison links require two distinct known venues and cap selection at three',()=>{const ids=places.slice(0,4).map(p=>p.id);const query=ids.map(id=>'compare='+id).join('&');const r=readRoute('?'+query,areas,places);assert.equal(r.comparison,true);assert.deepEqual(r.compareIds,ids.slice(0,3));assert.deepEqual(readRoute(routeURL(r),areas,places),r);assert.equal(readRoute('?compare='+ids[0]+'&compare='+ids[0],areas,places).comparison,false);});
