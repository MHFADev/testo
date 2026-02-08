import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const achievements = [
  {
    title: "Best Coding Project",
    org: "TJKT Annual Showcase",
    date: "2023",
    desc: "Awarded 1st place for the innovative use of Python in network automation."
  },
  {
    title: "Hackathon Finalist",
    org: "TechFest 2024",
    date: "2024",
    desc: "Built a sustainable energy monitoring dashboard in 24 hours."
  },
  {
    title: "Class Representative",
    org: "Grade 11 TJKT",
    date: "2023 - Present",
    desc: "Leading student initiatives and tech clubs within the department."
  }
];

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-heading font-bold text-dark mb-4 sticky top-24">
            Experience & <br/> <span className="text-secondary">Achievements</span>
          </h2>
        </div>
        
        <div className="md:w-2/3 space-y-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-dark shadow-cartoon relative overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award size={100} />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-primary font-medium mb-4">{item.org}</p>
                <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;