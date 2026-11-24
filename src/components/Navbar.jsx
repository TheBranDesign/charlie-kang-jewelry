import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    currency,
    setCurrency,
    soundEnabled,
    setSoundEnabled,
    playLuxuryChime,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'showcase', label: 'Creations', href: '#showcase' },
    { id: 'story', label: 'The Maison', href: '#story' },
    { id: 'craft', label: 'Savoir-Faire', href: '#craft' },
    { id: 'salon', label: 'Private Salon', href: '#salon' },
  ];

  const handleNavClick = (href, id) => {
    setActiveLink(id);
    playLuxuryChime('click');
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-x-hidden ${
          isScrolled
            ? 'glass-panel py-3 md:py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-gold-500/15'
            : 'bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/40 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Left: Desktop Nav Links & Currency */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            <nav className="flex items-center space-x-4 xl:space-x-6 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.id);
                  }}
                  className="group relative font-sans text-[11px] xl:text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-gold-300 transition-colors py-1 whitespace-nowrap"
                >
                  {link.label}
                  {/* Animated Gold Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-500 to-champagne-light transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="h-4 w-[1px] bg-stone-800" />

            {/* Currency Selector */}
            <div className="flex items-center space-x-1 text-[11px] font-sans text-stone-400">
              {['USD', 'EUR', 'GBP'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => {
                    setCurrency(curr);
                    playLuxuryChime('click');
                  }}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    currency === curr
                      ? 'text-gold-400 font-semibold border-b border-gold-400'
                      : 'hover:text-stone-200'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Center: Brand Crest & Wordmark */}
          <a
            href="#"
            className="flex flex-col items-center group cursor-pointer focus:outline-none flex-shrink-0"
            onClick={() => playLuxuryChime('click')}
          >
            <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-medium tracking-[0.28em] sm:tracking-[0.35em] text-stone-100 group-hover:text-gold-300 transition-colors uppercase">
              CHARLIE KANG
            </span>
            <span className="font-sans text-[7.5px] sm:text-[9px] tracking-[0.35em] sm:tracking-[0.45em] text-gold-500/80 uppercase font-light -mt-0.5">
              Haute Joaillerie &bull; Paris
            </span>
          </a>

          {/* Right: Sound, Wishlist, Cart & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 flex-shrink-0">
            {/* Sound Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playLuxuryChime('bell');
              }}
              title={soundEnabled ? 'Mute luxury chime' : 'Enable acoustic chime'}
              className="hidden sm:flex items-center space-x-1.5 text-stone-400 hover:text-gold-400 transition-colors p-1"
              aria-label="Toggle Audio"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-gold-400 animate-pulse-subtle" />
                  <span className="text-[10px] uppercase font-sans tracking-widest text-gold-400/90 hidden md:inline">
                    Sound On
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-sans tracking-widest text-stone-500 hidden md:inline">
                    Audio
                  </span>
                </>
              )}
            </button>

            {/* Wishlist Button (Hidden on tiny screens, inside drawer) */}
            <button
              onClick={() => {
                setIsWishlistOpen(true);
                playLuxuryChime('click');
              }}
              className="hidden sm:flex relative p-1.5 text-stone-300 hover:text-gold-300 transition-colors"
              aria-label="Wishlist"
              data-cursor="pointer"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-gold-500 text-obsidian-950 font-sans text-[8px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Button with Glass Floating Pill */}
            <button
              onClick={() => {
                setIsCartOpen(true);
                playLuxuryChime('click');
              }}
              className="group relative flex items-center space-x-1.5 py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-gold-500/30 bg-gold-500/10 hover:bg-gold-500/20 hover:border-gold-400 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              aria-label="Shopping Bag"
              data-cursor="pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-gold-300 group-hover:scale-110 transition-transform" />
              <span className="font-sans text-[11px] tracking-wider text-gold-200 font-medium hidden xs:inline">
                Bag
              </span>
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gold-400 text-obsidian-950 text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-300 hover:text-gold-400 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian-950/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-500/70 border-b border-gold-500/20 pb-3">
                Navigation
              </span>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.id);
                  }}
                  className="font-serif text-3xl text-stone-200 hover:text-gold-300 transition-colors tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-6 border-t border-stone-800 flex items-center space-x-4">
                <span className="font-sans text-xs tracking-widest text-stone-400 uppercase">
                  Currency:
                </span>
                {['USD', 'EUR', 'GBP'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      playLuxuryChime('click');
                    }}
                    className={`text-xs px-2.5 py-1 rounded ${
                      currency === curr
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40'
                        : 'text-stone-400'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center border-t border-stone-800/80 pt-6">
              <p className="font-cinzel text-sm text-gold-400 tracking-[0.2em] uppercase">
                Maison CHARLIE KANG
              </p>
              <p className="font-sans text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                16 Place Vendôme, Paris &bull; Private Consultations
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

