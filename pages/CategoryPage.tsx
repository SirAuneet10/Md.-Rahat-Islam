
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects, categories } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';
import { Project, CategoryType } from '../types';
import { ChevronLeft, Filter } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const category = categories.find(c => c.type === categoryId);
  const categoryProjects = projects.filter(p => p.category === categoryId);

  // Derive unique tags for filtering
  const allTags = ['All', ...Array.from(new Set(categoryProjects.flatMap(p => p.tags)))];

  const filteredProjects = activeFilter === 'All' 
    ? categoryProjects 
    : categoryProjects.filter(p => p.tags.includes(activeFilter));

  if (!category) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <Link to="/work" className="text-[#FFD400] font-bold">Back to Work Hub</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <header className="space-y-8">
        <Link to="/work" className="inline-flex items-center text-sm font-bold text-[#A0A0AA] hover:text-[#FFD400] transition-colors">
          <ChevronLeft size={16} className="mr-2" /> Back to Work Hub
        </Link>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">{category.label}</h1>
          <p className="text-xl text-[#A0A0AA] max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="flex items-center space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex items-center text-[#F4F4F5] font-bold text-sm uppercase tracking-widest mr-4">
          <Filter size={14} className="mr-2 text-[#FFD400]" /> Filter:
        </div>
        <div className="flex space-x-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                activeFilter === tag 
                ? 'bg-[#FFD400] border-[#FFD400] text-[#0B0B0D]' 
                : 'bg-transparent border-[#23232A] text-[#A0A0AA] hover:border-[#FFD400]/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))
        ) : (
          <div className="col-span-full py-32 text-center border-2 border-dashed border-[#23232A] rounded-3xl">
             <p className="text-[#A0A0AA]">No projects match this filter yet. Check back soon!</p>
          </div>
        )}
      </div>

      <div className="sticky bottom-12 z-40 flex justify-center pointer-events-none">
        <Link 
          to="/contact" 
          className="pointer-events-auto bg-[#FFD400] text-[#0B0B0D] px-10 py-4 rounded-full font-bold yellow-glow shadow-2xl flex items-center"
        >
          Hire me for {category.label}
        </Link>
      </div>

      {selectedProject && (
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default CategoryPage;
