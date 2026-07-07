import React from 'react';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '../constants/navigation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-brand-bg border-t border-brand-card py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div>
          <p className="text-sm font-medium">Insights<span className="text-brand-accent">.Hub</span></p>
          <p className="text-xs text-brand-textMuted mt-1">
            &copy; {currentYear} All rights reserved. Production analytics interface.
          </p>
        </div>

        {/* Dynamic Nav Anchors */}
        <div className="flex flex-wrap justify-center gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className="text-xs text-brand-textMuted hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Direct Channel Access Icons */}
        <div className="flex items-center space-x-5 text-lg text-brand-textMuted">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors" aria-label="GitHub Profile">
            <FiGithub />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors" aria-label="LinkedIn Profile">
            <FiLinkedin />
          </a>
          <a href={SOCIAL_LINKS.email} className="hover:text-brand-accent transition-colors" aria-label="Email Channel">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}