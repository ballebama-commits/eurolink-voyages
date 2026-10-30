import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_your_key';

let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublicKey);
  }
  return stripePromise;
};

export interface PaymentIntent {
  id: string;
  clientSecret: string;
  amount: number;
  currency: string;
  status: string;
}

// Create payment intent (requires backend endpoint)
export async function createPaymentIntent(amount: number, currency: string): Promise<PaymentIntent | null> {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency.toLowerCase(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    return await response.json();
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    return null;
  }
}

// For demo/development: Simulate payment
export async function simulatePayment(amount: number, currency: string): Promise<{
  success: boolean;
  transactionId: string;
}> {
  // Simulate payment processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate 95% success rate
  const success = Math.random() > 0.05;
  
  return {
    success,
    transactionId: `demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };
}
