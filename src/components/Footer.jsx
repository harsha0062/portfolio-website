import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyber-border/40 bg-cyber-dark/80 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-gray-500 font-sans text-xs tracking-wide text-center md:text-left">
          &copy; {currentYear} Harsha Vardhan. All rights reserved. 
          <span className="block sm:inline sm:ml-2 text-[10px] font-mono text-gray-600">
            [SYS_BUILD_STABLE: 2026.05.21]
          </span>
        </div>

        {/* Center: Tech stack tag */}
        <div className="font-mono text-[10px] text-neon-cyan/70 tracking-widest uppercase">
          Built with React &amp; Tailwind CSS v4
        </div>

        {/* Right Side: Social Media */}
        <div className="flex gap-4">
          {[
            { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub' },
            { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: <FiMail />, url: 'mailto:harshavardhan.vaddi@gmail.com', label: 'Email' }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-neon-cyan transition-colors text-sm"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
