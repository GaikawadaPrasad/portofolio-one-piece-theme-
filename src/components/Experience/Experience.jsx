import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Award, MapPin, CheckCircle } from 'lucide-react';
import { experience } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionTitle from '../shared/SectionTitle';
import MangaSFX from '../shared/MangaSFX';
import { sfx } from '../../utils/soundEffects';

function TimelineCard({ entry, index }) {
  const [ref, isVisible] = useScrollReveal(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full mb-14 md:mb-20 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Card Container */}
      <motion.div
        className={`w-full md:w-5/12 ml-16 md:ml-0 ${
          isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
        }`}
        initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
      >
        {/* Year Badge & English SFX */}
        <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
          <motion.span
            className="inline-block px-4 py-1.5 rounded-sm bg-treasure-gold text-deep-sea text-xs font-mono font-black tracking-wider shadow-md border border-amber-900/30 uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {entry.year}
          </motion.span>
          <span className="font-manga text-sm text-treasure-gold/80 tracking-widest uppercase">
            {entry.sfx}
          </span>
        </div>

        {/* Card Body */}
        <motion.div
          onMouseEnter={() => sfx.playSlash()}
          className="relative p-6 rounded-sm bg-deep-sea-light/85 backdrop-blur-md border border-treasure-gold/30 shadow-2xl hover:border-treasure-gold transition-all duration-300 group cursor-default"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          {/* Rank Title in English */}
          <h3 className="font-pirata text-3xl text-treasure-gold mb-1 group-hover:text-amber-300 transition-colors">
            {entry.role}
          </h3>

          {/* Actual Role */}
          <p className="text-parchment font-serif font-bold text-base mb-1">
            {entry.actualRole}
          </p>

          {/* Company with Anchor */}
          <div
            className={`flex items-center gap-1.5 mb-4 ${
              isLeft ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <Anchor className="w-4 h-4 text-sky-blue" />
            <span className="text-sky-blue font-mono font-bold text-xs tracking-wider">
              {entry.company}
            </span>
          </div>

          {/* Description */}
          <p className="text-parchment/80 text-sm leading-relaxed font-serif mb-4">
            {entry.description}
          </p>

          {/* Milestone Badge in English */}
          <div className={`flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-treasure-gold bg-black/40 px-2.5 py-1 rounded-sm border border-treasure-gold/30">
              <CheckCircle size={12} className="text-emerald-400" />
              <span>{entry.badge}</span>
            </span>
          </div>

          {/* Active edge highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-treasure-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </motion.div>

      {/* Center Number Marker */}
      <motion.div
        className="absolute left-5 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: 0.1,
          type: 'spring',
          stiffness: 220,
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-treasure-gold via-amber-600 to-amber-900 border-2 border-deep-sea flex items-center justify-center text-deep-sea font-pirata text-2xl font-black shadow-[0_0_20px_rgba(255,215,0,0.5)] select-none">
          {index + 1}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [lineRef, lineVisible] = useScrollReveal(0.05);

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0F2240 50%, #0B3D91 100%)',
      }}
    >
      {/* Manga Screentone */}
      <div className="absolute inset-0 manga-screentone opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <MangaSFX text="BABAN!!" size="md" color="#FFD700" />
        </div>

        <SectionTitle
          title="The Voyage Log • Milestones & Expeditions"
          subtitle="Battle-tested milestones charted across client, production, and IoT systems"
          icon={MapPin}
        />

        {/* Timeline Container */}
        <div ref={lineRef} className="relative mt-16 md:mt-24">
          {/* Center Route Line */}
          <motion.div
            className="absolute top-0 bottom-0 left-[22px] md:left-1/2 md:-translate-x-1/2 w-[3px] bg-gradient-to-b from-treasure-gold via-pirate-red to-ocean-blue rounded-full origin-top shadow-[0_0_12px_rgba(255,215,0,0.4)]"
            initial={{ scaleY: 0 }}
            animate={lineVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Experience Entries */}
          {experience.map((entry, index) => (
            <TimelineCard key={entry.year} entry={entry} index={index} />
          ))}

          {/* Bottom Destination: Next Island */}
          <motion.div
            className="relative flex flex-col items-center mt-12 z-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-treasure-gold to-amber-700 flex items-center justify-center text-deep-sea shadow-[0_0_30px_rgba(255,215,0,0.8)] border-2 border-white select-none mb-3">
              <Award size={32} />
            </div>
            <h4 className="font-pirata text-2xl md:text-3xl text-treasure-gold tracking-wide">
              The Adventure Continues &mdash; Next Mission: Scaling Your Vision!
            </h4>
            <p className="font-mono text-xs text-parchment/60 mt-1 uppercase tracking-widest">
              OPEN FOR FULL-TIME ALLIANCES & ARCHITECTURAL CONSULTATIONS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
