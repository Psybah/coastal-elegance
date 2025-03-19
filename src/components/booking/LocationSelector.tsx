import React, { useCallback } from 'react';
import { MapPin } from 'lucide-react';
import Autocomplete from 'react-google-autocomplete';
import { useBooking } from '../../context/BookingContext';

// Google Maps API key - in production, this should be in an environment variable
const GOOGLE_MAPS_API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Google Maps demo key

interface LocationSelectorProps {
  type: 'pickup' | 'dropoff';
  error?: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ type, error }) => {
  const { state, dispatch } = useBooking();
  
  const handlePlaceSelected = useCallback((place: any) => {
    if (place.geometry) {
      const coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      
      if (type === 'pickup') {
        dispatch({ 
          type: 'SET_PICKUP', 
          location: place.formatted_address, 
          coordinates 
        });
      } else {
        dispatch({ 
          type: 'SET_DROPOFF', 
          location: place.formatted_address, 
          coordinates 
        });
      }
    }
  }, [dispatch, type]);

  const location = type === 'pickup' ? state.pickup.location : state.dropoff.location;
  const label = type === 'pickup' ? 'Pickup Location' : 'Drop-off Location';
  const placeholder = type === 'pickup' ? 'Enter pickup address' : 'Enter drop-off address';

  return (
    <div>
      <label htmlFor={type} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
        <Autocomplete
          apiKey={GOOGLE_MAPS_API_KEY}
          onPlaceSelected={handlePlaceSelected}
          options={{
            types: ['address'],
            componentRestrictions: { country: 'za' }
          }}
          defaultValue={location}
          className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={placeholder}
          id={type}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default LocationSelector;