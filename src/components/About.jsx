import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiTerminal, FiTrendingUp, FiCpu } from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'DSA Solved', value: '300+', detail: 'LeetCode & Practice', icon: <FiTerminal className="text-neon-cyan" /> },
    { label: 'Academics (GPA)', value: '8.07', detail: 'Anurag University', icon: <FiBookOpen className="text-neon-blue" /> },
    { label: 'Certifications', value: '6', detail: 'Google, Infosys, MongoDB', icon: <FiCpu className="text-neon-purple" /> },
    { label: 'Activities', value: 'Cloud Club', detail: 'Event Organizer', icon: <FiTrendingUp className="text-neon-cyan" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
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
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-dark/30">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
            <span className="text-neon-cyan mr-2">&lt;</span>
            About Me
            <span className="text-neon-cyan ml-2">/&gt;</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-4" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-3">
            Profile // Background // Core Drivers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-display font-bold text-2xl text-white flex items-center gap-2">
              Building a career in <span className="text-neon-cyan">Software Engineering</span>
            </h3>
            
            <p className="text-gray-400 font-sans leading-relaxed text-base md:text-lg">
              I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (3rd Year) at <strong>Anurag University, Hyderabad</strong>. 
              My objective is to secure a software engineering internship where I can apply my programming skills, data structures knowledge, and analytical problem-solving skills.
            </p>

            <p className="text-gray-400 font-sans leading-relaxed text-base md:text-lg">
              Throughout my academic journey, I have built a solid foundation in <strong>Data Structures and Algorithms</strong>. 
              I have successfully solved over <strong>300+ problems</strong> across major platforms (focusing on arrays, strings, recursion, trees, and graphs). 
              I enjoy optimizing algorithmic complexity and building logic-driven systems.
            </p>

            <p className="text-gray-400 font-sans leading-relaxed text-base md:text-lg">
              Beyond my coursework, I serve as an **Event Organizer for the Cloud Club** at Anurag University, where I organize 
              and coordinate technical workshops and bootcamps, which helps me refine my team collaboration and leadership skills. 
              I have a strong willingness to learn new technologies and quickly adapt to professional development environments.
            </p>

            <div className="p-4 border border-cyber-border rounded-lg bg-cyber-dark/50 font-mono text-xs text-neon-blue/90 space-y-2">
              <div>&gt; echo $CORE_STACK</div>
              <div className="text-gray-300 pl-4">["C", "C++", "Java", "Python", "HTML", "SQL", "Linux"]</div>
              <div>&gt; echo $ACADEMIC_GOAL</div>
              <div className="text-neon-cyan pl-4">✓ Seeking Software Engineer Internship opportunities</div>
            </div>
          </motion.div>

          {/* Metrics / Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 w-full"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-6 rounded-xl border border-cyber-border flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex justify-between items-start">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    METRIC_0{index + 1}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display font-black text-3xl text-white tracking-tight leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans font-semibold text-xs text-gray-300 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className="font-sans text-[11px] text-gray-500 mt-1">
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
