import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Vehicle } from '../types';
import { vehicles } from '../data/fleetData';

// Define the booking state interface
export interface BookingState {
  pickup: {
    location: string;
    coordinates: { lat: number; lng: number } | null;
  };
  dropoff: {
    location: string;
    coordinates: { lat: number; lng: number } | null;
  };
  date: Date;
  time: Date;
  returnDate: Date | null;
  returnTime: Date | null;
  passengers: number;
  selectedVehicle: Vehicle | null;
  distance: number;
  duration: number;
  pricing: {
    baseFare: number;
    distanceCharge: number;
    serviceFee: number;
    total: number;
  };
  step: number;
  isLoading: boolean;
  error: string | null;
  directions: any;
  bookingComplete: boolean;
  bookingReference: string | null;
}

// Define action types
type BookingAction =
  | { type: 'SET_PICKUP'; location: string; coordinates: { lat: number; lng: number } | null }
  | { type: 'SET_DROPOFF'; location: string; coordinates: { lat: number; lng: number } | null }
  | { type: 'SET_DATE'; date: Date }
  | { type: 'SET_TIME'; time: Date }
  | { type: 'SET_RETURN_DATE'; date: Date | null }
  | { type: 'SET_RETURN_TIME'; time: Date | null }
  | { type: 'SET_PASSENGERS'; count: number }
  | { type: 'SET_VEHICLE'; vehicle: Vehicle }
  | { type: 'SET_DISTANCE_DURATION'; distance: number; duration: number }
  | { type: 'SET_PRICING'; pricing: BookingState['pricing'] }
  | { type: 'SET_DIRECTIONS'; directions: any }
  | { type: 'SET_STEP'; step: number }
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'SET_ERROR'; error: string | null }
  | { type: 'COMPLETE_BOOKING'; reference: string }
  | { type: 'RESET_BOOKING' };

// Initial state
const initialState: BookingState = {
  pickup: {
    location: '',
    coordinates: null,
  },
  dropoff: {
    location: '',
    coordinates: null,
  },
  date: new Date(new Date().setHours(9, 0, 0, 0) + 86400000), // Tomorrow at 9 AM
  time: new Date(new Date().setHours(9, 0, 0, 0) + 86400000), // Tomorrow at 9 AM
  returnDate: null,
  returnTime: null,
  passengers: 1,
  selectedVehicle: null,
  distance: 0,
  duration: 0,
  pricing: {
    baseFare: 0,
    distanceCharge: 0,
    serviceFee: 50,
    total: 50,
  },
  step: 1,
  isLoading: false,
  error: null,
  directions: null,
  bookingComplete: false,
  bookingReference: null,
};

