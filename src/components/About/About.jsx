import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Skull, Flame, CheckCircle, GitCommit, Coffee, Cpu, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionTitle from '../shared/SectionTitle';
import MangaSFX from '../shared/MangaSFX';
import MarineSeal from '../shared/MarineSeal';
import { sfx } from '../../utils/soundEffects';

/* ─── Haki Power Bar in English ─── */
function HakiBar({ stat, delay, isVisible }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1.5">
        <div>
          <span className="text-treasure-gold font-pirata text-xl tracking-wider mr-2">
            {stat.name}
          </span>
          <p className="text-xs text-parchment/70 font-sans mt-0.5">{stat.subtitle}</p>
        </div>
        <span className="text-treasure-gold font-mono font-bold text-base">{stat.level}%</span>
      </div>
      <div className="h-3.5 w-full rounded-sm bg-black/50 overflow-hidden border border-white/10 p-[1.5px] shadow-inner">
        <motion.div
          className={`h-full rounded-sm bg-gradient-to-r ${stat.color} shadow-lg relative`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${stat.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ─── SBS Corner (Questions to the Architect) in English ─── */
function SBSCorner() {
  return (
    <div className="mt-10 p-6 rounded-sm border-2 border-dashed border-treasure-gold/40 bg-black/35 backdrop-blur relative overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-pirate-red text-white text-[11px] font-black font-mono px-2.5 py-0.5 rounded-sm tracking-widest uppercase">
          SBS CORNER • QUESTIONS TO PRASAD
        </span>
        <span className="text-xs text-parchment/60 font-serif italic">
          Reader Question to the Captain
        </span>
      </div>
      <div className="space-y-2 text-sm text-parchment/90 font-sans">
        <p className="italic">
          <strong className="text-sky-blue not-italic font-mono">Q (Recruiter):</strong> "What is your secret weapon when building scalable full-stack applications?"
        </p>
        <p className="pl-4 border-l-2 border-pirate-red text-parchment">
          <strong className="text-treasure-gold font-pirata text-base">A (Prasad):</strong> "Solid architecture and relentless execution! I map every database relation, isolate API boundaries with strict validation, and connect hardware microcontrollers with real-time websocket pipelines so the ship sails through any traffic storm."
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [barsRef, barsVisible] = useScrollReveal(0.2);
  const { observation, armament, conquerors } = personalInfo.stats;

  const highlights = [
    { icon: CheckCircle, title: 'Reliable Systems', text: 'MERN Stack & Real-Time APIs' },
    { icon: Cpu, title: 'Hardware & IoT', text: 'ESP32 & Sensor Telemetry' },
    { icon: GitCommit, title: 'Clean Architecture', text: 'Version Controlled & Tested' },
    { icon: Coffee, title: 'Production Ready', text: 'Live Billing & Commercial Apps' },
  ];

  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#0B1A30' }}
    >
      {/* ── Manga Screentone ── */}
      <div className="absolute inset-0 manga-screentone opacity-10 pointer-events-none" />

      {/* ── Watermark Compass ── */}
      <motion.div
        className="absolute -right-24 top-20 text-parchment/[0.03] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
      >
        <Compass size={440} strokeWidth={0.5} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle
          title="Captain's Log • About Prasad Gaikawada"
          subtitle="Full-stack engineer and hardware builder charting the frontier of modern web & IoT software"
          icon={Anchor}
        />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mt-8">
          {/* ═══ LEFT — Smoldering Vivre Card ═══ */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, x: -70, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            onMouseEnter={() => sfx.playSlash()}
          >
            {/* English Label above Vivre Card */}
            <div className="flex items-center gap-2 mb-2 select-none">
              <span className="font-mono text-xs text-treasure-gold tracking-widest font-bold uppercase">
                OFFICIAL VIVRE CARD
              </span>
              <span className="text-xs font-mono text-parchment/60 uppercase tracking-widest">
                • LIFE PAPER •
              </span>
            </div>

            <div
              className="vivre-card-burn relative w-full max-w-sm p-7 sm:p-8 rounded-sm shadow-2xl select-none"
              style={{
                background:
                  'linear-gradient(145deg, #f7ecd5 0%, #ecd9b3 35%, #ddc494 70%, #caa973 100%)',
                clipPath:
                  'polygon(2% 0%, 98% 1%, 100% 4%, 99% 96%, 96% 100%, 4% 99%, 0% 96%, 1% 3%)',
              }}
            >
              {/* Smoldering ember flame effect on corner */}
              <div className="absolute top-2 right-2 flex items-center gap-1 text-orange-600">
                <Flame size={15} className="animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-amber-950 tracking-wider uppercase">
                  BURNING TOWARD CODE
                </span>
              </div>

              {/* Vivre Card Header */}
              <div className="text-center mt-3 mb-4">
                <div className="mx-auto w-24 h-24 rounded-full bg-amber-950/10 border-4 border-amber-950/30 flex items-center justify-center text-amber-950 shadow-inner mb-3 overflow-hidden">
                  {personalInfo.photo ? (
                    <img
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top contrast-110 sepia-[0.2]"
                    />
                  ) : (
                    <Anchor size={42} />
                  )}
                </div>
                <p className="text-amber-950 font-mono text-xs font-bold uppercase tracking-[0.25em]">
                  {personalInfo.epithet}
                </p>
              </div>

              {/* Name in bold pirate font */}
              <h3 className="font-pirata text-3xl md:text-4xl text-amber-950 text-center leading-tight mb-1">
                {personalInfo.name}
              </h3>

              <p className="text-center font-serif text-xs text-amber-900/80 mb-4 font-semibold tracking-wider uppercase">
                Software & Hardware Engineer
              </p>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-amber-900/30" />
                <Skull size={15} className="text-amber-900/50" />
                <div className="flex-1 h-px bg-amber-900/30" />
              </div>

              {/* Crew Badge */}
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-amber-100 shadow-md oda-ink-border bg-pirate-red">
                  <Anchor size={12} />
                  Crew: Full-Stack Navigators
                </span>
              </div>

              {/* Resume download button on Vivre Card */}
              <div className="text-center mt-4">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sfx.playBerryChime()}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-950 hover:text-pirate-red underline"
                >
                  <FileText size={13} />
                  <span>Download Official Resume PDF</span>
                </a>
              </div>

              {/* Mini Marine Seal in bottom left */}
              <div className="absolute bottom-2 left-2 pointer-events-none opacity-60">
                <MarineSeal size={50} />
              </div>
            </div>

            <p className="text-[11px] font-mono text-parchment/50 mt-3 text-center">
              *Torn from the engineer's core — constantly moving toward challenging engineering frontiers*
            </p>
          </motion.div>

          {/* ═══ RIGHT — Captain's Bio & Haki Mastery ═══ */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Bio text */}
            <div className="relative mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MangaSFX text="DON!!" size="sm" color="#FFD700" />
                <h3 className="font-pirata text-3xl text-treasure-gold">
                  Building Practical & Resilient Software
                </h3>
              </div>

              <p className="text-parchment/85 leading-relaxed text-base md:text-lg font-serif">
                {personalInfo.bio}
              </p>
            </div>

            {/* Core Technical Mastery Bars */}
            <div ref={barsRef} className="bg-black/35 backdrop-blur p-6 rounded-sm border border-white/10 mb-8 shadow-xl">
              <h4 className="font-pirata text-2xl text-treasure-gold mb-5 flex items-center gap-2">
                <Compass size={22} className="text-pirate-red" />
                <span>Core Engineering Disciplines • Full Stack & IoT Mastery</span>
              </h4>
              <HakiBar stat={armament} delay={0.1} isVisible={barsVisible} />
              <HakiBar stat={observation} delay={0.25} isVisible={barsVisible} />
              <HakiBar stat={conquerors} delay={0.4} isVisible={barsVisible} />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-deep-sea-light border border-treasure-gold/30 p-3 rounded-sm text-center shadow"
                  >
                    <Icon size={22} className="text-treasure-gold mx-auto mb-1" />
                    <span className="text-xs font-mono font-bold text-parchment block">
                      {h.title}
                    </span>
                    <span className="text-[10px] font-sans text-parchment/60 block mt-0.5">
                      {h.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* SBS Corner */}
            <SBSCorner />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
