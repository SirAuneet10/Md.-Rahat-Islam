
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0D] border-t border-[#23232A] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2 space-y-8">
             <Link to="/" className="group flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-[#F4F4F5]">
                Md. Rahat <span className="text-[#FFD400]">Islam</span>
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A0A0AA] mt-1">
                Graphic Designer • AI Specialist
              </span>
            </Link>
            <p className="text-[#A0A0AA] max-w-sm leading-relaxed">
              Elevating brands through strategic visual design and future-forward AI content creation. 
              Based in Dhaka, serving the world.
            </p>
            <div className="flex space-x-4">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#23232A] flex items-center justify-center text-[#A0A0AA] hover:border-[#FFD400] hover:text-[#FFD400] transition-all">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFD400]">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Work', 'About', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[#A0A0AA] hover:text-[#F4F4F5] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFD400]">External</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.upwork.com/freelancers/~0199bfd60461bc5c31" target="_blank" className="flex items-center text-[#A0A0AA] hover:text-[#F4F4F5] transition-colors">
                  Upwork Profile <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/auneetislam19" target="_blank" className="flex items-center text-[#A0A0AA] hover:text-[#F4F4F5] transition-colors">
                  Behance Portfolio <ExternalLink size={14} className="ml-2" />
                </a>
              </li>
              <li>
                <a href="mailto:auneetislam19@gmail.com" className="flex items-center text-[#A0A0AA] hover:text-[#F4F4F5] transition-colors">
                  Direct Email <Mail size={14} className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[#23232A] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#A0A0AA] text-sm">
            © {new Date().getFullYear()} Md. Rahat Islam (Auneet). All Rights Reserved.
          </p>
          <div className="flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">
             <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-[#FFD400] mr-2" /> Available for Projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
