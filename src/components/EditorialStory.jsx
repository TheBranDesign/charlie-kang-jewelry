import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const EditorialStory = () => {
  const { playLuxuryChime } = useShop();

  return (
    <section id="story" className="relative py-28 md:py-36 bg-obsidian-950 text-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Asymmetrical Layout 1: The Parisian Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-none border border-gold-500/20 group">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85"
                alt="High Jewelry Serpentine Bangle Editorial"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Editorial Caption */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 max-w-xs glass-panel border border-gold-500/30">
              <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-widest block">
                Editorial Issue N° 44
              </span>
              <p className="font-serif italic text-sm text-stone-200 mt-1">
                "The Serpentine Éternelle coiling without beginning or end."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-10 space-y-6"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400">
              Chapter I &bull; Parisian Lineage
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-100 leading-tight">
              An Ode to the Unbroken Curve
            </h2>
            <p className="font-sans text-stone-300 text-sm md:text-base font-light leading-relaxed">
              In our Place Vendôme atelier, jewelry is not conceived as ornament, but as an
              architectural dialogue with the human silhouette. Every gemstone is selected not
              merely for its lack of flaw, but for its singular inner fire—the idiosyncratic way it
              catches twilight.
            </p>
            <p className="font-sans text-stone-400 text-xs md:text-sm font-light leading-relaxed">
              We work with unheated Ceylon sapphires, GIA D-Flawless diamonds, and certified
              Fairmined gold, directly supporting artisanal mining communities with transparent
              provenance documentation provided with each acquisition.
            </p>

            <div className="pt-4">
              <a
                href="#showcase"
                onClick={() => playLuxuryChime('click')}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-gold-300 hover:text-gold-200 border-b border-gold-400/50 pb-1 group"
              >
                <span>View Serpentine Archive</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Asymmetrical Layout 2: Master Joaillier Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative py-16 px-8 md:px-16 glass-panel border border-gold-500/25 rounded-none overflow-hidden my-16 shimmer-sweep"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Sparkles className="w-6 h-6 text-gold-400 mx-auto" />
            <blockquote className="font-serif text-2xl sm:text-4xl italic text-stone-100 font-light leading-relaxed">
              "When you gaze upon a D-Flawless diamond, you are looking through a billion years of
              geological memory, cut to the millimeter by human hands that trembled only with
              devotion."
            </blockquote>
            <div className="pt-2">
              <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-gold-400">
                Jean-Luc Laurent
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                Maître Joaillier &bull; Maison CHARLIE KANG Vendôme
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

