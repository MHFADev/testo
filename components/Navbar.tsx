import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/70 border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <a href="#home" className="text-2xl font-heading font-bold text-dark flex items-center gap-2">
        <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg">H</span>
        ilmi.
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-dark font-medium hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </a>
          </li>
        ))}
        <li>
             <a href="#contact" className="px-5 py-2 bg-dark text-white rounded-full font-bold hover:bg-primary transition-all shadow-cartoon hover:shadow-cartoon-hover hover:translate-x-[2px] hover:translate-y-[2px]">
              Let's Talk
             </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-[72px] left-0 w-full bg-white border-b-2 border-dark shadow-xl p-6 md:hidden flex flex-col gap-4 origin-top`}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-xl font-heading font-bold text-dark hover:text-primary"
          >
            {item.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;