import React from 'react';
import { Anchor } from 'lucide-react';
import Navigation from './components/Navigation/Navigation';
import LogPose from './components/Navigation/LogPose';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { personalInfo } from './data/portfolio';

function Footer() {
  return (
    <footer className="bg-deep-sea border-t border-treasure-gold/20 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-pirata text-2xl text-treasure-gold mb-2">
          The Grand Line of Code
        </p>
        <p className="text-parchment/60 font-serif text-sm mb-4">
          &ldquo;Building functional, resilient applications across the digital seas.&rdquo; &mdash; {personalInfo.name}
        </p>
        <div className="flex items-center justify-center gap-2 text-parchment/40 text-xs font-mono">
          <Anchor size={14} className="text-treasure-gold/60" />
          <span>Crafted with React, Tailwind CSS, Web Audio & One Piece Artistry</span>
          <Anchor size={14} className="text-treasure-gold/60" />
        </div>
        <p className="text-parchment/30 text-xs font-mono mt-3">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved across the Grand Line.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-deep-sea">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <LogPose />
    </div>
  );
}
