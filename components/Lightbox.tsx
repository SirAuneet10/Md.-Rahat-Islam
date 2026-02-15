
import React, { useEffect } from 'react';
import { X, CheckCircle2, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Project } from '../types';

interface LightboxProps {
  project: Project;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ project, onClose }) => {
  // Prevent scrolling when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col md:flex-row bg-[#0B0B0D]/95 backdrop-blur-xl animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[70] p-3 rounded-full bg-[#111114] border border-[#23232A] text-[#F4F4F5] hover:text-[#FFD400] hover:border-[#FFD400] transition-all"
      >
        <X size={24} />
      </button>

      {/* Image Area */}
      <div className="flex-1 relative overflow-auto p-4 md:p-12 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title} 
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Details Drawer */}
      <div className="w-full md:w-[450px] bg-[#111114] border-l border-[#23232A] flex flex-col h-full overflow-y-auto">
        <div className="p-8 space-y-8">
          <header>
            <span className="text-xs uppercase tracking-[0.3em] text-[#FFD400] font-bold mb-4 block">
              Project Details
            </span>
            <h2 className="text-3xl font-bold text-[#F4F4F5] mb-2">{project.title}</h2>
            <p className="text-[#A0A0AA]">{project.description}</p>
          </header>

          <section className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4F4F5]">Project Goal</h4>
            <p className="text-[#A0A0AA] leading-relaxed">
              {project.goal}
            </p>
          </section>

          <section className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4F4F5]">Tools & Tech</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-3 py-1 bg-[#23232A] text-xs font-medium text-[#F4F4F5] rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4F4F5]">Key Deliverables</h4>
            <ul className="space-y-3">
              {project.deliverables.map(item => (
                <li key={item} className="flex items-center text-[#A0A0AA] text-sm">
                  <CheckCircle2 size={16} className="text-[#FFD400] mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="sticky bottom-0 pt-8 pb-4 bg-[#111114]">
            <a 
              href="#/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full bg-[#FFD400] text-[#0B0B0D] py-4 rounded-xl font-bold yellow-glow transition-all"
            >
              <Mail className="mr-3" size={20} />
              Hire Me for a Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
