import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Github, Linkedin, Instagram, Mail, FileText, Send, CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import DenDenMushiSVG from '../shared/DenDenMushiSVG';
import { contactInfo } from '../../data/portfolio';
import { sfx } from '../../utils/soundEffects';

const socialLinks = [
  { key: 'github', icon: Github, label: 'GitHub Profile', href: contactInfo.github, sub: 'Source Code & Repositories' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn Network', href: contactInfo.linkedin, sub: 'Professional Alliance' },
  { key: 'instagram', icon: Instagram, label: 'Instagram Dispatch', href: contactInfo.instagram, sub: 'Personal Updates' },
  { key: 'email', icon: Mail, label: 'Direct Email', href: `mailto:${contactInfo.email}`, sub: contactInfo.email },
  { key: 'resume', icon: FileText, label: 'Official Resume PDF', href: contactInfo.resume, sub: 'Download Google Drive Document' },
];

const inputClasses =
  'w-full bg-black/40 border border-treasure-gold/30 rounded-sm px-4 py-3 text-parchment font-mono text-sm placeholder-parchment/40 outline-none transition-all duration-300 focus:border-treasure-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] focus:bg-black/60';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | ringing | sent
  const [isManualRinging, setIsManualRinging] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTestSnail = () => {
    setIsManualRinging(true);
    sfx.playDenDenRing();
    setTimeout(() => {
      sfx.playGacha();
      setIsManualRinging(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('ringing');
    sfx.playDenDenRing();

    setTimeout(() => {
      sfx.playGacha();
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 4500);
    }, 2400);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0B3D91 0%, #0A1628 50%, #050b14 100%)',
      }}
    >
      {/* Decorative Manga Screentone */}
      <div className="absolute inset-0 manga-screentone opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Den Den Mushi Dispatch • Contact Prasad"
          subtitle="Direct transponder channel across the Grand Line to schedule an interview or discuss a project"
          icon={Radio}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          {/* ============ LEFT: Contact Form in English ============ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-deep-sea-light/85 backdrop-blur-xl border-2 border-treasure-gold/30 rounded-sm p-6 md:p-8 shadow-2xl relative">
              {/* Marine Panel Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-pirate-red shadow-[0_0_8px_#C41E3A]" />
                  <span className="w-3 h-3 rounded-full bg-treasure-gold shadow-[0_0_8px_#FFD700]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]" />
                  <span className="text-treasure-gold text-xs font-mono font-bold tracking-widest uppercase ml-2">
                    MARINE TRANSPONDER FREQUENCY
                  </span>
                </div>
                <span className="font-mono text-[10px] text-parchment/40">
                  SECURE SATELLITE
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-treasure-gold uppercase tracking-wider mb-2">
                    Your Name / Organization:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tech Lead, Engineering Manager, Client"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-treasure-gold uppercase tracking-wider mb-2">
                    Your Return Coordinates (Email):
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="commander@company.com"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-treasure-gold uppercase tracking-wider mb-2">
                    Mission Brief / Message:
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Prasad, I'd like to discuss a software project / full-time engineering role..."
                    required
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-sm font-pirata text-xl tracking-wider text-amber-100 shadow-xl transition-all duration-300 disabled:opacity-60 oda-ink-border bg-gradient-to-r from-pirate-red via-red-600 to-pirate-red flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {status === 'idle' && 'TRANSMIT DISPATCH MESSAGE'}
                  {status === 'ringing' && 'PURU-PURU-PURU... TRANSMITTING...'}
                  {status === 'sent' && 'DISPATCH DELIVERED! (GACHA!)'}
                </motion.button>
              </form>

              {/* Status Feedback */}
              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-emerald-900/40 border border-emerald-500/50 rounded-sm text-center flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={16} className="text-emerald-400" />
                    <p className="text-emerald-300 font-mono text-sm">
                      Transmission received! Prasad will contact you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ============ RIGHT: Den Den Mushi Snail & Channels ============ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Interactive Den Den Mushi SVG Snail */}
            <div className="mb-8">
              <DenDenMushiSVG
                isRinging={status === 'ringing' || isManualRinging}
                onClick={handleTestSnail}
                size={270}
              />
            </div>

            {/* Social Channels in English */}
            <div className="w-full max-w-md space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Radio size={14} className="text-treasure-gold" />
                <span className="font-mono text-xs text-treasure-gold tracking-widest font-bold uppercase">
                  DIRECT ALLIANCE FREQUENCIES
                </span>
              </div>

              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sfx.playBerryChime()}
                    className="flex items-center justify-between p-3.5 bg-black/45 hover:bg-black/70 border border-treasure-gold/25 hover:border-treasure-gold/80 rounded-sm transition-all duration-300 group shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-treasure-gold group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-parchment font-serif font-bold text-sm group-hover:text-treasure-gold transition-colors">
                          {item.label}
                        </p>
                        <p className="text-[11px] font-mono text-parchment/50">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={15} className="text-treasure-gold group-hover:translate-x-1 transition-transform" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
