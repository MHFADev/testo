import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { User, BookOpen, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-white/50 rounded-3xl backdrop-blur-sm border border-white my-10 shadow-xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-dark mb-4">About Me</h2>
        <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card 
            icon={<User size={40} />} 
            title="Who Am I?" 
            color="bg-blue-100 text-blue-600"
            delay={0}
        >
            I'm a passionate Grade 11 student from TJKT. I bridge the gap between creative design and intelligent algorithms.
        </Card>
        <Card 
            icon={<BookOpen size={40} />} 
            title="Education" 
            color="bg-purple-100 text-purple-600"
            delay={0.2}
        >
            Currently studying at TJKT (Teknik Jaringan Komputer dan Telekomunikasi), focusing on AI and Network Engineering.
        </Card>
        <Card 
            icon={<Heart size={40} />} 
            title="Interests" 
            color="bg-pink-100 text-pink-600"
            delay={0.4}
        >
            Deep Learning, Neural Networks, Responsive Web Design, and creating interactive user experiences.
        </Card>
      </div>

      {/* Mini Story Timeline */}
      <div className="mt-20">
         <h3 className="text-2xl font-heading font-bold mb-8 text-center">My Journey</h3>
         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            <TimelineItem year="2021" title="Started Coding" desc="Wrote my first line of Python code." side="left" />
            <TimelineItem year="2022" title="Entered TJKT" desc="Began formal education in Network & Computer Engineering." side="right" />
            <TimelineItem year="2023" title="Discovered AI" desc="Built my first simple chatbot and fell in love with ML." side="left" />
            <TimelineItem year="2024" title="Full Stack Journey" desc="Combining AI with modern web tech like Next.js." side="right" />

         </div>
      </div>
    </SectionWrapper>
  );
};

const Card = ({ icon, title, children, color, delay }: any) => (
    <motion.div
        className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-cartoon hover:-translate-y-2 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
    >
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </motion.div>
);

const TimelineItem = ({ year, title, desc, side }: any) => {
    const isLeft = side === 'left';
    return (
        <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${isLeft ? '' : ''}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-hover:bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <motion.div 
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                whileHover={{ scale: 1.02 }}
            >
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{title}</div>
                    <time className="font-caveat font-medium text-primary">{year}</time>
                </div>
                <div className="text-slate-500">{desc}</div>
            </motion.div>
        </div>
    )
}

export default About;