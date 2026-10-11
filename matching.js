export function rankPlaces(places,a){
 const interests=a.interests??(a.interest&&a.interest!=='any'?[a.interest]:[]);
 return places.filter(p=>p.groups.includes(a.group)&&p.duration<=Number(a.duration)&&p.budget<=Number(a.budget)&&(a.weather!=='indoor'||p.setting==='indoor')).map(p=>{
  const matched=interests.filter(i=>p.interests.includes(i));
  const areaMatch=a.area&&a.area!=='any'&&p.area===a.area;
  const energy=a.energy!==null&&a.energy!==undefined&&a.energy!=='';
  const crowd=a.crowd!==null&&a.crowd!==undefined&&a.crowd!=='';
  const preferredSetting=a.weather==='mostly-indoor'?'indoor':a.weather==='outdoor'?'outdoor':null;
  const reasons=[p.budget===0?'Free activity in catalogue':'Within your maximum price band',`${p.duration}h activity fits your time`];
  const tradeoffs=[];
  if(matched.length)reasons.unshift('Matches '+matched.join(' + '));else if(interests.length)tradeoffs.push('Outside your selected interests');
  if(areaMatch)reasons.push('In your preferred area');else if(a.area&&a.area!=='any')tradeoffs.push('Outside your preferred area');
  if(preferredSetting&&p.setting!==preferredSetting)tradeoffs.push('Does not match your preferred setting');
  if(energy&&Math.abs(p.energy-Number(a.energy))>=2)tradeoffs.push('Activity level differs from your preference');
  if(crowd&&Math.abs(p.crowd-Number(a.crowd))>=2)tradeoffs.push('Estimated atmosphere differs from your preference');
  return {place:p,score:matched.length*30+(areaMatch?24:0)+(energy?Math.max(0,12-Math.abs(p.energy-Number(a.energy))*4):0)+(crowd?Math.max(0,9-Math.abs(p.crowd-Number(a.crowd))*3):0)+(preferredSetting===p.setting?8:0),reasons,tradeoffs};
 }).sort((x,y)=>y.score-x.score);
}
export function shortlist(ranked,a={}){
 if(!ranked.length)return [];
 const picks=[{...ranked[0],role:'Best fit'}];
 const rest=ranked.slice(1);
 if(rest.length){const nearby=a.area&&a.area!=='any'&&picks[0].place.area!==a.area?rest.findIndex(r=>r.place.area===a.area&&r.score>=ranked[0].score-15):-1;const [next]=rest.splice(nearby>=0?nearby:0,1);picks.push({...next,role:'Another good option'});}
 if(rest.length){const first=picks[0].place;const isDifferent=r=>r.place.interests[0]!==first.interests[0]||r.place.setting!==first.setting;const different=rest.find(r=>isDifferent(r)&&(!a.interests?.length||a.interests.includes(r.place.interests[0])))||rest.find(isDifferent);picks.push({...different??rest[0],role:different?'Something different':'Another good option'});}
 return picks;
}
export function parseSaved(raw,places){try{const v=JSON.parse(raw);return Array.isArray(v)?[...new Set(v.filter(id=>typeof id==='string'&&places.some(p=>p.id===id)))]:[];}catch{return [];}}
export function savedPlaces(places,ids){return ids.map(id=>places.find(p=>p.id===id)).filter(Boolean);}
export function pickAlternatives(ranked,excluded,count=3,rng=Math.random){const pool=ranked.filter(r=>!excluded.includes(r.place.id));for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}return pool.slice(0,count).map(r=>({...r,role:'Another idea'}));}
