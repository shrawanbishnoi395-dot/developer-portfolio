import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import BackgroundGrid from './BackgroundGrid';

export default function Home() {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Clean, high-performance animation configs
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <BackgroundGrid />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.p 
          variants={itemVariants} 
          className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4"
        >
          Data-Driven Strategy & Architecture
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]"
        >
          Transforming Raw Datasets Into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-sky-200">
            Actionable Business Insights
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I'm a professional <span className="text-white font-medium">Aspiring Data Analyst</span> specializing in automated ETL pipelines, analytical dashboarding, and complex exploratory data architectures.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleScrollToProjects}
            className="group flex items-center gap-2 bg-brand-accent text-brand-bg px-6 py-3 rounded font-semibold text-sm hover:bg-white transition-all w-full sm:w-auto justify-center cursor-pointer"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#resume"
            className="flex items-center gap-2 border border-brand-card bg-brand-card/30 text-white px-6 py-3 rounded font-semibold text-sm hover:bg-brand-card transition-all w-full sm:w-auto justify-center"
          >
            Download Resume
            <FiDownload className="text-brand-textMuted" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}