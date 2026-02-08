import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Send, Instagram, Linkedin, Mail, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="pb-32">
       <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
             <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's Connect!</h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                   Have a project in mind or just want to chat about AI? 
                   I'm always open to new opportunities and collaborations.
                </p>

                <div className="space-y-4 mb-8">
                   <a href="mailto:hello@hilmi.com" className="flex items-center gap-4 text-xl font-bold hover:text-accent transition-colors">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                         <Mail size={20} />
                      </div>
                      hello@hilmi.com
                   </a>
                </div>

                <div className="flex gap-4">
                   <SocialBtn icon={<Instagram size={20}/>} href="#" />
                   <SocialBtn icon={<Linkedin size={20}/>} href="#" />
                   <SocialBtn icon={<Github size={20}/>} href="#" />
                </div>
             </div>

             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl text-dark shadow-cartoon">
                <div className="mb-4">
                   <label className="block text-sm font-bold mb-2">Name</label>
                   <input type="text" required className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                   <label className="block text-sm font-bold mb-2">Email</label>
                   <input type="email" required className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div className="mb-6">
                   <label className="block text-sm font-bold mb-2">Message</label>
                   <textarea required rows={4} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors" placeholder="Say hello..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${formState === 'success' ? 'bg-green-500' : 'bg-dark hover:bg-gray-800'}`}
                >
                  {formState === 'idle' && (
                     <>Send Message <Send size={18} /></>
                  )}
                  {formState === 'sending' && "Sending..."}
                  {formState === 'success' && "Message Sent!"}
                </button>
             </form>
          </div>
       </div>
    </SectionWrapper>
  );
};

const SocialBtn = ({ icon, href }: { icon: any, href: string }) => (
    <motion.a
        href={href}
        whileHover={{ y: -4 }}
        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
    >
        {icon}
    </motion.a>
)

export default Contact;