
import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import { Project, CategoryType } from '../types';
import { Zap, Brain, User, Cpu, ArrowRight } from 'lucide-react';

const AIContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const aiProjects = projects.filter(p => p.category === CategoryType.AI_CONTENT);

  const workflow = [
    {
      title: 'Strategy & Brief',
      icon: <Brain className="text-[#FFD400]" />,
      desc: 'Defining the brand voice, target audience, and emotional impact goals.'
    },
    {
      title: 'AI Ideation',
      icon: <Cpu className="text-[#FFD400]" />,
      desc: 'Using cutting-edge AI models to generate vast visual directions and unique concept art.'
    },
    {
      title: 'Human Refinement',
      icon: <User className="text-[#FFD400]" />,
      desc: 'Expert graphic design, color grading, and typography refinement in Photoshop/Illustrator.'
    },
    {
      title: 'Conversion Export',
      icon: <Zap className="text-[#FFD400]" />,
      desc: 'Optimizing final assets for high-performance marketing and brand growth.'
    }
  ];

  return (
    <div className="pb-32">
      {/* Hero */}
      <header className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#111114] to-[#0B0B0D]">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
               <span className="text-xs uppercase tracking-[0.4em] text-[#FFD400] font-bold">Future of Visual Storytelling</span>
               <h1 className="text-5xl md:text-7xl font-bold leading-tight">AI Content <br/> <span className="text-[#FFD400]">Creator</span></h1>
               <p className="text-xl text-[#A0A0AA] leading-relaxed max-w-xl">
                 I bridge the gap between AI speed and Human strategy. 
                 By blending Midjourney, Stable Diffusion, and manual high-end retouching, 
                 I deliver visuals that were previously impossible or too expensive to produce.
               </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/aihero1/600/800" className="rounded-3xl border border-[#23232A]" alt="AI Visual" />
                <img src="https://picsum.photos/seed/aihero2/600/800" className="rounded-3xl border border-[#23232A] mt-12" alt="AI Visual" />
            </div>
         </div>
      </header>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-24">
         <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">My AI <span className="text-[#FFD400]">Workflow</span></h2>
            <p className="text-[#A0A0AA]">How I ensure brand strategy is never sacrificed for automation.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <div key={step.title} className="bg-[#111114] border border-[#23232A] p-8 rounded-3xl space-y-4 relative">
                 <div className="w-12 h-12 bg-[#23232A] rounded-xl flex items-center justify-center mb-6">
                    {step.icon}
                 </div>
                 <h3 className="text-xl font-bold">{step.title}</h3>
                 <p className="text-sm text-[#A0A0AA] leading-relaxed">{step.desc}</p>
                 <div className="absolute top-8 right-8 text-4xl font-black text-[#23232A]">0{i+1}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24">
         <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-bold">AI Visual <span className="text-[#FFD400]">Portfolio</span></h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
         </div>
      </section>

      {/* Tools */}
      <section className="bg-[#111114] py-16 border-y border-[#23232A]">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#A0A0AA] mb-12">Tools used in Production</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-xl font-bold">Midjourney</span>
              <span className="text-xl font-bold">Stable Diffusion</span>
              <span className="text-xl font-bold">Adobe Firefly</span>
              <span className="text-xl font-bold">Photoshop AI</span>
              <span className="text-xl font-bold">After Effects</span>
              <span className="text-xl font-bold">Premiere Pro</span>
           </div>
        </div>
      </section>

      {selectedProject && (
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default AIContent;
