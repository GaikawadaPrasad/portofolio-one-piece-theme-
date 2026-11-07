import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Flame, Cpu } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import DevilFruitSVG from '../shared/DevilFruitSVG';
import MangaSFX from '../shared/MangaSFX';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skills } from '../../data/portfolio';
import { sfx } from '../../utils/soundEffects';

/* ── Floating ocean bubbles ── */
const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: Math.random() * 10 + 12,
  opacity: Math.random() * 0.25 + 0.08,
}));

const categoryAccent = {
  Paramecia: {
    glow: 'hover:shadow-[0_0_35px_rgba(196,30,58,0.45)]',
    bar: 'from-pirate-red via-red-500 to-amber-400',
    border: 'border-pirate-red/40 hover:border-pirate-red',
    badge: 'bg-pirate-red/20 text-red-300 border-pirate-red/50',
    tag: 'text-red-400',
  },
  Zoan: {
    glow: 'hover:shadow-[0_0_35px_rgba(46,125,50,0.45)]',
    bar: 'from-green-600 via-emerald-500 to-lime-400',
    border: 'border-green-600/40 hover:border-green-500',
    badge: 'bg-green-900/30 text-emerald-300 border-green-500/50',
    tag: 'text-emerald-400',
  },
  Logia: {
    glow: 'hover:shadow-[0_0_35px_rgba(11,61,145,0.55)]',
    bar: 'from-ocean-blue via-blue-500 to-cyan-300',
    border: 'border-ocean-blue/40 hover:border-sky-400',
    badge: 'bg-blue-900/30 text-sky-300 border-ocean-blue/50',
    tag: 'text-sky-400',
  },
};

/* ── Devil Fruit Card with Karakusa Spirals & Pure English ── */
function DevilFruitCard({ fruit, category, index }) {
  const accent = categoryAccent[category] ?? categoryAccent.Paramecia;

  return (
    <motion.div
      onMouseEnter={() => sfx.playBerryChime()}
      className={`group relative rounded-sm border ${accent.border}
        bg-deep-sea-light/80 backdrop-blur-md p-5 flex flex-col items-center text-center
        transition-all duration-300 cursor-pointer select-none
        hover:-translate-y-2.5 ${accent.glow} shadow-xl`}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
    >
      {/* Devil Fruit Spiral SVG illustration */}
      <div className="relative mb-3 flex items-center justify-center">
        <DevilFruitSVG
          type={fruit.fruitType}
          size={58}
          className="transition-transform duration-500 group-hover:scale-115 group-hover:rotate-6"
        />
      </div>

      {/* English Devil Fruit Name */}
      <h4 className="font-pirata text-xl text-treasure-gold leading-tight mb-1 group-hover:text-amber-300 transition-colors">
        {fruit.name}
      </h4>

      {/* Technical Skill Name */}
      <p className="text-xs font-mono font-semibold text-parchment/90 mb-3 bg-black/50 px-2 py-0.5 rounded-sm border border-white/10">
        {fruit.skill}
      </p>

      {/* Haki Energy Power Level Bar */}
      <div className="w-full mt-auto">
        <div className="flex justify-between text-[11px] font-mono text-parchment/60 mb-1">
          <span>Haki Power</span>
          <span className={`font-bold ${accent.tag}`}>{fruit.level}%</span>
        </div>
        <div className="h-2 w-full rounded-sm bg-black/60 overflow-hidden border border-white/10 p-[1px]">
          <motion.div
            className={`h-full rounded-sm bg-gradient-to-r ${accent.bar}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${fruit.level}%` }}
            transition={{ duration: 1.1, delay: index * 0.08 + 0.25, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Category Row in English ── */
function CategoryRow({ cat, catIndex }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  const accent = categoryAccent[cat.category] ?? categoryAccent.Paramecia;

  return (
    <motion.div
      ref={ref}
      className="mb-20 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Category Header in English */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <MangaSFX text={cat.sfx} size="md" color="#FFD700" />

          <div>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-sm text-xs font-mono font-black uppercase tracking-widest border ${accent.badge}`}>
                {cat.classBadge}
              </span>
              <span className="text-xs font-mono text-parchment/50 uppercase tracking-widest">
                SKILL CLASS
              </span>
            </div>
            <h3 className="font-pirata text-3xl md:text-4xl text-treasure-gold mt-1">
              {cat.category} &mdash;{' '}
              <span className="text-parchment font-serif text-2xl font-normal">
                {cat.categoryLabel}
              </span>
            </h3>
          </div>
        </div>

        <p className="text-sm text-parchment/65 max-w-md font-sans italic">
          &ldquo;{cat.description}&rdquo;
        </p>
      </div>

      {/* Grid of 5 Devil Fruits */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {cat.fruits.map((fruit, idx) => (
          <DevilFruitCard
            key={fruit.name}
            fruit={fruit}
            category={cat.category}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1565C0 0%, #0B3D91 30%, #0A1628 100%)',
      }}
    >
      {/* Manga Screentone */}
      <div className="absolute inset-0 manga-screentone opacity-15 pointer-events-none" />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((b) => (
          <motion.span
            key={b.id}
            className="absolute rounded-full border border-sky-300/40 bg-sky-200/10"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: '-20px',
              opacity: b.opacity,
            }}
            animate={{ y: [0, -900], x: [0, Math.sin(b.id) * 40] }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Devil Fruit Powers • Technical Arsenal"
          subtitle="Battle-ready frontend, backend, IoT, and cloud engineering capabilities"
          icon={Zap}
        />

        <div className="mt-14">
          {skills.map((cat, catIdx) => (
            <CategoryRow key={cat.category} cat={cat} catIndex={catIdx} />
          ))}
        </div>
      </div>
    </section>
  );
}
