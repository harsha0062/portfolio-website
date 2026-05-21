import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiCheck } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-cyber-dark/30">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
            <span className="text-neon-cyan mr-2">&lt;</span>
            Resume Preview
            <span className="text-neon-cyan ml-2">/&gt;</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-4" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-3">
            Brief // Credentials // Quick Download
          </p>
        </div>

        {/* Resume Preview Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed sheet overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 glass-panel p-6 sm:p-8 rounded-xl border border-cyber-border/80 flex flex-col justify-between"
          >
            {/* Visual Header */}
            <div className="border-b border-cyber-border/40 pb-6 mb-6">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-wide">
                    HARSHA VARDHAN VADDI
                  </h3>
                  <p className="font-sans text-xs text-neon-cyan uppercase font-semibold tracking-wider mt-1">
                    Computer Science Undergraduate
                  </p>
                </div>
                <div className="font-mono text-[10px] text-right text-gray-500 space-y-0.5">
                  <div>Hyderabad, India</div>
                  <div>harshavardhan.vaddi@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Resume content summary columns */}
            <div className="space-y-6">
              {/* Education */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neon-blue mb-2.5">
                  Education
                </h4>
                <div className="font-sans text-sm">
                  <div className="flex justify-between text-white font-semibold">
                    <span>B.Tech in Computer Science & Engineering</span>
                    <span className="font-mono text-xs text-gray-400">2023 - 2027 (Expected)</span>
                  </div>
                  <div className="text-gray-400 text-xs">Anurag University, Hyderabad</div>
                  <div className="text-neon-cyan/90 text-xs font-mono mt-1">CGPA: 8.7 / 10.0</div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neon-blue mb-2.5">
                  Core Projects
                </h4>
                <div className="space-y-3 font-sans text-sm">
                  <div>
                    <div className="flex justify-between text-white font-semibold">
                      <span>Futuristic AI Developer Portfolio</span>
                      <span className="font-mono text-xs text-gray-500">React.js, Tailwind v4</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Designed and built a modular responsive portfolio using Framer Motion and custom HTML5 canvas particles.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between text-white font-semibold">
                      <span>Cloud Hosted Web Applications</span>
                      <span className="font-mono text-xs text-gray-500">AWS EC2, S3, Route 53</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Implemented basic website hosting architectures with custom SSL domains and secure IAM configurations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Summarized */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neon-blue mb-2.5">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Java Core', 'Python', 'React.js', 'Tailwind CSS', 'SQL', 'AWS Cloud Practitioner', 'Data Structures', 'Git/GitHub'].map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="font-mono text-[10px] bg-cyber-dark/80 text-gray-300 px-2.5 py-1 rounded border border-cyber-border/20 flex items-center gap-1.5"
                    >
                      <FiCheck className="text-neon-cyan" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-cyber-border/40 pt-6 mt-6 flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>Updated: May 2026</span>
              <span>DocRef: HV_CV_2026.pdf</span>
            </div>

          </motion.div>

          {/* Quick download sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 glass-panel p-6 rounded-xl border border-cyber-border/80 flex flex-col justify-between text-center bg-gradient-to-b from-cyber-dark to-cyber-dark/50"
          >
            <div className="py-6 flex flex-col items-center">
              <div className="p-4 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan text-4xl mb-4 animate-pulse">
                <FiDownload />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">
                Download PDF
              </h4>
              <p className="font-sans text-xs text-gray-400 max-w-[200px] leading-relaxed">
                Get the print-ready, professional copy of my resume for your HR systems and review.
              </p>
            </div>

            <div className="space-y-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Harsha_Vardhan_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-cyber-dark font-sans font-bold py-3.5 rounded-lg shadow-lg hover:shadow-neon-cyan/20 cursor-pointer"
              >
                <FiDownload />
                Download CV
              </motion.a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-cyber-border text-gray-400 hover:text-white hover:bg-cyber-dark py-3.5 rounded-lg transition-colors text-xs font-mono"
              >
                <FiEye />
                PREVIEW IN BROWSER
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
