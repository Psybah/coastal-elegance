import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { tourCategories } from '../../data/tourData';
import { useNavigate } from 'react-router-dom';

interface TourSearchProps {
  onSearch: (searchTerm: string) => void;
}

const TourSearch: React.FC<TourSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length >= 2) {
      onSearch(value);
    } else if (value.length === 0) {
      onSearch('');
    }
  };

  const handleCategoryClick = (categorySlug: string) => {
    navigate(`/tours/category/${categorySlug}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative mb-6">
        <input
          type="text"
          placeholder="Search tours by name or description..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm md:text-base"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </form>
      
      <div className="flex overflow-x-auto hide-scrollbar py-2 -mx-4 px-4 space-x-2 md:flex-wrap md:space-x-2 md:gap-2">
        {tourCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className="flex-none px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm whitespace-nowrap bg-gray-100 hover:bg-brand-red hover:text-white transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TourSearch; 