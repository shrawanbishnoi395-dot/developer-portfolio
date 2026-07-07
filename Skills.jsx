import React from 'react';
import { SKILLS_DATA } from '../constants/portfolioData';
import { FiLayers } from 'react-icons/fi';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-card/20 border-t border-b border-brand-card/30 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">02 // Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight">The Technical Stack Axis</h2>
          <div className="h-1 w-12 bg-brand-accent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((group, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h3 className="text-xs font-bold text-brand-textMuted uppercase tracking-wider pl-1 border-l border-brand-accent/50">
                {group.category}
              </h3>
              
              <div className="space-y-3">
                {group.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-4 bg-brand-card/60 border border-brand-card/40 rounded flex items-start gap-3 hover:bg-brand-card transition-colors duration-200"
                  >
                    <div className="p-2 bg-brand-bg rounded text-brand-accent text-sm mt-0.5">
                      <FiLayers />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                      <p className="text-xs text-brand-textMuted mt-0.5 leading-normal">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}