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
    image: "./tours/cape-town-day.jpg",
    slug: "cape-town-day-tours",
    tours: [
      {
        id: "cape-peninsula",
        name: "Cape Peninsula Tour",
        slug: "cape-peninsula-tour",
        description: "Experience the scenic beauty of the Cape Peninsula, from the stunning Chapman's Peak Drive to the Cape of Good Hope.",
        longDescription: "Join us on a journey through the Cape Peninsula, where you'll discover breathtaking coastal views, encounter African penguins, and explore the Cape Point Nature Reserve. This tour combines natural wonders with historical sites.",
        image: "/tours/cape-peninsula/boulders-beach.jpg",
        gallery: [
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
            image: "./tours/cape-peninsula/hout-bay.jpg"
          },
          {
            time: "10:00",
            description: "Drive along Chapman's Peak (weather permitting)",
            location: "Chapman's Peak",
            image: "./tours/cape-peninsula/chapmans-peak.jpg"
          },
          {
            time: "11:30",
            description: "Cape Point Nature Reserve & Cape of Good Hope",
            location: "Cape Point",
            image: "./tours/cape-peninsula/cape-point.jpg"
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
            image: "./tours/cape-peninsula/boulders-beach.jpg"
          },
          {
            time: "16:00",
            description: "Kirstenbosch Botanical Gardens",
            location: "Kirstenbosch",
            image: "./tours/cape-peninsula/kirstenbosch.jpg"
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
        image: "./tours/table-mountain.jpg",
        gallery: [
          "./tours/table-mountain/aerial.jpg",
          "./tours/table-mountain/cable-car.jpg",
          "./tours/table-mountain/bo-kaap.jpg",
          "./tours/table-mountain/company-gardens.jpg"
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
            image: "./tours/table-mountain/cable-car.jpg"
          },
          {
            time: "10:00",
            description: "Castle of Good Hope entrance",
            location: "Castle of Good Hope",
            image: "./tours/table-mountain/castle.jpg"
          },
          {
            time: "10:30",
            description: "Company Gardens",
            location: "Company Gardens",
            image: "./tours/table-mountain/company-gardens.jpg"
          },
          {
            time: "11:00",
            description: "Bo-Kaap cultural district",
            location: "Bo-Kaap",
            image: "./tours/table-mountain/bo-kaap.jpg"
          },
          {
            time: "11:30",
            description: "Signal Hill viewpoint",
            location: "Signal Hill",
            image: "./tours/table-mountain/signal-hill.jpg"
          },
          {
            time: "12:00",
            description: "V&A Waterfront (optional)",
            location: "V&A Waterfront",
            image: "./tours/table-mountain/va-waterfront.jpg"
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
        image: "./tours/robben-island.jpg",
        gallery: [
          "./tours/robben-island/prison.jpg",
          "./tours/robben-island/ferry.jpg",
          "./tours/robben-island/museum.jpg"
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
            image: "./tours/robben-island/ferry.jpg"
          },
          {
            time: "09:30",
            description: "Ferry to Robben Island",
            location: "Robben Island",
            image: "./tours/robben-island/ferry.jpg"
          },
          {
            time: "10:00",
            description: "Tour with former political prisoner",
            location: "Robben Island",
            image: "./tours/robben-island/prison.jpg"
          },
          {
            time: "11:00",
            description: "Visit Nelson Mandela's cell",
            location: "Robben Island",
            image: "./tours/robben-island/prison.jpg"
          },
          {
            time: "12:00",
            description: "Island Museum tour",
            location: "Robben Island",
            image: "./tours/robben-island/museum.jpg"
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
        id: "whale-watching",
        name: "Hermanus Whale Watching",
        slug: "whale-watching-tour",
        description: "Experience the majestic Southern Right Whales in Hermanus (June-December).",
        longDescription: "Join us on a whale watching tour in Hermanus, where you'll have the opportunity to see these magnificent creatures in their natural habitat.",
        image: "./tours/whale-watching.jpg",
        gallery: [
          "./tours/whale-watching/whales.jpg",
          "./tours/whale-watching/boat.jpg"
        ],
        duration: "Full Day (8-9 hours)",
        groupSize: "1-7 people",
        startTime: "07:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Whale watching",
          "Hermanus village exploration",
          "Scenic coastal drive",
          "Panoramic views of the ocean"
        ],
        itinerary: [
          {
            time: "07:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "08:00",
            description: "Drive to Hermanus",
            location: "Cape Town to Hermanus",
            image: "./tours/whale-watching/drive.jpg"
          },
          {
            time: "09:00",
            description: "Whale watching",
            location: "Hermanus",
            image: "./tours/whale-watching/whales.jpg"
          },
          {
            time: "10:00",
            description: "Hermanus village exploration",
            location: "Hermanus",
            image: "./tours/whale-watching/village.jpg"
          },
          {
            time: "11:00",
            description: "Scenic coastal drive",
            location: "Hermanus to Cape Town",
            image: "./tours/whale-watching/drive.jpg"
          },
          {
            time: "12:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Air-conditioned vehicle",
          "Entrance fees (whale watching boat)",
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
        id: "city-culture",
        name: "City & Cultural Tour",
        slug: "city-cultural-tour",
        description: "Discover Cape Town's rich history and vibrant culture",
        longDescription: "Immerse yourself in Cape Town's diverse cultural heritage. Visit historic sites, colorful neighborhoods, and experience local traditions.",
        image: "./tours/city-culture.jpg",
        gallery: [
          "./tours/city-culture/bo-kaap.jpg",
          "./tours/city-culture/district-six.jpg",
          "./tours/city-culture/castle.jpg"
        ],
        duration: "Full Day (8 hours)",
        groupSize: "2-10 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Bo-Kaap Cooking Experience",
          "District Six Museum",
          "Castle of Good Hope",
          "Traditional African Dance Show",
          "Local Market Visit",
          "Township Art Gallery"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "10:00",
            description: "Visit Bo-Kaap",
            location: "Bo-Kaap",
            image: "./tours/city-culture/bo-kaap.jpg"
          },
          {
            time: "11:00",
            description: "Visit District Six Museum",
            location: "District Six",
            image: "./tours/city-culture/district-six.jpg"
          },
          {
            time: "12:00",
            description: "Visit Castle of Good Hope",
            location: "Castle of Good Hope",
            image: "./tours/city-culture/castle.jpg"
          },
          {
            time: "13:00",
            description: "Traditional African Dance Show",
            location: "Cape Town",
            image: "./tours/city-culture/dance.jpg"
          },
          {
            time: "14:00",
            description: "Local Market Visit",
            location: "Cape Town",
            image: "./tours/city-culture/market.jpg"
          },
          {
            time: "15:00",
            description: "Township Art Gallery",
            location: "Cape Town",
            image: "./tours/city-culture/gallery.jpg"
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
          "Entrance fees (historic sites)",
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
        id: "township-cultural",
        name: "Township Cultural Tour",
        slug: "township-cultural-tour",
        description: "Experience the vibrant culture and history of Cape Town's townships",
        longDescription: "Gain insight into South Africa's history and experience the vibrant culture of Cape Town's townships. Meet local entrepreneurs, visit community projects, and enjoy traditional African cuisine.",
        image: "./tours/township.jpg",
        gallery: [
          "./tours/township/community.jpg",
          "./tours/township/art.jpg",
          "./tours/township/food.jpg"
        ],
        duration: "Half Day (4-5 hours)",
        groupSize: "2-10 people",
        startTime: "09:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Visit Langa - Cape Town's oldest township",
          "Meet local entrepreneurs",
          "Traditional African lunch",
          "Community art projects",
          "Local music and dance",
          "Craft markets"
        ],
        itinerary: [
          {
            time: "09:00",
            description: "Pick up from your accommodation",
            location: "Cape Town"
          },
          {
            time: "09:30",
            description: "District Six Museum visit - Learn about forced removals during apartheid",
            location: "District Six",
            image: "./tours/township/district-six.jpg"
          },
          {
            time: "10:30",
            description: "Langa Township - Visit local craft markets and meet artisans",
            location: "Langa",
            image: "./tours/township/crafts.jpg"
          },
          {
            time: "11:30",
            description: "Community development projects tour",
            location: "Langa",
            image: "./tours/township/community.jpg"
          },
          {
            time: "12:30",
            description: "Traditional African lunch at a local restaurant",
            location: "Langa",
            image: "./tours/township/food.jpg"
          },
          {
            time: "13:30",
            description: "Visit Guga S'thebe Arts & Culture Centre",
            location: "Langa",
            image: "./tours/township/arts.jpg"
          },
          {
            time: "14:30",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional local guide",
          "Transport in air-conditioned vehicle",
          "District Six Museum entrance",
          "Traditional African lunch",
          "Community project donations",
          "Hotel pickup and drop-off"
        ],
        excludes: [
          "Additional beverages",
          "Gratuities (optional)",
          "Craft market purchases"
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
        image: "./tours/wine/main.jpg",
        gallery: [
          "./tours/wine/gallery1.jpg",
          "./tours/wine/gallery2.jpg",
          "./tours/wine/gallery3.jpg",
          "./tours/wine/gallery4.jpg"
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
            image: "./tours/wine/estate1.jpg"
          },
          {
            time: "11:00",
            description: "Wine tasting at a Stellenbosch estate",
            location: "Stellenbosch",
            image: "./tours/wine/tasting.jpg"
          },
          {
            time: "12:00",
            description: "Visit a winery in Franschhoek",
            location: "Franschhoek",
            image: "./tours/wine/estate2.jpg"
          },
          {
            time: "13:00",
            description: "Wine tasting at a Franschhoek estate",
            location: "Franschhoek",
            image: "./tours/wine/tasting.jpg"
          },
          {
            time: "14:00",
            description: "Visit a winery in Stellenbosch",
            location: "Stellenbosch",
            image: "./tours/wine/estate3.jpg"
          },
          {
            time: "15:00",
            description: "Wine tasting at a Stellenbosch estate",
            location: "Stellenbosch",
            image: "./tours/wine/tasting.jpg"
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
      }
    ]
  },
  {
    id: "cape-winelands",
    name: "Cape Winelands Tours",
    description: "Discover South Africa's finest wines in the historic Cape Winelands",
    image: "./tours/wine-tours.jpg",
    slug: "cape-winelands-tours",
    tours: [
      {
        id: "stellenbosch-franschhoek",
        name: "Stellenbosch & Franschhoek Wine Tour",
        slug: "stellenbosch-franschhoek-wine-tour",
        description: "Experience the finest wines of Stellenbosch and Franschhoek valleys.",
        longDescription: "Journey through the historic wine regions of the Cape, visiting prestigious estates in both Stellenbosch and Franschhoek. Enjoy wine tastings, cellar tours, and spectacular vineyard views.",
        image: "./tours/wine/stellenbosch.jpg",
        gallery: [
          "./tours/wine/estates.jpg",
          "./tours/wine/tasting.jpg",
          "./tours/wine/vineyards.jpg",
          "./tours/wine/cellar.jpg"
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
            image: "./tours/wine/stellenbosch.jpg"
          },
          {
            time: "11:00",
            description: "Wine tasting at a Stellenbosch estate",
            location: "Stellenbosch",
            image: "./tours/wine/tasting.jpg"
          },
          {
            time: "12:00",
            description: "Visit Franschhoek",
            location: "Franschhoek",
            image: "./tours/wine/franschhoek.jpg"
          },
          {
            time: "13:00",
            description: "Wine tasting at a Franschhoek estate",
            location: "Franschhoek",
            image: "./tours/wine/tasting.jpg"
          },
          {
            time: "14:00",
            description: "Visit a winery in Franschhoek",
            location: "Franschhoek",
            image: "./tours/wine/vineyards.jpg"
          },
          {
            time: "15:00",
            description: "Visit a winery in Stellenbosch",
            location: "Stellenbosch",
            image: "./tours/wine/vineyards.jpg"
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
        image: "./tours/wine/constantia.jpg",
        gallery: [
          "./tours/wine/constantia-estate.jpg",
          "./tours/wine/constantia-vineyards.jpg",
          "./tours/wine/constantia-tasting.jpg"
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
            image: "./tours/wine/groot-constantia.jpg"
          },
          {
            time: "10:00",
            description: "Visit a local wildlife sanctuary",
            location: "Table Mountain",
            image: "./tours/hiking/wildlife.jpg"
          },
          {
            time: "11:00",
            description: "Cable car descent (weather permitting)",
            location: "Table Mountain",
            image: "./tours/hiking/cable-car.jpg"
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
        image: "./tours/wine/paarl.jpg",
        gallery: [
          "./tours/wine/vineyards.jpg",
          "./tours/wine/tasting.jpg"
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
            image: "./tours/wine/vineyards.jpg"
          },
          {
            time: "11:00",
            description: "Wine tasting at a Paarl winery",
            location: "Paarl",
            image: "./tours/wine/tasting.jpg"
          },
          {
            time: "12:00",
            description: "Visit another winery in Paarl",
            location: "Paarl",
            image: "./tours/wine/vineyards.jpg"
          },
          {
            time: "13:00",
            description: "Wine tasting at a Paarl winery",
            location: "Paarl",
            image: "./tours/wine/tasting.jpg"
          },
          {
            time: "14:00",
            description: "Visit a third winery in Paarl",
            location: "Paarl",
            image: "./tours/wine/vineyards.jpg"
          },
          {
            time: "15:00",
            description: "Wine tasting at a Paarl winery",
            location: "Paarl",
            image: "./tours/wine/tasting.jpg"
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
    id: "garden-route",
    name: "Garden Route Tours",
    description: "Experience the natural beauty of South Africa's Garden Route",
    image: "./tours/garden-route.jpg",
    slug: "garden-route-tours",
    tours: [
      {
        id: "garden-route-highlights",
        name: "Garden Route 3-Day Tour",
        slug: "garden-route-3-day-tour",
        description: "Experience the highlights of South Africa's famous Garden Route.",
        longDescription: "A comprehensive 3-day journey along the Garden Route, featuring pristine beaches, indigenous forests, wildlife encounters, and adventure activities.",
        image: "./tours/garden-route/overview.jpg",
        gallery: [
          "./tours/garden-route/knysna.jpg",
          "./tours/garden-route/tsitsikamma.jpg",
          "./tours/garden-route/wilderness.jpg",
          "./tours/garden-route/plettenberg.jpg"
        ],
        duration: "3 Days",
        groupSize: "2-12 people",
        startTime: "07:00",
        meetingPoint: "Your accommodation in Cape Town",
        highlights: [
          "Knysna Heads & Lagoon",
          "Tsitsikamma National Park",
          "Plettenberg Bay beaches",
          "Wilderness National Park",
          "Optional activities (bungy jumping, boat trips)",
          "Wildlife encounters"
        ],
        itinerary: [
          {
            time: "07:00",
            description: "Pick up from your accommodation",
            location: "Cape Town",
          },
          {
            time: "08:00",
            description: "Visit Knysna Heads",
            location: "Knysna Heads",
            image: "./tours/garden-route/knysna.jpg"
          },
          {
            time: "09:00",
            description: "Visit Tsitsikamma National Park",
            location: "Tsitsikamma National Park",
            image: "./tours/garden-route/tsitsikamma.jpg"
          },
          {
            time: "10:00",
            description: "Visit Plettenberg Bay",
            location: "Plettenberg Bay",
            image: "./tours/garden-route/plettenberg.jpg"
          },
          {
            time: "11:00",
            description: "Visit Wilderness National Park",
            location: "Wilderness National Park",
            image: "./tours/garden-route/wilderness.jpg"
          },
          {
            time: "12:00",
            description: "Visit a local wildlife sanctuary",
            location: "Garden Route",
            image: "./tours/garden-route/wildlife.jpg"
          },
          {
            time: "13:00",
            description: "Visit a bungy jumping site (optional)",
            location: "Garden Route",
            image: "./tours/garden-route/bungy.jpg"
          },
          {
            time: "14:00",
            description: "Visit a boat trip site (optional)",
            location: "Garden Route",
            image: "./tours/garden-route/boat.jpg"
          },
          {
            time: "15:00",
            description: "Return to Cape Town",
            location: "Cape Town"
          }
        ],
        includes: [
          "Professional guide",
          "Air-conditioned vehicle",
          "Entrance fees (national parks)",
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
        category: "garden-route-tours"
      }
    ]
  },
  {
    id: "adventure-tours",
    name: "Adventure Tours",
    description: "Thrilling adventures in and around Cape Town",
    image: "./tours/adventure.jpg",
    slug: "adventure-tours",
    tours: [
      {
        id: "shark-diving",
        name: "Shark Cage Diving",
        slug: "shark-cage-diving",
        description: "Face-to-face encounter with Great White Sharks",
        longDescription: "Experience the thrill of meeting Great White Sharks up close in their natural habitat. Professional guides ensure a safe and educational adventure.",
        image: "./tours/shark-diving.jpg",
        gallery: [
          "./tours/shark/cage.jpg",
          "./tours/shark/boat.jpg",
          "./tours/shark/briefing.jpg"
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
            image: "./tours/shark/briefing.jpg"
          },
          {
            time: "07:30",
            description: "Boat launch and journey to Shark Alley",
            location: "Gansbaai",
            image: "./tours/shark/boat.jpg"
          },
          {
            time: "08:30",
            description: "First group cage diving session",
            location: "Shark Alley",
            image: "./tours/shark/cage.jpg"
          },
          {
            time: "12:30",
            description: "Light lunch served onboard",
            location: "Gansbaai",
            image: "./tours/shark/lunch.jpg"
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
            image: "./tours/shark/certificates.jpg"
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
        image: "./tours/paragliding.jpg",
        gallery: [
          "./tours/paragliding/takeoff.jpg",
          "./tours/paragliding/landing.jpg"
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
            image: "./tours/paragliding/drive.jpg"
          },
          {
            time: "09:00",
            description: "Paragliding",
            location: "Cape Town",
            image: "./tours/paragliding/takeoff.jpg"
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
        image: "./tours/hiking.jpg",
        gallery: [
          "./tours/hiking/india-venster.jpg",
          "./tours/hiking/platteklip.jpg",
          "./tours/hiking/skeleton.jpg"
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
            image: "./tours/hiking/drive.jpg"
          },
          {
            time: "09:00",
            description: "Start of the hike",
            location: "Table Mountain",
            image: "./tours/hiking/india-venster.jpg"
          },
          {
            time: "10:00",
            description: "Visit a local wildlife sanctuary",
            location: "Table Mountain",
            image: "./tours/hiking/wildlife.jpg"
          },
          {
            time: "11:00",
            description: "Cable car descent (weather permitting)",
            location: "Table Mountain",
            image: "./tours/hiking/cable-car.jpg"
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
      }
    ]
  },
  {
    id: "wine-tours",
    name: "Wine Tours",
    description: "Discover the Cape Winelands' finest estates",
    image: "./tours/wine.jpg",
    slug: "wine-tours",
    tours: [
      {
        id: "constantia-wine",
        name: "Constantia Wine Tour",
        slug: "constantia-wine-tour",
        description: "Explore South Africa's oldest wine region in the heart of Cape Town",
        longDescription: "Visit the historic Constantia Wine Valley, home to some of South Africa's oldest and most prestigious wine estates. Experience world-class wines, stunning mountain views, and centuries of wine-making history.",
        image: "./tours/wine/constantia.jpg",
        gallery: [
          "./tours/wine/constantia-estate.jpg",
          "./tours/wine/constantia-vineyards.jpg",
          "./tours/wine/constantia-tasting.jpg"
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
            image: "./tours/wine/groot-constantia.jpg"
          },
          {
            time: "10:00",
            description: "Visit a local wildlife sanctuary",
            location: "Table Mountain",
            image: "./tours/hiking/wildlife.jpg"
          },
          {
            time: "11:00",
            description: "Cable car descent (weather permitting)",
            location: "Table Mountain",
            image: "./tours/hiking/cable-car.jpg"
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
        category: "wine-tours"
      }
    ]
  }
]; 