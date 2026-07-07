import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: 'SQL & Python', label: 'Core Technical Axis' },
    { value: 'EDA Mastery', label: 'Exploratory Analytics' },
    { value: 'BI Architecture', label: 'Interactive Dashboards' }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-card/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Section Heading Area */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">01 // Profile</p>
          <h2 className="text-3xl font-bold tracking-tight">About My Analytical Framework</h2>
          <div className="h-1 w-12 bg-brand-accent mt-4 rounded-full" />
        </div>

        {/* Biography Narratives */}
        <div className="lg:col-span-8 space-y-8">
          <p className="text-lg text-brand-textMuted leading-relaxed">
            I approach datasets as complex puzzles that hold strategic business answers. My methodology centers around designing comprehensive data environments—extracting clean information via structured SQL models, scripting automated transformation processes in Python, and building enterprise dashboards that reveal immediate visual insights.
          </p>

          <p className="text-base text-brand-textMuted leading-relaxed">
            Rather than simply generating static chart components, my primary objective is isolating trends, optimizing resource allocations, and validating business performance indicators. I focus on clean architecture, optimized query structures, and highly scannable visual tools designed for operational decision makers.
          </p>

          {/* Value Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 bg-brand-card rounded border border-brand-card/50 hover:border-brand-accent/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-xs text-brand-textMuted uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}