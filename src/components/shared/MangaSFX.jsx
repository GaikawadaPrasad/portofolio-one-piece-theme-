import React from 'react';
import { motion } from 'framer-motion';

// Authentic Comic Sound Effect (SFX) component in pure English
export default function MangaSFX({
  text = 'DON!!',
  className = '',
  size = 'md',
  color = '#FFD700',
  glow = true,
  animate = true,
}) {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-6xl md:text-7xl lg:text-8xl',
  };

  const content = (
    <div className={`relative inline-block select-none font-manga tracking-wider ${className}`}>
      <span
        className={`block font-manga leading-none ${sizeClasses[size] || sizeClasses.md}`}
        style={{
          color: color,
          WebkitTextStroke: '2.5px #100a05',
          textShadow: `
            4px 4px 0 #100a05,
            -2px -2px 0 #100a05,
            2px -2px 0 #100a05,
            -2px 2px 0 #100a05,
            0 0 ${glow ? '22px rgba(255,215,0,0.65)' : '0px transparent'}
          `,
          transform: 'rotate(-4deg)',
        }}
      >
        {text}
      </span>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ scale: 0, rotate: -15, opacity: 0 }}
      whileInView={{ scale: [0, 1.25, 1], rotate: [-15, 2, -4], opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      whileHover={{ scale: 1.15, rotate: 2 }}
    >
      {content}
    </motion.div>
  );
}
