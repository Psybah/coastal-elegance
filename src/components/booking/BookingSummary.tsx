import React from 'react';
import { MapPin, Calendar, Clock, Users, Car, Shield, Info } from 'lucide-react';
import { format } from 'date-fns';
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { useBooking } from '../../context/BookingContext';

interface BookingSummaryProps {
  isCheckout?: boolean;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ isCheckout = false }) => {
  const { state } = useBooking();
  
  // Format time for display
  const formatTime = (date: Date) => {
    return format(date, 'h:mm a');
  };

  if (!state.selectedVehicle) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-brand-gold">
        <p className="text-center text-gray-500">Please select a vehicle to see booking summary.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-t-4 border-brand-gold ${isCheckout ? 'sticky top-24' : ''}`}>
      <h2 className="text-xl font-semibold mb-4 text-brand-brown">
        {isCheckout ? 'Booking Summary' : 'Price Summary'}
      </h2>
      
      <div className="space-y-4">
        {state.directions && (
          <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={state.pickup.coordinates || undefined}
              zoom={12}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              {state.directions && <DirectionsRenderer directions={state.directions} />}
            </GoogleMap>
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Pickup</p>
              <p className="text-sm">{state.pickup.location || 'Not specified'}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Drop-off</p>
              <p className="text-sm">{state.dropoff.location || 'Not specified'}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Date & Time</p>
              <p className="text-sm">
                {format(state.date, 'MMMM d, yyyy')} at {formatTime(state.time)}
              </p>
            </div>
          </div>
          
          {state.returnDate && state.returnTime && (
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-500">Return Date & Time</p>
                <p className="text-sm">
                  {format(state.returnDate, 'MMMM d, yyyy')} at {formatTime(state.returnTime)}
                </p>
              </div>
            </div>
          )}
          
          {state.duration > 0 && (
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs text-gray-500">Estimated Duration</p>
                <p className="text-sm">{Math.floor(state.duration / 60)}h {state.duration % 60}min</p>
              </div>
            </div>
          )}
          
          <div className="flex items-start">
            <Users className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Passengers</p>
              <p className="text-sm">{state.passengers}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Car className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Vehicle</p>
              <p className="text-sm">{state.selectedVehicle.name}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="text-gray-600">Base fare</span>
            <span className="font-medium">R{state.pricing.baseFare.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <div className="flex items-center">
              <span className="text-gray-600">Distance charge</span>
              <button className="ml-1 text-gray-400 hover:text-gray-600" aria-label="Distance charge information">
                <Info className="h-4 w-4" />
              </button>
            </div>
            <span className="font-medium">R{state.pricing.distanceCharge.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="text-gray-600">Service fee</span>
            <span className="font-medium">R{state.pricing.serviceFee.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-semibold text-brand-brown">Total</span>
            <span className="text-xl font-bold text-brand-red">R{state.pricing.total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg flex items-start">
          <Shield className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-green-800">Price Guarantee</p>
            <p className="text-xs text-green-600">The price you see is the price you pay. No hidden fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;