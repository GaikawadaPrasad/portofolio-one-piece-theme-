import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, icon: Icon, light = false }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className={`p-3 rounded-sm border shadow-lg ${
            light
              ? 'bg-[#3D2612]/10 border-[#3D2612]/30 text-pirate-red'
              : 'bg-deep-sea-light border-treasure-gold/30 text-treasure-gold'
          }`}>
            <Icon size={26} strokeWidth={2} />
          </div>
        </div>
      )}

      <h2
        className={`font-pirata text-4xl md:text-5xl lg:text-6xl tracking-wide mb-3 ${
          light ? 'text-[#3D2612]' : 'text-treasure-gold glow-text'
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-base md:text-lg max-w-2xl mx-auto font-serif ${
          light ? 'text-[#3D2612]/80' : 'text-parchment/80'
        }`}
      >
        {subtitle}
      </p>

      <div className="flex items-center justify-center mt-5 gap-3">
        <div className={`h-[2px] w-16 ${light ? 'bg-[#3D2612]/30' : 'bg-treasure-gold/40'}`} />
        <span className={`text-xs font-mono font-bold tracking-widest uppercase ${light ? 'text-pirate-red' : 'text-treasure-gold'}`}>
          • GRAND LINE •
        </span>
        <div className={`h-[2px] w-16 ${light ? 'bg-[#3D2612]/30' : 'bg-treasure-gold/40'}`} />
      </div>
    </motion.div>
  );
}
