import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tourCategories } from '../data/tourData';

// Get specific categories we want
const popularCategories = [
  tourCategories.find(cat => cat.id === "cape-town-day-tours"),    // Cape Town Day Tours
  tourCategories.find(cat => cat.id === "cape-winelands-tours"),   // Cape Winelands Tours
  tourCategories.find(cat => cat.id === "adventure-tours")         // Adventure Tours
].filter(Boolean);

const PopularTours = () => {
  const [activeTab, setActiveTab] = useState(popularCategories[0]?.id || '');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (popularCategories.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">Popular South African Tours</h2>
        
        <div className="flex justify-start sm:justify-center mb-8 overflow-x-auto hide-scrollbar px-4 -mx-4 sm:mx-0">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 whitespace-nowrap min-w-min">
            {popularCategories.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveTab(category?.id || '')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  activeTab === category?.id ? 'bg-brand-red text-white' : 'hover:bg-gray-100 text-brand-brown'
                }`}
              >
                {category?.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Mobile scroll buttons */}
          <div className="md:hidden">
            <button
              onClick={() => scroll('left')}
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-brand-brown" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-brand-brown" />
            </button>
          </div>

          {/* Responsive container: scroll on mobile, grid on desktop */}
          <div
            ref={scrollContainerRef}
            className="md:grid md:grid-cols-3 md:gap-6 flex overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {popularCategories.find(cat => cat?.id === activeTab)?.tours.slice(0, 3).map((tour) => (
              <div
                key={tour.id}
                className="flex-none w-[300px] md:w-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 snap-start"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-brand-brown">{tour.name}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/tours/${tour.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 transition-all duration-300 w-full justify-center"
                    >
                      View Tour
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;