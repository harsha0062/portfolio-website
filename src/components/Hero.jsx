import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiFileText } from 'react-icons/fi';

const Typewriter = ({ words, speed = 150, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple border-r-2 border-neon-cyan animate-pulse pr-1 font-mono font-semibold">
      {currentText}
    </span>
  );
};

// Rotating Interactive HUD visual instead of a photo avatar
const CyberOrb = () => {
  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center select-none pointer-events-none">
      {/* Outer rotating dashboard rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/20"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-4 rounded-full border-2 border-dotted border-neon-blue/10"
      />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-6 rounded-full border border-neon-purple/20 border-t-transparent border-b-transparent"
      />

      {/* Corner Bracket Graphics */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/40" />

      {/* Holographic glowing backplate */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-neon-cyan/5 via-neon-blue/2 to-neon-purple/5 blur-xl animate-pulse" />

      {/* Interactive Core Display */}
      <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-cyber-dark/80 border border-cyber-border/80 flex items-center justify-center shadow-[inset_0_0_30px_rgba(102,252,241,0.15)] overflow-hidden">
        {/* Horizontal Laser Scanning Line */}
        <motion.div 
          animate={{ translateY: ['-110%', '110%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent"
        />

        {/* Central HUD readout */}
        <div className="font-mono text-[9px] sm:text-[10px] text-neon-cyan/70 space-y-1.5 p-4 text-left">
          <div className="text-gray-500 font-semibold tracking-wider mb-2">// CORE_STATUS</div>
          <div>&gt; STACK_ENGAGED: TRUE</div>
          <div>&gt; DSA_PROBLEMS: 300+</div>
          <div>&gt; CLOUD: AWS_ACTIVE</div>
          <div>&gt; ML_MODEL: ACTIVE</div>
          <div>&gt; REGION: IN_HYD</div>
          <div className="text-neon-purple animate-pulse">&gt; HANDSHAKE_OK [HARSHA]</div>
        </div>
      </div>

      {/* Small floating orbiting nodes */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          animate={{
            x: [
              Math.cos(deg * Math.PI / 180) * 110,
              Math.cos((deg + 360) * Math.PI / 180) * 110
            ],
            y: [
              Math.sin(deg * Math.PI / 180) * 110,
              Math.sin((deg + 360) * Math.PI / 180) * 110
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-2.5 h-2.5 rounded-full bg-neon-blue shadow-[0_0_10px_#00e5ff] border border-cyber-dark"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const roles = [
    'Python & Java Developer',
    'DSA Practitioner',
    'AI & Cloud Explorer'
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden grid-bg"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-mono mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            READY FOR NEW OPPORTUNITIES
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-2 leading-none">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-neon-cyan drop-shadow-sm">
              Harshavardhan Vaddi
            </span>
          </h1>

          <div className="text-lg md:text-xl font-sans text-gray-300 mb-6 h-8 flex items-center">
            <span className="mr-2 text-gray-400">I am a</span>
            <Typewriter words={roles} />
          </div>

          <p className="font-display font-medium text-sm md:text-base text-neon-blue/80 uppercase tracking-widest mb-6">
            Undergraduate at Anurag University | Building Skills in Data Structures, Cloud & AI Tools
          </p>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-sans">
            I am a third-year Computer Science student passionate about technology, programming, and algorithms. 
            I focus on solving computational logic problems and designing clean, structured software systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download="Harshavardhan_Vaddi_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-cyber-dark font-sans font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-neon-cyan/20 hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/cover-letter.pdf"
              download="Harshavardhan_Vaddi_Cover_Letter.pdf"
              className="inline-flex items-center justify-center gap-2 border border-cyber-border bg-cyber-dark/40 hover:bg-cyber-dark hover:border-neon-cyan text-gray-300 hover:text-neon-cyan font-sans font-bold px-6 py-3.5 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <FiFileText className="w-4 h-4" />
              Cover Letter
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-2 border border-neon-cyan/40 hover:border-neon-cyan hover:bg-neon-cyan/5 text-neon-cyan font-sans font-bold px-6 py-3.5 rounded-lg transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <FiArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Find me on:</span>
            {[
              { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com', label: 'GitHub' },
              { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FiMail className="w-5 h-5" />, url: 'mailto:harshavardhanvaddi10@gmail.com', label: 'Email' }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2.5 rounded-lg border border-cyber-border bg-cyber-dark/40 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Holographic Sphere */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <CyberOrb />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
