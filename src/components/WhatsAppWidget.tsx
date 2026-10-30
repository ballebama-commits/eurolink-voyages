import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 glass-strong rounded-2xl p-6 shadow-2xl w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-bold">Need help?</h4>
              <button onClick={() => setIsOpen(false)} className="text-ink-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-ink-400 text-sm mb-4">
              Chat with us on WhatsApp for quick assistance with your application.
            </p>
            <a
              href="https://wa.me/442012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
