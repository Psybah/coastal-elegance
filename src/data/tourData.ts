export interface TourCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  tours: Tour[];
}

export interface Tour {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery: string[];
  duration: string;
  groupSize: string;
  startTime: string;
  meetingPoint: string;
  highlights: string[];
  itinerary: {
    time: string;
    description: string;
    location?: string;
    image?: string;
  }[];
  includes: string[];
  excludes: string[];
  notes?: string[];
  available: boolean;
  category: string;
  featured?: boolean;
}

export const tourCategories: TourCategory[] = [
  {
    id: "cape-town-day-tours",
    name: "Cape Town Day Tours",
    description: "Explore the beauty of Cape Town with our carefully curated day tours",
    image: "/tours/cape-town-day.jpg",
    slug: "cape-town-day-tours",
    tours: [
      {
        id: "cape-peninsula",
        name: "Cape Peninsula Tour",
        slug: "cape-peninsula-tour",
        description: "Experience the scenic beauty of the Cape Peninsula, from the stunning Chapman's Peak Drive to the Cape of Good Hope.",
        longDescription: "Join us on a journey through the Cape Peninsula, where you'll discover breathtaking coastal views, encounter African penguins, and explore the Cape Point Nature Reserve. This tour combines natural wonders with historical sites.",
        image: "/tours/cape-peninsula.jpg",
        gallery: [
          "/tours/cape-peninsula/boulders-beach.jpg",
          "/tours/cape-peninsula/cape-point.jpg",
          "/tours/cape-peninsula/chapmans-peak.jpg",
          "/tours/cape-peninsula/hout-bay.jpg",
          "/tours/cape-peninsula/kirstenbosch.jpg"
        ],
        duration: "Full Day (8-9 hours)",
        groupSize: "1-7 people",
        startTime: "08:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Scenic Chapman's Peak Drive",
          "Cape Point Nature Reserve & Cape of Good Hope",
          "Boulders Penguin Colony",
          "Kirstenbosch Botanical Gardens",
          "Hout Bay Harbor",
          "Simon's Town Historical Mile"
        ],
        itinerary: [
          {
            time: "08:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "09:00",
            description: "Visit Hout Bay Harbor with optional seal island boat trip",
            location: "Hout Bay",
          },
          {
            time: "10:00",
            description: "Drive along Chapman's Peak (weather permitting)",
            location: "Chapman's Peak",
            image: "/tours/cape-peninsula/chapmans-peak.jpg"
          },
          {
            time: "11:30",
            description: "Cape Point Nature Reserve & Cape of Good Hope",
            location: "Cape Point",
            image: "/tours/cape-peninsula/cape-point.jpg"
          },
          {
            time: "13:30",
            description: "Lunch at seaside restaurant (own account)",
            location: "Simon's Town"
          },
          {
            time: "14:30",
            description: "Visit Boulders Beach Penguin Colony",
            location: "Boulders Beach",
            image: "/tours/cape-peninsula/boulders-beach.jpg"
          },
          {
            time: "16:00",
            description: "Kirstenbosch Botanical Gardens",
            location: "Kirstenbosch",
            image: "/tours/cape-peninsula/kirstenbosch.jpg"
          },
          {
            time: "17:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional registered tour guide",
          "Air-conditioned vehicle",
          "Hotel pickup and drop-off",
          "Entrance fees (Cape Point, Boulders, Kirstenbosch)",
          "Bottled water",
          "Free Wi-Fi onboard",
          "All taxes and fees"
        ],
        excludes: [
          "Lunch and drinks",
          "Optional activities (Seal Island boat trip)",
          "Gratuities (optional)",
          "Travel insurance"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Chapman's Peak drive subject to road conditions",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera",
          "Child rates available for 2-11 years"
        ],
        available: true,
        category: "cape-town-day-tours"
      },
      {
        id: "table-mountain-city",
        name: "Table Mountain & City Tour",
        slug: "table-mountain-city-tour",
        description: "Discover Cape Town's iconic Table Mountain and explore the historic city center.",
        longDescription: "Experience the best of Cape Town in one day. Start with a cable car ride up Table Mountain (weather permitting), followed by a comprehensive city tour including the Castle of Good Hope, Company Gardens, and Bo-Kaap.",
        image: "/tours/table-mountain.jpg",
        gallery: [
          "/tours/table-mountain/cable-car.jpg",
          "/tours/table-mountain/bo-kaap.jpg",
          "/tours/table-mountain/signal-hill.jpg",
          "/tours/table-mountain/va-waterfront.jpg"
        ],
        duration: "Half Day (4-5 hours)",
        groupSize: "1-7 people",
        startTime: "08:30",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Table Mountain Cable Car ride",
          "Bo-Kaap cultural district",
          "Castle of Good Hope",
          "Company Gardens",
          "Signal Hill viewpoint",
          "V&A Waterfront (optional)"
        ],
        itinerary: [
          {
            time: "08:30",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "09:00",
            description: "Table Mountain Cable Car ride",
            location: "Table Mountain",
            image: "/tours/table-mountain/cable-car.jpg"
          },
          {
            time: "10:00",
            description: "Castle of Good Hope entrance",
            location: "Castle of Good Hope",
            image: "/tours/table-mountain/castle.jpg"
          },
          {
            time: "10:30",
            description: "Company Gardens",
            location: "Company Gardens",
            image: "/tours/table-mountain/company-gardens.jpg"
          },
          {
            time: "11:00",
            description: "Bo-Kaap cultural district",
            location: "Bo-Kaap",
            image: "/tours/table-mountain/bo-kaap.jpg"
          },
          {
            time: "11:30",
            description: "Signal Hill viewpoint",
            location: "Signal Hill",
            image: "/tours/table-mountain/signal-hill.jpg"
          },
          {
            time: "12:00",
            description: "V&A Waterfront (optional)",
            location: "V&A Waterfront",
            image: "/tours/table-mountain/va-waterfront.jpg"
          },
          {
            time: "13:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Hotel pickup and drop-off",
          "Table Mountain cable car ticket",
          "Castle of Good Hope entrance",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)"
        ],
        available: true,
        category: "cape-town-day-tours"
      },
      {
        id: "robben-island",
        name: "Robben Island Tour",
        slug: "robben-island-tour",
        description: "Visit the historic Robben Island, where Nelson Mandela was imprisoned.",
        longDescription: "Take a ferry to Robben Island and explore the prison where Nelson Mandela spent 18 years. Learn about South Africa's journey to democracy from former political prisoners.",
        image: "/tours/robben-island.jpg",
        gallery: [
          "/tours/robben-island/prison.jpg",
          "/tours/robben-island/ferry.jpg",
          "/tours/robben-island/museum.jpg"
        ],
        duration: "Half Day (4-5 hours)",
        groupSize: "1-7 people",
        startTime: "09:00",
        meetingPoint: "V&A Waterfront",
        highlights: [
          "Ferry ride to Robben Island",
          "Tour with former political prisoner",
          "Visit Nelson Mandela's cell",
          "Island Museum tour",
          "Panoramic views of Cape Town"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from V&A Waterfront",
            location: "V&A Waterfront",
            image: "/tours/robben-island/ferry.jpg"
          },
          {
            time: "09:30",
            description: "Ferry to Robben Island",
            location: "Robben Island",
            image: "/tours/robben-island/ferry.jpg"
          },
          {
            time: "10:00",
            description: "Tour with former political prisoner",
            location: "Robben Island",
            image: "/tours/robben-island/prison.jpg"
          },
          {
            time: "11:00",
            description: "Visit Nelson Mandela's cell",
            location: "Robben Island",
            image: "/tours/robben-island/prison.jpg"
          },
          {
            time: "12:00",
            description: "Island Museum tour",
            location: "Robben Island",
            image: "/tours/robben-island/museum.jpg"
          },
          {
            time: "13:00",
            description: "Return to V&A Waterfront",
            location: "V&A Waterfront"
          }
        ],
        includes: [
          "Ferry ticket",
          "Tour guide",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera"
        ],
        available: true,
        category: "cape-town-day-tours"
      },
      {
        id: "premium-wine-experience",
        name: "Premium Wine Experience",
        slug: "premium-wine-experience",
        description: "Visit prestigious wine estates in Stellenbosch and Franschhoek",
        longDescription: "Indulge in premium wine tastings at award-winning estates, paired with gourmet cuisine and stunning vineyard views.",
        image: "/tours/wine.jpg",
        gallery: [
          "/tours/wine/gallery1.jpg",
          "/tours/wine/gallery2.jpg",
          "/tours/wine/gallery3.jpg",
          "/tours/wine/gallery4.jpg"
        ],
        duration: "Full Day (8-9 hours)",
        groupSize: "2-8 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "4 Premium Wine Estates",
          "Cellar Tour",
          "Wine and Chocolate Pairing",
          "Gourmet Lunch",
          "Wine Making Experience",
          "Estate Gardens Tour"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "10:00",
            description: "Visit a winery in Stellenbosch",
            location: "Stellenbosch",
            image: "/tours/wine/estate1.jpg"
          },
          {
            time: "11:00",
            description: "Wine tasting at a Stellenbosch estate",
            location: "Stellenbosch",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "12:00",
            description: "Visit a winery in Franschhoek",
            location: "Franschhoek",
            image: "/tours/wine/estate2.jpg"
          },
          {
            time: "13:00",
            description: "Wine tasting at a Franschhoek estate",
            location: "Franschhoek",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "14:00",
            description: "Visit a winery in Stellenbosch",
            location: "Stellenbosch",
            image: "/tours/wine/estate3.jpg"
          },
          {
            time: "15:00",
            description: "Wine tasting at a Stellenbosch estate",
            location: "Stellenbosch",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "16:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Air-conditioned vehicle",
          "Entrance fees (wine estates)",
          "Wine tastings",
          "Cellar tours",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)",
          "Travel insurance"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera",
          "Child rates available for 2-11 years"
        ],
        available: true,
        category: "cape-town-day-tours"
      },
      {
        id: "bo-kaap-tour",
        name: "Bo-Kaap Museum & Malay Cultural Tour",
        slug: "bo-kaap-museum-tour",
        description: "Explore the colorful Bo-Kaap neighborhood and discover Cape Malay culture and history.",
        longDescription: "Immerse yourself in the vibrant Bo-Kaap neighborhood, known for its colorful houses and rich Cape Malay heritage. Visit the Bo-Kaap Museum, learn about the area's fascinating history, and experience authentic Cape Malay cuisine and culture.",
        image: "/tours/bo-kaap/bo-kaap.jpg",
        gallery: [
          "/tours/bo-kaap/bo-kaap2.jpg",
          "/tours/bo-kaap/bo-kaap3.jpg",
          "/tours/bo-kaap/bo-kaap4.jpg",
          "/tours/bo-kaap/bo-kaap5.jpg"
        ],
        duration: "Half Day (4-5 hours)",
        groupSize: "2-10 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Bo-Kaap Museum guided tour",
          "Walking tour of colorful houses",
          "Cape Malay cultural experience",
          "Traditional Cape Malay cooking demonstration",
          "Local spice shop visit",
          "Historical mosque visit (exterior only)"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town"
          },
          {
            time: "09:30",
            description: "Bo-Kaap Museum guided tour",
            location: "Bo-Kaap",
            image: "/tours/bo-kaap/museum.jpg"
          },
          {
            time: "10:30",
            description: "Walking tour of the colorful neighborhood",
            location: "Bo-Kaap",
            image: "/tours/bo-kaap/houses.jpg"
          },
          {
            time: "11:30",
            description: "Visit to local spice shop",
            location: "Bo-Kaap",
            image: "/tours/bo-kaap/spices.jpg"
          },
          {
            time: "12:00",
            description: "Cape Malay cooking demonstration",
            location: "Bo-Kaap",
            image: "/tours/bo-kaap/food.jpg"
          },
          {
            time: "13:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Bo-Kaap Museum entrance fee",
          "Cape Malay cooking demonstration",
          "Bottled water",
          "Hotel pickup and drop-off"
        ],
        excludes: [
          "Additional food and beverages",
          "Gratuities (optional)"
        ],
        available: true,
        category: "cape-town-day-tours"
      },
      {
        id: "boulders-beach-tour",
        name: "Boulders Beach Penguin Colony",
        slug: "boulders-beach-penguin-tour",
        description: "Get up close with African penguins at the famous Boulders Beach colony.",
        longDescription: "Visit the world-famous Boulders Beach penguin colony, home to thousands of endangered African penguins. Walk along the wooden boardwalks for incredible viewing opportunities and learn about conservation efforts to protect these charismatic birds.",
        image: "/tours/boulders-beach/boulder1.jpg",
        gallery: [
          "/tours/boulders-beach/boulder2.jpg",
          "/tours/boulders-beach/boulder3.jpg",
          "/tours/boulders-beach/boulder4.jpg",
          "/tours/boulders-beach/boulder5.jpg"
        ],
        duration: "Half Day (5-6 hours)",
        groupSize: "2-10 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "African penguin colony viewing",
          "Wooden boardwalk experience",
          "Conservation presentation",
          "Simon's Town historical visit",
          "Scenic coastal drive",
          "Optional swimming at Seaforth Beach"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town"
          },
          {
            time: "10:00",
            description: "Scenic coastal drive along False Bay",
            location: "False Bay",
            image: "/tours/boulders-beach/coastal-drive.jpg"
          },
          {
            time: "10:30",
            description: "Visit Simon's Town historical mile",
            location: "Simon's Town",
            image: "/tours/boulders-beach/simons-town.jpg"
          },
          {
            time: "11:00",
            description: "Boulders Beach penguin colony visit",
            location: "Boulders Beach",
            image: "/tours/boulders-beach/penguins1.jpg"
          },
          {
            time: "12:00",
            description: "Conservation presentation",
            location: "Boulders Beach",
            image: "/tours/boulders-beach/conservation.jpg"
          },
          {
            time: "12:30",
            description: "Optional swimming at Seaforth Beach",
            location: "Seaforth Beach",
            image: "/tours/boulders-beach/seaforth.jpg"
          },
          {
            time: "13:30",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Boulders Beach conservation fee",
          "Bottled water",
          "Hotel pickup and drop-off"
        ],
        excludes: [
          "Lunch and additional beverages",
          "Gratuities (optional)",
          "Swimming equipment"
        ],
        available: true,
        category: "cape-town-day-tours"
      }
    ]
  },
  {
    id: "cape-winelands-tours",
    name: "Cape Winelands Tours",
    description: "Discover South Africa's finest wines in the historic Cape Winelands",
    image: "/tours/wine-tours.jpg",
    slug: "cape-winelands-tours",
    tours: [
      {
        id: "stellenbosch-franschhoek",
        name: "Stellenbosch & Franschhoek Wine Tour",
        slug: "stellenbosch-franschhoek-wine-tour",
        description: "Experience the finest wines of Stellenbosch and Franschhoek valleys.",
        longDescription: "Journey through the historic wine regions of the Cape, visiting prestigious estates in both Stellenbosch and Franschhoek. Enjoy wine tastings, cellar tours, and spectacular vineyard views.",
        image: "/tours/stellenbosch.jpg",
        gallery: [
          "/tours/wine/estate1.jpg",
          "/tours/wine/tasting.jpg",
          "/tours/wine/constantia-vineyards.jpg",
          "/tours/wine/groot-constantia.jpg"
        ],
        duration: "Full Day (8-9 hours)",
        groupSize: "2-7 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Visit 3-4 premium wine estates",
          "Professional wine tastings",
          "Cellar tour",
          "Franschhoek village exploration",
          "Scenic mountain passes",
          "Historic Stellenbosch walking tour"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "10:00",
            description: "Visit Stellenbosch",
            location: "Stellenbosch",
            image: "/tours/wine/stellenbosch.jpg"
          },
          {
            time: "11:00",
            description: "Wine tasting at a Stellenbosch estate",
            location: "Stellenbosch",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "12:00",
            description: "Visit Franschhoek",
            location: "Franschhoek",
            image: "/tours/wine/franschhoek.jpg"
          },
          {
            time: "13:00",
            description: "Wine tasting at a Franschhoek estate",
            location: "Franschhoek",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "14:00",
            description: "Visit a winery in Franschhoek",
            location: "Franschhoek",
            image: "/tours/wine/vineyards.jpg"
          },
          {
            time: "15:00",
            description: "Visit a winery in Stellenbosch",
            location: "Stellenbosch",
            image: "/tours/wine/vineyards.jpg"
          },
          {
            time: "16:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Air-conditioned vehicle",
          "Entrance fees (wine estates)",
          "Wine tastings",
          "Cellar tours",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera"
        ],
        available: true,
        category: "cape-winelands-tours"
      },
      {
        id: "constantia-wine",
        name: "Constantia Wine Tour",
        slug: "constantia-wine-tour",
        description: "Explore South Africa's oldest wine region in the heart of Cape Town",
        longDescription: "Visit the historic Constantia Wine Valley, home to some of South Africa's oldest and most prestigious wine estates. Experience world-class wines, stunning mountain views, and centuries of wine-making history.",
        image: "/tours/wine.jpg",
        gallery: [
          "/tours/wine/constantia-estate.jpg",
          "/tours/wine/constantia-vineyards.jpg",
          "/tours/wine/constantia-tasting.jpg"
        ],
        duration: "Half Day (5-6 hours)",
        groupSize: "2-7 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Visit 3 premium Constantia estates",
          "Historic cellar tours",
          "Premium wine tastings",
          "Cheese and wine pairing",
          "Spectacular mountain views",
          "Garden tours"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Collection from your accommodation",
            location: "Cape Town"
          },
          {
            time: "09:45",
            description: "Groot Constantia Wine Estate - South Africa's oldest wine producer",
            location: "Constantia",
            image: "/tours/wine/groot-constantia.jpg"
          },
          {
            time: "10:00",
            description: "Visit a local wildlife sanctuary",
            location: "Table Mountain",
            image: "/tours/hiking/wildlife.jpg"
          },
          {
            time: "11:00",
            description: "Cable car descent (weather permitting)",
            location: "Table Mountain",
            image: "/tours/hiking/cable-car.jpg"
          },
          {
            time: "12:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional wine guide",
          "All wine tasting fees",
          "Cheese and wine pairing",
          "Bottled water",
          "Transport in air-conditioned vehicle",
          "Hotel pickup and drop-off"
        ],
        excludes: [
          "Additional food and beverages",
          "Gratuities (optional)",
          "Wine purchases"
        ],
        available: true,
        category: "cape-winelands-tours"
      },
      {
        id: "paarl-wine",
        name: "Paarl Wine Route",
        slug: "paarl-wine-tour",
        description: "Discover the unique wines of the Paarl Valley.",
        longDescription: "Journey through the historic wine region of Paarl and enjoy wine tastings at some of the region's finest wineries.",
        image: "/tours/wine-premium.jpg",
        gallery: [
          "/tours/wine/constantia-vineyards.jpg",
          "/tours/wine/constantia-tasting.jpg"
        ],
        duration: "Full Day (8-9 hours)",
        groupSize: "2-7 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Visit multiple wineries",
          "Wine tastings",
          "Historic wine region exploration",
          "Panoramic views of the vineyards"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "10:00",
            description: "Visit a winery in Paarl",
            location: "Paarl",
            image: "/tours/wine/vineyards.jpg"
          },
          {
            time: "11:00",
            description: "Wine tasting at a Paarl winery",
            location: "Paarl",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "12:00",
            description: "Visit another winery in Paarl",
            location: "Paarl",
            image: "/tours/wine/vineyards.jpg"
          },
          {
            time: "13:00",
            description: "Wine tasting at a Paarl winery",
            location: "Paarl",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "14:00",
            description: "Visit a third winery in Paarl",
            location: "Paarl",
            image: "/tours/wine/vineyards.jpg"
          },
          {
            time: "15:00",
            description: "Wine tasting at a Paarl winery",
            location: "Paarl",
            image: "/tours/wine/tasting.jpg"
          },
          {
            time: "16:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Air-conditioned vehicle",
          "Entrance fees (wineries)",
          "Wine tastings",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)",
          "Travel insurance"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera",
          "Child rates available for 2-11 years"
        ],
        available: true,
        category: "cape-winelands-tours"
      }
    ]
  },
  {
    id: "adventure-tours",
    name: "Adventure Tours",
    description: "Thrilling adventures in and around Cape Town",
    image: "/tours/adventure.jpg",
    slug: "adventure-tours",
    tours: [
      {
        id: "shark-diving",
        name: "Shark Cage Diving",
        slug: "shark-cage-diving",
        description: "Face-to-face encounter with Great White Sharks",
        longDescription: "Experience the thrill of meeting Great White Sharks up close in their natural habitat. Professional guides ensure a safe and educational adventure.",
        image: "/tours/shark-diving.jpg",
        gallery: [
          "/tours/shark/cage.jpg",
          "/tours/shark/boat.jpg",
          "/tours/shark/briefing.jpg"
        ],
        duration: "Full Day (10-12 hours)",
        groupSize: "2-12 people",
        startTime: "04:30",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Face-to-face shark encounters",
          "Professional diving equipment",
          "Breakfast and lunch included",
          "Marine biologist briefing",
          "Underwater camera hire available",
          "All safety equipment provided"
        ],
        itinerary: [
          {
            time: "04:30",
            description: "Early morning pickup from your accommodation",
            location: "Cape Town"
          },
          {
            time: "06:30",
            description: "Arrival at Gansbaai harbor, breakfast and briefing",
            location: "Gansbaai",
            image: "/tours/shark/briefing.jpg"
          },
          {
            time: "07:30",
            description: "Boat launch and journey to Shark Alley",
            location: "Gansbaai",
            image: "/tours/shark/boat.jpg"
          },
          {
            time: "08:30",
            description: "First group cage diving session",
            location: "Shark Alley",
            image: "/tours/shark/cage.jpg"
          },
          {
            time: "12:30",
            description: "Light lunch served onboard",
            location: "Gansbaai",
            image: "/tours/shark/lunch.jpg"
          },
          {
            time: "13:30",
            description: "Return to harbor",
            location: "Gansbaai"
          },
          {
            time: "14:30",
            description: "View trip footage and receive certificates",
            location: "Gansbaai",
            image: "/tours/shark/certificates.jpg"
          },
          {
            time: "15:00",
            description: "Return journey to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional crew and dive master",
          "Breakfast and light lunch",
          "All diving equipment",
          "Wet suits and towels",
          "Safety briefing",
          "Certificate of participation",
          "Return transport from Cape Town"
        ],
        excludes: [
          "DVD of your experience (available for purchase)",
          "Gratuities (optional)",
          "Personal items",
          "Travel insurance"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera",
          "Child rates available for 2-11 years"
        ],
        available: true,
        category: "adventure-tours"
      },
      {
        id: "paragliding",
        name: "Tandem Paragliding",
        slug: "paragliding-cape-town",
        description: "Soar over Cape Town with experienced paragliding pilots.",
        longDescription: "Experience the thrill of paragliding over Cape Town's breathtaking landscapes.",
        image: "/tours/paragliding.jpeg",
        gallery: [
          "/tours/paragliding/takeoff.jpg",
        ],
        duration: "Full Day (8-9 hours)",
        groupSize: "1-7 people",
        startTime: "07:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Soar over Cape Town's landscapes",
          "Professional pilots",
          "Safety equipment provided",
          "Panoramic views of the city"
        ],
        itinerary: [
          {
            time: "07:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "08:00",
            description: "Drive to paragliding location",
            location: "Cape Town",
            image: "/tours/paragliding/drive.jpg"
          },
          {
            time: "09:00",
            description: "Paragliding",
            location: "Cape Town",
            image: "/tours/paragliding/takeoff.jpg"
          },
          {
            time: "10:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional pilots",
          "Safety equipment",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)",
          "Travel insurance"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera",
          "Child rates available for 2-11 years"
        ],
        available: true,
        category: "adventure-tours"
      },
      {
        id: "hiking-adventure",
        name: "Table Mountain Hiking",
        slug: "table-mountain-hiking",
        description: "Guided hiking adventures on Table Mountain",
        longDescription: "Experience the thrill of hiking one of the New 7 Wonders of Nature. Choose from various routes suitable for different fitness levels.",
        image: "/tours/hiking.jpg",
        gallery: [
          "/tours/hiking/india-venster.jpg",
          "/tours/hiking/platteklip.jpg",
          "/tours/hiking/cable-car.jpg"
        ],
        duration: "4-6 hours",
        groupSize: "2-8 people",
        startTime: "07:00",
        meetingPoint: "Table Mountain Lower Cable Station",
        highlights: [
          "Professional mountain guide",
          "Various route options",
          "Endemic flora and fauna",
          "Spectacular city views",
          "Cable car descent (weather permitting)",
          "Photography opportunities"
        ],
        itinerary: [
          {
            time: "07:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "08:00",
            description: "Drive to Table Mountain",
            location: "Cape Town",
            image: "/tours/hiking/drive.jpg"
          },
          {
            time: "09:00",
            description: "Start of the hike",
            location: "Table Mountain",
            image: "/tours/hiking/india-venster.jpg"
          },
          {
            time: "10:00",
            description: "Visit a local wildlife sanctuary",
            location: "Table Mountain",
            image: "/tours/hiking/wildlife.jpg"
          },
          {
            time: "11:00",
            description: "Cable car descent (weather permitting)",
            location: "Table Mountain",
            image: "/tours/hiking/cable-car.jpg"
          },
          {
            time: "12:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional mountain guide",
          "Entrance fees (Table Mountain)",
          "Bottled water"
        ],
        excludes: [
          "Additional meals and drinks",
          "Gratuities (optional)",
          "Travel insurance"
        ],
        notes: [
          "Tour operates daily, weather permitting",
          "Comfortable walking shoes recommended",
          "Bring sunscreen and camera",
          "Child rates available for 2-11 years"
        ],
        available: true,
        category: "adventure-tours"
      },
      {
        id: "atlantis-quad-biking",
        name: "Atlantis Dunes Quad Biking Adventure",
        slug: "atlantis-dunes-quad-biking",
        description: "Experience the thrill of quad biking through the magnificent Atlantis sand dunes.",
        longDescription: "Get your adrenaline pumping with an exciting quad biking adventure through the stunning Atlantis sand dunes. After a safety briefing and practice session, you'll navigate the rolling dunes with an experienced guide, enjoying spectacular views and photo opportunities.",
        image: "/tours/quad-biking/quad5.jpg",
        gallery: [
          "/tours/quad-biking/quad2.jpg",
          "/tours/quad-biking/quad1.jpg",
          "/tours/quad-biking/quad3.jpg",
          "/tours/quad-biking/quad4.jpg",
          "/tours/quad-biking/quad6.jpg"
        ],
        duration: "Half Day (4-5 hours)",
        groupSize: "2-10 people",
        startTime: "08:00 or 13:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Quad biking through sand dunes",
          "Professional safety equipment",
          "Experienced guides",
          "Stunning photo opportunities",
          "No previous experience required",
          "Optional sandboarding"
        ],
        itinerary: [
          {
            time: "08:00",
            description: "Pick up from your accommodation",
            location: "Cape Town"
          },
          {
            time: "09:00",
            description: "Arrival at Atlantis Dunes",
            location: "Atlantis",
            image: "/tours/quad-biking/arrival.jpg"
          },
          {
            time: "09:15",
            description: "Safety briefing and equipment fitting",
            location: "Atlantis",
            image: "/tours/quad-biking/briefing.jpg"
          },
          {
            time: "09:45",
            description: "Practice session on the quad bikes",
            location: "Atlantis",
            image: "/tours/quad-biking/practice.jpg"
          },
          {
            time: "10:15",
            description: "Guided quad biking tour through the dunes",
            location: "Atlantis Dunes",
            image: "/tours/quad-biking/dunes1.jpg"
          },
          {
            time: "11:30",
            description: "Photo opportunities and refreshments",
            location: "Atlantis Dunes",
            image: "/tours/quad-biking/photos.jpg"
          },
          {
            time: "12:00",
            description: "Return to base camp",
            location: "Atlantis"
          },
          {
            time: "12:30",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Quad bike rental",
          "Safety equipment (helmet, goggles)",
          "Safety briefing",
          "Bottled water",
          "Hotel pickup and drop-off"
        ],
        excludes: [
          "Additional activities (sandboarding)",
          "Gratuities (optional)",
          "Photos/videos (available for purchase)"
        ],
        available: true,
        category: "adventure-tours"
      }
    ]
  },
  {
    id: "garden-route-tours",
    name: "Garden Route Tours",
    description: "Explore South Africa's scenic Garden Route with guided tours and safari experiences",
    image: "/tours/garden-route.jpg",
    slug: "garden-route-tours",
    tours: [
      {
        id: "garden-route-highlights",
        name: "Garden Route Highlights",
        slug: "garden-route-highlights-tour",
        description: "Experience the best of the Garden Route in this comprehensive tour.",
        longDescription: "Discover the natural beauty of South Africa's Garden Route with this comprehensive tour covering all the major highlights. From pristine beaches to ancient forests, this tour showcases the region's diverse landscapes and attractions.",
        image: "/tours/garden-route/overview.jpg",
        gallery: [
          "/tours/garden-route/bungy.jpg",
          "/tours/garden-route/wilderness.jpg",
          "/tours/garden-route/knysna.jpg",
          "/tours/garden-route/wildlife.jpg"
        ],
        duration: "3 Days",
        groupSize: "2-12 people",
        startTime: "07:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Knysna Lagoon cruise",
          "Tsitsikamma National Park",
          "Plettenberg Bay beaches",
          "Oudtshoorn ostrich farms",
          "Cango Caves exploration",
          "Wilderness National Park"
        ],
        itinerary: [
          {
            time: "Day 1",
            description: "Cape Town to Oudtshoorn via Route 62",
            location: "Oudtshoorn",
            image: "/tours/garden-route/route62.jpg"
          },
          {
            time: "Day 1",
            description: "Visit Cango Caves and ostrich farm",
            location: "Oudtshoorn",
            image: "/tours/garden-route/cango-caves.jpg"
          },
          {
            time: "Day 2",
            description: "Oudtshoorn to Knysna",
            location: "Knysna",
            image: "/tours/garden-route/knysna-drive.jpg"
          },
          {
            time: "Day 2",
            description: "Knysna Lagoon cruise and Knysna Heads viewpoint",
            location: "Knysna",
            image: "/tours/garden-route/knysna-heads.jpg"
          },
          {
            time: "Day 3",
            description: "Tsitsikamma National Park and Storms River",
            location: "Tsitsikamma",
            image: "/tours/garden-route/storms-river.jpg"
          },
          {
            time: "Day 3",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Transportation in air-conditioned vehicle",
          "2 nights accommodation",
          "Breakfast daily",
          "All entrance fees",
          "Knysna Lagoon cruise",
          "Cango Caves tour"
        ],
        excludes: [
          "Lunches and dinners",
          "Additional activities",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "garden-route-tours"
      },
      {
        id: "garden-game-safari",
        name: "Garden Route Game Lodge Safari",
        slug: "garden-route-game-lodge-safari",
        description: "Experience an authentic African safari at the Garden Route Game Lodge.",
        longDescription: "Enjoy a memorable safari experience at the Garden Route Game Lodge, where you can spot the Big Five and other wildlife in their natural habitat. This private game reserve offers comfortable accommodation, guided game drives, and authentic African cuisine.",
        image: "/tours/garden-game/game-main.jpg",
        gallery: [
          "/tours/garden-game/game1.jpg",
          "/tours/garden-game/game2.jpg",
          "/tours/garden-game/game3.jpg",
          "/tours/garden-game/game4.jpg",
          "/tours/garden-game/game5.jpg",
          "/tours/garden-game/game6.jpg",
          "/tours/garden-game/game7.jpg",
          "/tours/garden-game/game8.jpg"
        ],
        duration: "2 Days",
        groupSize: "2-10 people",
        startTime: "08:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Big Five game drives",
          "Luxury lodge accommodation",
          "Professional safari guides",
          "African-inspired meals",
          "Sunset safari experience",
          "Educational wildlife center"
        ],
        itinerary: [
          {
            time: "Day 1",
            description: "Departure from Cape Town",
            location: "Cape Town",
            image: "/tours/garden-game/departure.jpg"
          },
          {
            time: "Day 1",
            description: "Arrival and check-in at Garden Route Game Lodge",
            location: "Garden Route Game Lodge",
            image: "/tours/garden-game/arrival.jpg"
          },
          {
            time: "Day 1",
            description: "Afternoon game drive",
            location: "Garden Route Game Lodge",
            image: "/tours/garden-game/afternoon-drive.jpg"
          },
          {
            time: "Day 1",
            description: "Dinner at the lodge",
            location: "Garden Route Game Lodge",
            image: "/tours/garden-game/dinner.jpg"
          },
          {
            time: "Day 2",
            description: "Early morning game drive",
            location: "Garden Route Game Lodge",
            image: "/tours/garden-game/morning-drive.jpg"
          },
          {
            time: "Day 2",
            description: "Breakfast and check-out",
            location: "Garden Route Game Lodge",
            image: "/tours/garden-game/breakfast.jpg"
          },
          {
            time: "Day 2",
            description: "Return to Cape Town",
            location: "Cape Town",
            image: "/tours/garden-game/return.jpg"
          }
        ],
        includes: [
          "Professional safari guide",
          "Transportation in air-conditioned vehicle",
          "1 night accommodation",
          "All meals",
          "2 game drives",
          "Conservation fees"
        ],
        excludes: [
          "Alcoholic beverages",
          "Additional activities",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "garden-route-tours"
      }
    ]
  },
  {
    id: "cape-town-safari",
    name: "Cape Town Safari",
    description: "Experience African wildlife with day trips from Cape Town to private game reserves",
    image: "/tours/safari/main.jpg",
    slug: "cape-town-safari",
    tours: [
      {
        id: "aquila",
        name: "Aquila Private Game Reserve",
        slug: "aquila-private-game-reserve",
        description: "Full day safari experience at Aquila Private Game Reserve with Big Five viewing opportunities.",
        longDescription: "Just a 2-hour drive from Cape Town, Aquila Private Game Reserve offers an authentic African safari experience. Spot the Big Five (lion, elephant, buffalo, leopard, and rhino) on guided game drives through 10,000 hectares of natural wilderness. Enjoy luxury facilities and a gourmet buffet lunch between morning and afternoon game drives.",
        image: "/tours/aquila/aquila1.jpg",
        gallery: [
          "/tours/aquila/aquila2.jpg",
          "/tours/aquila/aquila3.jpg",
          "/tours/aquila/aquila4.jpg",
          "/tours/aquila/aquila5.jpg",
          "/tours/aquila/aquila6.jpg",
          "/tours/aquila/aquila7.jpg"
        ],
        duration: "Full Day (10-12 hours)",
        groupSize: "2-10 people",
        startTime: "06:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Big Five game viewing",
          "Guided safari drives",
          "Gourmet buffet lunch",
          "Luxury lodge facilities",
          "Optional horseback safari",
          "Conservation center visit"
        ],
        itinerary: [
          {
            time: "06:00",
            description: "Early morning departure from Cape Town",
            location: "Cape Town"
          },
          {
            time: "08:00",
            description: "Arrival at Aquila Private Game Reserve",
            location: "Aquila",
            image: "/tours/safari/aquila/arrival.jpg"
          },
          {
            time: "08:30",
            description: "Welcome drinks and briefing",
            location: "Aquila",
            image: "/tours/safari/aquila/welcome.jpg"
          },
          {
            time: "09:00",
            description: "Morning game drive in safari vehicles",
            location: "Aquila",
            image: "/tours/safari/aquila/game-drive.jpg"
          },
          {
            time: "12:00",
            description: "Buffet lunch at the lodge",
            location: "Aquila",
            image: "/tours/safari/aquila/lunch.jpg"
          },
          {
            time: "14:00",
            description: "Afternoon game drive or optional activities",
            location: "Aquila",
            image: "/tours/safari/aquila/afternoon-drive.jpg"
          },
          {
            time: "16:00",
            description: "Return journey to Cape Town",
            location: "Aquila"
          },
          {
            time: "18:00",
            description: "Arrival in Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Return transfers from Cape Town",
          "Welcome drinks",
          "Two game drives",
          "Buffet lunch",
          "Conservation levy",
          "Professional guide"
        ],
        excludes: [
          "Additional beverages",
          "Optional activities",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "cape-town-safari"
      },
      {
        id: "buffelsdrift",
        name: "Buffelsdrift Game Lodge",
        slug: "buffelsdrift-game-lodge",
        description: "Luxury safari experience at Buffelsdrift with close encounters with elephants.",
        longDescription: "Located near Oudtshoorn, Buffelsdrift Game Lodge offers a luxurious safari experience in a stunning environment. The highlight is the unique elephant experience, where you can interact with rescued elephants. Enjoy game drives, bush safaris, and luxury tented accommodation overlooking a natural waterhole.",
        image: "/tours/bufflesdrift/buffle-main.jpg",
        gallery: [
          "/tours/bufflesdrift/buffle1.jpg",
          "/tours/bufflesdrift/buffle2.jpg",
          "/tours/bufflesdrift/buffle3.jpg",
          "/tours/bufflesdrift/buffle4.jpg"
        ],
        duration: "2 Days",
        groupSize: "2-8 people",
        startTime: "07:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Elephant interaction experience",
          "Luxury tented accommodation",
          "Waterhole viewing deck",
          "Game drives",
          "Meerkat safari",
          "Bush spa treatments"
        ],
        itinerary: [
          {
            time: "Day 1",
            description: "Morning departure from Cape Town",
            location: "Cape Town"
          },
          {
            time: "Day 1",
            description: "Scenic drive through Klein Karoo",
            location: "Route 62",
            image: "/tours/safari/buffelsdrift/route.jpg"
          },
          {
            time: "Day 1",
            description: "Arrival and check-in at Buffelsdrift",
            location: "Oudtshoorn",
            image: "/tours/safari/buffelsdrift/arrival.jpg"
          },
          {
            time: "Day 1",
            description: "Elephant interaction experience",
            location: "Buffelsdrift",
            image: "/tours/safari/buffelsdrift/elephant-interaction.jpg"
          },
          {
            time: "Day 1",
            description: "Evening game drive and dinner",
            location: "Buffelsdrift",
            image: "/tours/safari/buffelsdrift/evening-drive.jpg"
          },
          {
            time: "Day 2",
            description: "Early morning meerkat safari",
            location: "Buffelsdrift",
            image: "/tours/safari/buffelsdrift/meerkat.jpg"
          },
          {
            time: "Day 2",
            description: "Breakfast and departure",
            location: "Buffelsdrift"
          },
          {
            time: "Day 2",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Transportation in luxury vehicle",
          "1 night luxury tented accommodation",
          "All meals",
          "Elephant interaction",
          "2 game drives",
          "Meerkat safari",
          "Professional guide"
        ],
        excludes: [
          "Alcoholic beverages",
          "Spa treatments",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "cape-town-safari"
      },
      {
        id: "gondwana",
        name: "Gondwana Game Reserve",
        slug: "gondwana-game-reserve",
        description: "Luxury Big Five safari experience on a 11,000-hectare private game reserve.",
        longDescription: "Gondwana Game Reserve offers an authentic safari experience just 4 hours from Cape Town. The 11,000-hectare private reserve is home to the Big Five and endangered species like the Cape Mountain Zebra. Stay in luxury accommodation and enjoy guided game drives, bush walks, and gourmet dining in a malaria-free environment.",
        image: "/tours/gondwana/gondowa-main.jpg",
        gallery: [
          "/tours/gondwana/gondowa1.jpg",
          "/tours/gondwana/gondowa2.jpg",
          "/tours/gondwana/gondowa3.jpg",
          "/tours/gondwana/gondowa4.jpg"
        ],
        duration: "3 Days",
        groupSize: "2-10 people",
        startTime: "08:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Big Five safari experience",
          "Luxury lodge accommodation",
          "Guided bush walks",
          "Gourmet dining",
          "Sundowner experiences",
          "Fynbos conservation area"
        ],
        itinerary: [
          {
            time: "Day 1",
            description: "Morning departure from Cape Town",
            location: "Cape Town"
          },
          {
            time: "Day 1",
            description: "Scenic drive along the Garden Route",
            location: "Garden Route",
            image: "/tours/safari/gondwana/drive.jpg"
          },
          {
            time: "Day 1",
            description: "Arrival and welcome at Gondwana",
            location: "Gondwana",
            image: "/tours/safari/gondwana/welcome.jpg"
          },
          {
            time: "Day 1",
            description: "Evening game drive and sundowners",
            location: "Gondwana",
            image: "/tours/safari/gondwana/evening-drive.jpg"
          },
          {
            time: "Day 2",
            description: "Early morning game drive",
            location: "Gondwana",
            image: "/tours/safari/gondwana/morning-drive.jpg"
          },
          {
            time: "Day 2",
            description: "Brunch and leisure time",
            location: "Gondwana",
            image: "/tours/safari/gondwana/brunch.jpg"
          },
          {
            time: "Day 2",
            description: "Guided bush walk",
            location: "Gondwana",
            image: "/tours/safari/gondwana/bush-walk.jpg"
          },
          {
            time: "Day 2",
            description: "Evening game drive",
            location: "Gondwana"
          },
          {
            time: "Day 3",
            description: "Final morning game drive",
            location: "Gondwana"
          },
          {
            time: "Day 3",
            description: "Breakfast and departure",
            location: "Gondwana"
          },
          {
            time: "Day 3",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Transportation in luxury vehicle",
          "2 nights luxury accommodation",
          "All meals and selected beverages",
          "Daily game drives",
          "Guided bush walk",
          "Conservation fees",
          "Professional guide"
        ],
        excludes: [
          "Premium alcoholic beverages",
          "Spa treatments",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "cape-town-safari"
      },
      {
        id: "inverdoorn",
        name: "Inverdoorn Game Reserve",
        slug: "inverdoorn-game-reserve",
        description: "Safari experience with focus on conservation at Inverdoorn Game Reserve.",
        longDescription: "Inverdoorn Game Reserve, just 2.5 hours from Cape Town, is known for its conservation efforts, particularly the rehabilitation of rescued big cats through the Western Cape Cheetah Conservation. Experience close encounters with wildlife including the Big Five, giraffes, hippos, and cheetahs on guided safari drives.",
        image: "/tours/inverdoorn/inverdoorn-main.jpg",
        gallery: [
          "/tours/inverdoorn/inverdoorn1.jpg",
          "/tours/inverdoorn/inverdoorn2.jpg",
          "/tours/inverdoorn/inverdoorn3.jpg",
          "/tours/inverdoorn/inverdoorn4.jpg",
          "/tours/inverdoorn/inverdoorn5.jpg",
          "/tours/inverdoorn/inverdoorn6.jpg"
        ],
        duration: "Full Day or Overnight",
        groupSize: "2-10 people",
        startTime: "06:30",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Big Five game viewing",
          "Cheetah conservation program",
          "Expert wildlife guides",
          "Luxury accommodation options",
          "Swimming pool",
          "Spectacular Karoo landscape"
        ],
        itinerary: [
          {
            time: "06:30",
            description: "Early morning departure from Cape Town",
            location: "Cape Town"
          },
          {
            time: "09:00",
            description: "Arrival at Inverdoorn Game Reserve",
            location: "Inverdoorn",
            image: "/tours/safari/inverdoorn/arrival.jpg"
          },
          {
            time: "09:30",
            description: "Welcome drinks and check-in",
            location: "Inverdoorn",
            image: "/tours/safari/inverdoorn/welcome.jpg"
          },
          {
            time: "10:00",
            description: "Morning game drive",
            location: "Inverdoorn",
            image: "/tours/safari/inverdoorn/game-drive.jpg"
          },
          {
            time: "13:00",
            description: "Lunch at the lodge",
            location: "Inverdoorn",
            image: "/tours/safari/inverdoorn/lunch.jpg"
          },
          {
            time: "14:30",
            description: "Cheetah conservation program presentation",
            location: "Inverdoorn",
            image: "/tours/safari/inverdoorn/cheetah-program.jpg"
          },
          {
            time: "16:00",
            description: "Evening game drive",
            location: "Inverdoorn"
          },
          {
            time: "18:00",
            description: "Return journey to Cape Town (day option)",
            location: "Inverdoorn"
          }
        ],
        includes: [
          "Return transfers from Cape Town",
          "Welcome drinks",
          "Game drives",
          "Lunch",
          "Conservation levy",
          "Professional guide"
        ],
        excludes: [
          "Overnight accommodation (optional)",
          "Additional beverages",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "cape-town-safari"
      },
      {
        id: "sanbona",
        name: "Sanbona Wildlife Reserve",
        slug: "sanbona-wildlife-reserve",
        description: "Premium safari experience in the heart of Little Karoo with free-roaming Big Five.",
        longDescription: "Sanbona Wildlife Reserve offers an exclusive safari experience in the heart of the Little Karoo, just 3 hours from Cape Town. This 58,000-hectare reserve is home to the Big Five and rare white lions. Experience luxury accommodation, expert-guided safari drives, and breathtaking landscapes including rock formations with ancient San rock art.",
        image: "/tours/sanbona/san-main.jpg",
        gallery: [
          "/tours/sanbona/san1.jpg",
          "/tours/sanbona/san2.jpg",
          "/tours/sanbona/san3.jpg",
          "/tours/sanbona/san4.jpg"
        ],
        duration: "2-3 Days",
        groupSize: "2-8 people",
        startTime: "08:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "White lion sightings",
          "Ancient San rock art",
          "Luxury lodge options",
          "Expert wildlife guides",
          "Boat safaris (seasonal)",
          "Stargazing experiences"
        ],
        itinerary: [
          {
            time: "Day 1",
            description: "Morning departure from Cape Town",
            location: "Cape Town"
          },
          {
            time: "Day 1",
            description: "Scenic drive through Route 62",
            location: "Route 62",
            image: "/tours/safari/sanbona/route.jpg"
          },
          {
            time: "Day 1",
            description: "Arrival and welcome at Sanbona",
            location: "Sanbona",
            image: "/tours/safari/sanbona/welcome.jpg"
          },
          {
            time: "Day 1",
            description: "Afternoon game drive",
            location: "Sanbona",
            image: "/tours/safari/sanbona/afternoon-drive.jpg"
          },
          {
            time: "Day 1",
            description: "Dinner at the lodge",
            location: "Sanbona",
            image: "/tours/safari/sanbona/dinner.jpg"
          },
          {
            time: "Day 2",
            description: "Early morning game drive",
            location: "Sanbona",
            image: "/tours/safari/sanbona/morning-drive.jpg"
          },
          {
            time: "Day 2",
            description: "Breakfast and leisure time",
            location: "Sanbona"
          },
          {
            time: "Day 2",
            description: "Ancient rock art tour",
            location: "Sanbona",
            image: "/tours/safari/sanbona/rock-art-tour.jpg"
          },
          {
            time: "Day 2",
            description: "Afternoon game drive",
            location: "Sanbona"
          },
          {
            time: "Day 3",
            description: "Final morning game drive",
            location: "Sanbona"
          },
          {
            time: "Day 3",
            description: "Breakfast and departure",
            location: "Sanbona"
          },
          {
            time: "Day 3",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Transportation in luxury vehicle",
          "Luxury lodge accommodation",
          "All meals and selected beverages",
          "Twice daily game drives",
          "Guided nature walks",
          "Conservation fees",
          "Professional guide"
        ],
        excludes: [
          "Premium alcoholic beverages",
          "Spa treatments",
          "Gratuities (optional)",
          "Personal expenses"
        ],
        available: true,
        category: "cape-town-safari"
      }
    ]
  },
  {
    id: "township-tourism",
    name: "Township Tourism",
    description: "Authentic cultural experiences in Cape Town's vibrant townships",
    image: "/tours/township/main.jpg",
    slug: "township-tourism",
    tours: [
      {
        id: "khayelitsha",
        name: "Khayelitsha Cultural Experience",
        slug: "khayelitsha-cultural-tour",
        description: "Immersive tour of Khayelitsha township with local guides and community interaction.",
        longDescription: "Experience Cape Town's largest township, Khayelitsha, with local guides who will share their personal stories and the township's history. Visit community projects, local businesses, and meet residents in this respectful and educational tour that highlights the challenges and triumphs of township life.",
        image: "/tours/khayelitsha/kha-main.jpg",
        gallery: [
          "/tours/khayelitsha/kha1.jpg",
          "/tours/khayelitsha/kha2.webp",
          "/tours/khayelitsha/kha3.webp",
          "/tours/khayelitsha/kha4.webp",
          "/tours/khayelitsha/kha5.jpg"
        ],
        duration: "Half Day (4-5 hours)",
        groupSize: "2-12 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Local guide from the community",
          "Visit to community development projects",
          "Traditional food tasting",
          "Local craft shopping",
          "Visit to a local school (when open)",
          "Cultural music and dance performance"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town"
          },
          {
            time: "09:45",
            description: "Arrival in Khayelitsha and introduction",
            location: "Khayelitsha",
            image: "/tours/township/khayelitsha/intro.jpg"
          },
          {
            time: "10:00",
            description: "Visit to a local community center",
            location: "Khayelitsha",
            image: "/tours/township/khayelitsha/community-center.jpg"
          },
          {
            time: "11:00",
            description: "Walking tour through the neighborhood",
            location: "Khayelitsha",
            image: "/tours/township/khayelitsha/walking.jpg"
          },
          {
            time: "12:00",
            description: "Visit to a local business or entrepreneur",
            location: "Khayelitsha",
            image: "/tours/township/khayelitsha/business.jpg"
          },
          {
            time: "12:30",
            description: "Traditional food tasting at a local eatery",
            location: "Khayelitsha",
            image: "/tours/township/khayelitsha/food.jpg"
          },
          {
            time: "13:00",
            description: "Cultural performance",
            location: "Khayelitsha",
            image: "/tours/township/khayelitsha/performance.jpg"
          },
          {
            time: "13:30",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional local guide",
          "Transportation",
          "Food tasting",
          "Community project donations",
          "Bottled water"
        ],
        excludes: [
          "Additional food and beverages",
          "Souvenirs and crafts",
          "Gratuities (optional)"
        ],
        available: true,
        category: "township-tourism"
      },
      {
        id: "langa",
        name: "Langa Township Heritage Tour",
        slug: "langa-township-tour",
        description: "Cultural tour of Langa, Cape Town's oldest township with rich heritage and history.",
        longDescription: "Explore Langa, Cape Town's oldest township established in 1927, and discover its rich cultural heritage and historical significance in South Africa's struggle against apartheid. This tour is led by residents who offer authentic insights into township life past and present, highlighting community resilience and cultural pride.",
        image: "/tours/langa/langa-main.jpg",
        gallery: [
          "/tours/langa/langa1.jpg",
          "/tours/langa/langa2.jpg",
          "/tours/langa/langa3.jpg",
          "/tours/langa/langa4.jpg",
          "/tours/langa/langa5.jpg",
          "/tours/langa/langa6.jpg",
          "/tours/langa/langa7.jpg"
        ],
        duration: "Half Day (4 hours)",
        groupSize: "2-10 people",
        startTime: "09:30",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Guga S'thebe Arts & Cultural Centre",
          "Historical landmarks from the apartheid era",
          "Traditional healer (sangoma) visit",
          "Local crafts market",
          "Community development initiatives",
          "Traditional music experience"
        ],
        itinerary: [
          {
            time: "09:30",
            description: "Pick up from your accommodation",
            location: "Cape Town"
          },
          {
            time: "10:00",
            description: "Arrival in Langa and historical introduction",
            location: "Langa",
            image: "/tours/township/langa/introduction.jpg"
          },
          {
            time: "10:30",
            description: "Visit to Guga S'thebe Arts & Cultural Centre",
            location: "Langa",
            image: "/tours/township/langa/arts-center.jpg"
          },
          {
            time: "11:15",
            description: "Walking tour of historical sites",
            location: "Langa",
            image: "/tours/township/langa/historical.jpg"
          },
          {
            time: "12:00",
            description: "Visit to local home and conversation with residents",
            location: "Langa",
            image: "/tours/township/langa/home-visit.jpg"
          },
          {
            time: "12:30",
            description: "Traditional food tasting",
            location: "Langa",
            image: "/tours/township/langa/food.jpg"
          },
          {
            time: "13:00",
            description: "Music and dance demonstration",
            location: "Langa",
            image: "/tours/township/langa/music.jpg"
          },
          {
            time: "13:30",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Local resident guide",
          "Transportation",
          "Entrance to cultural center",
          "Food tasting",
          "Community project contribution",
          "Bottled water"
        ],
        excludes: [
          "Additional food and beverages",
          "Crafts and souvenirs",
          "Optional donations",
          "Gratuities (optional)"
        ],
        available: true,
        category: "township-tourism"
      }
    ]
  }
]; 