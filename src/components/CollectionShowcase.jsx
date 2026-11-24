import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { PRODUCTS, COLLECTIONS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CollectionShowcase = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    openQuickView,
    formatPrice,
    playLuxuryChime,
  } = useShop();

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFinishes, setSelectedFinishes] = useState({});
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc'

  // Finish change per product card
  const handleFinishChange = (productId, finishId) => {
    playLuxuryChime('click');
    setSelectedFinishes((prev) => ({
      ...prev,
      [productId]: finishId,
    }));
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.collection === activeCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // featured original order
  });

  return (
    <section id="showcase" className="relative py-28 md:py-36 bg-obsidian-950 text-stone-100 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-500/25 bg-gold-500/5 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-300">
              Interactive Jewelry Showcase
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-stone-100"
          >
            Haute Creations & Masterpieces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-stone-400 font-light mt-4 tracking-wide max-w-xl mx-auto"
          >
            Hover to magnify architectural settings. Select precious finishes, preview GIA
            certificates, and explore digital acquisition demonstration.
          </motion.p>

          {/* Sample Product Demonstration Notice */}
          <div className="mt-4 inline-block px-4 py-1 rounded-md bg-stone-900/60 border border-stone-800 text-[10px] text-stone-400 tracking-wider uppercase font-sans">
            Demonstration Concept Pieces &bull; Not for commercial sale
          </div>
        </div>

        {/* Category Navigation Pills & Sort Filter */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-stone-800/80 pb-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {COLLECTIONS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  playLuxuryChime('click');
                }}
                className={`relative px-4 py-2 text-xs font-sans uppercase tracking-[0.18em] transition-all duration-300 rounded-none ${
                  activeCategory === cat.id
                    ? 'text-obsidian-950 font-medium bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'text-stone-300 hover:text-gold-300 hover:bg-stone-900/60 border border-stone-800/80'
                }`}
                data-cursor="pointer"
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-3 text-xs text-stone-400 font-sans">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
            <span className="uppercase tracking-widest text-[10px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                playLuxuryChime('click');
              }}
              className="bg-obsidian-900 border border-stone-800 rounded px-2.5 py-1 text-stone-300 focus:outline-none focus:border-gold-500/60"
            >
              <option value="featured">Featured Pieces</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => {
              const currentFinishId = selectedFinishes[product.id] || 'yellow';
              const currentImage = product.images[currentFinishId] || product.images.yellow;
              const isWishlisted = wishlist.includes(product.id);

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative flex flex-col justify-between glass-panel-subtle rounded-none p-4 hover:border-gold-500/40 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                  data-cursor="card"
                  data-cursor-text="VIEW"
                >
                  {/* Top Bar inside Card: Tag & Wishlist Button */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <span className="text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-stone-900/90 text-gold-300/90 border border-gold-500/20 font-sans">
                      {product.tag}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className={`p-1.5 rounded-full transition-all ${
                        isWishlisted
                          ? 'text-red-400 bg-red-950/40 border border-red-500/30'
                          : 'text-stone-400 hover:text-gold-300 hover:bg-stone-800/60'
                      }`}
                      aria-label="Save to Wishlist"
                      data-cursor="pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${isWishlisted ? 'fill-red-400' : 'stroke-[1.5]'}`}
                      />
                    </button>
                  </div>

                  {/* Product Image Stage with Zoom and Hover Controls */}
                  <div
                    onClick={() => openQuickView(product, currentFinishId)}
                    className="relative aspect-square w-full overflow-hidden bg-obsidian-900/60 cursor-pointer flex items-center justify-center group-hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500"
                  >
                    <img
                      src={currentImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Quick View Hover Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-obsidian-950/40 backdrop-blur-[2px]">
                      <div className="flex items-center space-x-2 px-4 py-2 bg-obsidian-900/90 border border-gold-400/40 text-gold-200 text-xs font-sans tracking-widest uppercase shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>

                  {/* Precious Metal Finish Selector */}
                  <div className="flex items-center justify-center space-x-3 my-4">
                    {product.finishes.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFinishChange(product.id, finish.id);
                        }}
                        title={finish.label}
                        className={`w-4 h-4 rounded-full border transition-all duration-200 relative ${
                          currentFinishId === finish.id
                            ? 'scale-125 border-gold-300 ring-2 ring-gold-400/30'
                            : 'border-stone-700 hover:scale-110 opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: finish.hex }}
                        data-cursor="pointer"
                      />
                    ))}
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col text-center">
                    <span className="font-cinzel text-[11px] text-gold-400/80 uppercase tracking-widest">
                      {product.carat} &bull; {product.clarity.split('/')[0]}
                    </span>

                    <h3 className="font-serif text-lg font-normal text-stone-100 hover:text-gold-300 transition-colors mt-1">
                      {product.name}
                    </h3>

                    <p className="font-sans text-xs text-stone-400 font-light mt-1 line-clamp-1">
                      {product.shortDescription}
                    </p>

                    <div className="mt-3 font-cinzel text-sm text-gold-300 font-medium">
                      {formatPrice(product.price)}
                    </div>
                  </div>

                  {/* Actions: Add to Bag & Details */}
                  <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center space-x-2">
                    <button
                      onClick={() => addToCart(product, currentFinishId)}
                      className="w-full py-2.5 px-3 bg-stone-900 hover:bg-gold-500 hover:text-obsidian-950 text-stone-200 border border-stone-700/80 hover:border-gold-400 transition-all duration-300 text-xs font-sans uppercase tracking-[0.16em] flex items-center justify-center space-x-2"
                      data-cursor="pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

