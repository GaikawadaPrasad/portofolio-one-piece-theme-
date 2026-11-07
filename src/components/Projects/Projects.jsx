import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Compass,
  Cpu,
  Coffee,
  Building2,
  Music,
  Activity,
  FolderGit2,
  Layers,
  Radio,
  Smartphone,
  Bot
} from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import MangaSFX from '../shared/MangaSFX';
import { projects } from '../../data/portfolio';
import { sfx } from '../../utils/soundEffects';

const projectIcons = {
  tech: Cpu,
  restaurant: Coffee,
  fortress: Building2,
  enterprise: Building2,
  sky: Music,
  knowledge: Activity,
};

const filterTabs = [
  { id: 'all', label: 'All Islands', count: projects.length, icon: Compass },
  { id: 'fullstack', label: 'Full Stack Web', count: projects.filter(p => p.category === 'fullstack').length, icon: Layers },
  { id: 'iot', label: 'IoT & Hardware', count: projects.filter(p => p.category === 'iot').length, icon: Radio },
  { id: 'mobile_ai', label: 'Mobile & AI', count: projects.filter(p => p.category === 'mobile' || p.category === 'ai').length, icon: Bot },
];

function ProjectCard({ project, index }) {
  const Icon = projectIcons[project.islandType] || FolderGit2;

  return (
    <motion.div
      layout
      className="island-card group relative rounded-sm shadow-xl bg-white/95 backdrop-blur overflow-hidden border-2 border-[#3D2612] hover:shadow-2xl transition-all duration-300 flex flex-col select-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      {/* Top Banner with Ocean Current & Vector Icon */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} overflow-hidden flex items-center justify-center`}>
        {/* Animated wave pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 400 60" preserveAspectRatio="none">
            <path d="M0,30 C50,10 100,50 150,30 C200,10 250,50 300,30 C350,10 400,50 400,30 L400,60 L0,60 Z" fill="white" />
          </svg>
        </div>

        {/* Center Project Vector Icon */}
        <motion.div
          className="p-5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-2xl"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={46} strokeWidth={2} />
        </motion.div>

        {/* Island Name Badge in English */}
        <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-sm text-treasure-gold text-xs font-mono font-bold px-3 py-1.5 rounded-sm shadow-md border border-treasure-gold/40 flex items-center gap-1.5">
          <Compass size={12} className="text-pirate-red" />
          <span>Island: {project.island}</span>
        </div>

        {/* Project Category Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-[#3D2612] text-[11px] font-mono font-bold px-2.5 py-1 rounded-sm shadow flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-pirate-red" />
          <span>{project.badge}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Project Title */}
        <h3 className="font-pirata text-2xl md:text-3xl text-deep-sea mb-1 group-hover:text-pirate-red transition-colors duration-300">
          {project.title}
        </h3>

        {/* Grand Line Sector Coordinates */}
        <span className="text-[11px] font-mono text-deep-sea/60 uppercase tracking-widest mb-3 block font-semibold">
          {project.sector} • {project.magneticLock}
        </span>

        {/* Description */}
        <p className="text-[#3D2612]/85 text-sm leading-relaxed mb-6 flex-1 font-serif">
          {project.description}
        </p>

        {/* Tech Stack Badges with Vector Dots */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-sm bg-deep-sea text-treasure-gold border border-treasure-gold/30 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-treasure-gold" />
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons in English */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playBerryChime()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-pirate-red hover:bg-pirate-red-dark text-parchment font-pirata text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 oda-ink-border"
          >
            <ExternalLink size={15} />
            <span>Land On Island (Demo)</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playSlash()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#3D2612] hover:bg-black text-treasure-gold font-pirata text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 border border-treasure-gold/30"
          >
            <Github size={15} />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fullstack') return project.category === 'fullstack';
    if (activeFilter === 'iot') return project.category === 'iot';
    if (activeFilter === 'mobile_ai') return project.category === 'mobile' || project.category === 'ai';
    return true;
  });

  const handleFilterChange = (filterId) => {
    sfx.playBerryChime();
    setActiveFilter(filterId);
  };

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#F5E6C8' }}
    >
      {/* Old parchment texture overlay */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Map grid lines */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10,22,40,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <MangaSFX text="DODON!!" size="md" color="#C41E3A" />
        </div>

        <SectionTitle
          title="Grand Line Archipelago • Featured Projects"
          subtitle="Every project is a conquered island charted on Prasad's software voyage"
          icon={FolderGit2}
          light={true}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
          {filterTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-mono text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md ${
                  isActive
                    ? 'bg-pirate-red text-parchment oda-ink-border scale-105'
                    : 'bg-white/80 hover:bg-white text-[#3D2612] border border-[#3D2612]/30'
                }`}
              >
                <TabIcon size={16} className={isActive ? 'text-treasure-gold' : 'text-[#3D2612]'} />
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                  isActive ? 'bg-black/30 text-treasure-gold' : 'bg-[#3D2612]/10 text-[#3D2612]'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom decorative anchor line */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4 text-deep-sea/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-[2px] w-24 bg-[#3D2612]/30" />
          <Compass size={18} className="text-pirate-red" />
          <span className="font-pirata text-xl text-[#3D2612] tracking-wider">
            Log Pose locking onto next mission coordinates...
          </span>
          <Compass size={18} className="text-pirate-red" />
          <div className="h-[2px] w-24 bg-[#3D2612]/30" />
        </motion.div>
      </div>
    </section>
  );
}