// Create the reducer function
const bookingReducer = (state: BookingState, action: BookingAction): BookingState => {
  switch (action.type) {
    case 'SET_PICKUP':
      return {
        ...state,
        pickup: {
          location: action.location,
          coordinates: action.coordinates,
        },
      };
    case 'SET_DROPOFF':
      return {
        ...state,
        dropoff: {
          location: action.location,
          coordinates: action.coordinates,
        },
      };
    case 'SET_DATE':
      return {
        ...state,
        date: action.date,
      };
    case 'SET_TIME':
      return {
        ...state,
        time: action.time,
      };
    case 'SET_RETURN_DATE':
      return {
        ...state,
        returnDate: action.date,
      };
    case 'SET_RETURN_TIME':
      return {
        ...state,
        returnTime: action.time,
      };
    case 'SET_PASSENGERS':
      return {
        ...state,
        passengers: action.count,
      };
    case 'SET_VEHICLE':
      return {
        ...state,
        selectedVehicle: action.vehicle,
      };
    case 'SET_DISTANCE_DURATION':
      return {
        ...state,
        distance: action.distance,
        duration: action.duration,
      };
    case 'SET_PRICING':
      return {
        ...state,
        pricing: action.pricing,
      };
    case 'SET_DIRECTIONS':
      return {
        ...state,
        directions: action.directions,
      };
    case 'SET_STEP':
      return {
        ...state,
        step: action.step,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'COMPLETE_BOOKING':
      return {
        ...state,
        bookingComplete: true,
        bookingReference: action.reference,
        step: 3,
      };
    case 'RESET_BOOKING':
      return {
        ...initialState,
        // Keep the current date/time logic
        date: new Date(new Date().setHours(9, 0, 0, 0) + 86400000),
        time: new Date(new Date().setHours(9, 0, 0, 0) + 86400000),
      };
    default:
      return state;
  }
};

// Create the context
interface BookingContextType {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
  calculateRoute: () => Promise<void>;
  validateStep: (step: number) => { isValid: boolean; errors: Record<string, string> };
  calculatePricing: () => void;
  completeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Create the provider component
interface BookingProviderProps {
  children: ReactNode;
}

// Google Maps API key - in production, this should be in an environment variable
const GOOGLE_MAPS_API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Google Maps demo key

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Calculate route between pickup and dropoff
  const calculateRoute = async () => {
    if (!state.pickup.coordinates || !state.dropoff.coordinates) {
      return;
    }

    dispatch({ type: 'SET_LOADING', isLoading: true });

    try {
      // Check if Google Maps API is loaded
      if (typeof google === 'undefined') {
        throw new Error('Google Maps API not loaded');
      }

      const directionsService = new google.maps.DirectionsService();
      
      const result = await new Promise<google.maps.DirectionsResult>((resolve, reject) => {
        directionsService.route(
          {
            origin: state.pickup.coordinates as google.maps.LatLngLiteral,
            destination: state.dropoff.coordinates as google.maps.LatLngLiteral,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              resolve(result);
            } else {
              reject(new Error(`Directions request failed: ${status}`));
            }
          }
        );
      });

      dispatch({ type: 'SET_DIRECTIONS', directions: result });
      
      // Calculate distance and duration
      const route = result.routes[0];
      let totalDistance = 0;
      let totalDuration = 0;
      
      route.legs.forEach((leg) => {
        totalDistance += leg.distance.value;
        totalDuration += leg.duration.value;
      });
      
      // Convert meters to kilometers
      const distanceInKm = totalDistance / 1000;
      // Convert seconds to minutes
      const durationInMinutes = Math.ceil(totalDuration / 60);
      
      dispatch({ 
        type: 'SET_DISTANCE_DURATION', 
        distance: distanceInKm, 
        duration: durationInMinutes 
      });

      // Calculate pricing
      calculatePricing();
      
      dispatch({ type: 'SET_LOADING', isLoading: false });
    } catch (error) {
      console.error('Error calculating route:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        error: 'Unable to calculate route. Please try again.' 
      });
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }
  };

  // Calculate pricing based on distance and selected vehicle
  const calculatePricing = () => {
    if (!state.selectedVehicle) {
      // If no vehicle is selected, try to select one based on passengers
      const suitableVehicle = vehicles.find(v => v.passengers >= state.passengers && v.available);
      
      if (suitableVehicle) {
        dispatch({ type: 'SET_VEHICLE', vehicle: suitableVehicle });
      } else {
        dispatch({ 
          type: 'SET_ERROR', 
          error: 'No suitable vehicle available for the number of passengers.' 
        });
        return;
      }
    }

    const vehicle = state.selectedVehicle || vehicles.find(v => v.passengers >= state.passengers && v.available)!;
    const baseFare = vehicle.pricePerDay;
    const distanceCharge = state.distance * 2; // Simplified calculation
    const serviceFee = 50;
    const total = baseFare + distanceCharge + serviceFee;
    
    dispatch({
      type: 'SET_PRICING',
      pricing: {
        baseFare,
        distanceCharge,
        serviceFee,
        total
      }
    });
  };

  // Validate the current step
  const validateStep = (step: number) => {
    const errors: Record<string, string> = {};
    let isValid = true;

    if (step === 1) {
      // Validate pickup and dropoff locations
      if (!state.pickup.location) {
        errors.pickup = 'Pickup location is required';
        isValid = false;
      }
      
      if (!state.dropoff.location) {
        errors.dropoff = 'Drop-off location is required';
        isValid = false;
      }
      
      if (!state.pickup.coordinates || !state.dropoff.coordinates) {
        errors.locations = 'Valid locations are required';
        isValid = false;
      }

      // Validate date and time
      const currentDate = new Date();
      if (state.date < currentDate) {
        errors.date = 'Pickup date must be in the future';
        isValid = false;
      }

      // Validate return date if it exists
      if (state.returnDate) {
        if (state.returnDate < state.date) {
          errors.returnDate = 'Return date must be after pickup date';
          isValid = false;
        }
      }

      // Validate passengers
      if (state.passengers < 1) {
        errors.passengers = 'At least one passenger is required';
        isValid = false;
      }

      // Validate vehicle selection
      if (!state.selectedVehicle) {
        errors.vehicle = 'Please select a vehicle';
        isValid = false;
      } else if (state.selectedVehicle.passengers < state.passengers) {
        errors.vehicle = 'Selected vehicle cannot accommodate all passengers';
        isValid = false;
      }
    }

    return { isValid, errors };
  };

  // Complete booking
  const completeBooking = () => {
    // Generate a random booking reference
    const reference = `CE-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    dispatch({ type: 'COMPLETE_BOOKING', reference });
  };

  return (
    <BookingContext.Provider 
      value={{ 
        state, 
        dispatch, 
        calculateRoute, 
        validateStep, 
        calculatePricing,
        completeBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the booking context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};