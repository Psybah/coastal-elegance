import React from 'react';
import { User, Mail, Phone, MapPin, Users, Car, Calendar, Clock, FileText } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const Booking: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
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
              care of the rest. Whether it's a private tour, airport shuttle, or group travel, we're here to ensure your journey is seamless and
              enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Book Now' }]} />

      {/* Booking Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              <input
                type="text"
                name="service"
                placeholder="Point to Point Shuttle Service"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                required
              />
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
              <input
                type="date"
                name="date"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
              <input
                type="time"
                name="time"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div className="relative">
            <FileText className="absolute left-3 top-4 text-brand-gold h-5 w-5" />
            <textarea
              name="extraInfo"
              placeholder="Extra Info..."
              rows={4}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-red text-white py-4 rounded-lg text-lg font-semibold hover:bg-brand-red/90 transition-colors"
          >
            BOOK SHUTTLE NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;