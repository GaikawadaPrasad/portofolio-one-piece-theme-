import React from 'react';

export default function OceanWaves({ position = 'bottom', opacity = 1 }) {
  return (
    <div
      className={`absolute ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} left-0 w-full overflow-hidden leading-none pointer-events-none z-[1]`}
      style={{ opacity }}
    >
      {/* Wave Layer 1 */}
      <svg
        className="relative block w-[200%] h-[60px] animate-[waveMove_8s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#0B3D91"
          fillOpacity="0.5"
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
        />
      </svg>

      {/* Wave Layer 2 */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[50px] animate-[waveMove_12s_linear_infinite_reverse]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#1565C0"
          fillOpacity="0.3"
          d="M0,60 C360,20 720,100 1080,40 C1260,10 1380,60 1440,50 L1440,120 L0,120 Z"
        />
      </svg>

      {/* Wave Layer 3 */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[40px] animate-[waveMove_16s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#0A1628"
          fillOpacity="0.8"
          d="M0,80 C180,40 360,100 540,60 C720,20 900,80 1080,50 C1260,20 1380,70 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
