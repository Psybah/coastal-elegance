import React from 'react';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ShuttleService: React.FC = () => {
  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-brown to-brand-red py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('/car.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shuttle & Airport Transfer Services
            </h1>
            <p className="text-xl text-white/90">
              Professional and reliable transfer services in Cape Town
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Shuttle Services' }]} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-brown mb-6">
              Professional Transfer Services
            </h2>
            <p className="text-gray-600 mb-6">
              We offer comprehensive shuttle and airport transfer services, ensuring reliable and comfortable transportation for all your needs in Cape Town. Our professional drivers and modern fleet guarantee a safe and pleasant journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">24/7 airport transfer service</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">Professional and experienced drivers</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">Modern and comfortable vehicles</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">Point-to-point shuttle services</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img 
              src="/car.webp" 
              alt="Luxury Transfer Vehicle" 
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-brand-brown mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details
              className="group bg-white rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer p-4">
                <h4 className="text-lg font-medium pr-4 text-brand-brown">What's included in the quoted daily rate?</h4>
                <span className="transition-transform duration-300 group-open:rotate-90">
                  <ChevronRight className="h-5 w-5 text-brand-gold" />
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-600">
                  Our rates include professional driver services, fuel, vehicle maintenance, and insurance. Additional charges may apply for after-hours services or special requirements.
                </p>
              </div>
            </details>

            <details
              className="group bg-white rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer p-4">
                <h4 className="text-lg font-medium pr-4 text-brand-brown">What is the rental's mileage plan?</h4>
                <span className="transition-transform duration-300 group-open:rotate-90">
                  <ChevronRight className="h-5 w-5 text-brand-gold" />
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-600">
                  Our shuttle services are charged based on the specific route or hourly rates for custom journeys. Contact us for detailed pricing based on your requirements.
                </p>
              </div>
            </details>

            <details
              className="group bg-white rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <summary className="flex justify-between items-center cursor-pointer p-4">
                <h4 className="text-lg font-medium pr-4 text-brand-brown">What are your extra insurance options?</h4>
                <span className="transition-transform duration-300 group-open:rotate-90">
                  <ChevronRight className="h-5 w-5 text-brand-gold" />
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-gray-600">
                  All our vehicles are fully insured for your peace of mind. Additional insurance options are available for special circumstances.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-brown rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Book Your Transfer?
          </h2>
          <p className="text-white/90 mb-6">
            Contact us directly on WhatsApp for quick and easy booking!
          </p>
          <a
            href="https://wa.me/27728127533?text=I'm%20interested%20in%20booking%20a%20shuttle%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Book via WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShuttleService; 