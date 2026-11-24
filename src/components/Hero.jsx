import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Hero = () => {
  const containerRef = useRef(null);
  const { playLuxuryChime } = useShop();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax and scale effects
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToCreations = () => {
    playLuxuryChime('click');
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCraft = () => {
    playLuxuryChime('click');
    const el = document.getElementById('craft');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-obsidian-950"
    >
      {/* Background Image with Slow Parallax & Cinema Vignette */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2400&q=90"
          alt="High Jewelry Haute Joaillerie Craftsmanship"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08]"
          loading="eager"
        />
        {/* Layered cinematic gradients for extreme depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-obsidian-950/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-obsidian-950/30 to-obsidian-950/90" />
      </motion.div>

      {/* Atmospheric Gold Light Sweep Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16"
      >
        {/* Subtle Top Monogram / Specimen Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-gold-500/30 bg-obsidian-950/60 backdrop-blur-md mb-8 shimmer-sweep"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-300 font-light">
            Place Vendôme &bull; Masterpiece Collection MMXXVI
          </span>
        </motion.div>

        {/* Animated Staggered Main Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-stone-100 tracking-[-0.01em] leading-[1.08]"
          >
            The Architecture <br />
            <span className="font-serif italic font-normal text-gold-300 gold-gradient-text">
              of Radiance
            </span>
          </motion.h1>
        </div>

        {/* Subtitle with High-Fashion Editorial Spacing */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: 'easeOut' }}
          className="mt-6 max-w-2xl font-sans text-xs sm:text-sm md:text-base text-stone-300/85 font-light tracking-wide leading-relaxed px-4"
        >
          Sculpted in pure 18-karat gold and certified rare diamonds. Each piece is an
          unrepeatable dialogue between Parisian high craftsmanship and kinetic brilliance.
        </motion.p>

        {/* Magnetic CTAs with Light Sweep and Glass styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          {/* Primary CTA */}
          <button
            onClick={scrollToCreations}
            data-cursor="pointer"
            data-cursor-text="DISCOVER"
            className="group relative px-9 py-4 rounded-none bg-gold-500 text-obsidian-950 font-sans text-xs uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Creations</span>
            </span>
            {/* Light sweep beam */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-light-sweep" />
          </button>

          {/* Secondary Glass CTA */}
          <button
            onClick={scrollToCraft}
            data-cursor="pointer"
            data-cursor-text="ATELIER"
            className="group px-8 py-4 rounded-none glass-panel border border-gold-500/30 text-stone-200 hover:text-gold-300 hover:border-gold-400 font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-xl"
          >
            <span className="flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
              <span>L’Atelier Vendôme</span>
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={scrollToCreations}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-400/80 group-hover:text-gold-300 transition-colors mb-2">
          Scroll to Discover
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-gold-500/80 via-gold-400/40 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 36, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-3 bg-gold-300 rounded-full shadow-[0_0_6px_rgba(212,175,55,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
};


