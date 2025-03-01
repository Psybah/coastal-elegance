import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Users, Battery, Leaf, Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { vehicles, environmentalStats } from '../data/fleetData';
import { Vehicle, FilterOptions } from '../types';
import Breadcrumb from '../components/Breadcrumb';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Fleet: React.FC = () => {
  // State management
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    category: null,
    energySource: null
  });
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Get unique categories and energy sources for filters
  const categories = Array.from(new Set(vehicles.map(vehicle => vehicle.category)));
  const energySources = Array.from(new Set(vehicles.map(vehicle => vehicle.energySource)));

  // Load and filter vehicles
  useEffect(() => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        const filtered = vehicles.filter(vehicle => {
          // Apply category filter
          if (filters.category && vehicle.category !== filters.category) return false;
          
          // Apply energy source filter
          if (filters.energySource && vehicle.energySource !== filters.energySource) return false;
          
          return true;
        });
        
        setFilteredVehicles(filtered);
        setIsLoading(false);
      }, 600);
    } catch (err) {
      setError('Failed to load fleet data. Please try again.');
      setIsLoading(false);
    }
  }, [filters]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: null,
      energySource: null
    });
  };

  // Toggle vehicle details
  const toggleVehicleDetails = (vehicle: Vehicle) => {
    if (selectedVehicle && selectedVehicle.id === vehicle.id) {
      setSelectedVehicle(null);
    } else {
      setSelectedVehicle(vehicle);
    }
  };

  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-brown to-brand-red py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Eco-Friendly Fleet
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover our premium selection of sustainable luxury vehicles, designed to provide exceptional comfort with minimal environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Our Fleet' }]} />

      {/* Environmental Impact Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-brand-brown">Our Environmental Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-t-4 border-green-500 shadow-md">
                <h3 className="text-lg font-semibold text-brand-brown mb-2">{stat.title}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-green-600 mr-2">{stat.value}</span>
                  <span className="text-gray-500">{stat.unit}</span>
                </div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Fleet Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-brand-brown mb-4 md:mb-0">Our Premium Vehicles</h2>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-brand-brown rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Filter className="h-5 w-5 mr-2" />
            Filter Vehicles
            {showFilters ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Category</label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => setFilters({...filters, category: e.target.value || null})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Energy Source</label>
                <select
                  value={filters.energySource || ''}
                  onChange={(e) => setFilters({...filters, energySource: e.target.value || null})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                >
                  <option value="">All Energy Sources</option>
                  {energySources.map((source, index) => (
                    <option key={index} value={source}>{source}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading and Error States */}
        {isLoading && <LoadingSpinner size="large" color="text-brand-red" />}
        
        {error && <ErrorMessage message={error} onRetry={() => {
          setError(null);
          setIsLoading(true);
        }} />}

        {/* No Results */}
        {!isLoading && !error && filteredVehicles.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-500 mb-6">
              We couldn't find any vehicles matching your current filters.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Vehicle Grid */}
        {!isLoading && !error && filteredVehicles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  !vehicle.available ? 'opacity-75' : ''
                }`}
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${vehicle.image})` }}
                >
                  {!vehicle.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Currently Unavailable</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                      {vehicle.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      vehicle.energySource === '100% Electric' 
                        ? 'bg-green-500 text-white' 
                        : vehicle.energySource === 'Hydrogen Fuel Cell'
                        ? 'bg-blue-500 text-white'
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {vehicle.energySource}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-brown mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-brand-gold mr-2" />
                      <span>{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center">
                      <Battery className="h-5 w-5 text-brand-gold mr-2" />
                      <span>Range: {vehicle.range}</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="h-5 w-5 text-green-500 mr-2" />
                      <span>{vehicle.emissions}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-brand-gold mr-2" />
                      <span>From R{vehicle.pricePerDay}/day</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleVehicleDetails(vehicle)}
                      className="text-brand-brown hover:text-brand-red transition-colors"
                    >
                      {selectedVehicle?.id === vehicle.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    {vehicle.available && (
                      <Link
                        to="/booking"
                        className="inline-flex items-center px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 transition-all duration-300"
                      >
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  
                  {/* Expanded Details */}
                  {selectedVehicle?.id === vehicle.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                      <h4 className="font-semibold text-brand-brown mb-3">Vehicle Features</h4>
                      <ul className="grid grid-cols-1 gap-2 mb-4">
                        {vehicle.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Environmental Impact</h4>
                        <p className="text-green-600 mb-1">CO₂ Saved: {vehicle.co2Saved}</p>
                        <p className="text-green-600">Efficiency Rating: {vehicle.efficiency}</p>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Daily Rate</p>
                          <p className="text-xl font-bold text-brand-red">R{vehicle.pricePerDay}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Weekly Rate</p>
                          <p className="text-xl font-bold text-brand-red">R{vehicle.pricePerWeek}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-brand-brown py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Sustainable Luxury?</h2>
                <p className="text-white/80 mb-6 md:mb-0">
                  Book your premium eco-friendly transportation today and enjoy the perfect blend of comfort and environmental responsibility.
                </p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <Link
                  to="/booking"
                  className="inline-flex items-center px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Vehicle
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;