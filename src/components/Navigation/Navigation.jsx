import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Anchor, Compass, Zap, FolderGit2, MapPin, Radio, FileText, Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useScrollReveal';
import { sfx } from '../../utils/soundEffects';

const navIcons = {
  Home: Compass,
  About: Anchor,
  Skills: Zap,
  Projects: FolderGit2,
  Voyage: MapPin,
  Contact: Radio,
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleSound = () => {
    const state = sfx.toggleSound();
    setSoundOn(state);
    if (state) sfx.playDon();
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    sfx.playSlash();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isActive = (href) => href === `#${activeSection}`;

  return (
    <>
      {/* ── Top Bar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-deep-sea/95 backdrop-blur-md shadow-2xl border-b border-treasure-gold/30'
            : 'bg-deep-sea/50 backdrop-blur-sm'
        }`}
      >
        {/* Gold glow bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-treasure-gold/70 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ── Logo: Prasad Gaikawada with pirate styling ── */}
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-pirate-red to-pirate-red-dark border border-treasure-gold/60 flex items-center justify-center text-treasure-gold shadow-md group-hover:rotate-6 transition-transform">
                <Anchor size={20} />
              </div>
              <div>
                <span className="font-pirata text-xl md:text-2xl text-treasure-gold tracking-wider drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] block leading-none">
                  Prasad Gaikawada
                </span>
                <span className="font-mono text-[10px] text-parchment/60 tracking-widest uppercase block leading-none mt-1">
                  Full-Stack Architect
                </span>
              </div>
            </a>

            {/* ── Desktop Links in English with Lucide Icons ── */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <ul className="flex items-center gap-1 lg:gap-1.5">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  const Icon = navIcons[link.name] || Compass;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-all duration-300 ${
                          active
                            ? 'text-treasure-gold bg-white/10'
                            : 'text-parchment/75 hover:text-treasure-gold hover:bg-white/5'
                        }`}
                      >
                        <Icon size={15} />
                        <span className="font-pirata text-base tracking-wide">{link.name}</span>

                        {/* Active indicator bar */}
                        {active && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-treasure-gold shadow-[0_0_8px_#FFD700]"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Resume Button */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sfx.playBerryChime()}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-gradient-to-r from-pirate-red to-pirate-red-dark text-amber-100 border border-treasure-gold/40 text-xs font-mono font-bold hover:scale-105 transition-all shadow"
              >
                <FileText size={14} />
                <span>RESUME</span>
              </a>

              {/* Sound FX Audio Toggle */}
              <button
                onClick={toggleSound}
                title={soundOn ? 'Mute Anime Sound Effects' : 'Enable Anime Sound Effects'}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-treasure-gold/30 bg-black/40 text-treasure-gold hover:border-treasure-gold text-xs font-mono transition-colors shadow"
              >
                {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} className="text-red-400" />}
                <span className="hidden lg:inline text-[10px] font-bold tracking-widest">
                  {soundOn ? 'SFX ON' : 'MUTED'}
                </span>
              </button>
            </div>

            {/* ── Mobile Hamburger & Sound Toggle ── */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleSound}
                aria-label="Toggle Sound"
                className="p-2 text-treasure-gold"
              >
                {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} className="text-red-400" />}
              </button>

              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="flex items-center justify-center w-10 h-10 rounded-sm text-treasure-gold border border-treasure-gold/30 hover:bg-white/5 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Fullscreen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] flex flex-col bg-deep-sea/98 backdrop-blur-xl"
          >
            {/* Border frame */}
            <div className="absolute inset-4 border-2 border-treasure-gold/40 rounded-sm pointer-events-none" />

            {/* Close button */}
            <div className="flex justify-end p-6 z-10">
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-sm border border-treasure-gold/40 text-treasure-gold font-bold hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 z-10 px-8">
              {navLinks.map((link, idx) => {
                const Icon = navIcons[link.name] || Compass;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-3 text-2xl font-pirata text-treasure-gold hover:text-white transition-colors"
                  >
                    <Icon size={22} />
                    <span>{link.name}</span>
                  </motion.a>
                );
              })}

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-sm bg-pirate-red text-white font-pirata text-xl border border-treasure-gold"
              >
                <FileText size={20} />
                <span>View Official Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
