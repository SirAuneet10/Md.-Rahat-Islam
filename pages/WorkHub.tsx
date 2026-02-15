
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';

const WorkHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <header className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Project <span className="text-[#FFD400]">Work</span></h1>
        <p className="text-xl text-[#A0A0AA] leading-relaxed">
          I specialize in high-impact visual design. From small-scale social posts to massive billboard installations, 
          every pixel is strategically placed for conversion and brand impact.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.type}
            to={`/work/${cat.type}`}
            className="group relative overflow-hidden rounded-3xl border border-[#23232A] bg-[#111114] hover:border-[#FFD400]/40 transition-all duration-500"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
            </div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <h3 className="text-4xl font-bold text-[#F4F4F5] mb-4 group-hover:text-[#FFD400] transition-colors">
                {cat.label}
              </h3>
              <p className="text-[#A0A0AA] max-w-sm mb-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {cat.description}
              </p>
              <div className="flex items-center text-[#FFD400] font-bold tracking-widest uppercase text-xs">
                Explore Portfolio <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="bg-[#111114] border border-[#23232A] p-12 rounded-3xl text-center">
        <h3 className="text-3xl font-bold mb-6">Need custom design work?</h3>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-[#FFD400] text-[#0B0B0D] rounded-full font-bold yellow-glow transition-all"
        >
          Tell me what you need
        </Link>
      </section>
    </div>
  );
};

export default WorkHub;
