import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Futuristic Preloader Component
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('BOOT_SEQ_INITIALIZING...');

  useEffect(() => {
    const textSequence = [
      { prg: 10, txt: 'CONNECTING_TO_PORTFOLIO_NODE...' },
      { prg: 25, txt: 'COMPILING_ASSETS_AND_DEPENDENCIES...' },
      { prg: 45, txt: 'INITIALIZING_THEME_PARADIGMS...' },
      { prg: 65, txt: 'ESTABLISHING_CANVAS_NEURAL_LINK...' },
      { prg: 85, txt: 'MOUNTING_PROFILE_INTERFACES...' },
      { prg: 100, txt: 'SYS_STATUS: READY. LAUNCHING...' }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        const currentPrg = Math.min(next, 100);
        
        // Update console message based on progress
        const textObj = textSequence.find(t => currentPrg <= t.prg) || textSequence[textSequence.length - 1];
        setBootText(textObj.txt);

        if (currentPrg >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small buffer at 100%
          return 100;
        }
        return currentPrg;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-[#07080d] z-[9999] flex flex-col justify-center items-center px-6"
    >
      <div className="max-w-md w-full flex flex-col">
        {/* Glowing HUD Logo */}
        <div className="font-display font-black text-3xl tracking-widest text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple mb-8 select-none">
          HARSHA_VARDHAN
        </div>

        {/* Loading Progress Frame */}
        <div className="glass-panel p-6 rounded-lg border border-cyber-border/40 relative bg-cyber-dark/80">
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-cyan/60" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon-cyan/60" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neon-cyan/60" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-cyan/60" />

          {/* Console readout */}
          <div className="font-mono text-xs text-neon-cyan/90 mb-4 h-4 overflow-hidden truncate">
            &gt; {bootText}
          </div>

          {/* Loading bar track */}
          <div className="w-full h-1.5 bg-cyber-dark rounded-full overflow-hidden border border-cyber-border/30">
            <motion.div 
              className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-3 font-mono text-[10px] text-gray-500">
            <span>MEM_ALLOC: OK</span>
            <span className="text-neon-cyan">{progress}%</span>
          </div>
        </div>
        
        {/* Subtitle details */}
        <div className="text-[10px] font-mono text-gray-600 text-center uppercase tracking-widest mt-8">
          Vite + React.js Core // System Online
        </div>
      </div>
    </motion.div>
  );
};

const MainLayout = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-neon-cyan selection:text-cyber-dark">
      {/* Dynamic particles in background */}
      <ParticlesBackground />

      {/* Sticky navigation */}
      <Navbar />

      {/* Structured grid items */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Bottom info footer */}
      <Footer />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inject loading state on body element
    if (isLoading) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MainLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
