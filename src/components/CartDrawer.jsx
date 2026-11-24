import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    formatPrice,
    playLuxuryChime,
    addToast,
  } = useShop();

  const [giftWrapping, setGiftWrapping] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckoutDemo = () => {
    playLuxuryChime('bell');
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      addToast(
        'Private Acquisition Registered',
        'Your Maison CHARLIE KANG Concierge Order dossier has been generated. An encrypted courier manifest is prepared.'
      );
    }, 1200);
  };

  const handleReset = () => {
    clearCart();
    setOrderComplete(false);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsCartOpen(false);
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
                <ShoppingBag className="w-5 h-5 text-gold-400" />
                <h3 className="font-cinzel text-base tracking-widest uppercase text-stone-100">
                  Private Bag ({cart.length})
                </h3>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  playLuxuryChime('click');
                }}
                className="p-1.5 text-stone-400 hover:text-gold-300 transition-colors"
                aria-label="Close bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {orderComplete ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto animate-bounce" />
                  <h4 className="font-cinzel text-xl text-gold-200">
                    Acquisition Confirmed
                  </h4>
                  <p className="font-sans text-xs text-stone-300 max-w-xs mx-auto leading-relaxed">
                    Thank you. Your demonstration acquisition has been recorded with Maison
                    CHARLIE KANG Place Vendôme Concierge #AV-{Math.floor(100000 + Math.random() * 900000)}.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-gold-500 text-obsidian-950 font-sans text-xs uppercase tracking-widest font-medium"
                  >
                    Return to Gallery
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full border border-stone-800 flex items-center justify-center mx-auto text-stone-600">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-lg text-stone-300">Your bag is currently empty</h4>
                  <p className="font-sans text-xs text-stone-500 max-w-xs mx-auto">
                    Explore our Haute Joaillerie collections to curate your personal acquisition.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.cartItemId}
                        className="flex space-x-4 p-3 bg-obsidian-900/60 border border-stone-800/80 rounded-none relative group"
                      >
                        {/* Thumbnail */}
                        <div className="w-20 h-20 bg-obsidian-950 flex-shrink-0 border border-stone-800 overflow-hidden">
                          <img
                            src={
                              item.product.images[item.finish.id] ||
                              item.product.images.yellow
                            }
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-serif text-sm text-stone-100 font-normal">
                              {item.product.name}
                            </h4>
                            <p className="font-sans text-[11px] text-gold-400/90 mt-0.5">
                              {item.finish.label}
                            </p>
                            <p className="font-cinzel text-xs text-gold-300 font-medium mt-1">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>

                          {/* Quantity control */}
                          <div className="flex items-center space-x-3 mt-2">
                            <div className="flex items-center border border-stone-800 bg-obsidian-950 text-xs">
                              <button
                                onClick={() =>
                                  updateQuantity(item.cartItemId, item.quantity - 1)
                                }
                                className="px-2 py-0.5 text-stone-400 hover:text-stone-100"
                              >
                                -
                              </button>
                              <span className="px-2 font-mono text-[11px]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.cartItemId, item.quantity + 1)
                                }
                                className="px-2 py-0.5 text-stone-400 hover:text-stone-100"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.cartItemId)}
                              className="text-stone-500 hover:text-red-400 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Complimentary Luxury Packaging Box */}
                  <div className="p-3.5 bg-obsidian-900/40 border border-gold-500/15 flex items-start space-x-3">
                    <Gift className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-xs">
                      <span className="font-sans text-stone-200 block font-medium">
                        Maison CHARLIE KANG Green Velvet Presentation Box
                      </span>
                      <span className="font-sans text-[11px] text-stone-400">
                        Includes wax-sealed certificate and hand-stitched travel pouch.
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer / Subtotal & Checkout */}
            {cart.length > 0 && !orderComplete && (
              <div className="p-6 border-t border-stone-800/90 bg-obsidian-950/90 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-widest text-stone-400">
                    Acquisition Total
                  </span>
                  <span className="font-cinzel text-xl text-gold-300 font-semibold">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-stone-500 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                  <span>Includes GIA verification, secure armored delivery, and insurance.</span>
                </div>

                <button
                  disabled={isCheckingOut}
                  onClick={handleCheckoutDemo}
                  className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  data-cursor="pointer"
                >
                  {isCheckingOut ? (
                    <span>Securing Protocol...</span>
                  ) : (
                    <>
                      <span>Proceed to Private Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

