
import React from 'react';
import { experiences } from '../data/portfolio';
import { Download, ExternalLink, Calendar, Briefcase } from 'lucide-react';

const Resume: React.FC = () => {
  const tools = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 
    'Adobe Premiere Pro', 'Midjourney', 'Stable Diffusion', 
    'Figma', 'Canva Pro'
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#23232A] pb-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Professional <span className="text-[#FFD400]">Resume</span></h1>
          <p className="text-[#A0A0AA] text-lg">Senior Graphic Designer & AI Content Specialist</p>
        </div>
        <button className="flex items-center px-8 py-4 bg-[#FFD400] text-[#0B0B0D] rounded-xl font-bold yellow-glow transition-all hover:-translate-y-1">
          <Download size={20} className="mr-3" /> Download CV
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Skills & Tools */}
        <div className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD400]">Core Skills</h3>
            <ul className="space-y-3 text-[#F4F4F5] font-medium">
              <li>• Print & Digital Design</li>
              <li>• Social Media Strategy</li>
              <li>• AI-Enhanced Production</li>
              <li>• Brand Consistency</li>
              <li>• Motion Graphics</li>
              <li>• Ad Creative Production</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD400]">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map(tool => (
                <span key={tool} className="px-3 py-1 bg-[#111114] border border-[#23232A] text-xs text-[#F4F4F5] rounded-lg">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-6 p-6 bg-[#111114] border border-[#23232A] rounded-2xl">
             <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD400]">Upwork Status</h3>
             <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#A0A0AA]">Job Success</span>
                  <span className="text-sm font-bold text-[#FFD400]">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#A0A0AA]">Total Hours</span>
                  <span className="text-sm font-bold text-[#F4F4F5]">538+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#A0A0AA]">Badge</span>
                  <span className="text-xs font-bold text-[#0B0B0D] bg-[#FFD400] px-2 py-0.5 rounded">RISING TALENT</span>
                </div>
             </div>
          </section>
        </div>

        {/* Main Column: Timeline */}
        <div className="lg:col-span-2 space-y-16">
          <section className="space-y-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD400] flex items-center">
              <Briefcase size={18} className="mr-3" /> Experience History
            </h3>
            
            <div className="space-y-16 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-[#23232A]">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-[#FFD400] border-2 border-[#0B0B0D]" />
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h4 className="text-2xl font-bold">{exp.role}</h4>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#FFD400] flex items-center">
                        <Calendar size={14} className="mr-2" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-[#A0A0AA] font-bold text-lg">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-[#A0A0AA] leading-relaxed flex items-start">
                          <span className="text-[#FFD400] mr-2 text-lg leading-none">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-12 border-t border-[#23232A] space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD400]">Other Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#111114] border border-[#23232A] rounded-2xl">
                <h5 className="font-bold text-[#F4F4F5] mb-2">Process-Driven</h5>
                <p className="text-sm text-[#A0A0AA]">Specialized in creating repeatable design workflows and brand style guides for growing startups.</p>
              </div>
              <div className="p-6 bg-[#111114] border border-[#23232A] rounded-2xl">
                <h5 className="font-bold text-[#F4F4F5] mb-2">QA Focused</h5>
                <p className="text-sm text-[#A0A0AA]">Vast experience in remote evaluation and visual quality control, ensuring zero-error delivery.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
