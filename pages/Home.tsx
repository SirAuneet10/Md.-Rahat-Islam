
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Clock, Trophy, ExternalLink, Zap } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import { Project } from '../types';

const Home: React.FC = () => {
  const { projects, categories } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#FFD400]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#111114] border border-[#23232A] mb-12 animate-in slide-in-from-bottom-4 duration-500">
            <span className="flex items-center text-[#FFD400] text-xs font-bold tracking-widest uppercase mr-4">
              <Trophy size={14} className="mr-2" /> Rising Talent
            </span>
            <div className="w-px h-4 bg-[#23232A] mr-4" />
            <span className="flex items-center text-[#F4F4F5] text-xs font-bold tracking-widest uppercase mr-4">
              <Star size={14} className="mr-2 text-[#FFD400]" /> 100% Success
            </span>
            <div className="w-px h-4 bg-[#23232A] mr-4" />
            <span className="flex items-center text-[#A0A0AA] text-xs font-bold tracking-widest uppercase">
              <Clock size={14} className="mr-2" /> 538+ Hours
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Md. Rahat <span className="text-[#FFD400]">Islam</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#A0A0AA] mb-12 leading-relaxed">
            Graphic Designer • AI Content Creator • Social Media & Branding. 
            Blending high-end design fundamentals with advanced AI for high-performing visual strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-[#FFD400] text-[#0B0B0D] rounded-full font-bold text-lg yellow-glow transition-all hover:-translate-y-1"
            >
              Hire Me
            </Link>
            <a
              href="#best-work"
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-[#F4F4F5] border border-[#23232A] rounded-full font-bold text-lg hover:border-[#FFD400] transition-all"
            >
              View Best Work
            </a>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section id="best-work" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Best <span className="text-[#FFD400]">Work</span></h2>
            <p className="text-[#A0A0AA] max-w-xl">
              A curated selection of high-performance visuals from my latest portfolio on Behance.
            </p>
          </div>
          <Link to="/work" className="group flex items-center text-[#FFD400] font-bold tracking-widest uppercase text-sm">
            Browse All Work <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* AI Content Strip */}
      <section className="bg-[#111114] border-y border-[#23232A] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <Zap size={300} className="text-[#FFD400]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.4em] text-[#FFD400] font-bold">Cutting Edge Production</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Human-Centric <span className="text-[#FFD400]">AI Content</span></h2>
            <p className="text-lg text-[#A0A0AA] leading-relaxed">
              I don't just "generate" images. I blend strong design fundamentals with AI automation—always refined with human taste, brand strategy, and conversion optimization.
            </p>
            <Link
              to="/work/ai-content"
              className="inline-flex items-center px-8 py-4 bg-transparent border border-[#FFD400] text-[#FFD400] rounded-xl font-bold hover:bg-[#FFD400] hover:text-[#0B0B0D] transition-all"
            >
              Explore My AI Workflow <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://picsum.photos/seed/ai1/500/500" alt="AI Example" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-square rounded-2xl overflow-hidden translate-y-8 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://picsum.photos/seed/ai2/500/500" alt="AI Example" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Category Hub Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Project <span className="text-[#FFD400]">Categories</span></h2>
          <p className="text-[#A0A0AA]">Specialized expertise across digital and print mediums.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.type}
              to={`/work/${cat.type}`}
              className="group relative h-64 overflow-hidden rounded-2xl border border-[#23232A] bg-[#111114]"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-[#F4F4F5] group-hover:text-[#FFD400] transition-colors">{cat.label}</h3>
                <p className="text-xs text-[#A0A0AA] opacity-0 group-hover:opacity-100 transition-opacity">View Projects</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#111114] border border-[#23232A] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold">Trusted Globally on Major Platforms</h3>
            <p className="text-[#A0A0AA]">Connect with me or view my extended portfolios.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.upwork.com/freelancers/~0199bfd60461bc5c31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#6FDA44]/10 text-[#6FDA44] border border-[#6FDA44]/30 rounded-full font-bold hover:bg-[#6FDA44] hover:text-[#0B0B0D] transition-all"
            >
              Upwork Profile <ExternalLink size={18} className="ml-2" />
            </a>
            <a
              href="https://www.behance.net/auneetislam19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#0057ff]/10 text-[#0057ff] border border-[#0057ff]/30 rounded-full font-bold hover:bg-[#0057ff] hover:text-[#F4F4F5] transition-all"
            >
              Behance <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to boost your <span className="text-[#FFD400]">brand visuals?</span></h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-12 py-6 bg-[#FFD400] text-[#0B0B0D] rounded-full font-bold text-xl yellow-glow transition-all"
        >
          Let's Start a Project
        </Link>
      </section>

      {selectedProject && (
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Home;
