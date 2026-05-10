/* ═══════════════════════════════════════════
   VoyageLuxe — data.js
   Edit this file to update destinations.
═══════════════════════════════════════════ */

const SITE_CONFIG = {
  whatsapp: "919035545910",
  whatsapp2: "917349466798",
  email: "contact.voyageluxe@gmail.com",
  phone1: "+91-9035545910",
  phone2: "+91-7349466798",
  brand: "VoyageLuxe"
};

const destinations = {

  india: [
    {
      name: "Goa",
      tagline: "Sun, sand & sea",
      badge: "Most Popular",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&q=85",
      photos: [
        "images/Goa1.jpg",
        "images/Goa2.jpg",
        "images/Goa3.jpg",
        "images/Goa4.jpg",
        "images/Goa5.jpg",
        "images/Goa6.jpg"
      ],
      description: "India's favourite coastal escape — Goa is sun-drenched beaches, Portuguese heritage, and vibrant nightlife. Whether you're chasing surf, history, or pure relaxation, Goa delivers.",
      attractions: [
        "Baga & Calangute Beach — iconic shorelines with water sports",
        "Palolem Beach — serene crescent bay perfect for sunsets",
        "Old Goa Churches — UNESCO heritage, 16th-century Portuguese architecture",
        "Dudhsagar Waterfall — spectacular 4-tier falls in the Western Ghats",
        "Saturday Night Market, Arpora — flea market & live music",
        "Fort Aguada — 17th-century Portuguese fort with ocean views",
        "Spice Plantations — guided tours with lunch in lush greenery"
      ],
      food: ["Fish Curry Rice", "Prawn Balchão", "Bebinca", "Chicken Cafreal", "Feni Cocktails", "Pork Vindaloo", "Sorpotel"],
      stay_types: ["Villas", "Beach Resorts", "Boutique Hotels", "Homestays"],
      best_time: "November – March",
      emoji: ""
    },
    {
      name: "Coorg",
      tagline: "Misty hills & coffee",
      badge: "Editor's Pick",
      image: "images/Coorg.jpg",
      photos: [
        "images/Coorg1.jpg",
        "images/Coorg2.jpg",
        "images/Coorg3.jpg",
        "images/Coorg4.jpg",
        "images/Coorg5.jpg",
        "images/Coorg6.jpg"
      ],
      description: "Nestled in the Western Ghats, Coorg (Kodagu) is Karnataka's hill station jewel — lush coffee and spice plantations, misty mornings, and the warmth of Kodava culture.",
      attractions: [
        "Abbey Falls — picturesque waterfall surrounded by coffee estates",
        "Namdroling Monastery — stunning golden temple of Tibetan Buddhism",
        "Raja's Seat — panoramic sunset viewpoint in Madikeri",
        "Tadiandamol Peak — highest peak of Coorg, trekkers' favourite",
        "Dubare Elephant Camp — bathe & feed wild elephants on the Cauvery",
        "Iruppu Falls — sacred waterfall near Brahmagiri Wildlife Sanctuary",
        "Coffee Plantation Walk — guided tours through fragrant estates"
      ],
      food: ["Pandi Curry (Pork)", "Kadambuttu", "Akki Roti", "Noolputtu", "Coorg Honey & Pepper", "Baimbale Curry", "Filter Coffee"],
      stay_types: ["Plantation Homestays", "Jungle Resorts", "Heritage Bungalows", "Treehouses"],
      best_time: "October – March",
      emoji: ""
    },
    {
      name: "Manali",
      tagline: "Mountains & adventure",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85",
      photos: [
        "images/Manali1.jpg",
        "images/Manali2.jpg",
        "images/Manali3.jpg",
        "images/Manali4.jpg",
        "images/Manali5.jpg",
        "images/Manali6.jpg"
      ],
      description: "High in Himachal Pradesh, Manali is where adventure meets breathtaking landscapes. Snow-capped peaks, pine forests, ancient temples, and the thrill of high-altitude roads await.",
      attractions: [
        "Rohtang Pass — iconic mountain pass at 3,978m, snow year-round",
        "Solang Valley — skiing, paragliding, zorbing & snow activities",
        "Hadimba Devi Temple — ancient wooden temple in cedar forest",
        "Old Manali & Vashisht — hippie cafes, local bazaar, hot springs",
        "Beas River Rafting — thrilling white-water rapids",
        "Spiti Valley Day Trip — lunar landscapes, ancient monasteries",
        "Naggar Castle — 15th-century stone and wood heritage property"
      ],
      food: ["Siddu with Ghee", "Chha Gosht", "Dham (festive platter)", "Babru", "Aktori", "Kullu Trout", "Sepu Vadi"],
      stay_types: ["Mountain Chalets", "Snow Camps", "Boutique Hotels", "Riverside Cottages"],
      best_time: "Oct–Nov, Feb–June",
      emoji: ""
    },
    {
      name: "Kerala",
      tagline: "Backwaters & spices",
      badge: "God's Own Country",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=85",
      photos: [
        "images/Kerala1.jpg",
        "images/Kerala2.jpg",
        "images/Kerala3.jpg",
        "images/Kerala4.jpg",
        "images/Kerala5.jpg",
        "images/Kerala6.jpg"
      ],
      description: "Kerala — God's Own Country — is a land of backwaters, hill stations, Ayurveda, and golden beaches. A houseboat glide through Alleppey is the stuff of dreams.",
      attractions: [
        "Alleppey Backwaters — houseboat cruise through scenic waterways",
        "Munnar Tea Gardens — rolling hills of lush green tea estates",
        "Periyar Wildlife Sanctuary — elephants, tigers & spice trails",
        "Fort Kochi — Dutch, Portuguese & British colonial heritage",
        "Varkala Cliff Beach — dramatic red cliffs over Arabian Sea",
        "Wayanad Forests — wildlife, waterfalls & tribal culture",
        "Ayurveda Retreats — authentic Panchakarma & wellness treatments"
      ],
      food: ["Kerala Fish Curry", "Appam with Stew", "Karimeen Pollichathu", "Puttu & Kadala", "Kerala Parotta", "Payasam", "Prawn Moilee"],
      stay_types: ["Houseboats", "Plantation Bungalows", "Beach Resorts", "Ayurveda Retreats"],
      best_time: "September – March",
      emoji: ""
    },
    {
      name: "Ooty",
      tagline: "Queen of hill stations",
      badge: "Classic Escape",
      image: "images/Ooty.jpg",
      photos: [
        "images/Ooty1.jpg",
        "images/Ooty2.jpg",
        "images/Ooty3.jpg",
        "images/Ooty4.jpg",
        "images/Ooty5.jpg",
        "images/Ooty6.jpg"
      ],
      description: "The 'Queen of Hill Stations' in the Nilgiris, Ooty charms with its toy train, rose gardens, sprawling tea estates, and cool misty mornings that feel like a different world.",
      attractions: [
        "Nilgiri Mountain Railway — UNESCO heritage toy train to Ooty",
        "Ooty Botanical Garden — 22 hectares of manicured gardens & fossils",
        "Doddabetta Peak — highest point of the Nilgiris at 2,637m",
        "Pykara Lake & Falls — serene boating with forest backdrop",
        "Mudumalai Wildlife Sanctuary — safari for elephants & leopards",
        "Rose Garden — over 20,000 varieties of roses in full bloom",
        "Toda Tribal Village — unique cultural community visit"
      ],
      food: ["Ooty Chocolate (famous!)", "Varkey", "Nilgiri Tea", "Home-style Tamil meals", "Kwality Bakery items", "Carrot Halwa", "Fresh Strawberries"],
      stay_types: ["Heritage Bungalows", "Boutique Hotels", "Forest Cottages", "Homestays"],
      best_time: "April – June, Sept – Nov",
      emoji: ""
    },
    {
    name: "Andaman Islands",
    tagline: "Tropical Paradise of India",
    badge: "Island Escape",
    image: "Images/Andaman0.jpg",
    photos: [
      "Images/Andaman1.jpg",
      "Images/Andaman2.jpg",
      "Images/Andaman3.jpg",
      "Images/Andaman4.jpg",
      "Images/Andaman5.jpg",
      "Images/Andaman6.jpg"
    ],
    description: "A slice of tropical heaven in the Bay of Bengal, the Andaman Islands are known for crystal-clear waters, white sand beaches, coral reefs, lush forests, and unforgettable sunsets perfect for both adventure lovers and peaceful escapes.",
    attractions: [
      "Radhanagar Beach — one of Asia’s most beautiful white sand beaches",
      "Cellular Jail — historic colonial prison with light & sound show",
      "Havelock Island — scuba diving, snorkeling & luxury beach stays",
      "Neil Island — peaceful island with turquoise lagoons and coral reefs",
      "Ross Island — ruins of British colonial settlement surrounded by nature",
      "Baratang Island — famous limestone caves and mangrove boat rides",
      "North Bay Island — sea walking and vibrant underwater marine life"
    ],
    food: [
      "Fresh Seafood","Andaman Fish Curry","Coconut Prawn Curry","Grilled Lobster","Tropical Fruits","Nicobari Cuisine","Beachside BBQ"
    ],
    stay_types: [
      "Beach Resorts","Luxury Villas","Eco Huts","Island Homestays"
    ],
    best_time: "October – May",
    emoji: ""
  }
    ],

  international: [
    {
      name: "Bali",
      tagline: "Gods, rice terraces & ocean",
      badge: "Top Pick",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=85",
      photos: [
        "Images/International/Bali1.jpg",
        "Images/International/Bali2.jpg",
        "Images/International/Bali3.jpg",
        "Images/International/Bali4.jpg",
        "Images/International/Bali5.jpg",
        "Images/International/Bali6.jpg"
      ],
      description: "Bali is spiritual, sensual, and spectacular. From the emerald rice terraces of Ubud to the luxury cliff villas of Seminyak, the Island of Gods delivers something magical for every traveller.",
      attractions: [
        "Tanah Lot Temple — dramatic ocean temple at sunset",
        "Tegallalang Rice Terraces — UNESCO-listed emerald green terraces",
        "Ubud Monkey Forest — sacred sanctuary with hundreds of macaques",
        "Seminyak Beach — world-class sunsets & beach clubs",
        "Mount Batur Sunrise Trek — active volcano with crater lake views",
        "Uluwatu Kecak Fire Dance — clifftop ceremony at dusk",
        "Tirta Gangga Water Palace — royal water gardens in East Bali"
      ],
      food: ["Babi Guling (suckling pig)", "Nasi Goreng", "Satay Lilit", "Lawar", "Bebek Betutu (duck)", "Gado-Gado", "Pisang Goreng"],
      stay_types: ["Private Pool Villas", "Jungle Resorts", "Cliff Hotels", "Eco Retreats"],
      best_time: "April – October",
      emoji: ""
    },
    {
      name: "Dubai",
      tagline: "Skylines, deserts & luxury",
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85",
      photos: [
        "Images/International/Dubai1.jpg",
        "Images/International/Dubai2.jpg",
        "Images/International/Dubai3.jpg",
        "Images/International/Dubai4.jpg",
        "Images/International/Dubai5.jpg",
        "Images/International/Dubai6.jpg"
      ],
      description: "Dubai is the city of superlatives — the tallest building, the largest mall, the most luxurious hotels. But beyond the glitter lies a rich desert culture and warm Emirati hospitality.",
      attractions: [
        "Burj Khalifa — world's tallest building, observation deck on 124th floor",
        "Dubai Mall & Dubai Fountain — largest mall, stunning water show nightly",
        "Desert Safari — dune bashing, camel ride, starlit BBQ dinner",
        "Palm Jumeirah — iconic palm-shaped island with luxury resorts",
        "Dubai Creek & Gold Souk — authentic old Dubai, gold & spice markets",
        "Museum of the Future — stunning architecture inside & out",
        "Dhow Cruise — traditional boat dinner on Dubai Creek or Marina"
      ],
      food: ["Shawarma", "Al Harees", "Luqaimat (honey dumplings)", "Majboos (spiced rice)", "Camel Burger", "Arabic Mezze", "Kunafa"],
      stay_types: ["5-Star Luxury Hotels", "Palm Villas", "Downtown Suites", "Desert Glamping"],
      best_time: "November – March",
      emoji: ""
    },
    {
      name: "Thailand",
      tagline: "Temples, beaches & street food",
      badge: "Most Booked",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=700&q=85",
      photos: [
        "Images/International/Thailand1.jpg",
        "Images/International/Thailand2.jpg",
        "Images/International/Thailand3.jpg",
        "Images/International/Thailand4.jpg",
        "Images/International/Thailand5.jpg",
        "Images/International/Thailand6.jpg"
      ],
      description: "The Land of Smiles is endlessly captivating — ancient temples in Bangkok, jungle waterfalls in Chiang Mai, island-hopping in Phuket, and street food that will change your life.",
      attractions: [
        "Wat Pho & Wat Arun — iconic temples of Bangkok",
        "Phi Phi Islands — emerald water, towering limestone cliffs",
        "Chiang Mai Night Market — food, crafts & cultural shows",
        "Elephant Nature Park — ethical elephant sanctuary in Chiang Mai",
        "Floating Markets — Damnoen Saduak boat market experience",
        "Railay Beach — stunning beach only accessible by boat",
        "Thai Cooking Class — learn authentic recipes from local chefs"
      ],
      food: ["Pad Thai", "Green Curry", "Tom Yum Soup", "Som Tum (Papaya Salad)", "Massaman Curry", "Mango Sticky Rice", "Khao Pad"],
      stay_types: ["Beach Resorts", "Island Villas", "Boutique Hotels", "River Lodges"],
      best_time: "November – April",
      emoji: ""
    },
    {
      name: "Japan",
      tagline: "Temples, trains & tranquility",
      badge: "Rising Fast",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=85",
      photos: [
        "Images/International/Japan1.jpg",
        "Images/International/Japan2.jpg",
        "Images/International/Japan3.jpg",
        "Images/International/Japan4.jpg",
        "Images/International/Japan5.jpg",
        "Images/International/Japan6.jpg"
      ],
      description: "Japan is a world of perfect contrasts — ancient shrines beside neon cities, bamboo forests next to bullet trains, Zen gardens and vibrant street fashion. No destination leaves you unchanged.",
      attractions: [
        "Fushimi Inari Shrine — 10,000 torii gates winding up the mountain",
        "Shibuya Crossing — the world's busiest and most iconic pedestrian crossing",
        "Arashiyama Bamboo Grove — magical walk through towering bamboo",
        "Mount Fuji — Japan's sacred volcano, iconic in any season",
        "Nara Deer Park — roam freely with sacred deer in Nara",
        "Dotonbori Osaka — neon-lit food street, takoyaki & ramen",
        "Onsen Ryokan — traditional inn with hot springs in the mountains"
      ],
      food: ["Sushi & Sashimi", "Ramen", "Takoyaki", "Tempura", "Wagyu Beef", "Matcha Desserts", "Yakitori"],
      stay_types: ["Traditional Ryokan", "Capsule Hotels", "Boutique Tokyo Hotels", "Onsen Retreats"],
      best_time: "Mar–May (cherry blossom), Oct–Nov (autumn)",
      emoji: ""
    },
    {
      name: "Vietnam",
      tagline: "Lanterns, bays & culture",
      badge: "Hidden Gem",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=700&q=85",
      photos: [
        "Images/International/Vietnam1.jpg",
        "Images/International/Vietnam2.jpg",
        "Images/International/Vietnam3.jpg",
        "Images/International/Vietnam4.jpg",
        "Images/International/Vietnam5.jpg",
        "Images/International/Vietnam6.jpg"
      ],
      description: "Vietnam stretches from the karst seascape of Halong Bay to the lantern-lit streets of Hội An, the highlands of Sapa and the electric energy of Ho Chi Minh City. Utterly captivating.",
      attractions: [
        "Halong Bay Cruise — overnight on emerald waters among limestone pillars",
        "Hội An Ancient Town — UNESCO lantern-lit heritage town",
        "Sapa Rice Terraces — stunning hill tribe landscapes in the north",
        "Hue Imperial Citadel — historic royal capital of the Nguyen dynasty",
        "Phong Nha Caves — largest cave system in the world",
        "Mekong Delta — boat through floating markets & rice paddies",
        "My Son Sanctuary — ancient Cham temple ruins"
      ],
      food: ["Pho", "Banh Mi", "Fresh Spring Rolls", "Bun Bo Hue", "Banh Xeo (sizzling crepe)", "Cao Lau (Hoi An)", "Vietnamese Coffee"],
      stay_types: ["Bay Cruises", "Riverside Homestays", "Luxury Resorts", "Boutique Hotels"],
      best_time: "February – April",
      emoji: ""
    },
    {
      name: "Singapore",
      tagline: "City, gardens & sky",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=700&q=85",
      photos: [
        "Images/International/Singapore1.jpg",
        "Images/International/Singapore2.jpg",
        "Images/International/Singapore3.jpg",
        "Images/International/Singapore4.jpg",
        "Images/International/Singapore5.jpg",
        "Images/International/Singapore6.jpg"
      ],
      description: "Singapore packs extraordinary diversity into a tiny city-state — futuristic supertrees, colonial architecture, hawker centres with Michelin-starred food, and impeccable infrastructure.",
      attractions: [
        "Gardens by the Bay — iconic Supertrees & Cloud Forest dome",
        "Marina Bay Sands — skypark infinity pool & iconic skyline",
        "Sentosa Island — Universal Studios, beaches & cable car",
        "Chinatown & Little India — vibrant cultural neighbourhoods",
        "Singapore Zoo & Night Safari — world's best open zoo",
        "Orchard Road — flagship shopping boulevard",
        "Hawker Centres — Maxwell, Lau Pa Sat for authentic local eats"
      ],
      food: ["Hainanese Chicken Rice", "Chilli Crab", "Laksa", "Char Kway Teow", "Kaya Toast & Kopi", "Satay", "Bak Kut Teh"],
      stay_types: ["Marina Suites", "Luxury City Hotels", "Boutique Heritage Hotels", "Serviced Apartments"],
      best_time: "Year-round (Feb–Apr is driest)",
      emoji: ""
    },
    {
      name: "Hong Kong",
      tagline: "Harbour, dim sum & skyline",
      badge: "City Escape",
      image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=700&q=85",
      photos: [
        "Images/International/Hong Kong1.jpg",
        "Images/International/Hong Kong2.jpg",
        "Images/International/Hong Kong3.jpg",
        "Images/International/Hong Kong4.jpg",
        "Images/International/Hong Kong5.jpg",
        "Images/International/Hong Kong6.jpg"
      ],
      description: "Hong Kong is an electrifying blend of East and West — dazzling harbour views, world-class dim sum, endless shopping, ancient temples just minutes from gleaming skyscrapers.",
      attractions: [
        "Victoria Peak — panoramic harbour views on the iconic tram",
        "Avenue of Stars & Symphony of Lights — Kowloon waterfront show",
        "Lantau Island & Big Buddha — giant bronze Buddha & Ngong Ping",
        "Temple Street Night Market — hawker stalls, fortune tellers & more",
        "Star Ferry Harbour Crossing — the most scenic ferry ride in Asia",
        "Man Mo Temple — incense-filled Taoist temple in Sheung Wan",
        "Mong Kok Markets — Ladies' Market, bird garden, goldfish market"
      ],
      food: ["Dim Sum (yum cha)", "Roast Goose", "Egg Tarts", "Wonton Noodles", "Pineapple Bun", "Milk Tea (HK style)", "Typhoon Shelter Crab"],
      stay_types: ["Harbour-View Hotels", "Kowloon Boutique Hotels", "Luxury Suites", "Business Hotels"],
      best_time: "October – December",
      emoji: ""
    }
  ]

};



