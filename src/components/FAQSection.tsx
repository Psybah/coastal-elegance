import React from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: "Booking & Payments",
    questions: [
      {
        question: "What areas do you service in South Africa?",
        answer: "We provide luxury transportation services in Cape Town, including popular destinations such as Stellenbosch and Franschhoek. Custom routes are also available for special requests"
      },
      {
        question: "How far in advance should I book?",
        answer: "For regular tours, we recommend booking at least 48 hours in advance. For peak season (December-January), public holidays, and special events, we suggest booking 2-3 weeks ahead. Corporate and group bookings should be made at least 1 month in advance."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, EFT payments, and mobile payment solutions including SnapScan and Zapper. For corporate clients, we offer invoice-based payment terms."
      }
    ]
  },
  {
    category: "Services & Experience",
    questions: [
      {
        question: "What types of vehicles are available?",
        answer: "Our premium fleet includes luxury sedans (Mercedes-Benz E-Class), executive SUVs (Range Rover, BMW X7), and luxury vans (Mercedes-Benz V-Class) for groups. All vehicles are late models with modern amenities, air conditioning, and WiFi."
      },
      {
        question: "Are your drivers knowledgeable about the routes?",
        answer: "All our drivers are professional chauffeurs with extensive knowledge of South African roads, attractions, and culture. They undergo regular training and are fluent in English, with many speaking additional local languages."
      },
      {
        question: "Can tours be customized?",
        answer: "Yes, we specialize in creating custom itineraries. Whether it's a wine route, cultural tour, or multi-day adventure, we can tailor the experience to your preferences while incorporating local insights and hidden gems."
      }
    ]
  },
  {
    category: "Safety & Policies",
    questions: [
      {
        question: "What safety measures do you have in place?",
        answer: "All vehicles undergo regular safety inspections, are equipped with tracking systems, and carry comprehensive insurance. Our drivers are professionally licensed and undergo background checks. We also follow strict COVID-19 safety protocols."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 48 hours before the scheduled service are fully refundable. Cancellations within 24-48 hours incur a 50% fee. Last-minute cancellations (less than 24 hours) or no-shows are charged in full."
      },
      {
        question: "Do you offer travel insurance?",
        answer: "While our services are fully insured for liability, we recommend passengers obtain their own travel insurance for comprehensive coverage. We can recommend trusted local insurance providers upon request."
      }
    ]
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-brown mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about our services</p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-6 w-6 text-brand-red" />
                <h3 className="text-xl font-semibold text-brand-brown">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group bg-white rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    <summary className="flex justify-between items-center cursor-pointer p-4">
                      <h4 className="text-lg font-medium pr-4 text-brand-brown">{faq.question}</h4>
                      <span className="transition-transform duration-300 group-open:rotate-90">
                        <ChevronRight className="h-5 w-5 text-brand-gold" />
                      </span>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;