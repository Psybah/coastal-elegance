import React, { useState, useEffect } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BookingProvider, useBooking } from '../context/BookingContext';
import BookingSteps from '../components/booking/BookingSteps';
import LocationSelector from '../components/booking/LocationSelector';
import DateTimePicker from '../components/booking/DateTimePicker';
import PassengerSelector from '../components/booking/PassengerSelector';
import VehicleSelector from '../components/booking/VehicleSelector';
import BookingSummary from '../components/booking/BookingSummary';
import PaymentForm from '../components/booking/PaymentForm';
import BookingConfirmation from '../components/booking/BookingConfirmation';
import ErrorBoundary from '../components/booking/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';

// Google Maps API key - in production, this should be in an environment variable
const GOOGLE_MAPS_API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Google Maps demo key

// Stripe promise - in production, this should be in an environment variable
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); // Stripe test key

// BookingForm component that uses the booking context
const BookingForm: React.FC = () => {
  const { state, dispatch, calculateRoute, validateStep, completeBooking } = useBooking();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  // Handle form submission for step 1
  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid, errors } = validateStep(1);
    setFormErrors(errors);
    
    if (isValid) {
      calculateRoute().then(() => {
        dispatch({ type: 'SET_STEP', step: 2 });
      });
    }
  };

  // Handle payment completion
  const handlePaymentComplete = (success: boolean) => {
    if (success) {
      completeBooking();
    }
  };

  // Handle booking another trip
  const handleBookAnother = () => {
    dispatch({ type: 'RESET_BOOKING' });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-brown mb-4">Book Your Luxury Transfer</h1>
          <p className="text-lg text-gray-600">Experience seamless travel with our premium shuttle service</p>
        </div>

        <BookingSteps />

        {/* Step 1: Trip Details */}
        {state.step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trip Details Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmitStep1} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-red">
                <h2 className="text-2xl font-semibold mb-6 text-brand-brown">Trip Details</h2>
                
                <div className="space-y-6">
                  {/* Pickup and Dropoff Locations */}
                  <LocationSelector type="pickup" error={formErrors.pickup || formErrors.locations} />
                  <LocationSelector type="dropoff" error={formErrors.dropoff || formErrors.locations} />
                  
                  {/* Date and Time */}
                  <DateTimePicker type="pickup" error={formErrors.date} />
                  
                  {/* Return Date and Time (Optional) */}
                  <div className="flex items-center mb-4">
                    <input 
                      type="checkbox" 
                      id="round-trip" 
                      className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                      onChange={(e) => {
                        if (e.target.checked) {
                          const returnDate = new Date(state.date);
                          returnDate.setDate(returnDate.getDate() + 1);
                          dispatch({ type: 'SET_RETURN_DATE', date: returnDate });
                          dispatch({ type: 'SET_RETURN_TIME', time: state.time });
                        } else {
                          dispatch({ type: 'SET_RETURN_DATE', date: null });
                          dispatch({ type: 'SET_RETURN_TIME', time: null });
                        }
                      }}
                    />
                    <label htmlFor="round-trip" className="ml-2 block text-sm text-gray-700">
                      Round trip (return journey)
                    </label>
                  </div>
                  
                  {state.returnDate && (
                    <DateTimePicker type="return" error={formErrors.returnDate} />
                  )}
                  
                  {/* Passengers */}
                  <PassengerSelector error={formErrors.passengers} />
                  
                  {/* Vehicle Selection */}
                  <VehicleSelector error={formErrors.vehicle} />
                </div>
                
                {state.error && (
                  <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{state.error}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg transition duration-200 bg-brand-red text-white hover:bg-brand-red/90"
                    disabled={state.isLoading}
                  >
                    {state.isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Continue to Payment'
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Price Summary */}
            <div className="lg:col-span-1">
              <BookingSummary />
            </div>
          </div>
        )}
        
        {/* Step 2: Payment */}
        {state.step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-red">
                <h2 className="text-2xl font-semibold mb-6 text-brand-brown">Payment Details</h2>
                
                <Elements stripe={stripePromise}>
                  <PaymentForm onPaymentComplete={handlePaymentComplete} />
                </Elements>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <BookingSummary isCheckout={true} />
              
              <button
                type="button"
                onClick={() => dispatch({ type: 'SET_STEP', step: 1 })}
                className="mt-6 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                Edit Booking
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Confirmation */}
        {state.step === 3 && (
          <BookingConfirmation onBookAnother={handleBookAnother} />
        )}
      </div>
    </div>
  );
};

// Main Booking component that wraps everything with providers
const Booking: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="large" color="text-brand-red" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <BookingProvider>
        <BookingForm />
      </BookingProvider>
    </ErrorBoundary>
  );
};

export default Booking;