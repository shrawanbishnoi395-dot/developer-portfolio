import React from 'react';
import { PROJECTS_DATA } from '../constants/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">03 // Production Work</p>
        <h2 className="text-3xl font-bold tracking-tight">Analytical Case Studies</h2>
        <div className="h-1 w-12 bg-brand-accent mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}