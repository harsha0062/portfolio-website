import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiCpu, FiCode, FiAward, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    title: 'Cloud Club – Event Organizer',
    organization: 'Anurag University, Hyderabad',
    duration: 'Ongoing',
    icon: <FiCloud className="text-neon-cyan" />,
    description: 'Serving as Event Organizer for the student cloud compute organization, helping facilitate technical training.',
    bullets: [
      'Organized and coordinated technical workshops and campus bootcamps.',
      'Refined communication, leadership, and team collaboration skills.',
      'Promoted peer study tracks regarding cloud practitioner foundations.'
    ],
    tags: ['Cloud Computing', 'Event Management', 'Collaboration', 'AWS']
  },
  {
    title: 'Secured Runner-Up – Tech Xcelerate',
    organization: 'Anurag University & Tech Sponsors',
    duration: '2024',
    icon: <FiAward className="text-neon-blue" />,
    description: 'Secured the Runner-up position in a campus-wide tech innovation challenge.',
    bullets: [
      'Designed and presented innovative technical solutions to a panel of academic and industry judges.',
      'Structured solution architectures using modern database systems and algorithms.',
      'Collaborated effectively to solve prompt specifications within the competition.'
    ],
    tags: ['Tech Xcelerate', 'Runner-up', 'Architecture Pitch', 'Innovation']
  },
  {
    title: 'Participant – Tech Hack',
    organization: 'Hackathon Hack',
    duration: '2024',
    icon: <FiCpu className="text-neon-purple" />,
    description: 'Participated in the competitive coding hackathon, executing prototypes under pressure.',
    bullets: [
      'Demonstrated collaborative programming and rapid problem-solving abilities.',
      'Built algorithmic software tools alongside other team members.',
      'Practiced version control using Git to bundle and ship prototype code.'
    ],
    tags: ['Tech Hack', 'Hackathon', 'Collaborative Coding', 'Git']
  },
  {
    title: 'Workshop Certifications & Training',
    organization: 'ACM Student Chapter & MongoDB Workshops',
    duration: '2024',
    icon: <FiCheckCircle className="text-neon-cyan" />,
    description: 'Attended specialized technical workshops to gain hands-on exposure to advanced development paradigms.',
    bullets: [
      'Learned fundamentals of MongoDB database structuring and NoSQL architecture.',
      'Explored current tech guidelines and design practices held by ACM chapter members.',
      'Implemented shell operations and database connectivity scripts locally.'
    ],
    tags: ['ACM Chapter', 'MongoDB', 'NoSQL', 'Database Basics']
  },
  {
    title: 'Advanced Algorithmic Practice',
    organization: 'Platforms (LeetCode, HackerRank)',
    duration: 'Ongoing',
    icon: <FiCode className="text-neon-blue" />,
    description: 'Consistently practicing code challenges to sharpen logical analysis and computer science foundations.',
    bullets: [
      'Solved 300+ logic problems covering arrays, strings, recursion, trees, and graphs.',
      'Aimed to minimize runtime complexity (time) and memory footprint (space).',
      'Solidified coding foundations in C, C++, Java, and Python.'
    ],
    tags: ['DSA', 'Java', 'Python', 'C++', 'Algorithms']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-dark/30">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
            <span className="text-neon-cyan mr-2">&lt;</span>
            Activities & Experience
            <span className="text-neon-cyan ml-2">/&gt;</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-4" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-3">
            Timeline // Projects // Involvements
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-cyber-border/80 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Icon Node */}
              <div className="absolute -left-[42px] sm:-left-[58px] top-0 p-2.5 rounded-full bg-cyber-dark border border-cyber-border/80 text-lg flex items-center justify-center glow-shadow-cyan">
                {exp.icon}
              </div>

              {/* Card content */}
              <div className="glass-panel p-6 sm:p-8 rounded-xl border border-cyber-border/80 hover:border-neon-cyan/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-sm text-neon-cyan/90 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-gray-500 bg-cyber-dark/80 px-3 py-1 rounded-full border border-cyber-border/40 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-300 font-sans text-sm sm:text-base mb-4">
                  {exp.description}
                </p>

                <ul className="list-none space-y-2 mb-6 text-sm font-sans text-gray-400">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-neon-cyan mt-1 font-mono">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="font-mono text-[10px] tracking-wide bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
