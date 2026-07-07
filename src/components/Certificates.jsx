import React from 'react';
import { CERTIFICATES_DATA } from '../constants/portfolioData';
import CertificateCard from './CertificateCard';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-brand-card/20 border-t border-b border-brand-card/30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">04 // Verification</p>
          <h2 className="text-3xl font-bold tracking-tight">Credentials & Certifications</h2>
          <div className="h-1 w-12 bg-brand-accent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES_DATA.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}