import { useState } from 'react';
import { CreditCard, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { simulatePayment } from '../lib/payment';

interface PaymentFormProps {
  amount: number;
  currency: 'EUR' | 'USD';
  onSuccess: (transactionId: string) => void;
  onError: (error: string) => void;
}

export default function PaymentForm({ amount, currency, onSuccess, onError }: PaymentFormProps) {
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (cardNumber.replace(/\s/g, '').length < 16) {
      setError('Please enter a valid card number');
      return;
    }
    if (expiry.length < 5) {
      setError('Please enter a valid expiry date');
      return;
    }
    if (cvc.length < 3) {
      setError('Please enter a valid CVC');
      return;
    }

    setProcessing(true);

    try {
      // Simulate payment (replace with real Stripe in production)
      const result = await simulatePayment(amount, currency);

      if (result.success) {
        onSuccess(result.transactionId);
      } else {
        setError('Payment failed. Please try again or use a different card.');
        onError('Payment failed');
      }
    } catch (err: any) {
      setError(err.message || 'Payment processing failed');
      onError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Secure Payment</h3>
          <p className="text-sm text-ink-400">Complete your application fee</p>
        </div>
      </div>

      <div className="bg-brand-600/10 border border-brand-500/20 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-ink-300">Application Fee</span>
          <span className="text-2xl font-bold text-white">
            {currency === 'EUR' ? '€' : '$'}{amount}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink-300 mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="4242 4242 4242 4242"
            maxLength={19}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all"
            disabled={processing}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink-300 mb-2">Expiry Date</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all"
              disabled={processing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-300 mb-2">CVC</label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="123"
              maxLength={4}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-ink-500 focus:outline-none focus:border-brand-500/50 transition-all"
              disabled={processing}
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={processing}
          className="w-full py-4 rounded-xl btn-gold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {processing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              Pay {currency === 'EUR' ? '€' : '$'}{amount}
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-ink-500">
          <Lock className="w-3 h-3" />
          <span>Secured by 256-bit SSL encryption</span>
        </div>
      </form>
    </div>
  );
}
