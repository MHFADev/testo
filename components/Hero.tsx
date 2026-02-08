import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-teal-700 rounded-full font-bold text-sm mb-4 border border-accent">
              👋 Hello World, I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-dark leading-tight">
              Muhammad <br />
              <span className="text-primary relative inline-block">
                Hilmi
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mt-2">
              Future <span className="text-secondary font-bold">AI Engineer</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             Grade 11 Student at TJKT | Exploring the frontiers of Artificial Intelligence and crafting beautiful web experiences.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-dark border-2 border-dark font-bold rounded-xl shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Visual / Illustration */}
        <div className="order-1 md:order-2 relative flex justify-center">
            <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1 }}
            >
                {/* Abstract shape backdrops */}
                <motion.div 
                    className="absolute inset-0 bg-secondary/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                 <motion.div 
                    className="absolute inset-4 bg-primary/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main Avatar / Card */}
                <motion.div 
                    className="absolute inset-0 bg-white border-4 border-dark rounded-3xl overflow-hidden flex items-center justify-center z-10 shadow-cartoon"
                    whileHover={{ scale: 1.02 }}
                >
                    <img 
                        src="https://picsum.photos/400/400?grayscale" 
                        alt="Portrait" 
                        className="w-full h-full object-cover opacity-90"
                    />
                </motion.div>

                {/* Floating Elements */}
                <FloatingIcon Icon={Cpu} className="absolute -top-6 -right-6 bg-white p-3 rounded-xl border-2 border-dark text-primary shadow-cartoon z-20" delay={0} />
                <FloatingIcon Icon={Code} className="absolute bottom-10 -left-10 bg-white p-3 rounded-xl border-2 border-dark text-secondary shadow-cartoon z-20" delay={1} />
                <FloatingIcon Icon={Sparkles} className="absolute top-1/2 -right-12 bg-white p-3 rounded-xl border-2 border-dark text-accent shadow-cartoon z-20" delay={2} />

            </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const FloatingIcon = ({ Icon, className, delay }: { Icon: any, className: string, delay: number }) => (
    <motion.div
        className={className}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
        <Icon size={32} />
    </motion.div>
);

export default Hero;