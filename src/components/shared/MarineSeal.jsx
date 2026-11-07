import React from 'react';

// Authentic Marine Headquarters Official Vermilion Seal Stamp in English
export default function MarineSeal({ size = 80, className = '' }) {
  return (
    <div
      className={`relative inline-block select-none pointer-events-none opacity-85 mix-blend-multiply ${className}`}
      style={{
        width: size,
        height: size,
        transform: 'rotate(-8deg)',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_4px_rgba(139,0,0,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Distressed outer ink stamp rings */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#9E1B1B"
          strokeWidth="3.5"
          strokeDasharray="90 3 40 2 60 4"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#9E1B1B"
          strokeWidth="1.5"
          strokeDasharray="40 2 80 3"
        />

        {/* Marine Seagull Icon */}
        <path
          d="M 28 38 Q 50 26 72 38 Q 50 32 28 38 Z"
          fill="#9E1B1B"
        />
        <path
          d="M 50 32 L 50 44 M 43 40 L 57 40"
          stroke="#9E1B1B"
          strokeWidth="2"
        />

        {/* English Text: MARINE HQ */}
        <text
          x="50"
          y="62"
          fill="#9E1B1B"
          fontFamily="'Cinzel', serif"
          fontSize="14"
          fontWeight="900"
          letterSpacing="2"
          textAnchor="middle"
        >
          MARINE
        </text>
        <text
          x="50"
          y="76"
          fill="#9E1B1B"
          fontFamily="'Cinzel', serif"
          fontSize="10"
          fontWeight="800"
          letterSpacing="3"
          textAnchor="middle"
        >
          H.Q.
        </text>

        {/* Ink splatter texture */}
        <circle cx="24" cy="52" r="1.2" fill="#9E1B1B" opacity="0.6" />
        <circle cx="76" cy="38" r="1" fill="#9E1B1B" opacity="0.7" />
        <circle cx="48" cy="84" r="1.5" fill="#9E1B1B" opacity="0.5" />
        <circle cx="53" cy="22" r="0.8" fill="#9E1B1B" opacity="0.8" />
      </svg>
    </div>
  );
}
