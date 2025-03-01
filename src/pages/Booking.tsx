import React, { useState, useEffect, useCallback } from 'react';
import { 
  Calendar, Clock, MapPin, Users, Briefcase, 
  CreditCard, Shield, Car, Truck, Bus, 
  Plus, Minus, Info, CheckCircle, AlertTriangle
} from 'lucide-react';
import { GoogleMap, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from 'react-google-autocomplete';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, addMinutes, setHours, setMinutes } from 'date-fns';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/stripe-js';

// Mock data for vehicles
const vehicles = [
  {
    id: 'luxury-sedan',
    name: 'Luxury Sedan',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
    maxPassengers: 3,
    luggageCapacity: '2 large, 2 small',
    pricePerKm: 12,
    baseFare: 250,
    description: 'Premium electric sedan with cutting-edge technology and zero emissions.'
  },
  {
    id: 'executive-suv',
    name: 'Executive SUV',
    image: 'https://images.unsplash.com/photo-1655410295367-2fded0b1f2d7',
    maxPassengers: 6,
    luggageCapacity: '4 large, 3 small',
    pricePerKm: 15,
    baseFare: 350,
    description: 'Spacious luxury SUV with premium amenities and ample luggage space.'
  },
  {
    id: 'shuttle-van',
    name: 'Shuttle Van',
    image: 'https://images.unsplash.com/photo-1617469767053-8f35aaa39fce',
    maxPassengers: 8,
    luggageCapacity: '6 large, 4 small',
    pricePerKm: 18,
    baseFare: 450,
    description: 'All-electric premium van for group travel with zero emissions.'
  }
];

