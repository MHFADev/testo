import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate asset loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-dark bg-yellow-50 min-h-screen relative selection:bg-secondary selection:text-white">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <main className="flex flex-col relative z-10">
            <Navbar />
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
            <AIChatWidget />
            
            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
               <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl mix-blend-multiply filter animate-blob"></div>
               <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000"></div>
            </div>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;