import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'Python', level: 85, color: '#3776AB' },
  { name: 'TypeScript', level: 80, color: '#3178C6' },
  { name: 'React / Next.js', level: 75, color: '#61DAFB' },
  { name: 'Tailwind CSS', level: 90, color: '#38B2AC' },
  { name: 'Machine Learning', level: 60, color: '#FF9900' },
  { name: 'Framer Motion', level: 70, color: '#E902B5' },
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-dark mb-4">My Arsenal</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {skillsData.map((skill, index) => (
          <div key={skill.name} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-dark">{skill.name}</span>
              <span className="font-mono text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden border border-gray-300">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative Bubbles */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {['Git', 'VS Code', 'Figma', 'TensorFlow', 'Postman', 'Vercel'].map((item, i) => (
            <motion.span
                key={item}
                className="px-6 py-3 bg-white border-2 border-dark rounded-full font-bold shadow-cartoon cursor-default hover:bg-yellow-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
            >
                {item}
            </motion.span>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;