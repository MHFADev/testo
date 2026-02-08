import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "AI Image Classifier",
    description: "A machine learning model trained to identify different species of plants from images using TensorFlow.",
    tags: ["Python", "TensorFlow", "React"],
    image: "https://picsum.photos/600/400?random=1",
    github: "#",
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio 2.0",
    description: "This very website! Built with React, Tailwind, and Framer Motion to showcase my journey.",
    tags: ["React", "Framer Motion", "Tailwind"],
    image: "https://picsum.photos/600/400?random=2",
    github: "#",
    link: "#"
  },
  {
    id: 3,
    title: "School Schedule Bot",
    description: "A Telegram bot that reminds students of their daily class schedules and assignment deadlines.",
    tags: ["Python", "Telegram API", "SQL"],
    image: "https://picsum.photos/600/400?random=3",
    github: "#"
  }
];

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <SectionWrapper id="projects" className="bg-dark text-white rounded-[3rem] py-24 my-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-accent mb-4">Featured Projects</h2>
        <p className="text-gray-300">Some cool things I've built.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer border border-white/10 group hover:border-accent/50 transition-colors"
            whileHover={{ y: -10 }}
          >
            <motion.div layoutId={`card-image-${project.id}`} className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
            <div className="p-6">
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold mb-2 text-white">{project.title}</motion.h3>
                <motion.p className="text-gray-400 text-sm line-clamp-2">{project.description}</motion.p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md">{tag}</span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="bg-white text-dark w-full max-w-2xl rounded-3xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <motion.div layoutId={`card-image-${selectedId}`} className="h-64 md:h-80 overflow-hidden">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </motion.div>

                <div className="p-8">
                    <motion.h3 layoutId={`card-title-${selectedId}`} className="text-3xl font-heading font-bold mb-4">{selectedProject.title}</motion.h3>
                    <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                        {selectedProject.tags.map(tag => (
                             <span key={tag} className="px-3 py-1 bg-dark text-white rounded-full text-sm font-bold shadow-cartoon-hover">{tag}</span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {selectedProject.github && (
                            <a href={selectedProject.github} className="flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl font-bold transition-colors">
                                <Github size={20} /> Code
                            </a>
                        )}
                        {selectedProject.link && (
                            <a href={selectedProject.link} className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary/90 rounded-xl font-bold transition-colors shadow-lg">
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;