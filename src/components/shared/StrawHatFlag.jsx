import React from 'react';

export default function StrawHatFlag({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flag background */}
      <circle cx="100" cy="100" r="90" fill="#1a1a2e" stroke="#FFD700" strokeWidth="3" />

      {/* Skull */}
      <circle cx="100" cy="85" r="35" fill="#F5E6C8" />
      {/* Eyes */}
      <circle cx="87" cy="80" r="6" fill="#1a1a2e" />
      <circle cx="113" cy="80" r="6" fill="#1a1a2e" />
      {/* Nose */}
      <polygon points="100,85 96,93 104,93" fill="#1a1a2e" />
      {/* Mouth/Teeth */}
      <rect x="85" y="97" width="30" height="8" fill="#1a1a2e" rx="2" />
      <line x1="90" y1="97" x2="90" y2="105" stroke="#F5E6C8" strokeWidth="2" />
      <line x1="95" y1="97" x2="95" y2="105" stroke="#F5E6C8" strokeWidth="2" />
      <line x1="100" y1="97" x2="100" y2="105" stroke="#F5E6C8" strokeWidth="2" />
      <line x1="105" y1="97" x2="105" y2="105" stroke="#F5E6C8" strokeWidth="2" />
      <line x1="110" y1="97" x2="110" y2="105" stroke="#F5E6C8" strokeWidth="2" />

      {/* Crossbones */}
      <line x1="45" y1="130" x2="155" y2="150" stroke="#F5E6C8" strokeWidth="8" strokeLinecap="round" />
      <line x1="155" y1="130" x2="45" y2="150" stroke="#F5E6C8" strokeWidth="8" strokeLinecap="round" />
      {/* Bone ends */}
      <circle cx="42" cy="129" r="6" fill="#F5E6C8" />
      <circle cx="158" cy="151" r="6" fill="#F5E6C8" />
      <circle cx="158" cy="129" r="6" fill="#F5E6C8" />
      <circle cx="42" cy="151" r="6" fill="#F5E6C8" />

      {/* Straw Hat */}
      <ellipse cx="100" cy="58" rx="45" ry="12" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
      <path d="M 65 58 Q 65 30 100 25 Q 135 30 135 58" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
      <rect x="70" y="42" width="60" height="8" rx="2" fill="#C41E3A" />
    </svg>
  );
}
