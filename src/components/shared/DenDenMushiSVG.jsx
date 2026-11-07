import React from 'react';
import { motion } from 'framer-motion';

// Authentic Transponder Snail (Den Den Mushi) in Pure English & Zero Emojis
export default function DenDenMushiSVG({
  isRinging = false,
  size = 240,
  className = '',
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-block cursor-pointer select-none group ${className}`}
      style={{ width: size, height: size * 0.85 }}
    >
      {/* Sound waves when ringing */}
      {isRinging && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none">
          <motion.span
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="font-manga text-treasure-gold text-2xl tracking-widest drop-shadow-[0_0_12px_#FFD700]"
          >
            PURU-PURU-PURU...!!
          </motion.span>
        </div>
      )}

      <motion.svg
        viewBox="0 0 240 200"
        className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
        animate={isRinging ? { rotate: [-4, 4, -4, 4, 0], y: [0, -6, 0] } : { y: [0, -4, 0] }}
        transition={
          isRinging
            ? { repeat: Infinity, duration: 0.35 }
            : { repeat: Infinity, duration: 4, ease: 'easeInOut' }
        }
      >
        <defs>
          {/* Snail skin gradient */}
          <radialGradient id="snailSkin" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F9E79F" />
            <stop offset="60%" stopColor="#F5B041" />
            <stop offset="100%" stopColor="#D35400" />
          </radialGradient>
          {/* Shell gradient */}
          <radialGradient id="shellGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#D98880" />
            <stop offset="50%" stopColor="#C0392B" />
            <stop offset="100%" stopColor="#641E16" />
          </radialGradient>
          {/* Receiver Bakelite plastic gradient */}
          <linearGradient id="receiverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#566573" />
            <stop offset="50%" stopColor="#2C3E50" />
            <stop offset="100%" stopColor="#17202A" />
          </linearGradient>
        </defs>

        {/* ── Coiled Telephone Cord connecting receiver to shell ── */}
        <path
          d="M 125 75 Q 115 90 120 105 Q 110 115 115 125 Q 105 135 112 145"
          fill="none"
          stroke="#17202A"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* ── Snail Muscular Foot / Base ── */}
        <path
          d="M 25 170 C 35 155 70 162 110 162 C 160 162 210 160 225 170 C 235 178 220 185 190 188 C 130 192 60 192 30 188 C 15 185 15 178 25 170 Z"
          fill="url(#snailSkin)"
          stroke="#5A2E07"
          strokeWidth="3.5"
        />
        {/* Foot fringe wrinkles */}
        <path d="M 40 182 Q 55 186 70 182" fill="none" stroke="#A04000" strokeWidth="2" opacity="0.6" />
        <path d="M 85 182 Q 105 186 125 182" fill="none" stroke="#A04000" strokeWidth="2" opacity="0.6" />
        <path d="M 140 182 Q 165 186 190 182" fill="none" stroke="#A04000" strokeWidth="2" opacity="0.6" />

        {/* ── Big Round Telephone Shell ── */}
        <circle
          cx="145"
          cy="125"
          r="54"
          fill="url(#shellGrad)"
          stroke="#4A1208"
          strokeWidth="4"
        />
        {/* Shell Spiral Rings */}
        <circle cx="145" cy="125" r="42" fill="none" stroke="#4A1208" strokeWidth="3" opacity="0.75" />
        <circle cx="145" cy="125" r="28" fill="none" stroke="#4A1208" strokeWidth="2.5" opacity="0.8" />
        <circle cx="145" cy="125" r="14" fill="#F4D03F" stroke="#4A1208" strokeWidth="2.5" />
        <circle cx="145" cy="125" r="5" fill="#4A1208" />

        {/* Metal Receiver Cradle on top of Shell */}
        <path
          d="M 125 72 L 132 80 L 158 80 L 165 72 Z"
          fill="#7F8C8D"
          stroke="#17202A"
          strokeWidth="2.5"
        />
        <rect x="135" y="80" width="20" height="8" fill="#566573" stroke="#17202A" strokeWidth="2" />

        {/* ── Telephone Handset / Receiver ── */}
        <motion.g
          animate={
            isRinging
              ? { y: [-6, 2, -6], rotate: [-8, 8, -8] }
              : { y: 0, rotate: 0 }
          }
          transition={{ repeat: Infinity, duration: 0.2 }}
        >
          {/* Earpiece Left */}
          <ellipse cx="112" cy="62" rx="14" ry="11" fill="url(#receiverGrad)" stroke="#0E161D" strokeWidth="3" />
          {/* Mouthpiece Right */}
          <ellipse cx="178" cy="62" rx="14" ry="11" fill="url(#receiverGrad)" stroke="#0E161D" strokeWidth="3" />
          {/* Connecting Handle */}
          <path
            d="M 116 62 Q 145 44 174 62"
            fill="none"
            stroke="url(#receiverGrad)"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M 116 62 Q 145 44 174 62"
            fill="none"
            stroke="#0E161D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Marine Emblem on Handset */}
          <circle cx="145" cy="51" r="5" fill="#F4D03F" stroke="#7D6608" strokeWidth="1" />
        </motion.g>

        {/* ── Snail Head & Long Neck ── */}
        <path
          d="M 35 172 C 30 145 35 110 50 95 C 65 80 82 86 85 105 C 88 125 90 148 105 165"
          fill="url(#snailSkin)"
          stroke="#5A2E07"
          strokeWidth="3.5"
        />

        {/* ── Expressive Eye Stalks ── */}
        {/* Left Eyestalk */}
        <path d="M 52 95 Q 46 72 45 52" fill="none" stroke="#5A2E07" strokeWidth="7" strokeLinecap="round" />
        <path d="M 52 95 Q 46 72 45 52" fill="none" stroke="url(#snailSkin)" strokeWidth="4" strokeLinecap="round" />
        {/* Left Eye Bulb */}
        <circle cx="45" cy="50" r="14" fill="#FFFFFF" stroke="#5A2E07" strokeWidth="3.5" />
        <ellipse cx="46" cy="49" rx="6" ry="7" fill="#17202A" />
        <circle cx="44" cy="47" r="2.5" fill="#FFFFFF" />
        {/* Eyelid */}
        <path
          d="M 32 46 Q 45 40 58 46"
          fill="none"
          stroke="#D35400"
          strokeWidth="2.5"
        />

        {/* Right Eyestalk */}
        <path d="M 72 96 Q 76 70 78 50" fill="none" stroke="#5A2E07" strokeWidth="7" strokeLinecap="round" />
        <path d="M 72 96 Q 76 70 78 50" fill="none" stroke="url(#snailSkin)" strokeWidth="4" strokeLinecap="round" />
        {/* Right Eye Bulb */}
        <circle cx="78" cy="48" r="14" fill="#FFFFFF" stroke="#5A2E07" strokeWidth="3.5" />
        <ellipse cx="77" cy="47" rx="6" ry="7" fill="#17202A" />
        <circle cx="75" cy="45" r="2.5" fill="#FFFFFF" />
        {/* Eyelid */}
        <path
          d="M 65 44 Q 78 38 91 44"
          fill="none"
          stroke="#D35400"
          strokeWidth="2.5"
        />

        {/* ── Mouth / Microphone ── */}
        <path
          d="M 50 126 Q 62 136 74 126"
          fill="none"
          stroke="#5A2E07"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="56" cy="136" r="4.5" fill="#7F8C8D" stroke="#17202A" strokeWidth="1.5" />
        <line x1="56" y1="136" x2="65" y2="148" stroke="#17202A" strokeWidth="1.5" />

        {/* Blush cheeks */}
        <ellipse cx="42" cy="115" rx="6" ry="4" fill="#E74C3C" opacity="0.35" />
        <ellipse cx="80" cy="116" rx="6" ry="4" fill="#E74C3C" opacity="0.35" />
      </motion.svg>

      {/* Hover tooltip hint in English */}
      <div className="text-center mt-2">
        <span className="text-[11px] font-mono tracking-widest text-treasure-gold bg-deep-sea px-3 py-1 rounded-sm border border-treasure-gold/40 shadow group-hover:border-treasure-gold transition-colors uppercase">
          CLICK TO TEST TRANSPONDER
        </span>
      </div>
    </div>
  );
}
