
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'AI Content', path: '/work/ai-content' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#23232A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#F4F4F5] group-hover:text-[#FFD400] transition-colors">
              Md. Rahat Islam
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A0A0AA] group-hover:text-[#FFB000] transition-colors">
              Auneet Islam
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#FFD400] ${
                  isActive(link.path) ? 'text-[#FFD400]' : 'text-[#A0A0AA]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#FFD400] text-[#0B0B0D] px-6 py-2.5 rounded-full font-bold text-sm yellow-glow transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#F4F4F5] hover:text-[#FFD400] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0B0D] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 px-8 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-bold transition-colors ${
                isActive(link.path) ? 'text-[#FFD400]' : 'text-[#F4F4F5]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-[#23232A] space-y-6">
            <a
              href="https://www.upwork.com/freelancers/~0199bfd60461bc5c31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#A0A0AA] hover:text-[#FFD400] transition-colors"
            >
              Upwork Profile <ExternalLink size={16} className="ml-2" />
            </a>
            <a
              href="https://www.behance.net/auneetislam19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#A0A0AA] hover:text-[#FFD400] transition-colors"
            >
              Behance Portfolio <ExternalLink size={16} className="ml-2" />
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#FFD400] text-[#0B0B0D] py-4 rounded-xl font-bold text-lg"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
