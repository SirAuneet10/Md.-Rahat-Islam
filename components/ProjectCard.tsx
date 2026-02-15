
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#23232A] bg-[#111114] hover:border-[#FFD400]/30 transition-all duration-500"
      onClick={onClick}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest bg-[#FFD400] text-[#0B0B0D] px-2.5 py-1 rounded-full font-bold">
            {project.category.replace('-', ' ')}
          </span>
          {project.tags.slice(0, 1).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest bg-[#23232A] text-[#A0A0AA] px-2.5 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-[#F4F4F5] mb-2">{project.title}</h3>
        <p className="text-sm text-[#A0A0AA] line-clamp-2 mb-4 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
          {project.description}
        </p>
        <div className="flex items-center text-[#FFD400] text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
          View Details <ArrowRight size={14} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
