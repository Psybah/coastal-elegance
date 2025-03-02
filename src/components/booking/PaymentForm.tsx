import React, { useState } from 'react';
import { CreditCard, Shield, AlertTriangle } from 'lucide-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useBooking } from '../../context/BookingContext';

interface PaymentFormProps {
  onPaymentComplete: (success: boolean) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentComplete }) => {
  const { state } = useBooking();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    // In a real application, you would create a payment intent on your server
    // and confirm the payment here
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete(true);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center ${
              paymentMethod === 'card' 
                ? 'border-brand-red bg-brand-red/5' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            aria-pressed={paymentMethod === 'card'}
          >
            <CreditCard className={`h-5 w-5 mr-2 ${paymentMethod === 'card' ? 'text-brand-red' : 'text-gray-500'}`} aria-hidden="true" />
            <span className={paymentMethod === 'card' ? 'text-brand-red font-medium' : 'text-gray-700'}>Credit Card</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`flex-1 py-3 px-4 border rounded-lg flex items-center justify-center ${
              paymentMethod === 'paypal' 
                ? 'border-brand-red bg-brand-red/5' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            aria-pressed={paymentMethod === 'paypal'}
          >
            <span className={`mr-2 font-bold ${paymentMethod === 'paypal' ? 'text-brand-red' : 'text-gray-500'}`}>P</span>
            <span className={paymentMethod === 'paypal' ? 'text-brand-red font-medium' : 'text-gray-700'}>PayPal</span>
          </button>
        </div>

        {paymentMethod === 'card' && (
          <div className="border border-gray-300 p-4 rounded-lg">
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="border border-gray-300 p-4 rounded-lg text-center">
            <p className="text-gray-600">You will be redirected to PayPal to complete your payment.</p>
          </div>
        )}

        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="corporate-billing" 
            className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
            aria-label="Bill to corporate account"
          />
          <label htmlFor="corporate-billing" className="ml-2 block text-sm text-gray-700">
            Bill to corporate account
          </label>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-600">Secure payment processing</span>
          </div>
          <div className="flex space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-red-500" aria-hidden="true" />
            <p className="ml-3 text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-brand-red text-white py-3 px-6 rounded-lg hover:bg-brand-red/90 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        aria-disabled={!stripe || processing}
      >
        {processing ? 'Processing...' : `Pay R${state.pricing.total.toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm;