import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAVIGATION_LINKS } from '../constants/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor page scroll coordinates to switch between clear and filled backdrop aesthetics
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleScrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Branding Mark */}
        <button 
          onClick={() => handleScrollToSection('home')} 
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Insights<span className="text-brand-accent">.Hub</span>
        </button>

        {/* Desktop Interface Options */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className="text-sm font-medium text-brand-textMuted hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleScrollToSection('contact')}
            className="text-xs font-semibold px-4 py-2 border border-brand-accent text-brand-accent rounded hover:bg-brand-accent/10 transition-all cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle Interface Triggers */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full bg-brand-bg border-b border-brand-card px-6 py-6 md:hidden z-40"
          >
            <div className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className="text-left text-lg font-medium text-brand-textMuted hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleScrollToSection('contact')}
                className="w-full text-center text-sm font-semibold py-3 border border-brand-accent text-brand-accent rounded hover:bg-brand-accent/10 transition-all"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}