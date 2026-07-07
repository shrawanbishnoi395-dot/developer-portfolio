import React from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function CertificateCard({ title, issuer, date, verificationUrl }) {
  return (
    <div className="bg-brand-card p-6 rounded border border-brand-card/50 hover:border-brand-accent/30 transition-all duration-300 flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-brand-accent p-3 bg-brand-bg rounded group-hover:scale-105 transition-transform">
          <FiAward />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-brand-accent transition-colors">
            {title}
          </h3>
          <p className="text-xs text-brand-textMuted mt-1">
            {issuer} &bull; <span className="font-mono">{date}</span>
          </p>
        </div>
      </div>
      
      <a 
        href={verificationUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="text-brand-textMuted hover:text-white p-2 text-lg transition-colors"
        aria-label={`Verify execution of ${title}`}
      >
        <FiExternalLink />
      </a>
    </div>
  );
}