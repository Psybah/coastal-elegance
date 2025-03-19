import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { tourCategories } from '../../data/tourData';

interface TourSearchProps {
  onSearch: (searchTerm: string) => void;
}

const TourSearch: React.FC<TourSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search tours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </form>
      
      {/* Quick filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tourCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSearch(category.name)}
            className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-brand-red hover:text-white transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TourSearch; 