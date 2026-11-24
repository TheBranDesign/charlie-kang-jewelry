import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Cart state stored in localStorage for persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('CHARLIE KANG_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('CHARLIE KANG_wishlist');
      return saved ? JSON.parse(saved) : ['solitaire-celeste', 'etoile-collier'];
    } catch {
      return ['solitaire-celeste', 'etoile-collier'];
    }
  });

  // UI Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewFinish, setQuickViewFinish] = useState('yellow');
  const [toasts, setToasts] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('CHARLIE KANG_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('CHARLIE KANG_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [wishlist]);

  // Luxury Web Audio Synthesizer (Micro-interaction acoustic chime)
  const playLuxuryChime = (type = 'click') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      if (type === 'bell') {
        osc.frequency.setValueAtTime(1046.5, ctx.currentTime); // C6
        osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.15); // E6
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      } else if (type === 'add') {
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
        osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.12); // A6
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      } else {
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (err) {
      // Audio autoplay policy handled silently
    }
  };

  // Toast System
  const addToast = (title, message, options = {}) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 4);
    const newToast = { id, title, message, ...options };
    setToasts((prev) => [newToast, ...prev].slice(0, 3));
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product, finishId = 'yellow', quantity = 1) => {
    playLuxuryChime('add');
    const finish = product.finishes?.find((f) => f.id === finishId) || product.finishes?.[0] || { id: 'yellow', label: '18K Yellow Gold' };
    const cartItemId = `${product.id}-${finish.id}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          productId: product.id,
          product,
          finish,
          quantity,
          price: product.price,
          addedAt: Date.now(),
        },
      ];
    });

    addToast(
      'Acquisition Added',
      `${product.name} (${finish.label}) has been placed in your private bag.`,
      { image: product.images[finish.id] || product.images.yellow }
    );

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    playLuxuryChime('click');
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    playLuxuryChime('click');
    const isSaved = wishlist.includes(product.id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((id) => id !== product.id));
      addToast('Removed from Private Vault', `${product.name} removed from your saved pieces.`);
    } else {
      setWishlist((prev) => [...prev, product.id]);
      addToast(
        'Reserved in Private Vault',
        `${product.name} is now preserved in your curated wishlist.`,
        { image: product.images.yellow }
      );
    }
  };

  // Quick view
  const openQuickView = (product, finishId = 'yellow') => {
    playLuxuryChime('bell');
    setQuickViewProduct(product);
    setQuickViewFinish(finishId);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  // Computed values
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Currency formatting
  const formatPrice = (amount) => {
    const rates = { USD: 1, EUR: 0.92, GBP: 0.79 };
    const symbols = { USD: '$', EUR: '€', GBP: '£' };
    const converted = Math.round(amount * (rates[currency] || 1));
    return `${symbols[currency]}${converted.toLocaleString('en-US')}`;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        quickViewProduct,
        quickViewFinish,
        setQuickViewFinish,
        openQuickView,
        closeQuickView,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        toasts,
        addToast,
        removeToast,
        cartTotal,
        cartCount,
        currency,
        setCurrency,
        formatPrice,
        soundEnabled,
        setSoundEnabled,
        playLuxuryChime,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

