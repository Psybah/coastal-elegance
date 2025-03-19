import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-brown mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We're here to help with your transportation needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-gold">
              <h2 className="text-2xl font-bold text-brand-brown mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-brand-red/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-brand-red" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-brand-brown">Phone</h3>
                    <p className="text-gray-600">+27 87 265 6105</p>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-brand-red/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-brand-red" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-brand-brown">Email</h3>
                    <p className="text-gray-600">mail@coastalelegance.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-brand-red/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-brand-red" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-brand-brown">Address</h3>
                    <p className="text-gray-600">29 Petrusa Street</p>
                    <p className="text-gray-600">The Oak 203, Bellville, Cape Town</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-red">
              <h2 className="text-2xl font-bold text-brand-brown mb-6">Send Us a Message</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                  required
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-brand-gold h-5 w-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full bg-brand-red text-white py-3 px-6 rounded-lg hover:bg-brand-red/90 transition duration-200"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;