import React from 'react';
import { motion } from 'framer-motion';

export const BrandManifesto = () => {
  return (
    <section className="relative py-28 md:py-36 bg-obsidian-950 text-stone-200 overflow-hidden border-t border-b border-gold-500/10">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-champagne-dark/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Large Statement */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-gold-500" />
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold-400">
                  Philosophie de la Maison
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-stone-100 leading-[1.18] tracking-tight">
                "We do not set stones to hold light.{' '}
                <span className="italic font-normal text-gold-300">
                  We shape gold so light has nowhere else to go."
                </span>
              </h2>

              <p className="font-sans text-stone-400 text-sm md:text-base font-light leading-relaxed max-w-xl pt-2">
                Founded in 1898 on the cobblestones of Place Vendôme, Maison CHARLIE KANG represents
                the pinnacle of French High Jewelry. We operate outside the velocity of seasonal
                trends—committing up to two years to perfect a single necklace or ring. Every cut
                is a mathematical pursuit of luminescence.
              </p>

              {/* Atelier Statistics Counter Cards */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-800/80">
                <div>
                  <span className="font-cinzel text-2xl md:text-3xl text-gold-300 font-normal">
                    128
                  </span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                    Years of Heritage
                  </p>
                </div>
                <div>
                  <span className="font-cinzel text-2xl md:text-3xl text-gold-300 font-normal">
                    100%
                  </span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                    Ethical Fairmined
                  </p>
                </div>
                <div>
                  <span className="font-cinzel text-2xl md:text-3xl text-gold-300 font-normal">
                    FL/D
                  </span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                    Flawless Standard
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Editorial Image with Clipping Mask Animation */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm group"
            >
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
                alt="High Jewelry Atelier Precision"
                className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />

              {/* Floating Glass Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border border-gold-500/20 backdrop-blur-md">
                <p className="font-cinzel text-xs text-gold-300 uppercase tracking-widest">
                  Atelier Vendôme Archive
                </p>
                <p className="font-sans text-[11px] text-stone-300 font-light mt-0.5">
                  Hand-setting the Solitaire Céleste hidden gallery under microscope.
                </p>
              </div>
            </motion.div>

            {/* Decorative Gold Geometric Frame Accent */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full border border-gold-500/20 pointer-events-none -z-10 translate-x-3 translate-y-3" />
          </div>

        </div>
      </div>
    </section>
  );
};

