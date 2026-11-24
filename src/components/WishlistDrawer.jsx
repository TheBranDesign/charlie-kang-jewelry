import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    openQuickView,
    formatPrice,
    playLuxuryChime,
  } = useShop();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsWishlistOpen(false);
              playLuxuryChime('click');
            }}
            className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 h-full w-full max-w-md bg-obsidian-950/95 border-l border-gold-500/25 glass-panel shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between text-stone-100 z-10"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-stone-800/90 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-gold-400 fill-gold-400/20" />
                <h3 className="font-cinzel text-base tracking-widest uppercase text-stone-100">
                  Private Vault ({wishlistedProducts.length})
                </h3>
              </div>

              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  playLuxuryChime('click');
                }}
                className="p-1.5 text-stone-400 hover:text-gold-300 transition-colors"
                aria-label="Close wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {wishlistedProducts.length === 0 ? (
                <div className="py-24 text-center space-y-4">
                  <Heart className="w-10 h-10 text-stone-700 mx-auto" />
                  <h4 className="font-serif text-lg text-stone-300">Your Private Vault is empty</h4>
                  <p className="font-sans text-xs text-stone-500 max-w-xs mx-auto">
                    Save your cherished solitaires and archival creations to review at your leisure.
                  </p>
                </div>
              ) : (
                wishlistedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex space-x-4 p-3.5 bg-obsidian-900/60 border border-stone-800/80 group hover:border-gold-500/30 transition-all"
                  >
                    <div
                      onClick={() => {
                        openQuickView(product);
                        setIsWishlistOpen(false);
                      }}
                      className="w-20 h-20 bg-obsidian-950 flex-shrink-0 cursor-pointer overflow-hidden border border-stone-800"
                    >
                      <img
                        src={product.images.yellow}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4
                            onClick={() => {
                              openQuickView(product);
                              setIsWishlistOpen(false);
                            }}
                            className="font-serif text-sm text-stone-100 cursor-pointer hover:text-gold-300 transition-colors"
                          >
                            {product.name}
                          </h4>
                          <button
                            onClick={() => toggleWishlist(product)}
                            className="text-stone-500 hover:text-red-400 p-1"
                            title="Remove"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-cinzel text-xs text-gold-300 font-medium mt-1">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => {
                            addToCart(product, 'yellow');
                            setIsWishlistOpen(false);
                          }}
                          className="px-3 py-1 bg-gold-500/20 hover:bg-gold-500 hover:text-obsidian-950 text-gold-300 border border-gold-500/40 text-[10px] font-sans uppercase tracking-widest transition-all flex items-center space-x-1"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-stone-800/90 text-center">
              <p className="font-sans text-[11px] text-stone-400 tracking-wide">
                Vault selections are encrypted in your local browser session.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

