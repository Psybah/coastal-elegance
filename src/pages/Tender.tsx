import React, { useState } from 'react';
import { Building2, Mail, Phone, Users, MessageSquare } from 'lucide-react';

const Tender = () => {
  const [formData, setFormData] = useState({
    hotelName: '',
    contactName: '',
    email: '',
    phone: '',
    numberOfRooms: '',
    servicesRequired: [],
    additionalNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-brown mb-4">Hotel Partnership Program</h1>
          <p className="text-lg text-gray-600 mb-8">Join our network of premium hotels and offer your guests exceptional transportation services</p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-brand-gold">
          <h2 className="text-2xl font-bold text-brand-brown mb-6">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-brand-red/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-brand-red" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-brand-brown">Dedicated Support</h3>
                <p className="text-gray-600">24/7 concierge service and priority booking for your guests</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-brand-red/10 rounded-full p-3">
                  <Building2 className="h-6 w-6 text-brand-red" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-brand-brown">Customized Solutions</h3>
                <p className="text-gray-600">Tailored transportation packages to match your hotel's needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tender Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-red">
          <h2 className="text-2xl font-bold text-brand-brown mb-6">Partnership Application</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-700 mb-1">Number of Rooms</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold h-5 w-5" />
                <input
                  type="number"
                  id="numberOfRooms"
                  name="numberOfRooms"
                  value={formData.numberOfRooms}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-brand-gold h-5 w-5" />
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={4}
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                placeholder="Tell us about your hotel's transportation needs and any specific requirements"
              ></textarea>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-brand-red text-white py-3 px-6 rounded-lg hover:bg-brand-red/90 transition duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tender;