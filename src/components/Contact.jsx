import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    
    setErrorMessage('');
    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden grid-bg">
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
            <span className="text-neon-cyan mr-2">&lt;</span>
            Get In Touch
            <span className="text-neon-cyan ml-2">/&gt;</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-neon-cyan to-neon-blue mt-4" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-3">
            Message // Network // Collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Quick contact info cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wider">
                Let's Start a <span className="text-neon-cyan">Project</span>
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
                Whether you have an internship opportunity, a freelance project, or just want to chat about cloud architectures and AI tools, 
                feel free to send me a message. I am usually quick to respond!
              </p>
            </div>

            <div className="space-y-4 my-8">
              {/* Mail Detail */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-cyber-border/40 bg-cyber-dark/40">
                <div className="p-3 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-gray-500 uppercase">Email Address</div>
                  <a href="mailto:harshavardhan.vaddi@gmail.com" className="text-white hover:text-neon-cyan transition-colors text-sm font-sans font-medium">
                    harshavardhan.vaddi@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Detail */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-cyber-border/40 bg-cyber-dark/40">
                <div className="p-3 rounded-lg bg-neon-blue/5 border border-neon-blue/20 text-neon-blue">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-gray-500 uppercase">Location</div>
                  <div className="text-white text-sm font-sans font-medium">
                    Hyderabad, Telangana, India
                  </div>
                </div>
              </div>

              {/* LinkedIn Detail */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-cyber-border/40 bg-cyber-dark/40">
                <div className="p-3 rounded-lg bg-neon-purple/5 border border-neon-purple/20 text-neon-purple">
                  <FiLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-gray-500 uppercase">Professional Network</div>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-neon-cyan transition-colors text-sm font-sans font-medium">
                    linkedin.com/in/harsha-vardhan
                  </a>
                </div>
              </div>
            </div>

            {/* Social Footer */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Links //</span>
              <div className="flex gap-3">
                {[
                  { icon: <FiGithub />, url: 'https://github.com' },
                  { icon: <FiLinkedin />, url: 'https://linkedin.com' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="p-3 rounded-lg border border-cyber-border bg-cyber-dark/60 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-xl border border-cyber-border/80"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                    Full Name <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-cyber-dark/60 border border-cyber-border/80 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan rounded-lg px-4 py-3 text-white font-sans text-sm outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                    Email Address <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-cyber-dark/60 border border-cyber-border/80 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan rounded-lg px-4 py-3 text-white font-sans text-sm outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-cyber-dark/60 border border-cyber-border/80 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan rounded-lg px-4 py-3 text-white font-sans text-sm outline-none transition-all"
                  placeholder="Internship opportunity / Consultation"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                  Message <span className="text-neon-cyan">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-cyber-dark/60 border border-cyber-border/80 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan rounded-lg px-4 py-3 text-white font-sans text-sm outline-none transition-all resize-none"
                  placeholder="Describe your project, timeline, or inquiries..."
                />
              </div>

              {errorMessage && (
                <div className="text-red-500 font-mono text-xs mt-2">
                  [ERROR]: {errorMessage}
                </div>
              )}

              {/* Status display */}
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-neon-cyan font-mono text-xs border border-neon-cyan/20 bg-neon-cyan/5 p-3 rounded-lg"
                >
                  <FiCheckCircle className="text-lg" />
                  <span>[STATUS_SUCCESS]: Message received. Initiating contact handshake shortly.</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-cyan to-neon-blue disabled:from-gray-800 disabled:to-gray-900 disabled:text-gray-500 text-cyber-dark font-sans font-bold py-3.5 rounded-lg shadow-lg hover:shadow-neon-cyan/25 cursor-pointer disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-cyber-dark border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Transmit Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
