import React from 'react';

// Authentic One Piece Devil Fruits with iconic Karakusa spiral swirls & curly stems
export default function DevilFruitSVG({
  type = 'gomu',
  size = 54,
  className = '',
}) {
  // Swirl spiral pattern definition
  const Swirl = ({ x, y, scale = 1, rotate = 0, color = '#ffffff' }) => (
    <g transform={`translate(${x}, ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M 0 0 C 4 -6 12 -4 12 3 C 12 9 6 12 0 10 C -5 8 -7 3 -5 -2 C -3 -6 2 -7 5 -5"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
      />
    </g>
  );

  switch (type) {
    case 'mera': // Flame Fruit (Logia - Orange/Crimson flame teardrop with swirls)
      return (
        <svg
          viewBox="0 0 100 100"
          style={{ width: size, height: size }}
          className={`drop-shadow-[0_4px_12px_rgba(255,80,0,0.5)] ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curly T-Stem */}
          <path
            d="M 50 25 C 50 12 62 10 65 6 C 68 2 64 -2 59 1 C 55 4 54 8 52 14"
            fill="none"
            stroke="#4A7C20"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 45 16 C 40 10 32 12 33 16 C 34 20 42 18 47 16"
            fill="none"
            stroke="#4A7C20"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Flame teardrop Body */}
          <defs>
            <radialGradient id="meraGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFF176" />
              <stop offset="45%" stopColor="#FF7043" />
              <stop offset="100%" stopColor="#C62828" />
            </radialGradient>
          </defs>
          <path
            d="M 50 22 C 30 22 20 45 22 68 C 24 88 40 96 50 96 C 60 96 76 88 78 68 C 80 45 70 22 50 22 Z"
            fill="url(#meraGrad)"
            stroke="#8E0000"
            strokeWidth="2.5"
          />

          {/* Flame Scales & Karakusa Swirls */}
          <Swirl x={38} y={45} scale={1.1} rotate={15} color="#8E0000" />
          <Swirl x={62} y={48} scale={1.1} rotate={-30} color="#8E0000" />
          <Swirl x={40} y={68} scale={1.2} rotate={-10} color="#8E0000" />
          <Swirl x={60} y={72} scale={1.1} rotate={25} color="#8E0000" />
          <Swirl x={50} y={55} scale={1} rotate={180} color="#8E0000" />
        </svg>
      );

    case 'ope': // Heart Fruit (Paramecia - Crimson/Pink heart with golden stem)
      return (
        <svg
          viewBox="0 0 100 100"
          style={{ width: size, height: size }}
          className={`drop-shadow-[0_4px_12px_rgba(233,30,99,0.5)] ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Golden Curly Stem */}
          <path
            d="M 50 28 C 50 14 60 10 64 6 C 68 2 62 -2 58 2 C 54 6 52 14 50 24"
            fill="none"
            stroke="#F5B041"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Heart Body */}
          <defs>
            <radialGradient id="opeGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FF80AB" />
              <stop offset="50%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#880E4F" />
            </radialGradient>
          </defs>
          <path
            d="M 50 32 C 40 18 20 22 20 42 C 20 62 44 80 50 92 C 56 80 80 62 80 42 C 80 22 60 18 50 32 Z"
            fill="url(#opeGrad)"
            stroke="#4A0033"
            strokeWidth="2.5"
          />

          {/* Swirls inside Heart lobes */}
          <Swirl x={35} y={40} scale={1.1} rotate={45} color="#4A0033" />
          <Swirl x={65} y={40} scale={1.1} rotate={-45} color="#4A0033" />
          <Swirl x={50} y={58} scale={1.2} rotate={180} color="#4A0033" />
          <Swirl x={42} y={72} scale={0.9} rotate={10} color="#4A0033" />
          <Swirl x={58} y={72} scale={0.9} rotate={-20} color="#4A0033" />
        </svg>
      );

    case 'zoan': // Beast / Dragon Scale Fruit (Green/Emerald spiky melon)
      return (
        <svg
          viewBox="0 0 100 100"
          style={{ width: size, height: size }}
          className={`drop-shadow-[0_4px_12px_rgba(46,125,50,0.5)] ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curly brown stem with leaf */}
          <path
            d="M 50 25 C 48 10 58 6 64 2 C 67 0 63 -2 58 2 C 53 6 52 14 50 25"
            fill="none"
            stroke="#5D4037"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Little green leaf */}
          <path
            d="M 54 18 Q 68 14 66 22 Q 58 26 54 18 Z"
            fill="#7CB342"
          />

          {/* Spiky Beast Body */}
          <defs>
            <radialGradient id="zoanGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#A5D6A7" />
              <stop offset="50%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </radialGradient>
          </defs>
          <path
            d="M 50 24 C 28 24 22 40 22 62 C 22 84 32 94 50 94 C 68 94 78 84 78 62 C 78 40 72 24 50 24 Z"
            fill="url(#zoanGrad)"
            stroke="#0B380D"
            strokeWidth="2.5"
          />

          {/* Scale grooves and Swirls */}
          <Swirl x={36} y={42} scale={1.1} rotate={0} color="#0B380D" />
          <Swirl x={64} y={42} scale={1.1} rotate={90} color="#0B380D" />
          <Swirl x={50} y={58} scale={1.2} rotate={-45} color="#0B380D" />
          <Swirl x={36} y={74} scale={1} rotate={180} color="#0B380D" />
          <Swirl x={64} y={74} scale={1} rotate={135} color="#0B380D" />
        </svg>
      );

    case 'logia': // Elemental Lightning / Cyan Ice Fruit
      return (
        <svg
          viewBox="0 0 100 100"
          style={{ width: size, height: size }}
          className={`drop-shadow-[0_4px_12px_rgba(2,136,209,0.5)] ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lightning / zigzag stem */}
          <path
            d="M 50 24 L 54 16 L 48 10 L 58 3"
            fill="none"
            stroke="#FFD54F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Crystalline / Cloud Sphere Body */}
          <defs>
            <radialGradient id="logiaGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#E1F5FE" />
              <stop offset="45%" stopColor="#29B6F6" />
              <stop offset="100%" stopColor="#0D47A1" />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="60"
            r="34"
            fill="url(#logiaGrad)"
            stroke="#01265B"
            strokeWidth="2.5"
          />

          {/* Electric swirls */}
          <Swirl x={38} y={48} scale={1.1} rotate={60} color="#01265B" />
          <Swirl x={64} y={50} scale={1} rotate={-60} color="#01265B" />
          <Swirl x={50} y={66} scale={1.2} rotate={120} color="#01265B" />
          <Swirl x={36} y={74} scale={0.9} rotate={-15} color="#01265B" />
          <Swirl x={62} y={76} scale={0.9} rotate={190} color="#01265B" />
        </svg>
      );

    case 'gomu': // Gomu Gomu no Mi (Purple melon with Karakusa whorls)
    default:
      return (
        <svg
          viewBox="0 0 100 100"
          style={{ width: size, height: size }}
          className={`drop-shadow-[0_4px_12px_rgba(106,27,154,0.5)] ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Classic Curly T-Stem */}
          <path
            d="M 50 24 C 48 10 60 8 64 4 C 67 1 63 -2 58 2 C 53 5 52 14 50 24"
            fill="none"
            stroke="#5D4037"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 45 16 C 38 12 30 16 34 20 C 38 23 44 19 47 16"
            fill="none"
            stroke="#5D4037"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Melon Body */}
          <defs>
            <radialGradient id="gomuGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#CE93D8" />
              <stop offset="50%" stopColor="#7B1FA2" />
              <stop offset="100%" stopColor="#4A148C" />
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="60"
            r="35"
            fill="url(#gomuGrad)"
            stroke="#2A0845"
            strokeWidth="2.5"
          />

          {/* Karakusa Swirl Whorls across the melon skin */}
          <Swirl x={34} y={46} scale={1.1} rotate={-20} color="#2A0845" />
          <Swirl x={62} y={48} scale={1.1} rotate={35} color="#2A0845" />
          <Swirl x={48} y={60} scale={1.2} rotate={140} color="#2A0845" />
          <Swirl x={32} y={72} scale={1} rotate={75} color="#2A0845" />
          <Swirl x={64} y={72} scale={1} rotate={-80} color="#2A0845" />
          <Swirl x={50} y={80} scale={0.9} rotate={190} color="#2A0845" />
        </svg>
      );
  }
}
