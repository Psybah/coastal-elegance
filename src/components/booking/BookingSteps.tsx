import React from 'react';
import { useBooking } from '../../context/BookingContext';

const BookingSteps: React.FC = () => {
  const { state } = useBooking();
  
  const steps = [
    { number: 1, label: 'Trip Details' },
    { number: 2, label: 'Payment' },
    { number: 3, label: 'Confirmation' }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                state.step >= step.number ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
              }`}
              aria-current={state.step === step.number ? 'step' : undefined}
            >
              {step.number}
            </div>
            
            {index < steps.length - 1 && (
              <div 
                className={`h-1 w-16 ${state.step > step.number ? 'bg-brand-red' : 'bg-gray-200'}`}
                aria-hidden="true"
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="flex justify-center mt-2">
        {steps.map((step) => (
          <div key={step.number} className="text-center w-24">
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;