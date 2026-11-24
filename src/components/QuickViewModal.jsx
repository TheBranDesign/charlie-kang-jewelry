import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ShieldCheck, Check, Sparkles, ZoomIn } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal = () => {
  const {
    quickViewProduct,
    quickViewFinish,
    setQuickViewFinish,
    closeQuickView,
    addToCart,
    wishlist,
    toggleWishlist,
    formatPrice,
    playLuxuryChime,
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Reset image when product or finish changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
  }, [quickViewProduct, quickViewFinish]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeQuickView();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeQuickView]);

  if (!quickViewProduct) return null;

  const currentFinishObj =
    quickViewProduct.finishes.find((f) => f.id === quickViewFinish) ||
    quickViewProduct.finishes[0];

  const galleryImages = [
    quickViewProduct.images[quickViewFinish] || quickViewProduct.images.yellow,
    ...(quickViewProduct.images.gallery || []),
  ];

  const activeMainImage = galleryImages[activeImageIndex] || galleryImages[0];
  const isWishlisted = wishlist.includes(quickViewProduct.id);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            closeQuickView();
            playLuxuryChime('click');
          }}
          className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-obsidian-900/90 border border-gold-500/30 glass-panel shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 text-stone-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => {
              closeQuickView();
              playLuxuryChime('click');
            }}
            className="absolute top-4 right-4 z-20 p-2 text-stone-400 hover:text-gold-300 transition-colors bg-obsidian-950/60 rounded-full border border-stone-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
            {/* Left Column: Image Gallery Stage with Zoom */}
            <div className="md:col-span-6 flex flex-col space-y-4">
              {/* Main Image Stage */}
              <div
                className="relative aspect-square w-full overflow-hidden bg-obsidian-950 border border-gold-500/20 cursor-crosshair group"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={activeMainImage}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                    transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                  }}
                />

                {/* Lens Zoom Badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-obsidian-950/80 backdrop-blur-sm border border-stone-800 text-[10px] uppercase tracking-widest text-gold-300/80 flex items-center space-x-1 pointer-events-none">
                  <ZoomIn className="w-3 h-3 text-gold-400" />
                  <span>Hover to Inspect Facets</span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center space-x-3 overflow-x-auto pb-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      playLuxuryChime('click');
                    }}
                    className={`relative w-16 h-16 flex-shrink-0 border transition-all ${
                      activeImageIndex === idx
                        ? 'border-gold-400 ring-2 ring-gold-400/30'
                        : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View angle ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Detailed Product Specifications */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* French Collection Tag */}
                <div className="flex items-center space-x-2 text-gold-400 text-xs font-sans uppercase tracking-[0.25em] mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{quickViewProduct.tag}</span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-stone-100 font-light">
                  {quickViewProduct.name}
                </h2>
                <p className="font-sans text-xs italic text-stone-400 mt-0.5">
                  {quickViewProduct.frenchName}
                </p>

                {/* Price */}
                <div className="mt-4 font-cinzel text-2xl text-gold-300 font-medium">
                  {formatPrice(quickViewProduct.price)}
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-stone-300 font-light leading-relaxed mt-4">
                  {quickViewProduct.longDescription}
                </p>

                {/* Finish Selector */}
                <div className="mt-6 space-y-2">
                  <label className="block text-[11px] font-sans uppercase tracking-widest text-stone-400">
                    Precious Metal Finish:{' '}
                    <span className="text-gold-300 font-medium">
                      {currentFinishObj.label}
                    </span>
                  </label>
                  <div className="flex items-center space-x-4">
                    {quickViewProduct.finishes.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => {
                          setQuickViewFinish(finish.id);
                          playLuxuryChime('click');
                        }}
                        className={`flex items-center space-x-2 px-3 py-1.5 border text-xs font-sans transition-all ${
                          quickViewFinish === finish.id
                            ? 'border-gold-400 bg-gold-500/10 text-gold-200'
                            : 'border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block border border-stone-800"
                          style={{ backgroundColor: finish.hex }}
                        />
                        <span>{finish.label.split(' ')[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gemology Specification Table */}
                <div className="mt-6 border-t border-stone-800 pt-4 space-y-2 text-xs font-sans">
                  <div className="flex justify-between py-1 border-b border-stone-900">
                    <span className="text-stone-400">Gemological Carat</span>
                    <span className="text-stone-200 font-medium">{quickViewProduct.carat}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-900">
                    <span className="text-stone-400">Color & Clarity</span>
                    <span className="text-stone-200 font-medium">{quickViewProduct.clarity}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-900">
                    <span className="text-stone-400">Certification</span>
                    <span className="text-stone-200 font-medium">{quickViewProduct.certification}</span>
                  </div>
                  {quickViewProduct.details?.map((detail, dIdx) => (
                    <div key={dIdx} className="flex justify-between py-1 border-b border-stone-900">
                      <span className="text-stone-400">{detail.label}</span>
                      <span className="text-stone-200 font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="space-y-3 pt-4 border-t border-stone-800">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, quickViewFinish);
                      closeQuickView();
                    }}
                    className="flex-1 py-3 bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Acquire &bull; Place in Bag</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className={`p-3 border transition-colors ${
                      isWishlisted
                        ? 'border-red-500 text-red-400 bg-red-950/30'
                        : 'border-stone-700 text-stone-300 hover:text-gold-300 hover:border-gold-400'
                    }`}
                    title="Add to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-400' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-2 text-[10px] text-stone-500 font-sans tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Complimentary Insured Courier &bull; 30-Day Maison Return Privilege</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

