import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Toast = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 md:bottom-8 md:left-8 z-[9990] flex flex-col space-y-3 pointer-events-none max-w-[340px] sm:max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pointer-events-auto glass-dropdown border border-gold-400/40 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-start space-x-3.5 relative overflow-hidden"
          >
            {/* Gold light sweep on toast */}
            <span className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700" />

            {toast.image ? (
              <div className="w-12 h-12 flex-shrink-0 bg-obsidian-900 border border-stone-800 overflow-hidden">
                <img src={toast.image} alt="" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300">
                <Sparkles className="w-4 h-4" />
              </div>
            )}

            <div className="flex-1 pr-4">
              <h5 className="font-cinzel text-xs text-gold-300 uppercase tracking-widest font-semibold">
                {toast.title}
              </h5>
              <p className="font-sans text-[11px] text-stone-300 font-light mt-0.5 leading-snug">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-500 hover:text-stone-200 transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

