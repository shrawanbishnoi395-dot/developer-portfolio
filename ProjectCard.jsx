import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ title, description, tags, github, demo }) {
  return (
    <div className="bg-brand-card rounded border border-brand-card/50 hover:border-brand-accent/30 transition-all duration-300 flex flex-col h-full group overflow-hidden">
      {/* Structural Minimal Visual Placeholder */}
      <div className="h-48 w-full bg-slate-900 flex items-center justify-center relative border-b border-brand-card">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card/20 to-transparent" />
        <span className="text-xs font-mono uppercase tracking-widest text-brand-textMuted group-hover:text-brand-accent transition-colors">
          // Analytics Visualizer Engine
        </span>
      </div>

      {/* Card Metadata Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-brand-textMuted leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Dynamic Tags Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[11px] font-mono px-2.5 py-1 bg-brand-bg text-brand-accent rounded border border-brand-card"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Actions Anchor System */}
        <div className="flex items-center gap-4 pt-4 border-t border-brand-card/50">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-brand-textMuted hover:text-white transition-colors"
          >
            <FiGithub className="text-sm" /> Codebase
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline transition-colors ml-auto"
          >
            Live Insights <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}