// Google Maps API key - in production, this should be in an environment variable
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Stripe promise - in production, this should be in an environment variable
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Payment form component
const PaymentForm = ({ amount, onPaymentComplete }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    // In a real application, you would create a payment intent on your server
    // and confirm the payment here
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete(true);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center ${
              paymentMethod === 'card' 
                ? 'border-brand-red bg-brand-red/5' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <CreditCard className={`h-5 w-5 mr-2 ${paymentMethod === 'card' ? 'text-brand-red' : 'text-gray-500'}`} />
            <span className={paymentMethod === 'card' ? 'text-brand-red font-medium' : 'text-gray-700'}>Credit Card</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center ${
              paymentMethod === 'paypal' 
                ? 'border-brand-red bg-brand-red/5' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className={`mr-2 font-bold ${paymentMethod === 'paypal' ? 'text-brand-red' : 'text-gray-500'}`}>P</span>
            <span className={paymentMethod === 'paypal' ? 'text-brand-red font-medium' : 'text-gray-700'}>PayPal</span>
          </button>
        </div>

        {paymentMethod === 'card' && (
          <div className="border border-gray-300 p-4 rounded-lg">
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="border border-gray-300 p-4 rounded-lg text-center">
            <p className="text-gray-600">You will be redirected to PayPal to complete your payment.</p>
          </div>
        )}

        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="corporate-billing" 
            className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
          />
          <label htmlFor="corporate-billing" className="ml-2 block text-sm text-gray-700">
            Bill to corporate account
          </label>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm text-gray-600">Secure payment processing</span>
          </div>
          <div className="flex space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <p className="ml-3 text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-brand-red text-white py-3 px-6 rounded-lg hover:bg-brand-red/90 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {processing ? 'Processing...' : `Pay R${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

const Booking = () => {
  // API loader for Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  // State for form data
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: addDays(new Date(), 1),
    time: setHours(setMinutes(new Date(), 0), 9),
    passengers: 1,
    selectedVehicle: vehicles[0],
  });

  // State for directions and pricing
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pricing, setPricing] = useState({
    baseFare: vehicles[0].baseFare,
    distanceCharge: 0,
    serviceFee: 50,
    total: vehicles[0].baseFare + 50
  });

  // State for booking process
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Calculate route when pickup and dropoff locations are set
  useEffect(() => {
    if (isLoaded && pickupCoords && dropoffCoords) {
      const directionsService = new google.maps.DirectionsService();
      
      directionsService.route(
        {
          origin: pickupCoords,
          destination: dropoffCoords,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
            
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
            setDistance(distanceInKm);
            
            // Convert seconds to minutes
            const durationInMinutes = Math.ceil(totalDuration / 60);
            setDuration(durationInMinutes);
            
            // Update pricing
            const distanceCharge = distanceInKm * formData.selectedVehicle.pricePerKm;
            const baseFare = formData.selectedVehicle.baseFare;
            const serviceFee = 50;
            const total = baseFare + distanceCharge + serviceFee;
            
            setPricing({
              baseFare,
              distanceCharge,
              serviceFee,
              total
            });
          }
        }
      );
    }
  }, [isLoaded, pickupCoords, dropoffCoords, formData.selectedVehicle]);

  // Handle pickup location selection
  const handlePickupSelect = useCallback((place) => {
    if (place.geometry) {
      setPickupCoords({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      setFormData(prev => ({
        ...prev,
        pickup: place.formatted_address
      }));
    }
  }, []);

  // Handle dropoff location selection
  const handleDropoffSelect = useCallback((place) => {
    if (place.geometry) {
      setDropoffCoords({
        lat: place.geometry.location.lng(),
        lng: place.geometry.location.lng()
      });
      setFormData(prev => ({
        ...prev,
        dropoff: place.formatted_address
      }));
    }
  }, []);

  // Handle passenger count change
  const handlePassengerChange = (increment) => {
    setFormData(prev => {
      const newCount = prev.passengers + increment;
      if (newCount < 1 || newCount > 8) return prev;
      
      // If new passenger count exceeds vehicle capacity, select appropriate vehicle
      let selectedVehicle = prev.selectedVehicle;
      if (newCount > prev.selectedVehicle.maxPassengers) {
        selectedVehicle = vehicles.find(v => v.maxPassengers >= newCount) || vehicles[vehicles.length - 1];
      }
      
      return {
        ...prev,
        passengers: newCount,
        selectedVehicle
      };
    });
  };

  // Handle vehicle selection
  const handleVehicleSelect = (vehicle) => {
    if (vehicle.maxPassengers >= formData.passengers) {
      setFormData(prev => ({
        ...prev,
        selectedVehicle: vehicle
      }));
    } else {
      alert(`This vehicle can only accommodate ${vehicle.maxPassengers} passengers.`);
    }
  };

  // Validate form before proceeding to payment
  const validateForm = () => {
    const errors = {};
    
    if (!formData.pickup) errors.pickup = 'Pickup location is required';
    if (!formData.dropoff) errors.dropoff = 'Drop-off location is required';
    if (!pickupCoords || !dropoffCoords) errors.locations = 'Valid locations are required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setCurrentStep(2);
    }
  };

  // Handle payment completion
  const handlePaymentComplete = (success) => {
    if (success) {
      setBookingComplete(true);
      setCurrentStep(3);
    }
  };

  // Generate time slots in 15-minute intervals
  const generateTimeOptions = () => {
    const options = [];
    const startHour = 6; // 6 AM
    const endHour = 22; // 10 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = setHours(setMinutes(new Date(), minute), hour);
        options.push(time);
      }
    }
    
    return options;
  };

  // Format time for display
  const formatTime = (date) => {
    return format(date, 'h:mm a');
  };

  // Check if form is complete to enable booking button
  const isFormComplete = () => {
    return formData.pickup && 
           formData.dropoff && 
           pickupCoords && 
           dropoffCoords && 
           formData.date && 
           formData.time && 
           formData.passengers > 0 && 
           formData.selectedVehicle;
  };

  if (!isLoaded) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-brown mb-4">Book Your Luxury Transfer</h1>
          <p className="text-lg text-gray-600">Experience seamless travel with our premium shuttle service</p>
        </div>

        {/* Booking Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-brand-red' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <div className={`h-1 w-16 ${currentStep >= 3 ? 'bg-brand-red' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 3 ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="text-center w-24">Trip Details</div>
            <div className="text-center w-24">Payment</div>
            <div className="text-center w-24">Confirmation</div>
          </div>
        </div>

        {/* Step 1: Trip Details */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trip Details Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-red">
                <h2 className="text-2xl font-semibold mb-6 text-brand-brown">Trip Details</h2>
                
                <div className="space-y-6">
                  {/* Pickup Location */}
                  <div>
                    <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                      <Autocomplete
                        apiKey={GOOGLE_MAPS_API_KEY}
                        onPlaceSelected={handlePickupSelect}
                        options={{
                          types: ['address'],
                          componentRestrictions: { country: 'za' }
                        }}
                        defaultValue={formData.pickup}
                        className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold ${
                          formErrors.pickup || formErrors.locations ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter pickup address"
                      />
                    </div>
                    {formErrors.pickup && <p className="mt-1 text-sm text-red-600">{formErrors.pickup}</p>}
                  </div>
                  
                  {/* Dropoff Location */}
                  <div>
                    <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                      <Autocomplete
                        apiKey={GOOGLE_MAPS_API_KEY}
                        onPlaceSelected={handleDropoffSelect}
                        options={{
                          types: ['address'],
                          componentRestrictions: { country: 'za' }
                        }}
                        defaultValue={formData.dropoff}
                        className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-brand-gold focus:border-brand-gold ${
                          formErrors.dropoff || formErrors.locations ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter drop-off address"
                      />
                    </div>
                    {formErrors.dropoff && <p className="mt-1 text-sm text-red-600">{formErrors.dropoff}</p>}
                  </div>
                  
                  {formErrors.locations && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                      <div className="flex">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <p className="ml-3 text-sm text-red-700">{formErrors.locations}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                        <DatePicker
                          selected={formData.date}
                          onChange={(date) => setFormData({...formData, date})}
                          minDate={new Date()}
                          maxDate={addDays(new Date(), 30)}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                          dateFormat="MMMM d, yyyy"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                        <DatePicker
                          selected={formData.time}
                          onChange={(time) => setFormData({...formData, time})}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          includeTimes={generateTimeOptions()}
                          dateFormat="h:mm aa"
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Passengers */}
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Number of Passengers</label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handlePassengerChange(-1)}
                        className="p-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                        disabled={formData.passengers <= 1}
                      >
                        <Minus className="h-5 w-5 text-gray-500" />
                      </button>
                      <div className="flex-1 text-center py-2 border-t border-b border-gray-300">
                        <span className="text-lg font-medium">{formData.passengers}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePassengerChange(1)}
                        className="p-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                        disabled={formData.passengers >= 8}
                      >
                        <Plus className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Vehicle Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Vehicle</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {vehicles.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          onClick={() => handleVehicleSelect(vehicle)}
                          className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                            formData.selectedVehicle.id === vehicle.id 
                              ? 'border-brand-red ring-2 ring-brand-red ring-opacity-50' 
                              : 'border-gray-200'
                          } ${
                            vehicle.maxPassengers < formData.passengers ? 'opacity-50' : ''
                          }`}
                        >
                          <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${vehicle.image})` }}></div>
                          <div className="p-3">
                            <h3 className="font-medium text-brand-brown">{vehicle.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Users className="h-4 w-4 mr-1" />
                              <span>Max {vehicle.maxPassengers} passengers</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Briefcase className="h-4 w-4 mr-1" />
                              <span>{vehicle.luggageCapacity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg transition duration-200 ${
                      isFormComplete()
                        ? 'bg-brand-red text-white hover:bg-brand-red/90'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isFormComplete()}
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
            
            {/* Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-brand-gold sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-brand-brown">Price Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Base fare</span>
                    <span className="font-medium">R{pricing.baseFare.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <span className="text-gray-600">Distance charge</span>
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        <Info className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-medium">R{pricing.distanceCharge.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Service fee</span>
                    <span className="font-medium">R{pricing.serviceFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-semibold text-brand-brown">Total</span>
                    <span className="text-xl font-bold text-brand-red">R{pricing.total.toFixed(2)}</span>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg flex items-start">
                    <Shield className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Price Guarantee</p>
                      <p className="text-xs text-green-600">The price you see is the price you pay. No hidden fees.</p>
                    </div>
                  </div>
                </div>
                
                {directions && (
                  <div className="mt-6">
                    <h3 className="font-medium text-brand-brown mb-2">Trip Details</h3>
                    
                    <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={pickupCoords}
                        zoom={12}
                        options={{
                          disableDefaultUI: true,
                          zoomControl: true,
                        }}
                      >
                        {directions && <DirectionsRenderer directions={directions} />}
                      </GoogleMap>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Pickup</p>
                          <p className="text-sm">{formData.pickup}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Drop-off</p>
                          <p className="text-sm">{formData.dropoff}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Date & Time</p>
                          <p className="text-sm">
                            {format(formData.date, 'MMMM d, yyyy')} at {formatTime(formData.time)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Estimated Duration</p>
                          <p className="text-sm">{Math.floor(duration / 60)}h {duration % 60}min</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Car className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-500">Vehicle</p>
                          <p className="text-sm">{formData.selectedVehicle.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2: Payment */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-red">
                <h2 className="text-2xl font-semibold mb-6 text-brand-brown">Payment Details</h2>
                
                <Elements stripe={stripePromise}>
                  <PaymentForm 
                    amount={pricing.total} 
                    onPaymentComplete={handlePaymentComplete} 
                  />
                </Elements>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-brand-gold sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-brand-brown">Booking Summary</h2>
                
                <div className="space-y-4">
                  <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <GoogleMap
                      mapContainerStyle={{ width: '100%', height: '100%' }}
                      center={pickupCoords}
                      zoom={12}
                      options={{
                        disableDefaultUI: true,
                        zoomControl: true,
                      }}
                    >
                      {directions && <DirectionsRenderer directions={directions} />}
                    </GoogleMap>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-brand-gold mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Pickup</p>
                        <p className="text-sm">{formData.pickup}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Drop-off</p>
                        <p className="text-sm">{formData.dropoff}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Date & Time</p>
                        <p className="text-sm">
                          {format(formData.date, 'MMMM d, yyyy')} at {formatTime(formData.time)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Passengers</p>
                        <p className="text-sm">{formData.passengers}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Car className="h-5 w-5 text-brand-brown mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Vehicle</p>
                        <p className="text-sm">{formData.selectedVehicle.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-gray-600">Base fare</span>
                      <span>R{pricing.baseFare.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-gray-600">Distance charge</span>
                      <span>R{pricing.distanceCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-gray-600">Service fee</span>
                      <span>R{pricing.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="font-semibold text-brand-brown">Total</span>
                      <span className="font-bold text-brand-red">R{pricing.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="mt-6 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
                >
                  Edit Booking
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-brand-brown">Booking Confirmed!</h2>
                <p className="text-gray-600 mt-2">Your booking has been successfully confirmed.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-brand-brown mb-4">Booking Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Booking Reference</p>
                    <p className="font-medium">CE-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="font-medium">
                      {format(formData.date, 'MMMM d, yyyy')} at {formatTime(formData.time)}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Pickup Location</p>
                    <p className="font-medium">{formData.pickup}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Drop-off Location</p>
                    <p className="font-medium">{formData.dropoff}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Vehicle</p>
                    <p className="font-medium">{formData.selectedVehicle.name}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Passengers</p>
                    <p className="font-medium">{formData.passengers}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">Driver Information</h3>
                <p className="text-blue-700 text-sm">
                  Your driver will arrive between {formatTime(addMinutes(formData.time, -15))} and {formatTime(formData.time)}.
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
                    <span>R{pricing.baseFare.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance charge</span>
                    <span>R{pricing.distanceCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span>R{pricing.serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="font-semibold">Total paid</span>
                    <span className="font-bold text-brand-red">R{pricing.total.toFixed(2)}</span>
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
                    onClick={() => {
                      setCurrentStep(1);
                      setFormData({
                        pickup: '',
                        dropoff: '',
                        date: addDays(new Date(), 1),
                        time: setHours(setMinutes(new Date(), 0), 9),
                        passengers: 1,
                        selectedVehicle: vehicles[0],
                      });
                      setPickupCoords(null);
                      setDropoffCoords(null);
                      setDirections(null);
                      setBookingComplete(false);
                    }}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-200"
                  >
                    Book Another Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;