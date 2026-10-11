# Operating-hours checks

Checked against official operator pages on **11 October 2026**. Full source URLs, schedules, exceptions and notes are in `opening-hours.js`. Opening-hours verification is separate from photo research and other visitor information.

## Recommendation policy

- A visit uses an arrival date and time in Asia/Singapore. Default is the current Singapore date/time; explicit choices persist in the URL.
- Require a sourced schedule checked within the 30-day review window, for a supported visit date through 10 November 2026. Unknown, stale and unsupported dates are excluded.
- Apply weekday hours, Singapore public holidays and holiday eves where relevant, maintenance dates and announced closures.
- Arrival must be inside an opening interval and before the last-admission cutoff. The estimated activity must finish by closing. Travel time is additional.
- Overnight schedules are handled across midnight. Continuous 24-hour park grounds can accommodate a visit crossing midnight.
- Past arrival times are excluded. Recommendations refresh when the tab is revisited and each minute when no form or dialog is active.
- Ranked suggestions, shuffled alternatives, matching lists and home inspiration all apply these checks. Saved places and the collapsed excluded catalogue remain accessible with explicit status labels.
- Event suggestions require sourced session start/end times and a recent check; ended sessions and unknown times are excluded. Registration availability and fees still need organiser confirmation.

## Sources and coverage

| Official source | Catalogue records covered |
| --- | --- |
| [Gardens by the Bay hours and maintenance calendar](https://www.gardensbythebay.com.sg/en/plan-your-visit/opening-hours.html) | Supertree Grove, Cloud Forest, Flower Dome |
| [Singapore Botanic Gardens visitor information](https://sbg.nparks.gov.sg/visit/general-info/) | Main gardens and National Orchid Garden, using their separate hours |
| [NParks Fort Canning](https://www.nparks.gov.sg/visit/parks/park-detail/fort-canning-park/) | Park grounds only |
| [Jurong Lake Gardens operating hours](https://juronglakegardens.nparks.gov.sg/plan-your-visit/operating-hours-and-services/) | Lakeside grounds; Chinese & Japanese Gardens |
| [URA visitor information](https://www.ura.gov.sg/get-involved/singapore-city-gallery/visit/) | Singapore City Gallery, including Sunday/PH closure and announced revamp |
| [National Gallery visitor information](https://www.nationalgallery.sg/sg/en/visit/visitor-information.html) | National Gallery; partial gallery/travel restrictions noted |
| [ACM visitor information](https://www.nhb.gov.sg/acm/visit/plan-your-visit) | Asian Civilisations Museum |
| [Peranakan Museum visitor information](https://www.nhb.gov.sg/peranakanmuseum/visit/plan-your-visit) | Peranakan Museum |
| [National Museum admissions and opening hours](https://www.nhb.gov.sg/nationalmuseum/plan-your-visit/visitor-information/admissions) | National Museum; conservative ticket-sales cutoff used |
| [Rain Vortex](https://www.jewelchangiairport.com/en/attractions/rain-vortex.html), [Canopy Park](https://www.jewelchangiairport.com/en/attractions/canopy-park.html) | Jewel attractions, separate from airport opening hours |
| [NParks TreeTop Walk](https://www.nparks.gov.sg/visit/parks/central-catchment-nature-reserve/activities) | TreeTop Walk; Monday/PH rules, approach/return duration |
| [Hell’s Museum](https://www.hawparvilla.sg/hells-museum/) | Regular hours, Mondays and special-event closure dates |
| [MOM 2026 public holidays](https://www.mom.gov.sg/newsroom/press-releases/2025/0616-public-holidays-for-2026) | Holidays and observed Mondays within the supported year |

## Limits and maintenance

17 of 61 records have sourced operating schedules. The remaining 44 have no verified schedule in this module and are not recommended. This deliberately reduces available suggestions, including some activity/food categories, until their hours can be researched.

Published schedules do not guarantee access, available tickets, a particular exhibition or weather-safe conditions. Jurong Lakeside and Fort Canning hours cover grounds, not every facility. TreeTop Walk needs a conservative four-hour allowance; the current planner only accepts up to three hours, so it is excluded. Unknown reopening dates are never inferred.

To refresh: visit each official source, check current hours and notices, update structured intervals/exceptions and the individual checked/review dates, run `npm test`, build, and publish both the GitHub change and matching hosting source. Do not extend dates without rechecking the source. Future holiday years require fresh official holiday data.
