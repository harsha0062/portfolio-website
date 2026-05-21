import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { FaAws, FaJava, FaPython, FaBrain, FaCode } from 'react-icons/fa';

const certs = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Dec 2024',
    icon: <FaAws className="text-neon-cyan" />,
    badgeColor: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'hover:border-neon-cyan/40',
    verificationId: 'AWS-CCP-872931',
    skills: ['AWS Services', 'Cloud Security', 'Pricing Architecture', 'Cloud Deployment']
  },
  {
    title: 'Java Programming Professional',
    issuer: 'Oracle Academy / Udemy',
    date: 'Aug 2024',
    icon: <FaJava className="text-neon-blue" />,
    badgeColor: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'hover:border-neon-blue/40',
    verificationId: 'JV-PRG-98110',
    skills: ['OOPs', 'Multithreading', 'Collections Framework', 'File I/O']
  },
  {
    title: 'Python Language Fundamentals',
    issuer: 'Coursera / Stanford Online',
    date: 'May 2024',
    icon: <FaPython className="text-neon-purple" />,
    badgeColor: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'hover:border-neon-purple/40',
    verificationId: 'PY-FN-773210',
    skills: ['Scripting', 'Data Manipulation', 'API Integration', 'Algorithm Implementations']
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Kaggle Certifications / Coursera',
    date: 'Oct 2024',
    icon: <FaBrain className="text-neon-cyan" />,
    badgeColor: 'from-cyan-500/20 to-purple-500/10',
    borderColor: 'hover:border-neon-cyan/40',
    verificationId: 'ML-FD-22830',
    skills: ['Supervised Learning', 'Linear Regression', 'Scikit-Learn', 'Pandas & NumPy']
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Meta / freeCodeCamp',
    date: 'Jul 2024',
    icon: <FaCode className="text-neon-blue" />,
    badgeColor: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'hover:border-neon-blue/40',
    verificationId: 'FCC-WEB-44912',
    skills: ['React.js', 'Tailwind CSS', 'DOM manipulation', 'Responsive Design']
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden grid-bg">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
            <span className="text-neon-cyan mr-2">&lt;</span>
            Certifications
            <span className="text-neon-cyan ml-2">/&gt;</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-4" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-3">
            Credentials // Verification // Achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`glass-panel p-6 rounded-xl border border-cyber-border/80 flex flex-col justify-between transition-all duration-300 ${cert.borderColor}`}
            >
              <div>
                {/* Header: Icon & Verify Link */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${cert.badgeColor} border border-cyber-border/30 text-3xl shadow-inner`}>
                    {cert.icon}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 bg-cyber-dark/80 px-2 py-1 rounded border border-cyber-border/30">
                    ID: {cert.verificationId}
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-extrabold text-base sm:text-lg text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-sans text-xs text-neon-cyan font-semibold uppercase tracking-wider mb-4">
                  {cert.issuer}
                </p>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="font-sans text-[10px] bg-cyber-dark/50 text-gray-400 px-2 py-0.5 rounded border border-cyber-border/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Date & Credential Link */}
              <div className="flex justify-between items-center pt-4 border-t border-cyber-border/20">
                <span className="font-mono text-xs text-gray-500">
                  {cert.date}
                </span>
                
                <a 
                  href="#verify" 
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  <FiAward className="w-3.5 h-3.5" />
                  VERIFY CREDENTIAL
                  <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
