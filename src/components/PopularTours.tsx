import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = {
  coastal: [
    {
      name: "Cape Peninsula Tour",
      time: "8 hours",
      price: "R1,999",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      description: "Visit Cape Point, Chapman's Peak & Boulders Beach"
    },
    {
      name: "Garden Route Explorer",
      time: "3 days",
      price: "R7,499",
      image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3680",
      description: "Explore Knysna, Plettenberg Bay & Wilderness"
    },
    {
      name: "Hermanus Whale Route",
      time: "6 hours",
      price: "R1,799",
      image: "https://images.unsplash.com/photo-1626089665015-0c8339102d19",
      description: "Whale watching & coastal scenery"
    },
    {
      name: "Wild Coast Adventure",
      time: "4 days",
      price: "R8,999",
      image: "https://images.unsplash.com/photo-1589813516780-077de3a0f93a",
      description: "Coffee Bay, Hole in the Wall & Port St Johns"
    },
    {
      name: "Durban Golden Mile",
      time: "4 hours",
      price: "R1,299",
      image: "https://images.unsplash.com/photo-1589064680214-9e71f83c1325",
      description: "Beach promenade, Indian Quarter & Marine World"
    },
    {
      name: "West Coast Flowers",
      time: "8 hours",
      price: "R1,899",
      image: "https://images.unsplash.com/photo-1535950790245-e0788a3fd242",
      description: "Seasonal wildflower viewing & coastal villages"
    },
    {
      name: "Langebaan Lagoon",
      time: "6 hours",
      price: "R1,599",
      image: "https://images.unsplash.com/photo-1596398267243-3694ed95d109",
      description: "West Coast National Park & water sports"
    },
    {
      name: "Tsitsikamma Adventure",
      time: "2 days",
      price: "R4,999",
      image: "https://images.unsplash.com/photo-1592395688096-161d0d9bb2e5",
      description: "Storms River, canopy tours & hiking"
    },
    {
      name: "Mossel Bay Discovery",
      time: "8 hours",
      price: "R1,899",
      image: "https://images.unsplash.com/photo-1596397249129-c7a8f8718873",
      description: "Point of Human Origins & maritime history"
    },
    {
      name: "Port Elizabeth Beaches",
      time: "6 hours",
      price: "R1,499",
      image: "https://images.unsplash.com/photo-1596398266039-6195d5711bd1",
      description: "Algoa Bay, penguin colony & marine life"
    }
  ],
  city: [
    {
      name: "Johannesburg Complete",
      time: "8 hours",
      price: "R1,899",
      image: "https://images.unsplash.com/photo-1577086664693-894d8405334a",
      description: "Constitution Hill, Apartheid Museum & Maboneng"
    },
    {
      name: "Pretoria Heritage",
      time: "6 hours",
      price: "R1,499",
      image: "https://images.unsplash.com/photo-1634482899276-6b7048028345",
      description: "Union Buildings & Voortrekker Monument"
    },
    {
      name: "Soweto Cultural Tour",
      time: "7 hours",
      price: "R1,699",
      image: "https://images.unsplash.com/photo-1540730930991-a9286a5f5020",
      description: "Mandela House & Orlando Towers"
    },
    {
      name: "Sandton Business District",
      time: "4 hours",
      price: "R1,299",
      image: "https://images.unsplash.com/photo-1584974292709-5c2f0619971b",
      description: "Financial hub, shopping & dining"
    },
    {
      name: "Cradle of Humankind",
      time: "8 hours",
      price: "R1,999",
      image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2",
      description: "Sterkfontein Caves & Maropeng"
    },
    {
      name: "Bloemfontein Heritage",
      time: "6 hours",
      price: "R1,599",
      image: "https://images.unsplash.com/photo-1589769105893-3cfe4c0c8851",
      description: "Naval Hill, museums & gardens"
    },
    {
      name: "Kimberley Diamond Route",
      time: "8 hours",
      price: "R1,899",
      image: "https://images.unsplash.com/photo-1589769105893-3cfe4c0c8851",
      description: "Big Hole & mining history"
    },
    {
      name: "Durban City Highlights",
      time: "6 hours",
      price: "R1,599",
      image: "https://images.unsplash.com/photo-1589064680214-9e71f83c1325",
      description: "Victoria Street Market & uShaka Marine"
    },
    {
      name: "Port Elizabeth Heritage",
      time: "5 hours",
      price: "R1,399",
      image: "https://images.unsplash.com/photo-1596398266039-6195d5711bd1",
      description: "Route 67 & historic architecture"
    },
    {
      name: "East London Coast",
      time: "6 hours",
      price: "R1,499",
      image: "https://images.unsplash.com/photo-1596398267243-3694ed95d109",
      description: "City beaches & esplanade"
    }
  ],
  wine: [
    {
      name: "Stellenbosch Classic",
      time: "8 hours",
      price: "R1,899",
      image: "https://images.unsplash.com/photo-1533237264985-ee62f6d342bb",
      description: "Premium wine tasting & cellar tours"
    },
    {
      name: "Franschhoek Wine Tram",
      time: "9 hours",
      price: "R2,099",
      image: "https://images.unsplash.com/photo-1573062337052-54ad1468bb5e",
      description: "Hop-on-hop-off wine experience"
    },
    {
      name: "Constantia Heritage",
      time: "6 hours",
      price: "R1,599",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
      description: "Historic wine estates & tastings"
    },
    {
      name: "Paarl Wine Valley",
      time: "7 hours",
      price: "R1,799",
      image: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6",
      description: "KWV Cellars & Spice Route"
    },
    {
      name: "Robertson Wine Route",
      time: "9 hours",
      price: "R2,199",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
      description: "River valley wines & olive estates"
    },
    {
      name: "Hemel-en-Aarde Valley",
      time: "8 hours",
      price: "R1,999",
      image: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6",
      description: "Boutique wineries & Pinot Noir"
    },
    {
      name: "Wellington Wine Walk",
      time: "7 hours",
      price: "R1,899",
      image: "https://images.unsplash.com/photo-1533237264985-ee62f6d342bb",
      description: "Walking wine tour & tastings"
    },
    {
      name: "Durbanville Wine Valley",
      time: "6 hours",
      price: "R1,699",
      image: "https://images.unsplash.com/photo-1573062337052-54ad1468bb5e",
      description: "Cool climate wines & views"
    },
    {
      name: "Elgin Valley Cool Wine",
      time: "8 hours",
      price: "R1,999",
      image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
      description: "Cool climate specialties"
    },
    {
      name: "Swartland Wine Route",
      time: "9 hours",
      price: "R2,099",
      image: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6",
      description: "Boutique wines & olive farms"
    }
  ]
};

const PopularTours = () => {
  const [activeTab, setActiveTab] = useState('coastal');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Popular South African Tours</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('coastal')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'coastal' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              Coastal Tours
            </button>
            <button
              onClick={() => setActiveTab('city')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'city' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              City Tours
            </button>
            <button
              onClick={() => setActiveTab('wine')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'wine' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              Wine Tours
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto py-10 hide-scrollbar flex gap-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {destinations[activeTab].map((tour, index) => (
              <div
                key={index}
                className="min-w-[500px] sm:min-w-[350px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 snap-start"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{tour.time}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Multiple Stops</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                    <Link
                      to="/booking"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;