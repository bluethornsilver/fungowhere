import {singaporeToday,validDate} from './events.js';

// Official published schedules checked 11 Oct 2026. These are not live feeds.
// A 30-day review window intentionally fails closed when research becomes stale.
const checked='2026-10-11',reviewBy='2026-11-10';
const daily=(open,close,lastEntry=close)=>({daily:[open,close,lastEntry]});
const record=(source,hours,schedule,extra={})=>({checked,reviewBy,source,hours,...schedule,...extra});
const gbb='https://www.gardensbythebay.com.sg/en/plan-your-visit/opening-hours.html';
const sbg='https://sbg.nparks.gov.sg/visit/general-info/';
const jlg='https://juronglakegardens.nparks.gov.sg/plan-your-visit/operating-hours-and-services/';
const museum={...daily('10:00','19:00','18:30'),week:{5:['10:00','21:00','20:30']}};
export const openingHours={
 'supertree-grove':record(gbb,'Daily 5am–2am next day. Grove grounds only; elevated attractions have separate hours.',daily('05:00','26:00')),
 'cloud-forest':record(gbb,'Daily 9am–9pm; last admission 8pm. Monthly maintenance closures apply.',daily('09:00','21:00','20:00'),{closedDates:['2026-10-26','2026-11-17'],note:'Check the linked maintenance calendar before travel.'}),
 'flower-dome':record(gbb,'Daily 9am–9pm; last admission 8.30pm. Monthly maintenance closures apply.',daily('09:00','21:00','20:30'),{closedDates:['2026-10-06','2026-11-16'],note:'Check the linked maintenance calendar before travel.'}),
 'singapore-botanic-gardens':record(sbg,'Main gardens daily 5am–midnight. Individual attractions and forest paths have separate hours.',daily('05:00','24:00'),{note:'This schedule covers the main gardens, not Learning Forest or other separately timed attractions.'}),
 'national-orchid-garden':record(sbg,'Daily 8.30am–7pm; last ticket sale and entry 6pm.',daily('08:30','19:00','18:00')),
 'fort-canning-park':record('https://www.nparks.gov.sg/visit/parks/park-detail/fort-canning-park/','Park grounds open 24 hours. Indoor attractions have separate hours.',daily('00:00','24:00')),
 'jurong-lake-gardens':record(jlg,'Lakeside Garden grounds open 24 hours. Chinese and Japanese Gardens 5.30am–midnight; facilities have separate hours.',daily('00:00','24:00'),{note:'Recommendation covers Lakeside grounds. Grasslands/Neram Streams are unlit: avoid after dark. Clusia Cove and Waterwall Court are closed until further notice; Dog Run maintenance 14 Oct.'}),
 'chinese-japanese-gardens':record(jlg,'Chinese and Japanese Gardens daily 5.30am–midnight.',daily('05:30','24:00'),{note:'Waterwall Court and Sunken Garden toilet closed until further notice; individual facilities have separate hours.'}),
 'singapore-city-gallery':record('https://www.ura.gov.sg/get-involved/singapore-city-gallery/visit/','Mon–Sat 9am–5pm; closed Sundays and Singapore public holidays.',{week:{0:[],1:['09:00','17:00'],2:['09:00','17:00'],3:['09:00','17:00'],4:['09:00','17:00'],5:['09:00','17:00'],6:['09:00','17:00']}},{closedPH:true,closedFrom:'2027-05-01',note:'Partial revamp closure 1 Dec 2026–30 Apr 2027; full closure from 1 May 2027. Future reopening must be reverified.'}),
 'national-gallery-singapore':record('https://www.nationalgallery.sg/sg/en/visit/visitor-information.html','Daily 10am–7pm; last admission 6.30pm.',daily('10:00','19:00','18:30'),{note:'UOB Southeast Asia Gallery temporarily closed. F1 road/carpark restrictions 9–13 Oct; use official travel advice.'}),
 'asian-civilisations-museum':record('https://www.nhb.gov.sg/acm/visit/plan-your-visit','Daily 10am–7pm; Fridays until 9pm. Last admission 30 minutes before closing.',museum),
 'peranakan-museum':record('https://www.nhb.gov.sg/peranakanmuseum/visit/plan-your-visit','Daily 10am–7pm; Fridays until 9pm. Last admission 30 minutes before closing.',museum),
 'national-museum-of-singapore':record('https://www.nhb.gov.sg/nationalmuseum/plan-your-visit/visitor-information/admissions','Daily 10am–7pm; last ticket sales 6pm; gallery admission ends 6.30pm.',daily('10:00','19:00','18:00'),{note:'Conservative ticket-purchase cutoff used. Selected Quiet Mornings open earlier; restoration and gallery works may affect the visit.'}),
 'jewel-rain-vortex':record('https://www.jewelchangiairport.com/en/attractions/rain-vortex.html','Waterfall operates daily 10am–10pm. This is not the opening time of the whole airport.',daily('10:00','22:00')),
 'jewel-canopy-park':record('https://www.jewelchangiairport.com/en/attractions/canopy-park.html','Mon–Thu 10am–9pm; Fri–Sun, public holidays and their eves 10am–10pm. Last admission 30 minutes before closing.',{...daily('10:00','21:00','20:30'),week:{5:['10:00','22:00','21:30'],6:['10:00','22:00','21:30'],0:['10:00','22:00','21:30']},holiday:['10:00','22:00','21:30'],holidayEve:['10:00','22:00','21:30']}),
 'treetop-walk':record('https://www.nparks.gov.sg/visit/parks/central-catchment-nature-reserve/activities','Tue–Fri 9am–5pm; weekends/PH 8.30am–5pm. Closed Monday except PH. Last entry 4.45pm.',{week:{0:['08:30','17:00','16:45'],1:[],2:['09:00','17:00','16:45'],3:['09:00','17:00','16:45'],4:['09:00','17:00','16:45'],5:['09:00','17:00','16:45'],6:['08:30','17:00','16:45']},holiday:['08:30','17:00','16:45']},{minimumDuration:4,note:'NParks estimates 3–4 hours for the 7km approach/return trail. Allow 4 hours; this exceeds the current planner’s 3-hour maximum.'}),
 'hell-s-museum':record('https://www.hawparvilla.sg/hells-museum/','10am–6pm; last entry 5pm. Closed Mondays and listed special-event dates.',{...daily('10:00','18:00','17:00'),week:{1:[]}},{closedDates:['2026-10-05','2026-10-08','2026-10-11','2026-10-12','2026-10-15','2026-10-17','2026-10-19','2026-10-22','2026-10-24','2026-10-25','2026-10-26','2026-10-29','2026-10-31','2026-11-01','2026-11-02','2026-11-05','2026-11-07','2026-11-08','2026-11-09','2026-11-12','2026-11-14','2026-11-15','2026-11-16'],minimumDuration:2,note:'General admission closure calendar applies. Published adult admission S$22; child S$12. Confirm ticket/session availability.'})
};
export const holidaySource='https://www.mom.gov.sg/newsroom/press-releases/2025/0616-public-holidays-for-2026';
const holidays=new Set(['2026-01-01','2026-02-17','2026-02-18','2026-03-21','2026-04-03','2026-05-01','2026-05-27','2026-05-31','2026-06-01','2026-08-09','2026-08-10','2026-11-08','2026-11-09','2026-12-25']);
export function singaporeTime(now=new Date()){return new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Singapore',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now);}
export const validTime=v=>/^([01]\d|2[0-3]):[0-5]\d$/.test(v||'');
const minutes=t=>Number(t.slice(0,2))*60+Number(t.slice(3));
const shiftDate=(date,n)=>{const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);};
function windowFor(r,date){if(r.closedDates?.includes(date)||(r.closedFrom&&date>=r.closedFrom)||(r.closedPH&&holidays.has(date)))return [];if(holidays.has(date)&&r.holiday)return r.holiday;if(holidays.has(shiftDate(date,1))&&r.holidayEve)return r.holidayEve;return r.week?.[new Date(date+'T12:00:00Z').getUTCDay()]??r.daily??[];}
export function hoursStatus(place,answers={},now=new Date()){
 const r=openingHours[place.id],date=answers.visitDate||singaporeToday(now),time=answers.visitTime||singaporeTime(now);
 const result=(status,label)=>({status,label,record:r,date,time});
 if(!validDate(date)||!validTime(time))return result('unknown','Choose a valid visit date and arrival time');
 if(!r)return result('unknown','Hours not verified — excluded from recommendations');
 if(r.closedDates?.includes(date)||(r.closedFrom&&date>=r.closedFrom)||(r.closedPH&&holidays.has(date)))return result('closed','Closed on your chosen date');
 if(date<singaporeToday(now)||(date===singaporeToday(now)&&minutes(time)<minutes(singaporeTime(now))))return result('past','Arrival time has passed — choose a later time');
 if(date<r.checked||date>r.reviewBy||singaporeToday(now)>r.reviewBy)return result('unknown','Hours need a fresh check for this date');
 const start=minutes(time),duration=Math.max(place.duration,r.minimumDuration||0)*60;
 if(duration>Number(answers.duration??3)*60)return result('too-short','Allow more activity time for the official walking route');
 // Include yesterday’s overnight window (e.g. Supertree Grove until 2am).
 const windows=[{day:date,offset:0},{day:shiftDate(date,-1),offset:-1440}].map(({day,offset})=>{const w=windowFor(r,day);return w.length?{open:minutes(w[0])+offset,close:minutes(w[1])+offset,last:minutes(w[2]||w[1])+offset}:null;}).filter(Boolean);
 const current=windows.find(w=>start>=w.open&&start<w.close);
 if(!current)return result('closed','Closed at your arrival time');
 if(current.close===1440&&windowFor(r,shiftDate(date,1))[0]==='00:00')current.close+=1440;
 if(start>=current.last)return result('last-entry','Last admission has passed');
 if(start+duration>current.close)return result('too-late','Not enough time before closing');
 return result('fits','Scheduled to fit your visit — confirm before travel');
}
