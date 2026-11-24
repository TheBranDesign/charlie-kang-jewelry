import React from 'react';
import { ArrowUp, Sparkles, Shield, Award, Compass } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer = () => {
  const { playLuxuryChime } = useShop();

  const scrollToTop = () => {
    playLuxuryChime('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 text-stone-300 border-t border-gold-500/20 pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Tier: Brand Crest & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-16 border-b border-stone-800/80 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-cinzel text-2xl tracking-[0.4em] uppercase text-stone-100 font-light">
              MAISON CHARLIE KANG
            </h3>
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold-400 uppercase mt-1">
              Place Vendôme, Paris &bull; Joailliers Depuis 1898
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.25em] text-stone-400 hover:text-gold-300 transition-colors py-2 px-4 border border-stone-800 hover:border-gold-500/40"
            data-cursor="pointer"
          >
            <span>Return to Summit</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

        {/* Middle Tier: Luxury Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-stone-800/80 text-xs font-sans font-light">
          {/* Col 1 */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-gold-300 font-medium">
              High Creations
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#showcase" className="hover:text-gold-200 transition-colors">The Solitaire Céleste</a></li>
              <li><a href="#showcase" className="hover:text-gold-200 transition-colors">Étoile Polaire Choker</a></li>
              <li><a href="#showcase" className="hover:text-gold-200 transition-colors">Architectura Vendôme Cuff</a></li>
              <li><a href="#showcase" className="hover:text-gold-200 transition-colors">Cascade de Versailles</a></li>
              <li><a href="#showcase" className="hover:text-gold-200 transition-colors">Serpentine Éternelle</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-gold-300 font-medium">
              Savoir-Faire
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#craft" className="hover:text-gold-200 transition-colors">Gemological Sourcing</a></li>
              <li><a href="#craft" className="hover:text-gold-200 transition-colors">The Parisian Gouaché</a></li>
              <li><a href="#craft" className="hover:text-gold-200 transition-colors">Invisible Micro-Setting</a></li>
              <li><a href="#craft" className="hover:text-gold-200 transition-colors">Mirror & Satin Polishing</a></li>
              <li><a href="#craft" className="hover:text-gold-200 transition-colors">Fairmined Gold Charter</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-gold-300 font-medium">
              Salons & Concierge
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li><a href="#salon" className="hover:text-gold-200 transition-colors">16 Place Vendôme, Paris</a></li>
              <li><a href="#salon" className="hover:text-gold-200 transition-colors">740 Madison Ave, New York</a></li>
              <li><a href="#salon" className="hover:text-gold-200 transition-colors">Rue du Rhône 42, Genève</a></li>
              <li><a href="#salon" className="hover:text-gold-200 transition-colors">Private Salon Booking</a></li>
              <li><a href="#salon" className="hover:text-gold-200 transition-colors">Insured White-Glove Courier</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-gold-300 font-medium">
              Certifications
            </h4>
            <div className="space-y-3 text-stone-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>GIA Flawless Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Responsible Jewellery Council</span>
              </div>
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% Ethical Fairmined</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 font-sans tracking-wide gap-4">
          <p>
            &copy; {new Date().getFullYear()} MAISON CHARLIE KANG HAUTE JOAILLERIE. All rights reserved.
          </p>
          <div className="text-center md:text-right text-[10px] text-stone-500">
            <span>High Jewelry Digital Concept Exhibition &bull; Place Vendôme Archive Demonstration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

