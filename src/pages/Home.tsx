import React, { useState, useEffect } from 'react';
import { ArrowRight, Car, Star, Users, Calendar, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PopularTours from '../components/PopularTours';
import FAQSection from '../components/FAQSection';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah van der Merwe",
      text: "The most luxurious shuttle service in Cape Town! Their knowledge of the Cape Winelands made our tour exceptional.",
      rating: 5,
      role: "Wine Enthusiast"
    },
    {
      name: "Michael Naidoo",
      text: "Professional service for our corporate events in Sandton. The drivers know Johannesburg like the back of their hand.",
      rating: 5,
      role: "Corporate Client"
    },
    {
      name: "Emma Patel",
      text: "Our Garden Route tour was unforgettable! The driver's knowledge of local spots made it special.",
      rating: 5,
      role: "Tourist"
    },
    {
      name: "James Molefe",
      text: "Used their services for our wedding in Stellenbosch. The fleet was immaculate and service impeccable.",
      rating: 5,
      role: "Event Client"
    },
    {
      name: "Sofia Botha",
      text: "The VIP airport transfer service in Cape Town is world-class. Punctual and professional.",
      rating: 5,
      role: "Business Executive"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className={`relative h-[100vh] bg-cover bg-center flex items-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Gateway to Coastal Elegance and Luxury Travel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
            Experience the perfect blend of comfort, reliability, and sophistication with our premium shuttle services.
          </p>
          <div className="flex gap-4 animate-fade-in-delay-2">
          <Link to="/booking" className="inline-flex items-center px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-lg transition-all duration-300 transform hover:scale-105" > 
            <span className="text-xs md:text-base">Book Now</span>
            <ArrowRight className="ml-2 h-5 w-5" /> 
          </Link>
          <Link to="/tender" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-lg transition-all duration-300 transform hover:scale-105" > 
            <span className="text-xs md:text-base">Tender Services</span>
            <ArrowRight className="ml-2 h-5 w-5" /> 
          </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 border-t-4 border-brand-red">
              <Car className="h-12 w-12 text-brand-red mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-brown">Airport Transfers</h3>
              <p className="text-gray-600">Luxurious and punctual airport pickup and drop-off services.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 border-t-4 border-brand-gold">
              <Users className="h-12 w-12 text-brand-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-brown">Group Tours</h3>
              <p className="text-gray-600">Customized group tours along scenic coastal routes.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 border-t-4 border-brand-red">
              <Calendar className="h-12 w-12 text-brand-red mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-brown">Event Transport</h3>
              <p className="text-gray-600">Reliable transportation for corporate events and weddings.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 border-t-4 border-brand-gold">
              <Shield className="h-12 w-12 text-brand-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-brown">VIP Services</h3>
              <p className="text-gray-600">Premium transportation with dedicated concierge support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <PopularTours />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-brown">What Our Clients Say</h2>
          <div className="relative">
            <div className="overflow-hidden py-10">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto border-l-4 border-brand-gold">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 text-lg italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-brand-brown">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-brand-brown" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-brand-brown" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Home;