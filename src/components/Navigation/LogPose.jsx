import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';
import { sfx } from '../../utils/soundEffects';

export default function LogPose() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sfx.playSlash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="log-pose"
          onClick={scrollToTop}
          aria-label="Log Pose navigation to top"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.15, boxShadow: '0 0 24px rgba(255,215,0,0.6)' }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
            bg-deep-sea/95 backdrop-blur-md
            border-2 border-treasure-gold/80
            flex items-center justify-center
            shadow-2xl shadow-black/60
            cursor-pointer
            group"
        >
          {/* Outer ring ping glow */}
          <span className="absolute inset-0 rounded-full border border-treasure-gold/30 animate-ping opacity-30" />

          {/* Rotating compass dashed ring */}
          <span className="absolute inset-1 rounded-full border border-dashed border-treasure-gold/40 animate-[spin_8s_linear_infinite]" />

          {/* Lucide Compass vector icon */}
          <Compass size={24} className="text-treasure-gold animate-[spin_12s_linear_infinite] group-hover:animate-none transition-all drop-shadow-[0_0_8px_#FFD700]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
