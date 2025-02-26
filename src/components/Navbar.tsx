import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" className="h-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-700' : 'text-gray-700'} hover:text-blue-600 transition`}>
              Home
            </Link>
            <Link to="/booking" className={`${isScrolled ? 'text-gray-700' : 'text-gray-700'} hover:text-blue-600 transition`}>
              Book Now
            </Link>
            <Link to="/tender" className={`${isScrolled ? 'text-gray-700' : 'text-gray-700'} hover:text-blue-600 transition`}>
              For Hotels
            </Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-700' : 'text-gray-700'} hover:text-blue-600 transition`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
              <Link
                to="/tender"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                For Hotels
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;