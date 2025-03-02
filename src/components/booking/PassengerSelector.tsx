import React from 'react';
import { Users, Plus, Minus } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

interface PassengerSelectorProps {
  error?: string;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({ error }) => {
  const { state, dispatch } = useBooking();

  const handlePassengerChange = (increment: number) => {
    const newCount = state.passengers + increment;
    if (newCount < 1 || newCount > 8) return;
    
    dispatch({ type: 'SET_PASSENGERS', count: newCount });
  };

  return (
    <div>
      <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
        Number of Passengers
      </label>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          <Users className="h-5 w-5 text-brand-gold" />
        </div>
        <button
          type="button"
          onClick={() => handlePassengerChange(-1)}
          className="p-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
          disabled={state.passengers <= 1}
          aria-label="Decrease passengers"
        >
          <Minus className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex-1 text-center py-2 border-t border-b border-gray-300">
          <span className="text-lg font-medium">{state.passengers}</span>
        </div>
        <button
          type="button"
          onClick={() => handlePassengerChange(1)}
          className="p-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
          disabled={state.passengers >= 8}
          aria-label="Increase passengers"
        >
          <Plus className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default PassengerSelector;