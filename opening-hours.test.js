import test from 'node:test';
import assert from 'node:assert/strict';
import {openingHours,hoursStatus,singaporeTime} from './opening-hours.js';
import {rankPlaces,shortlist,pickAlternatives} from './matching.js';
import {defaultAnswers} from './quiz.js';
import {places} from './data.js';
import {readRoute,routeURL,cleanAnswers} from './routing.js';
import {events,scheduledEvents} from './events.js';
const now=new Date('2026-10-11T02:00:00Z');
const at=(id,visitDate='2026-10-11',visitTime='10:00',duration=3,clock=now)=>hoursStatus(places.find(p=>p.id===id),{visitDate,visitTime,duration},clock);

test('NParks outings respect reserve boundaries instead of surrounding 24-hour park access',()=>{
 assert.equal(at('labrador-nature-reserve','2026-10-12','17:00').status,'fits');
 assert.equal(at('labrador-nature-reserve','2026-10-12','17:01').status,'too-late');
 assert.equal(at('labrador-nature-reserve','2026-10-12','20:00').status,'closed');
 assert.equal(at('coney-island-park','2026-10-12','16:00').status,'fits');
 assert.equal(at('coney-island-park','2026-10-12','16:01').status,'too-late');
 assert.equal(at('punggol-waterway-park','2026-10-12','23:30').status,'fits');
 assert.equal(at('hortpark','2026-10-12','21:01').status,'too-late');
});

test('Sungei Buloh potential flood closure excludes overlapping routes without claiming full-day closure',()=>{
 assert.equal(at('sungei-buloh-wetland-reserve','2026-10-28','10:00').status,'unknown');
 assert.equal(at('sungei-buloh-wetland-reserve','2026-10-28','13:00').status,'fits');
 assert.equal(at('sungei-buloh-wetland-reserve','2026-10-27','10:00').status,'fits');
 assert.equal(at('sungei-buloh-wetland-reserve','2026-10-12','18:30').status,'last-entry');
});
test('Sunday City Gallery and special-event Hell’s Museum closure never enter recommendations',()=>{
 assert.equal(at('singapore-city-gallery').status,'closed');
 assert.equal(at('hell-s-museum').status,'closed');
 const ranked=rankPlaces(places,{...defaultAnswers,visitDate:'2026-10-11',visitTime:'13:00'},now);
 for(const id of ['singapore-city-gallery','hell-s-museum','superpark-singapore'])assert.ok(!ranked.some(r=>r.place.id===id));
 for(const r of [...ranked,...shortlist(ranked),...pickAlternatives(ranked,[])])assert.equal(hoursStatus(r.place,{...defaultAnswers,visitDate:'2026-10-11',visitTime:'13:00'},now).status,'fits');
});
test('Maintenance closures, public holidays and future full closures override normal schedules',()=>{
 assert.equal(at('cloud-forest','2026-10-26').status,'closed');
 assert.equal(at('singapore-city-gallery','2026-11-09').status,'closed');
 assert.equal(at('singapore-city-gallery','2027-05-03').status,'closed');
 assert.equal(at('singapore-city-gallery','2026-10-12').status,'fits');
});
test('Last entry, closing boundary and full activity time are separate checks',()=>{
 assert.equal(at('cloud-forest','2026-10-11','20:00').status,'last-entry');
 assert.equal(at('cloud-forest','2026-10-11','19:01').status,'too-late');
 assert.equal(at('cloud-forest','2026-10-11','19:00').status,'fits');
 assert.equal(at('flower-dome','2026-10-11','21:00').status,'closed');
 assert.equal(at('national-orchid-garden','2026-10-11','18:00').status,'last-entry');
 assert.equal(at('jewel-rain-vortex','2026-10-11','09:59').status,'past');
 assert.equal(at('jewel-rain-vortex','2026-10-12','09:59').status,'closed');
});
test('Overnight hours use the previous day; 24-hour grounds permit midnight crossings',()=>{
 const clock=new Date('2026-10-10T16:00:00Z');
 assert.equal(at('supertree-grove','2026-10-11','00:30',3,clock).status,'fits');
 assert.equal(at('supertree-grove','2026-10-11','01:30',3,clock).status,'too-late');
 assert.equal(at('supertree-grove','2026-10-11','02:00',3,clock).status,'closed');
 assert.equal(at('fort-canning-park','2026-10-11','23:00').status,'fits');
});
test('Friday extension and public holiday eve hours affect eligibility',()=>{
 assert.equal(at('asian-civilisations-museum','2026-10-16','18:00').status,'fits');
 assert.equal(at('asian-civilisations-museum','2026-10-15','18:00').status,'too-late');
 assert.equal(at('jewel-canopy-park','2026-11-09','20:00').status,'fits');
});
test('Unknown, stale, unsupported future dates and past arrivals fail closed',()=>{
 assert.equal(at('superpark-singapore').status,'unknown');
 assert.equal(at('cloud-forest','2026-11-11').status,'unknown');
 assert.equal(at('cloud-forest','2026-11-11','10:00',3,new Date('2026-11-11T02:00:00Z')).status,'unknown');
 assert.equal(at('cloud-forest','2026-10-10').status,'past');
 assert.equal(at('cloud-forest','2026-10-11','09:59').status,'past');
 assert.equal(at('cloud-forest','2026-02-30').status,'unknown');
 assert.equal(at('cloud-forest','2026-10-11','25:00').status,'unknown');
 assert.equal(singaporeTime(new Date('2026-10-10T16:05:00Z')),'00:05');
});
test('Official TreeTop approach duration cannot fit the current three-hour planner',()=>{
 assert.equal(at('treetop-walk','2026-10-13').status,'too-short');
 assert.equal(at('treetop-walk','2026-10-13','10:00',4).status,'fits');
 assert.equal(at('treetop-walk','2026-10-12','10:00',4).status,'closed');
 assert.equal(at('treetop-walk','2026-11-09','10:00',4).status,'fits');
});
test('Visit plan persists in URLs and rejects malformed arrival inputs',()=>{
 const areas=[...new Set(places.map(p=>p.area))];
 const state=readRoute('?view=results&visitDate=2026-10-12&visitTime=14%3A30',areas,places);
 assert.deepEqual(readRoute(routeURL(state),areas,places),state);
 assert.equal(state.answers.visitTime,'14:30');
 const a=cleanAnswers({visitDate:'2026-02-30',visitTime:'24:01'},areas);
 assert.equal(a.visitDate,null);assert.equal(a.visitTime,null);
});
test('Every schedule has an official source, checked date, review window and catalogue ID',()=>{
 for(const [id,r] of Object.entries(openingHours)){
  assert.ok(places.some(p=>p.id===id));assert.match(r.source,/^https:\/\//);
  assert.equal(r.checked,'2026-10-11');assert.equal(r.reviewBy,'2026-11-10');assert.ok(r.hours);
 }
});
test('Event suggestions exclude ended sessions, unknown hours and stale checks',()=>{
 const filters={date:'2026-10-11',cost:'affordable',query:''};
 const shown=scheduledEvents(events,filters,new Date('2026-10-11T05:00:00Z'));
 assert.equal(shown.length,2);
 assert.ok(!shown.some(e=>e.id==='nobel-heroes-2026'||e.id.startsWith('onepa')));
 assert.deepEqual(scheduledEvents(events,filters,new Date('2026-10-11T14:00:00Z')),[]);
 assert.deepEqual(scheduledEvents([{...events[0],end:'2026-12-31'}],{...filters,date:'2026-11-11'},new Date('2026-11-11T02:00:00Z')),[]);
});
