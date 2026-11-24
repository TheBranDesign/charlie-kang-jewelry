import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ATELIER_CRAFT_STEPS } from '../data/products';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const BespokeCraftsmanship = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { playLuxuryChime } = useShop();
  const currentStep = ATELIER_CRAFT_STEPS[activeStepIndex];

  return (
    <section id="craft" className="relative py-28 md:py-36 bg-obsidian-900 text-stone-100 overflow-hidden border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-stone-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-sans uppercase tracking-[0.3em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Savoir-Faire Place Vendôme</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-100">
              The Alchemy of High Jewelry
            </h2>
          </div>
          <p className="font-sans text-stone-400 text-xs md:text-sm font-light max-w-md mt-4 md:mt-0 tracking-wide">
            Over 200 cumulative hours of manual devotion bring each creation into being.
            Explore the four sacred milestones of our Parisian atelier.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {ATELIER_CRAFT_STEPS.map((stepItem, idx) => (
            <button
              key={stepItem.step}
              onClick={() => {
                setActiveStepIndex(idx);
                playLuxuryChime('click');
              }}
              className={`p-4 md:p-6 text-left transition-all duration-300 border ${
                activeStepIndex === idx
                  ? 'bg-obsidian-850 border-gold-400/80 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                  : 'bg-obsidian-950/40 border-stone-800 hover:border-stone-700'
              }`}
              data-cursor="pointer"
            >
              <span className="font-cinzel text-xs text-gold-400 font-semibold tracking-widest block mb-1">
                Phase {stepItem.step}
              </span>
              <h4 className="font-serif text-sm md:text-base text-stone-200">
                {stepItem.title.split(' ')[0]} {stepItem.title.split(' ')[1]}
              </h4>
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-obsidian-950/70 p-6 md:p-10 border border-gold-500/20 glass-panel">
          {/* Left: Step Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-cinzel text-4xl text-gold-400/30 font-light">
              {currentStep.step} / 04
            </span>
            <div className="space-y-2">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium">
                {currentStep.subtitle}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-100 font-normal">
                {currentStep.title}
              </h3>
            </div>
            <p className="font-sans text-stone-300 text-sm md:text-base font-light leading-relaxed">
              {currentStep.description}
            </p>

            <div className="flex items-center space-x-3 pt-4 border-t border-stone-800">
              <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <span className="font-sans text-xs text-gold-200/90 tracking-wide">
                Specification: {currentStep.spec}
              </span>
            </div>
          </div>

          {/* Right: Step Image with Cinematic Animation */}
          <div className="lg:col-span-6 relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-none border border-gold-500/20 bg-obsidian-950">
            {ATELIER_CRAFT_STEPS.map((stepItem, idx) => (
              <img
                key={stepItem.step}
                src={stepItem.image}
                alt={stepItem.title}
                className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.1] transition-all duration-700 ease-out ${
                  activeStepIndex === idx
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent pointer-events-none z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

