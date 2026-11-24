import React, { useState } from 'react';
import { ShopProvider } from './context/ShopContext';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandManifesto } from './components/BrandManifesto';
import { CollectionShowcase } from './components/CollectionShowcase';
import { BespokeCraftsmanship } from './components/BespokeCraftsmanship';
import { EditorialStory } from './components/EditorialStory';
import { PrivateSalon } from './components/PrivateSalon';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { Toast } from './components/Toast';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ShopProvider>
      <div className="relative min-h-screen bg-obsidian-950 text-stone-200 selection:bg-gold-500/30 selection:text-gold-200 font-sans overflow-x-hidden">
        {/* Subtle Film Grain Noise Texture */}
        <div className="fixed inset-0 pointer-events-none z-30 bg-film-grain opacity-40 mix-blend-overlay" />

        {/* Cinematic Preloader */}
        <Preloader onComplete={() => setIsLoaded(true)} />

        {/* Interactive Desktop Custom Cursor */}
        <CustomCursor />

        {/* Ambient Gold Stardust Canvas */}
        <ParticleCanvas />

        {/* Glassmorphic Sticky Header */}
        <Navbar />

        {/* Main Content Experience */}
        <main>
          <Hero />
          <BrandManifesto />
          <CollectionShowcase />
          <BespokeCraftsmanship />
          <EditorialStory />
          <PrivateSalon />
        </main>

        {/* Luxury Footer */}
        <Footer />

        {/* Modals, Drawers & Overlays */}
        <QuickViewModal />
        <CartDrawer />
        <WishlistDrawer />
        <Toast />
      </div>
    </ShopProvider>
  );
}

export default App;

