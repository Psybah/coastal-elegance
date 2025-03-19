import React from 'react';
import { format, addMinutes } from 'date-fns';
import { CheckCircle } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

interface BookingConfirmationProps {
  onBookAnother: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ onBookAnother }) => {
  const { state } = useBooking();

  // Format time for display
  const formatTime = (date: Date) => {
    return format(date, 'h:mm a');
  };

  if (!state.bookingComplete || !state.selectedVehicle) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold text-brand-brown">Booking Confirmed!</h2>
          <p className="text-gray-600 mt-2">Your booking has been successfully confirmed.</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-brand-brown mb-4">Booking Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Booking Reference</p>
              <p className="font-medium">{state.bookingReference}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">
                {format(state.date, 'MMMM d, yyyy')} at {formatTime(state.time)}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Pickup Location</p>
              <p className="font-medium">{state.pickup.location}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Drop-off Location</p>
              <p className="font-medium">{state.dropoff.location}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Vehicle</p>
              <p className="font-medium">{state.selectedVehicle.name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Passengers</p>
              <p className="font-medium">{state.passengers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">Driver Information</h3>
          <p className="text-blue-700 text-sm">
            Your driver will arrive between {formatTime(addMinutes(state.time, -15))} and {formatTime(state.time)}.
          </p>
          <p className="text-blue-700 text-sm mt-2">
            You will receive the driver's details via SMS 30 minutes before pickup.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-brand-brown mb-4">Payment Summary</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Base fare</span>
              <span>R{state.pricing.baseFare.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Distance charge</span>
              <span>R{state.pricing.distanceCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service fee</span>
              <span>R{state.pricing.serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="font-semibold">Total paid</span>
              <span className="font-bold text-brand-red">R{state.pricing.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">A confirmation email has been sent to your email address.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 transition duration-200"
            >
              View Booking Details
            </button>
            <button
              type="button"
              onClick={onBookAnother}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
            >
              Book Another Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;