import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Skull, Compass, Map, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useScrollReveal';
import OceanWaves from '../shared/OceanWaves';
import StrawHatFlag from '../shared/StrawHatFlag';
import MarineSeal from '../shared/MarineSeal';
import MangaSFX from '../shared/MangaSFX';
import PiratePortraitSVG from '../shared/PiratePortraitSVG';
import { sfx } from '../../utils/soundEffects';

/* ─── Animated Star Field ───────────────────────────────────────────── */
function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 50,
        size: Math.random() * 2.5 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0, 1, 0.4, 1, 0], scale: [1, 1.4, 1, 1.2, 1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Wanted Poster ─────────────────────────────────────────────────── */
function WantedPoster({ bounty }) {
  return (
    <div className="relative z-10 flex items-center justify-center">
      {/* Floating Manga SFX: DON!! on left in English */}
      <div className="hidden lg:block absolute right-[calc(100%+32px)] top-1/4 pointer-events-none z-20">
        <MangaSFX text="DON!!" size="lg" color="#FFD700" />
      </div>

      {/* Floating Manga SFX: DODON!! on right in English */}
      <div className="hidden lg:block absolute left-[calc(100%+32px)] bottom-1/4 pointer-events-none z-20">
        <MangaSFX text="DODON!!" size="lg" color="#FFD700" />
      </div>

      <motion.div
        /* SLAM entrance: drops from above, bounces */
        initial={{ y: -700, opacity: 0, rotateX: 18 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{
          type: 'spring',
          damping: 14,
          stiffness: 120,
          mass: 1.4,
          delay: 0.2,
        }}
        onAnimationComplete={() => sfx.playDon()}
        className="relative"
      >
        {/* Outer poster frame with distressed border */}
        <div
          className="relative mx-auto w-[330px] sm:w-[390px] md:w-[430px] rounded-sm select-none"
          style={{
            border: '7px solid #4A2810',
            boxShadow:
              'inset 0 0 35px rgba(110,48,10,0.45), 0 25px 70px rgba(0,0,0,0.7), 0 0 0 2px #2E1505',
          }}
        >
          {/* Parchment background with aged gradients */}
          <div
            className="px-6 py-6 sm:px-7 sm:py-8 flex flex-col items-center relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, #F5E6C8 0%, #E8D5A8 25%, #DEC595 50%, #E8D5A8 75%, #F5E6C8 100%)',
            }}
          >
            {/* Corner brass tacks with shadows */}
            {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map(
              (pos, i) => (
                <span
                  key={i}
                  className={`absolute ${pos} w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-200 via-amber-600 to-amber-900 border border-amber-950 shadow-md`}
                />
              )
            )}

            {/* ── WANTED ── */}
            <h2
              className="font-pirata text-5xl sm:text-6xl md:text-7xl tracking-widest leading-none select-none text-center"
              style={{
                color: '#6E1414',
                textShadow: '2px 2px 0px rgba(255,255,255,0.4), 3px 3px 6px rgba(0,0,0,0.3)',
              }}
            >
              WANTED
            </h2>

            {/* Decorative line with skull */}
            <div className="w-full my-2 flex items-center gap-2">
              <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#5C2E00] to-transparent" />
              <Skull size={15} className="text-[#5C2E00] opacity-75" />
              <span className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#5C2E00] to-transparent" />
            </div>

            {/* ── Photo Area: Luffy Pirate Portrait or User Photo ── */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-[190px] h-[230px] sm:w-[210px] sm:h-[250px] rounded-sm flex flex-col items-center justify-center overflow-hidden shadow-inner"
              style={{
                border: '3.5px solid #4A2810',
                boxShadow: 'inset 0 0 25px rgba(0,0,0,0.3)',
              }}
            >
              {personalInfo.photo ? (
                <div className="relative w-full h-full bg-[#E5D7BF]">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top contrast-110 sepia-[0.2]"
                  />
                  {/* Subtle vintage manga tone */}
                  <div className="absolute inset-0 bg-amber-950/10 mix-blend-multiply pointer-events-none" />
                </div>
              ) : (
                <PiratePortraitSVG />
              )}
            </motion.div>

            {/* ── DEAD OR ALIVE ── */}
            <p
              className="mt-2.5 font-pirata text-lg sm:text-xl tracking-[0.35em] select-none text-center"
              style={{
                color: '#3D1C06',
                textShadow: '1px 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              DEAD OR ALIVE
            </p>

            {/* Thin divider */}
            <div className="w-4/5 my-1.5 h-[1.5px] bg-gradient-to-r from-transparent via-[#5C2E00] to-transparent" />

            {/* ── Prasad Gaikawada Name ── */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="font-pirata text-3xl sm:text-4xl md:text-[42px] text-center leading-tight tracking-wide"
              style={{
                color: '#1a1005',
                textShadow: '1px 1px 0 rgba(255,255,255,0.4)',
              }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* ── Epithet ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-xs sm:text-sm italic font-serif font-bold text-[#5C2E00]"
            >
              &ldquo;{personalInfo.epithet}&rdquo;
            </motion.p>

            {/* Decorative divider */}
            <div className="w-full my-2 flex items-center gap-2">
              <span className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#5C2E00] to-transparent" />
              <Skull size={13} className="text-[#5C2E00]" />
              <span className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#5C2E00] to-transparent" />
            </div>

            {/* ── Bounty with Berry Symbol ── */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 220, damping: 14 }}
              className="text-center w-full"
            >
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-pirata text-2xl sm:text-3xl text-[#6E1414]">B-</span>
                <span
                  className="font-pirata text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-[#6E1414]"
                  style={{
                    textShadow: '1px 2px 4px rgba(110,20,20,0.35)',
                  }}
                >
                  {bounty.toLocaleString()}
                </span>
                <span className="font-pirata text-2xl sm:text-3xl text-[#6E1414]">-</span>
              </div>
            </motion.div>

            {/* ── Official English Marine Notice ── */}
            <p className="mt-2 text-[7px] sm:text-[8px] tracking-[0.1em] font-mono text-[#5C2E00]/75 uppercase text-center max-w-[320px] leading-tight select-none">
              OFFICIAL MARINE HEADQUARTERS NOTICE • ALL ALLIANCES & CONTRACTS SUBJECT TO CAPTAIN AUTHORIZATION
            </p>

            {/* ── Official Arched MARINE Footer ── */}
            <div className="mt-2 text-center w-full">
              <span
                className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.4em] text-[#2c1a0e]/90 select-none"
                style={{ textShadow: '1px 1px 0 rgba(255,255,255,0.5)' }}
              >
                MARINE HQ
              </span>
            </div>

            {/* ── Official Red Marine Stamp in Corner ── */}
            <div className="absolute bottom-3 right-3 pointer-events-none">
              <MarineSeal size={74} />
            </div>
          </div>
        </div>

        {/* Wanted-poster aged tape strip at top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-amber-200/60 rotate-1 rounded-sm shadow-sm pointer-events-none border border-amber-900/20" />
      </motion.div>
    </div>
  );
}

/* ─── CTA Buttons ───────────────────────────────────────────────────── */
function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.7 }}
      className="flex flex-col sm:flex-row items-center gap-4 mt-8 z-10"
    >
      <a
        href="#about"
        onClick={() => sfx.playBerryChime()}
        className="group relative px-7 py-3.5 rounded-sm font-bold text-deep-sea overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl oda-ink-border"
        style={{
          background: 'linear-gradient(135deg, #F5E6C8, #E8D5A8)',
        }}
      >
        <span className="relative z-10 flex items-center gap-2 font-pirata text-lg tracking-wide text-[#3D1C06]">
          <Compass size={19} className="transition-transform group-hover:rotate-90 duration-500 text-pirate-red" />
          Captain's Log
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-treasure-gold/40 to-amber-300/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </a>

      <a
        href="#projects"
        onClick={() => sfx.playSlash()}
        className="group relative px-7 py-3.5 rounded-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl oda-ink-border"
        style={{
          background: 'linear-gradient(135deg, #0B3D91, #1565C0)',
          color: '#F5E6C8',
        }}
      >
        <span className="relative z-10 flex items-center gap-2 font-pirata text-lg tracking-wide text-treasure-gold">
          <Map size={19} className="transition-transform group-hover:scale-110 duration-300 text-sky-blue" />
          Grand Line Projects
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 to-marine-teal/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </a>

      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sfx.playBerryChime()}
        className="group relative px-7 py-3.5 rounded-sm font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl oda-ink-border bg-gradient-to-r from-pirate-red to-pirate-red-dark text-amber-100"
      >
        <span className="relative z-10 flex items-center gap-2 font-pirata text-lg tracking-wide">
          <FileText size={19} className="text-treasure-gold" />
          Official Resume
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}

/* ─── Scroll Indicator ──────────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.1 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
      onClick={() =>
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      <span className="text-[11px] uppercase tracking-[0.25em] text-treasure-gold font-mono font-bold">
        SET SAIL
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} className="text-treasure-gold drop-shadow-[0_0_8px_#FFD700]" />
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero Section ──────────────────────────────────────────────────── */
export default function Hero() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const bounty = useCountUp(personalInfo.bounty, 2200, 0, hasLoaded);

  useEffect(() => {
    const t = setTimeout(() => {
      setHasLoaded(true);
      sfx.playDon();
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0B3D91 55%, #1565C0 100%)',
      }}
    >
      {/* ── Star field ── */}
      <StarField />

      {/* ── Manga Speedlines ── */}
      <div className="absolute inset-0 manga-speedlines opacity-40 pointer-events-none z-0" />

      {/* ── Background Straw-Hat flag ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <StrawHatFlag className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.08]" />
      </motion.div>

      {/* ── Wanted Poster ── */}
      <WantedPoster bounty={bounty} />

      {/* ── Tagline ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-6 text-center text-lg sm:text-xl md:text-2xl font-bold max-w-2xl px-4 z-10 font-pirata tracking-wide"
        style={{
          color: '#FFD700',
          textShadow: '0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.2)',
        }}
      >
        &ldquo;{personalInfo.tagline}&rdquo;
      </motion.p>

      {/* ── CTA Buttons ── */}
      <CTAButtons />

      {/* ── Ocean Waves at bottom ── */}
      <OceanWaves position="bottom" />

      {/* ── Scroll Indicator ── */}
      <ScrollIndicator />
    </section>
  );
}
