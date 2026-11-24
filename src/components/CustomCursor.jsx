import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'card' | 'drag'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Detect touch / mobile device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element the mouse is hovering over
      const target = e.target;
      const interactiveEl = target.closest('button, a, input, select, [data-cursor]');
      
      if (interactiveEl) {
        const customType = interactiveEl.getAttribute('data-cursor');
        const customText = interactiveEl.getAttribute('data-cursor-text');
        
        if (customText) {
          setCursorText(customText);
          setCursorType('text');
        } else if (customType) {
          setCursorType(customType);
          setCursorText('');
        } else {
          setCursorType('hover');
          setCursorText('');
        }
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Center pinpoint */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(${
            cursorType === 'hover' ? 0.3 : 1
          })`,
        }}
      />

      {/* Trailing luxury ring / pill */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border transition-[border-color,background-color] duration-300 ${
          cursorType === 'hover'
            ? 'w-12 h-12 border-gold-400/80 bg-gold-500/10 backdrop-blur-[1px]'
            : cursorType === 'text' || cursorType === 'card'
            ? 'w-20 h-20 border-gold-400 bg-obsidian-950/85 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.3)]'
            : 'w-8 h-8 border-gold-400/35 bg-transparent'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        {cursorText && (
          <span className="font-cinzel text-[9px] uppercase tracking-widest text-gold-300 font-semibold select-none px-2 text-center leading-tight">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};

