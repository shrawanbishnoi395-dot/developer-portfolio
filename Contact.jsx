import React, { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../constants/navigation';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end production simulation safe handling
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error_empty');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side Channels */}
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">05 // Communication</p>
          <h2 className="text-3xl font-bold tracking-tight">Initiate Data Operations</h2>
          <div className="h-1 w-12 bg-brand-accent mt-4 rounded-full mb-8" />
          <p className="text-sm text-brand-textMuted leading-relaxed mb-8">
            Open for permanent roles, optimization strategies, and targeted pipeline consultations. Let's process some metrics.
          </p>

          <div className="space-y-4">
            <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm text-brand-textMuted hover:text-white transition-colors p-3 bg-brand-card/40 rounded border border-brand-card/20">
              <FiMail className="text-brand-accent text-lg" /> analytics@example.com
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-brand-textMuted hover:text-white transition-colors p-3 bg-brand-card/40 rounded border border-brand-card/20">
              <FiLinkedin className="text-brand-accent text-lg" /> linkedin.com/in/username
            </a>
          </div>
        </div>

        {/* Right Side Form Panel */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-brand-card p-8 rounded border border-brand-card/50 space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-brand-textMuted mb-2 tracking-wider">Identity / Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-brand-bg border border-brand-card/80 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-accent text-white transition-colors" 
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-brand-textMuted mb-2 tracking-wider">Communication Vector / Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-brand-bg border border-brand-card/80 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-accent text-white transition-colors" 
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-brand-textMuted mb-2 tracking-wider">Message Scope</label>
              <textarea 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-brand-bg border border-brand-card/80 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-accent text-white transition-colors resize-none" 
                placeholder="Specify target requirements..."
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-accent text-brand-bg py-3 rounded font-semibold text-sm hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Dispatch Signal <FiSend />
            </button>

            {status === 'success' && (
              <p className="text-xs text-emerald-400 font-mono mt-2">// Stream verified. Signal transmitted perfectly.</p>
            )}
            {status === 'error_empty' && (
              <p className="text-xs text-rose-400 font-mono mt-2">// Pipeline failure. Ensure all inputs are parsed.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}