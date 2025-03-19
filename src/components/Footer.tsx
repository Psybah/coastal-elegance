import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>+27 87 265 6105</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>mail@coastalelegance.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span>29 Petrusa Street, The Oak 203, Bellville, Cape Town</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-gold transition">Home</Link></li>
              <li><Link to="/fleet" className="hover:text-brand-gold transition">Our Fleet</Link></li>
              <li><Link to="/booking" className="hover:text-brand-gold transition">Book a Shuttle</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition">Blog</Link></li>
              <li><Link to="/tender" className="hover:text-brand-gold transition">Hotel Partners</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <div className="flex items-start space-x-3 mb-3">
              <Leaf className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Carbon-neutral transportation services</span>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <Leaf className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Eco-friendly fleet with zero emissions</span>
            </div>
            <div className="flex items-start space-x-3">
              <Leaf className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Supporting local environmental initiatives</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-brand-gold transition" aria-label="Facebook">
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-brand-gold transition" aria-label="Instagram">
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Coastal Elegance Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;