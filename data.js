                                                           
                                                     
                                                                                                               

                     
             
               
               
              
                      
                
                        
                   
                        
                  
                        
                       
                
               
                 
                
  

const all          = ['solo', 'pair', 'friends', 'family'];
const social          = ['pair', 'friends', 'family'];
const grown          = ['solo', 'pair', 'friends'];

function place(
  name        , area        , mrt        , duration           ,
  price        , budget               , setting         , interests            ,
  groups         , energy               , crowd               ,
  blurb        , quip        , source        , image        ,
)        {
  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    name, area, mrt, duration, price, budget, setting, interests, groups, energy, crowd,
    blurb, quip, source, image,
  };
}

export const places          = [
  place('Supertree Grove', 'Marina Bay', 'Bayfront', 1, 'Free', 0, 'outdoor', ['nature', 'unusual'], all, 2, 4, 'Wander beneath futuristic vertical gardens and stay for the evening light show.', 'Trees, but make them blockbuster.', 'https://www.gardensbythebay.com.sg/', '/places/gardens.jpg'),
  place('Cloud Forest', 'Marina Bay', 'Bayfront', 2, 'S$20–50', 2, 'indoor', ['nature', 'unusual'], all, 2, 3, 'Explore a cool conservatory wrapped around a misty indoor mountain.', 'Nature with industrial-strength air-con. Shiok.', 'https://www.gardensbythebay.com.sg/', '/places/gardens.jpg'),
  place('Flower Dome', 'Marina Bay', 'Bayfront', 2, 'S$20–50', 2, 'indoor', ['nature', 'relax'], all, 1, 3, 'See changing floral displays and plants from cool, dry regions.', 'Stop and smell the flowers—literally your assignment.', 'https://www.gardensbythebay.com.sg/', '/places/gardens.jpg'),
  place('Singapore Botanic Gardens', 'Tanglin', 'Botanic Gardens', 2, 'Free', 0, 'outdoor', ['nature', 'relax'], all, 2, 3, 'Choose a shady loop through lawns, lakes and heritage landscapes.', 'UNESCO-certified touching grass.', 'https://www.nparks.gov.sg/sbg', '/places/gardens.jpg'),
  place('National Orchid Garden', 'Tanglin', 'Botanic Gardens', 2, 'Under S$20', 1, 'mixed', ['nature', 'relax'], all, 2, 3, 'Meet a spectacular collection of orchids inside the Botanic Gardens.', 'More varieties than your group chat has excuses.', 'https://www.nparks.gov.sg/sbg/our-gardens/tyersall-gallop-entrance/national-orchid-garden', '/places/gardens.jpg'),
  place('Fort Canning Park', 'Dhoby Ghaut', 'Fort Canning', 2, 'Free', 0, 'outdoor', ['nature', 'culture'], all, 2, 2, 'Follow garden paths through layers of Singapore history in the city centre.', 'History class, but nobody takes attendance.', 'https://www.nparks.gov.sg/visit/parks/fort-canning-park', '/places/gardens.jpg'),
  place('MacRitchie Reservoir Trails', 'MacRitchie', 'Caldecott', 3, 'Free', 0, 'outdoor', ['nature'], grown, 4, 2, 'Hike reservoir-edge and forest trails with plenty of biodiversity.', 'Sweat now, hawker drink later.', 'https://www.nparks.gov.sg/visit/parks/central-catchment-nature-reserve', '/places/ubin.jpg'),
  place('TreeTop Walk', 'MacRitchie', 'Upper Thomson', 4, 'Free', 0, 'outdoor', ['nature', 'unusual'], grown, 4, 2, 'Take a longer forest route to a suspension bridge above the canopy.', 'Your calves may submit feedback.', 'https://www.nparks.gov.sg/visit/parks/central-catchment-nature-reserve', '/places/ubin.jpg'),
  place('Bukit Timah Nature Reserve', 'Bukit Timah', 'Beauty World', 2, 'Free', 0, 'outdoor', ['nature'], grown, 4, 2, 'Climb forest trails towards Singapore’s highest natural point.', 'Technically a summit. Please behave heroic.', 'https://www.nparks.gov.sg/visit/parks/bukit-timah-nature-reserve', '/places/ubin.jpg'),
  place('Sungei Buloh Wetland Reserve', 'Kranji', 'Kranji', 3, 'Free', 0, 'outdoor', ['nature', 'relax'], all, 2, 1, 'Walk mangrove boardwalks and watch for birds, mudskippers and monitor lizards.', 'Quiet, wild, and the residents do not reply to email.', 'https://www.nparks.gov.sg/visit/parks/sungei-buloh-wetland-reserve', '/places/ubin.jpg'),
  place('Jurong Lake Gardens', 'Jurong', 'Lakeside', 2, 'Free', 0, 'outdoor', ['nature', 'relax'], all, 2, 2, 'Explore lakeside paths, play areas and landscaped wetlands in the west.', 'West side best side evidence, exhibit A.', 'https://www.nparks.gov.sg/juronglakegardens', '/places/gardens.jpg'),
  place('Chinese & Japanese Gardens', 'Jurong', 'Chinese Garden', 2, 'Free', 0, 'outdoor', ['nature', 'culture', 'relax'], all, 2, 2, 'Stroll through refreshed heritage gardens, bridges, pavilions and water views.', 'Main-character walk, no filming permit required.', 'https://www.nparks.gov.sg/juronglakegardens', '/places/gardens.jpg'),
  place('East Coast Park Cycle', 'East Coast', 'Marine Terrace', 3, 'Under S$20', 1, 'outdoor', ['nature', 'relax'], all, 3, 4, 'Rent wheels or walk a breezy stretch of Singapore’s favourite coastal park.', 'Sea breeze: free. Bicycle: confirm first.', 'https://www.nparks.gov.sg/visit/parks/east-coast-park', '/places/ubin.jpg'),
  place('Pasir Ris Mangrove Boardwalk', 'Pasir Ris', 'Pasir Ris', 2, 'Free', 0, 'outdoor', ['nature', 'relax'], all, 2, 1, 'Take an easy boardwalk into mangrove habitat close to the heartlands.', 'Wildlife spotting without hiking until your ancestors appear.', 'https://www.nparks.gov.sg/visit/parks/pasir-ris-park', '/places/ubin.jpg'),
  place('Coney Island Park', 'Punggol', 'Punggol', 3, 'Free', 0, 'outdoor', ['nature', 'unusual'], grown, 3, 1, 'Cycle or walk rustic paths between forest and coast.', 'Singapore island-hopping, budget edition.', 'https://www.nparks.gov.sg/visit/parks/coney-island-park', '/places/ubin.jpg'),
  place('Punggol Waterway Park', 'Punggol', 'Punggol', 2, 'Free', 0, 'outdoor', ['nature', 'relax'], all, 2, 2, 'Follow waterfront paths, bridges and green spaces beside the waterway.', 'A longkang glow-up, respectfully.', 'https://www.nparks.gov.sg/visit/parks/punggol-waterway-park', '/places/ubin.jpg'),
  place('Pulau Ubin Bike Ride', 'Pulau Ubin', 'Tanah Merah + bus/boat', 3, 'Under S$20', 1, 'outdoor', ['nature', 'unusual'], grown, 4, 2, 'Take a bumboat over and rent a bicycle for a rustic island loop.', 'Passport feel, IC distance.', 'https://www.nparks.gov.sg/pulau-ubin', '/places/ubin.jpg'),
  place('Chek Jawa Wetlands', 'Pulau Ubin', 'Tanah Merah + bus/boat', 3, 'Under S$20', 1, 'outdoor', ['nature', 'unusual'], all, 3, 1, 'Explore boardwalks through coastal habitats at the eastern end of Pulau Ubin.', 'Many ecosystems, zero shopping malls.', 'https://www.nparks.gov.sg/pulau-ubin/biodiversity/chek-jawa-wetlands', '/places/ubin.jpg'),
  place('Rail Corridor Walk', 'Bukit Timah', 'King Albert Park', 2, 'Free', 0, 'outdoor', ['nature', 'culture'], all, 2, 2, 'Walk a green stretch of the former railway route through the city.', 'Train left already; the vibes stayed.', 'https://www.nparks.gov.sg/railcorridor', '/places/ubin.jpg'),
  place('Southern Ridges', 'Henderson', 'HarbourFront', 3, 'Free', 0, 'outdoor', ['nature', 'unusual'], grown, 4, 2, 'Connect hilltop parks via elevated paths and the sculptural Henderson Waves.', 'Scenic, free and definitely includes stairs.', 'https://www.nparks.gov.sg/visit/parks/southern-ridges', '/places/ubin.jpg'),
  place('Labrador Nature Reserve', 'Labrador', 'Labrador Park', 2, 'Free', 0, 'outdoor', ['nature', 'culture'], all, 2, 1, 'Mix coastal views, forest and wartime heritage along an easy route.', 'Sea view plus history lesson—two-for-one.', 'https://www.nparks.gov.sg/visit/parks/labrador-nature-reserve', '/places/ubin.jpg'),
  place('HortPark', 'Alexandra', 'Labrador Park', 2, 'Free', 0, 'outdoor', ['nature', 'relax', 'creative'], all, 2, 1, 'Browse themed gardens and horticultural ideas in a compact park.', 'For plant parents and plant-parent-curious.', 'https://www.nparks.gov.sg/visit/parks/hortpark', '/places/gardens.jpg'),
  place('Marina Barrage Picnic', 'Marina Bay', 'Gardens by the Bay', 2, 'Free', 0, 'outdoor', ['relax', 'nature'], social, 1, 3, 'Bring snacks to the breezy rooftop lawn for skyline views.', 'Your picnic mat has entered the group chat.', 'https://www.pub.gov.sg/public-water-management/marina-barrage', '/places/gardens.jpg'),
  place('National Gallery Singapore', 'Civic District', 'City Hall', 3, 'S$20–50', 2, 'indoor', ['culture', 'relax'], all, 1, 3, 'Explore major Southeast Asian art collections inside two national monuments.', 'Cultured, air-conditioned, very atas-looking.', 'https://www.nationalgallery.sg/', '/places/gallery.jpg'),
  place('ArtScience Museum', 'Marina Bay', 'Bayfront', 2, 'S$20–50', 2, 'indoor', ['culture', 'unusual'], all, 2, 4, 'See immersive and rotating exhibitions where art meets technology.', 'For people who like their museum with extra pixels.', 'https://www.marinabaysands.com/museum.html', '/places/artscience.jpg'),
  place('National Museum of Singapore', 'Bras Basah', 'Bencoolen', 2, 'Under S$20', 1, 'indoor', ['culture'], all, 1, 2, 'Trace Singapore stories through historical galleries and multimedia displays.', 'Know your lore, can flex later.', 'https://www.nhb.gov.sg/nationalmuseum', '/places/gallery.jpg'),
  place('Asian Civilisations Museum', 'Civic District', 'Raffles Place', 2, 'Under S$20', 1, 'indoor', ['culture'], all, 1, 2, 'Discover Asian cultures and Singapore’s port-city connections beside the river.', 'Big history, manageable walking distance.', 'https://www.nhb.gov.sg/acm', '/places/gallery.jpg'),
  place('Peranakan Museum', 'Armenian Street', 'City Hall', 2, 'Under S$20', 1, 'indoor', ['culture', 'creative'], all, 1, 2, 'Explore Peranakan identity through decorative arts, fashion and community stories.', 'Beadwork so detailed your screen time feels lazy.', 'https://www.nhb.gov.sg/peranakanmuseum', '/places/gallery.jpg'),
  place('Science Centre Singapore', 'Jurong East', 'Jurong East', 3, 'Under S$20', 1, 'indoor', ['unusual', 'culture'], all, 3, 3, 'Play with hands-on science exhibits made for curious humans of many ages.', 'Touching the exhibits is encouraged. Finally.', 'https://www.science.edu.sg/', '/places/artscience.jpg'),
  place('Children’s Museum Singapore', 'Armenian Street', 'City Hall', 2, 'Under S$20', 1, 'indoor', ['culture', 'games'], ['family'], 2, 3, 'Let younger children learn through interactive stories and play.', 'Tiny visitors, maximum questions.', 'https://www.nhb.gov.sg/childrensmuseum', '/places/gallery.jpg'),
  place('Singapore City Gallery', 'Tanjong Pagar', 'Maxwell', 1, 'Free', 0, 'indoor', ['culture', 'unusual'], all, 1, 1, 'See how Singapore is planned through city models and interactive displays.', 'Urban planning, but surprisingly not sian.', 'https://www.ura.gov.sg/Corporate/Singapore-City-Gallery', '/places/gallery.jpg'),
  place('Haw Par Villa', 'Pasir Panjang', 'Haw Par Villa', 2, 'Free', 0, 'outdoor', ['culture', 'unusual'], all, 2, 2, 'Meet hundreds of vivid sculptures drawn from Chinese legends and morality tales.', 'Unhinged statues before unhinged statues were trendy.', 'https://www.hawparvilla.sg/', '/places/gallery.jpg'),
  place('Hell’s Museum', 'Pasir Panjang', 'Haw Par Villa', 2, 'S$22 adult / S$12 child', 2, 'mixed', ['culture', 'unusual'], grown, 2, 2, 'Explore beliefs about death and the afterlife within Haw Par Villa.', 'Educational, memorable, mildly nightmare-adjacent.', 'https://www.hawparvilla.sg/hells-museum/', '/places/gallery.jpg'),
  place('Indian Heritage Centre', 'Little India', 'Little India', 2, 'Under S$20', 1, 'indoor', ['culture'], all, 1, 2, 'Discover the history and contributions of Indian communities in Singapore.', 'Come for the stories, stay for the neighbourhood makan.', 'https://www.indianheritage.gov.sg/', '/places/gallery.jpg'),
  place('Changi Chapel & Museum', 'Changi', 'Tampines East + bus', 2, 'Under S$20', 1, 'indoor', ['culture'], all, 1, 1, 'Learn about prisoners of war and civilians interned in Changi during World War II.', 'Quiet, thoughtful and worth the east-side journey.', 'https://www.nhb.gov.sg/changichapelmuseum', '/places/gallery.jpg'),
  place('Reflections at Bukit Chandu', 'Pasir Panjang', 'Pasir Panjang', 2, 'Free', 0, 'indoor', ['culture'], all, 2, 1, 'Visit a restored bungalow telling the story of the Battle of Pasir Panjang.', 'Small museum, very big story.', 'https://www.nhb.gov.sg/bukitchandu', '/places/gallery.jpg'),
  place('Joo Chiat Heritage Walk', 'Joo Chiat', 'Marine Parade', 2, 'Free', 0, 'outdoor', ['culture', 'food', 'shopping'], all, 2, 3, 'Walk past colourful shophouses, independent shops and Peranakan landmarks.', 'Your camera roll will become 80% windows.', 'https://www.roots.gov.sg/places/places-landing/Places/landmarks/joo-chiat', '/places/gallery.jpg'),
  place('Kampong Gelam Wander', 'Kampong Gelam', 'Bugis', 2, 'Free', 0, 'mixed', ['culture', 'food', 'shopping'], all, 2, 4, 'Browse heritage streets, murals, boutiques and eateries around Sultan Mosque.', 'Culture, kopi and enough murals to update your profile pic.', 'https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/kampong-gelam/', '/places/gallery.jpg'),
  place('Little India Heritage Trail', 'Little India', 'Little India', 2, 'Free', 0, 'outdoor', ['culture', 'food', 'shopping'], all, 2, 4, 'Follow official trail stops through temples, trades and community landmarks.', 'Maximum colour, minimum beige.', 'https://www.roots.gov.sg/places/places-landing/Places/landmarks/little-india-heritage-trail', '/places/gallery.jpg'),
  place('Jewel Rain Vortex', 'Changi', 'Changi Airport', 1, 'Free', 0, 'indoor', ['unusual', 'relax', 'shopping'], all, 1, 4, 'Circle the indoor waterfall and Forest Valley from several levels.', 'Go airport without going overseas. Can one.', 'https://www.jewelchangiairport.com/en/attractions/rain-vortex.html', '/places/jewel.jpg'),
  place('Jewel Canopy Park', 'Changi', 'Changi Airport', 2, 'S$20–50', 2, 'indoor', ['games', 'unusual'], all, 3, 4, 'Try mazes, slides, nets and garden attractions under Jewel’s glass roof.', 'Airport layover energy, minus the flight.', 'https://www.jewelchangiairport.com/en/attractions/canopy-park.html', '/places/jewel.jpg'),
  place('Skyline Luge Singapore', 'Sentosa', 'HarbourFront + Sentosa', 2, 'S$20–50', 2, 'outdoor', ['games', 'unusual'], social, 3, 4, 'Ride a chairlift up and steer a luge cart down winding tracks.', 'Mario Kart, but your insurance agent can see you.', 'https://www.skylineluge.com/en/sentosa/', '/places/jewel.jpg'),
  place('iFly Singapore', 'Sentosa', 'HarbourFront + Sentosa', 2, 'S$50+', 3, 'indoor', ['games', 'unusual'], social, 4, 3, 'Experience instructor-guided indoor skydiving in a vertical wind tunnel.', 'All the flying, none of the plane-door regret.', 'https://www.iflysingapore.com/', '/places/jewel.jpg'),
  place('Mega Adventure Park', 'Sentosa', 'HarbourFront + Sentosa', 3, 'S$50+', 3, 'outdoor', ['games', 'unusual'], social, 4, 3, 'Take on high ropes and a long zipline over Sentosa greenery.', 'Scream now, post the video later.', 'https://www.sg.megaadventure.com/', '/places/ubin.jpg'),
  place('Universal Studios Singapore', 'Sentosa', 'HarbourFront + Sentosa', 3, 'S$50+', 3, 'mixed', ['games', 'unusual'], all, 4, 4, 'Pack a shorter visit with rides, themed zones and live entertainment.', 'Three hours: choose your rollercoasters like CPF allocation.', 'https://www.rwsentosa.com/en/attractions/universal-studios-singapore', '/places/jewel.jpg'),
  place('Singapore Oceanarium', 'Sentosa', 'HarbourFront + Sentosa', 3, 'S$50+', 3, 'indoor', ['nature', 'unusual'], all, 2, 4, 'Explore large marine habitats and immersive ocean storytelling.', 'Under the sea, safely above the sea.', 'https://www.singaporeoceanarium.com/', '/places/jewel.jpg'),
  place('Holey Moley Mini Golf', 'Clarke Quay', 'Fort Canning', 2, 'S$20–50', 2, 'indoor', ['games'], grown, 2, 4, 'Play cheeky themed mini-golf with food and drinks nearby.', 'Friendship test disguised as putting.', 'https://www.holeymoley.com.sg/', '/places/artscience.jpg'),
  place('SuperPark Singapore', 'Suntec City', 'Promenade', 3, 'S$20–50', 2, 'indoor', ['games'], all, 4, 4, 'Bounce, climb and compete across a large indoor activity park.', 'Air-con plus cardio: rare Pokémon.', 'https://www.superpark.com.sg/', '/places/artscience.jpg'),
  place('Adventure HQ', 'Khatib', 'Khatib', 3, 'S$20–50', 2, 'indoor', ['games'], social, 4, 3, 'Tackle indoor ropes, climbing and obstacle challenges at HomeTeamNS Khatib.', 'North-side fear of heights, now sheltered.', 'https://www.hometeamns.sg/khatib/adventure-hq/', '/places/artscience.jpg'),
  place('Forest Adventure', 'Bedok Reservoir', 'Bedok North', 3, 'S$50+', 3, 'outdoor', ['games', 'nature'], social, 4, 2, 'Cross treetop obstacles and zip over Bedok Reservoir.', 'Your arms will remember this tomorrow.', 'https://forestadventure.com.sg/', '/places/ubin.jpg'),
  place('KF1 Karting Circuit', 'Kranji', 'Kranji', 2, 'S$20–50', 2, 'outdoor', ['games'], grown, 4, 3, 'Race rental go-karts around a purpose-built circuit.', 'Settle who is the group’s actual best driver.', 'https://kf1karting.com/', '/places/jewel.jpg'),
  place('K Bowling Club', 'Orchard', 'Somerset', 2, 'S$20–50', 2, 'indoor', ['games'], social, 2, 4, 'Combine bowling with neon lights, music and arcade energy.', 'Strike or gutter, still got air-con.', 'https://kbowlingclub.com/', '/places/artscience.jpg'),
  place('Xcape Singapore', 'Bugis', 'Bugis', 2, 'S$20–50', 2, 'indoor', ['games', 'unusual'], grown, 2, 3, 'Solve clues together inside a themed escape room.', 'Can escape the room; cannot escape your blur teammate.', 'https://www.xcape.sg/', '/places/artscience.jpg'),
  place('Thow Kwang Pottery Jungle', 'Jurong', 'Boon Lay + bus', 2, 'Under S$20', 1, 'mixed', ['creative', 'culture', 'unusual'], all, 2, 1, 'Browse ceramics around one of Singapore’s surviving dragon kilns.', 'Very west, very clay, very worth kaypoh-ing.', 'https://thowkwang.com.sg/', '/places/gallery.jpg'),
  place('Arteastiq Art Jamming', 'Orchard', 'Orchard', 3, 'S$20–50', 2, 'indoor', ['creative', 'relax'], grown, 1, 2, 'Paint a canvas at your own pace with materials provided.', 'No talent also can. Abstract art exists for a reason.', 'https://arteastiq.com/', '/places/artscience.jpg'),
  place('Scent by SIX Workshop', 'Bugis', 'Bugis', 2, 'S$50+', 3, 'indoor', ['creative', 'unusual'], grown, 1, 2, 'Blend a personal fragrance through a guided scent experience.', 'Smell expensive, even if lunch was cai fan.', 'https://scentbysix.com/', '/places/artscience.jpg'),
  place('Food Playground Cooking Class', 'Chinatown', 'Chinatown', 3, 'S$50+', 3, 'indoor', ['food', 'creative', 'culture'], social, 2, 2, 'Cook Singapore dishes in a social, hands-on class.', 'Makan tastes better when you did the chopping.', 'https://www.foodplayground.com.sg/', '/places/gallery.jpg'),
  place('Tea Chapter', 'Chinatown', 'Maxwell', 2, 'S$20–50', 2, 'indoor', ['food', 'culture', 'relax'], grown, 1, 1, 'Slow down over traditional Chinese tea in a shophouse setting.', 'Main character energy, but quietly.', 'https://teachapter.com/', '/places/gallery.jpg'),
  place('Tiong Bahru Food & Bookshop Trail', 'Tiong Bahru', 'Tiong Bahru', 2, 'Under S$20', 1, 'mixed', ['food', 'shopping', 'culture'], all, 2, 4, 'Pair market snacks with indie books and Art Deco streets.', 'Carbs, culture, cute buildings. Settled.', 'https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/tiong-bahru/', '/places/gallery.jpg'),
  place('Maxwell & Chinatown Makan Crawl', 'Chinatown', 'Maxwell', 2, 'Under S$20', 1, 'mixed', ['food', 'culture'], all, 2, 4, 'Build your own tasting route between a hawker centre and Chinatown streets.', 'One stomach, many ambitions.', 'https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/chinatown/', '/places/gallery.jpg'),
  place('Hay Dairies Goat Farm', 'Lim Chu Kang', 'Kranji + bus/taxi', 2, 'Under S$20', 1, 'outdoor', ['nature', 'unusual'], ['family', 'pair'], 1, 2, 'Visit a working goat farm during its visitor hours and try fresh goat milk.', 'Not kidding: actual goats.', 'https://haydairies.sg/', '/places/ubin.jpg'),
];

export const verifiedDate = '1 September 2026';

export function googleMapsLink(name        ) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Singapore`)}`;
}

const illustratedVisuals                           = {
  food: '/places/ai/food-social.jpg',
  nature: '/places/ai/nature-relax.jpg',
  culture: '/places/ai/culture-creative.jpg',
  games: '/places/ai/games-unusual.jpg',
  creative: '/places/ai/culture-creative.jpg',
  shopping: '/places/ai/food-social.jpg',
  relax: '/places/ai/nature-relax.jpg',
  unusual: '/places/ai/games-unusual.jpg',
};

export function illustratedVisualFor(place       ) {
  return illustratedVisuals[place.interests[0]];
}
