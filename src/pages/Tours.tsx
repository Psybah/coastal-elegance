import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tourCategories } from '../data/tourData';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TourSearch from '../components/tours/TourSearch';

const Tours: React.FC = () => {
  const [filteredTours, setFilteredTours] = useState(tourCategories.flatMap(cat => cat.tours));

  const handleSearch = (searchTerm: string) => {
    const filtered = tourCategories.flatMap(cat => cat.tours).filter(tour => 
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTours(filtered);
  };

  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-brown to-brand-red py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/tours/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Cape Town Tours
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Experience the best of Cape Town with our expertly guided tours
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <TourSearch onSearch={handleSearch} />
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {tourCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-brown mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <Link 
                to={`/tours/category/${category.slug}`}
                className="text-brand-red hover:text-brand-red/80 flex items-center"
              >
                View All
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tours.slice(0, 3).map((tour) => (
                <Link
                  key={tour.id}
                  to={`/tours/${tour.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-brown mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-brand-gold mr-2" />
                          <span className="text-sm">{tour.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-brand-gold mr-2" />
                          <span className="text-sm">{tour.groupSize}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-brand-red" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-brand-brown rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Book Your Tour?</h2>
          <p className="text-white/90 mb-6">Contact us on WhatsApp for quick and easy booking!</p>
          <a
            href="https://wa.me/27872656105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Chat on WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tours; 