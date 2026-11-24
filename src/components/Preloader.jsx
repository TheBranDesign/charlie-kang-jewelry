import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 400);
          return 100;
        }
        // Accelerate towards the end
        const increment = Math.max(1, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-obsidian-950 text-gold-300"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />

          {/* Golden geometric logo motif */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <svg
              className="w-20 h-20 text-gold-500 stroke-current animate-pulse-subtle"
              viewBox="0 0 100 100"
              fill="none"
            >
              <polygon
                points="50,6 94,50 50,94 6,50"
                strokeWidth="1.5"
                className="opacity-60"
              />
              <polygon
                points="50,18 82,50 50,82 18,50"
                strokeWidth="1"
                className="opacity-90"
              />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Brand Wordmark with staggered reveal */}
          <div className="text-center overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cinzel text-2xl md:text-3xl tracking-[0.4em] uppercase text-stone-100 font-light"
            >
              CHARLIE KANG
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sans text-[10px] md:text-xs uppercase tracking-[0.45em] text-gold-400/80 mt-2"
            >
              Haute Joaillerie &bull; Place Vendôme
            </motion.p>
          </div>

          {/* Progress bar line */}
          <div className="w-48 h-[1px] bg-stone-800 relative overflow-hidden mt-6">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-champagne-light"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Numeric counter */}
          <div className="mt-3 font-cinzel text-xs text-gold-500/70 tracking-widest">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

