import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SALONS } from '../data/products';
import { MapPin, Phone, Calendar, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PrivateSalon = () => {
  const { addToast, playLuxuryChime } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Salon Booking Modal state
  const [bookingCity, setBookingCity] = useState('Paris');
  const [bookingDate, setBookingDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    playLuxuryChime('bell');
    setIsSubscribed(true);
    addToast(
      'Private Salon Invitation Issued',
      `An encrypted invitation to the Maison CHARLIE KANG Private Salon has been dispatched to ${newsletterEmail}.`
    );
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;
    playLuxuryChime('bell');
    setIsBooked(true);
    addToast(
      'Private Salon Appointment Confirmed',
      `Dear ${clientName}, our High Jewelry Concierge in ${bookingCity} will greet you on ${bookingDate || 'your selected date'}.`
    );
  };

  return (
    <section id="salon" className="relative py-28 md:py-36 bg-obsidian-950 text-stone-100 overflow-hidden border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Salon Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-sans uppercase tracking-[0.3em] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Salons Privés & Conciergerie</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-100">
            Private Viewings & Appointments
          </h2>
          <p className="font-sans text-stone-400 text-xs sm:text-sm font-light mt-4 tracking-wide max-w-xl mx-auto">
            Experience our High Jewelry creations in the absolute discretion of our private
            salons in Paris, New York, and Geneva.
          </p>
        </div>

        {/* 3 Salons Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SALONS.map((salon) => (
            <motion.div
              key={salon.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel border border-gold-500/20 overflow-hidden group hover:border-gold-500/50 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={salon.image}
                  alt={salon.city}
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-cinzel text-xl text-gold-300 font-medium tracking-wider">
                  Maison CHARLIE KANG &bull; {salon.city}
                </h3>
                <div className="space-y-2 text-xs font-sans text-stone-300 font-light">
                  <p className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span>{salon.address}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span>{salon.phone}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="text-stone-400">{salon.hours}</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setBookingCity(salon.city);
                    playLuxuryChime('click');
                    const formEl = document.getElementById('appointment-form');
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full mt-2 py-2.5 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300"
                  data-cursor="pointer"
                >
                  Request Salon In {salon.city}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Booking & Frosted Glass Newsletter Two-Column Layout */}
        <div id="appointment-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Private Concierge Appointment Form */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 border border-gold-500/25">
            <h3 className="font-serif text-2xl text-stone-100 font-normal mb-2">
              Reserve Your Private Salon Viewing
            </h3>
            <p className="font-sans text-xs text-stone-400 font-light mb-6">
              Our High Jewelry Specialists will prepare your curated selection of solitaires and
              pieces uniques.
            </p>

            {isBooked ? (
              <div className="p-8 text-center bg-gold-500/10 border border-gold-400/40 space-y-3">
                <CheckCircle2 className="w-8 h-8 text-gold-400 mx-auto" />
                <h4 className="font-cinzel text-lg text-gold-200">
                  Appointment Request Received
                </h4>
                <p className="font-sans text-xs text-stone-300 max-w-md mx-auto">
                  A concierge protocol dossier will be confirmed via phone or encrypted email.
                </p>
                <button
                  onClick={() => setIsBooked(false)}
                  className="text-xs text-gold-400 underline underline-offset-4 font-sans uppercase tracking-widest mt-2"
                >
                  Reserve Another Date
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-stone-400 mb-1.5">
                      Salon Location
                    </label>
                    <select
                      value={bookingCity}
                      onChange={(e) => setBookingCity(e.target.value)}
                      className="w-full bg-obsidian-900 border border-stone-800 text-stone-200 px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-gold-500/70"
                    >
                      <option value="Paris">16 Place Vendôme, Paris</option>
                      <option value="New York">Madison Avenue, New York</option>
                      <option value="Geneva">Rue du Rhône, Genève</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-stone-400 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      required
                      className="w-full bg-obsidian-900 border border-stone-800 text-stone-200 px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-gold-500/70"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-stone-400 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lady Vivienne Spencer"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="w-full bg-obsidian-900 border border-stone-800 text-stone-200 px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-gold-500/70 placeholder:text-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-stone-400 mb-1.5">
                      Email or Telephone
                    </label>
                    <input
                      type="text"
                      placeholder="vspencer@domain.com"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      required
                      className="w-full bg-obsidian-900 border border-stone-800 text-stone-200 px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-gold-500/70 placeholder:text-stone-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300"
                  data-cursor="pointer"
                >
                  Confirm Concierge Request
                </button>
              </form>
            )}
          </div>

          {/* Right: Frosted-Glass VIP Newsletter Panel */}
          <div className="lg:col-span-5 glass-panel p-8 md:p-10 border border-gold-500/25 relative overflow-hidden">
            {/* Shimmer sweep on panel */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 text-gold-400 text-[10px] font-sans uppercase tracking-[0.3em]">
                <Sparkles className="w-3 h-3" />
                <span>The Vendôme Gazette</span>
              </div>

              <h3 className="font-serif text-2xl text-stone-100 font-normal">
                Private Acquisitions Gazette
              </h3>

              <p className="font-sans text-xs text-stone-300 font-light leading-relaxed">
                Receive confidential notifications of new solitaire arrivals, Place Vendôme
                archive exhibitions, and private salon viewings before public disclosure.
              </p>

              {isSubscribed ? (
                <div className="p-4 bg-gold-500/15 border border-gold-400/50 text-gold-200 text-xs font-sans">
                  Merci. Your private dossier has been logged.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your confidential email"
                      required
                      className="w-full bg-obsidian-900/90 border border-stone-700 text-stone-200 px-4 py-3 text-xs font-sans focus:outline-none focus:border-gold-400 placeholder:text-stone-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 border border-gold-500/50 bg-gold-500/10 hover:bg-gold-500 hover:text-obsidian-950 text-gold-200 font-sans text-xs uppercase tracking-[0.25em] transition-all duration-300"
                    data-cursor="pointer"
                  >
                    Request Confidential Gazette
                  </button>
                </form>
              )}

              <p className="font-sans text-[10px] text-stone-500 tracking-wide pt-2">
                Discretion guaranteed. No spam. You may cancel at any moment.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

