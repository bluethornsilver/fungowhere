import {singaporeToday,validDate} from './events.js';
import {defaultAnswers,labels} from './quiz.js';
import {validTime} from './opening-hours.js';
export function cleanAnswers(input,areas){
 const a={...defaultAnswers};
 for(const [key,values] of Object.entries({group:['solo','pair','friends','family'],duration:[1,2,3],budget:[0,1,2,3],weather:['either','indoor','mostly-indoor','outdoor'],area:['any',...areas],energy:[null,1,2,3,4],crowd:[null,1,2,3,4]})){
  const value=values.find(v=>String(v??'')===String(input[key]??''));if(value!==undefined)a[key]=value;
 }
 a.visitDate=validDate(input.visitDate)?input.visitDate:null;
 a.visitTime=validTime(input.visitTime)?input.visitTime:null;
 a.interests=[...new Set((Array.isArray(input.interests)?input.interests:[]).filter(v=>Object.hasOwn(labels,v)))];return a;
}
export function readRoute(search,areas,places){
 const p=new URLSearchParams(search);const view=['home','results','saved','quiz','review','events'].includes(p.get('view'))?p.get('view'):'home';
 const compareIds=[...new Set(p.getAll('compare').filter(id=>places.some(x=>x.id===id)))].slice(0,3);
 const answers=cleanAnswers({...Object.fromEntries(p),interests:p.getAll('interest')},areas);
 return {view,answers,eventDate:validDate(p.get('day'))?p.get('day'):singaporeToday(),eventCost:['free','paid','affordable'].includes(p.get('cost'))?p.get('cost'):'affordable',eventQuery:(p.get('search')||'').trim().slice(0,120),comparison:compareIds.length>=2,compareIds:compareIds.length>=2?compareIds:[],step:Math.min(7,Math.max(0,Math.trunc(Number(p.get('step')))||0)),ids:[...new Set(p.getAll('idea').filter(id=>places.some(x=>x.id===id)))],mode:['ranked','shuffle','all'].includes(p.get('mode'))?p.get('mode'):'ranked',place:places.some(x=>x.id===p.get('place'))?p.get('place'):null};
}
export function routeURL(state){const p=new URLSearchParams({view:state.view});for(const [k,v] of Object.entries(state.answers)){if(k==='interests')v.forEach(i=>p.append('interest',i));else if(v!==null)p.set(k,String(v));}if(state.eventDate)p.set('day',state.eventDate);if(state.eventCost)p.set('cost',state.eventCost);if(state.eventQuery)p.set('search',state.eventQuery);if(state.view==='quiz')p.set('step',state.step);if(state.mode)p.set('mode',state.mode);state.ids?.forEach(id=>p.append('idea',id));if(state.place)p.set('place',state.place);if(state.comparison)state.compareIds?.forEach(id=>p.append('compare',id));return '?'+p;}

