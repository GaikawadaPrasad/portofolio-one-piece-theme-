import React from 'react';

// Authentic Oda-style manga pirate portrait for the Wanted Poster
export default function PiratePortraitSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={`w-full h-full select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sepia manga paper tone */}
        <radialGradient id="portraitBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#EDE0C8" />
          <stop offset="80%" stopColor="#DAC29E" />
          <stop offset="100%" stopColor="#C4AA82" />
        </radialGradient>
        {/* Manga screentone hatch */}
        <pattern id="hatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#4A3525" strokeWidth="0.7" opacity="0.18" />
        </pattern>
      </defs>

      {/* Sepia Photo Backdrop */}
      <rect width="200" height="240" fill="url(#portraitBg)" />
      <rect width="200" height="240" fill="url(#hatch)" />

      {/* Manga crosshatch vignette borders */}
      <rect x="0" y="0" width="200" height="240" fill="none" stroke="#654321" strokeWidth="2" opacity="0.4" />

      {/* Dramatic Straw Hat Back Brim */}
      <ellipse cx="100" cy="85" rx="72" ry="24" fill="#D4AC0D" stroke="#3D2612" strokeWidth="3.5" />
      <ellipse cx="100" cy="82" rx="72" ry="24" fill="#F1C40F" />

      {/* Straw Hat Crown */}
      <path
        d="M 52 82 C 54 36 146 36 148 82 Z"
        fill="#F4D03F"
        stroke="#3D2612"
        strokeWidth="3.5"
      />
      {/* Red Ribbon on Straw Hat */}
      <path
        d="M 52 74 C 70 70 130 70 148 74 L 148 83 C 130 78 70 78 52 83 Z"
        fill="#C0392B"
        stroke="#3D2612"
        strokeWidth="2"
      />

      {/* Neck & Shoulders (Pirate Vest) */}
      <path
        d="M 68 180 L 40 240 L 160 240 L 132 180 Z"
        fill="#F5CBA7"
        stroke="#3D2612"
        strokeWidth="3"
      />
      {/* Red Open Vest */}
      <path
        d="M 38 240 L 65 185 L 80 240 Z"
        fill="#C0392B"
        stroke="#3D2612"
        strokeWidth="2.5"
      />
      <path
        d="M 162 240 L 135 185 L 120 240 Z"
        fill="#C0392B"
        stroke="#3D2612"
        strokeWidth="2.5"
      />
      {/* Chest Scar / X Mark */}
      <line x1="88" y1="210" x2="112" y2="230" stroke="#8E44AD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="112" y1="210" x2="88" y2="230" stroke="#8E44AD" strokeWidth="2.5" strokeLinecap="round" />

      {/* Face & Chin */}
      <path
        d="M 62 100 C 62 145 80 178 100 178 C 120 178 138 145 138 100 Z"
        fill="#FADBD8"
        stroke="#3D2612"
        strokeWidth="3.5"
      />
      {/* Ears */}
      <ellipse cx="60" cy="122" rx="7" ry="12" fill="#FADBD8" stroke="#3D2612" strokeWidth="2.5" />
      <ellipse cx="140" cy="122" rx="7" ry="12" fill="#FADBD8" stroke="#3D2612" strokeWidth="2.5" />

      {/* Shonen Spiky Black Hair sticking out from hat */}
      <path
        d="M 52 92 L 40 108 L 56 104 L 46 122 L 62 114 L 60 130 L 68 120"
        fill="#1C2833"
        stroke="#1C2833"
        strokeWidth="2"
      />
      <path
        d="M 148 92 L 160 108 L 144 104 L 154 122 L 138 114 L 140 130 L 132 120"
        fill="#1C2833"
        stroke="#1C2833"
        strokeWidth="2"
      />
      <path
        d="M 65 90 L 80 105 L 88 92 L 100 106 L 112 92 L 120 105 L 135 90"
        fill="#1C2833"
        stroke="#1C2833"
        strokeWidth="2"
      />

      {/* Under-Eye Scar (Luffy's signature left-eye stitch) */}
      <path d="M 72 134 L 84 135" stroke="#3D2612" strokeWidth="2" strokeLinecap="round" />
      <line x1="75" y1="131" x2="75" y2="137" stroke="#3D2612" strokeWidth="1.5" />
      <line x1="81" y1="132" x2="81" y2="138" stroke="#3D2612" strokeWidth="1.5" />

      {/* Eyebrows (Fiery Shonen Arch) */}
      <path d="M 68 114 Q 82 108 92 116" fill="none" stroke="#1C2833" strokeWidth="3" strokeLinecap="round" />
      <path d="M 132 114 Q 118 108 108 116" fill="none" stroke="#1C2833" strokeWidth="3" strokeLinecap="round" />

      {/* Eyes (Determined Pirate King Gaze) */}
      <ellipse cx="80" cy="122" rx="7" ry="8" fill="#1C2833" />
      <circle cx="78" cy="120" r="2.5" fill="#FFFFFF" />

      <ellipse cx="120" cy="122" rx="7" ry="8" fill="#1C2833" />
      <circle cx="118" cy="120" r="2.5" fill="#FFFFFF" />

      {/* Nose */}
      <path d="M 100 125 L 97 136 L 103 136" fill="none" stroke="#3D2612" strokeWidth="2" strokeLinecap="round" />

      {/* Signature Wide Confident Shonen Grin */}
      <path
        d="M 74 146 Q 100 172 126 146 Z"
        fill="#FFFFFF"
        stroke="#3D2612"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Teeth dividers */}
      <line x1="86" y1="149" x2="88" y2="160" stroke="#3D2612" strokeWidth="1.5" />
      <line x1="100" y1="150" x2="100" y2="164" stroke="#3D2612" strokeWidth="1.5" />
      <line x1="114" y1="149" x2="112" y2="160" stroke="#3D2612" strokeWidth="1.5" />

      {/* Straw Hat Front Brim (casts shadow over forehead) */}
      <path
        d="M 32 84 C 50 78 150 78 168 84 C 172 96 28 96 32 84 Z"
        fill="#D4AC0D"
        stroke="#3D2612"
        strokeWidth="3.5"
      />
      <path
        d="M 36 84 C 54 80 146 80 164 84 C 158 92 42 92 36 84 Z"
        fill="#F4D03F"
      />

      {/* Forehead Shadow from Brim */}
      <path
        d="M 64 94 Q 100 102 136 94 L 138 106 Q 100 114 62 106 Z"
        fill="#3D2612"
        opacity="0.18"
      />

      {/* Manga Speed / Action Sparks (SVG paths) */}
      <polygon points="20,28 14,40 22,40 18,52 30,38 22,38" fill="#C0392B" opacity="0.4" />
      <polygon points="174,42 168,54 176,54 172,66 184,52 176,52" fill="#C0392B" opacity="0.4" />
    </svg>
  );
}
