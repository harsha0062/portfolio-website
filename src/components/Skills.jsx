import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaDatabase, 
  FaHtml5, FaGitAlt, FaGithub, FaTerminal, FaLinux 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiGooglecolab, SiTensorflow 
} from 'react-icons/si';
import { TbBinaryTree, TbRobot, TbBrandVscode, TbBadge3D } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Programming Languages',
    iconColor: 'text-neon-cyan',
    skills: [
      { name: 'C / C++', level: 85, icon: <FaTerminal /> },
      { name: 'Java Programming', level: 80, icon: <FaJava /> },
      { name: 'Python Programming', level: 85, icon: <FaPython /> },
      { name: 'SQL', level: 75, icon: <FaDatabase /> }
    ]
  },
  {
    title: 'Web Technologies & Design',
    iconColor: 'text-neon-blue',
    skills: [
      { name: 'HTML5', level: 90, icon: <FaHtml5 /> },
      { name: 'CSS3 / Tailwind', level: 80, icon: <SiTailwindcss /> },
      { name: 'Java Full Stack (Learning)', level: 70, icon: <FaJava /> }
    ]
  },
  {
    title: 'Operating Systems & Tools',
    iconColor: 'text-neon-purple',
    skills: [
      { name: 'Linux OS & Shell Navigation', level: 75, icon: <FaLinux /> },
      { name: 'Git & GitHub', level: 80, icon: <FaGitAlt /> },
      { name: 'VS Code IDE', level: 90, icon: <TbBrandVscode /> },
      { name: 'Collaboration Tools', level: 80, icon: <FaGithub /> }
    ]
  },
  {
    title: 'AI & Data Structures',
    iconColor: 'text-neon-cyan',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, icon: <TbBinaryTree /> },
      { name: 'Machine Learning Fundamentals', level: 70, icon: <SiTensorflow /> },
      { name: 'Generative AI Tools', level: 80, icon: <TbRobot /> },
      { name: 'Jupyter & Google Colab', level: 75, icon: <SiGooglecolab /> }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden grid-bg">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
            <span className="text-neon-cyan mr-2">&lt;</span>
            Technical Skills
            <span className="text-neon-cyan ml-2">/&gt;</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-4" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-3">
            Capabilities // Stack // Competencies
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className="glass-panel p-6 sm:p-8 rounded-xl border border-cyber-border/80 flex flex-col hover:border-neon-cyan/30 transition-all duration-300"
            >
              <h3 className="font-display font-extrabold text-lg text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                <span className={`w-1.5 h-6 bg-gradient-to-b from-neon-cyan to-neon-blue rounded-full`} />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-sans font-medium">
                      <div className="flex items-center gap-2.5 text-gray-300">
                        <span className={`text-lg ${category.iconColor}`}>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-neon-cyan">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-cyber-dark/80 rounded-full overflow-hidden border border-cyber-border/40">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
