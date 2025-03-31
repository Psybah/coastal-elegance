import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Users, Car, Calendar, Clock, FileText, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type BookingFormInputs = {
  name: string;
  email: string;
  phone: string;
  startDestination: string;
  endDestination: string;
  passengers: number;
  flightNumber: string;
  serviceType: string;
  date: Date;
  time: string;
  message: string;
};

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormInputs>();

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend or email service
    setBookingSubmitted(true);
    reset();
    setSelectedDate(null);
  };

  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-brown to-brand-red py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Make Your Booking Today
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to explore Cape Town with ease and comfort? Fill out the form below to make your booking today, and let us take
              care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Book Now' }]} />

      {/* Booking Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {bookingSubmitted ? (
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-brand-brown mb-4">
              Thank You for Your Booking Request!
            </h2>
            <p className="text-gray-600 mb-6">
              We have received your inquiry and will contact you shortly to confirm your booking.
            </p>
            <button
              onClick={() => setBookingSubmitted(false)}
              className="inline-flex items-center px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 transition-colors"
            >
              Book Another Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="text"
                  name="startDestination"
                  placeholder="Start Destination"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="text"
                  name="endDestination"
                  placeholder="End Destination"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="number"
                  name="passengers"
                  placeholder="Number of Passengers"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  required
                />
              </div>

              <div className="relative">
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <select
                  {...register('serviceType', { required: 'Service type is required' })}
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent appearance-none bg-white"
                >
                  <option value="Point to Point Shuttle Service">Point to Point Shuttle Service</option>
                  <option value="Private Driver Hire">Private Driver Hire</option>
                  <option value="Group Shuttle Service">Group Shuttle Service</option>
                  <option value="Corporate Transfer">Corporate Transfer</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Private Day Tour">Private Day Tour</option>
                </select>
              </div>
              
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="text"
                  name="flightNumber"
                  placeholder="Flight Number"
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <div className="relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholderText="Select date"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <div className="relative">
                  <input
                    type="time"
                    name="time"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    required
                  />
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <FileText className="absolute left-3 top-4 text-brand-gold h-5 w-5" />
              <textarea
                name="message"
                placeholder="Extra Info..."
                rows={4}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-brand-red text-white py-4 rounded-lg text-lg font-semibold hover:bg-brand-red/90 transition-colors"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;