
import React from 'react';
import { ExternalLink, CheckCircle2, Globe, MapPin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
      <section className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
          <header className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-[#FFD400] font-bold">The Persona</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">Md. Rahat <span className="text-[#FFD400]">Islam</span></h1>
            <p className="text-[#A0A0AA] flex items-center">
              <MapPin size={16} className="mr-2 text-[#FFD400]" /> Dhaka, Bangladesh • Remote Worldwide
            </p>
          </header>
          
          <div className="space-y-6 text-lg text-[#F4F4F5] leading-relaxed">
            <p>
              Known online as <span className="font-bold text-[#FFD400]">Auneet Islam</span>, I am a Graphic Designer and AI Content Creator 
              with a specialized focus on social media growth and brand strategy. 
            </p>
            <p className="text-[#A0A0AA]">
              I blend traditional design principles—color theory, typography, and hierarchy—with modern AI-assisted production 
              to create visuals that don't just look "cool," but actually convert and build trust.
            </p>
            <p className="text-[#A0A0AA]">
              With over 538 hours on Upwork and a 100% Job Success Score, I have proven my reliability and expertise 
              in high-stakes environments for international brands and remote marketing teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.upwork.com/freelancers/~0199bfd60461bc5c31" 
              target="_blank" 
              className="flex items-center px-6 py-3 bg-[#FFD400] text-[#0B0B0D] rounded-full font-bold hover:scale-105 transition-transform"
            >
              Hire me on Upwork <ExternalLink size={16} className="ml-2" />
            </a>
            <a 
              href="mailto:auneetislam19@gmail.com" 
              className="flex items-center px-6 py-3 bg-[#111114] border border-[#23232A] text-[#F4F4F5] rounded-full font-bold hover:border-[#FFD400] transition-all"
            >
              Email Directly <Mail size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="flex-1 w-full lg:max-w-md relative group">
          <div className="absolute -inset-4 bg-[#FFD400]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#23232A] bg-[#111114]">
             <img 
               src="https://picsum.photos/seed/rahat/800/1000" 
               alt="Md. Rahat Islam" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* Specialized Strengths */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6 p-8 bg-[#111114] border border-[#23232A] rounded-3xl">
          <h3 className="text-2xl font-bold flex items-center">
            <CheckCircle2 size={24} className="text-[#FFD400] mr-3" />
            Marketing Mindset
          </h3>
          <p className="text-[#A0A0AA] leading-relaxed">
            As a former Senior Marketing Director, I design with conversion in mind. Every flyer, ad, or post has a strategic goal beyond aesthetics.
          </p>
        </div>
        <div className="space-y-6 p-8 bg-[#111114] border border-[#23232A] rounded-3xl">
          <h3 className="text-2xl font-bold flex items-center">
            <CheckCircle2 size={24} className="text-[#FFD400] mr-3" />
            Detail Focused
          </h3>
          <p className="text-[#A0A0AA] leading-relaxed">
            My experience in Quality Control and remote evaluation has trained me to spot the "pixel-perfect" details that others miss.
          </p>
        </div>
        <div className="space-y-6 p-8 bg-[#111114] border border-[#23232A] rounded-3xl">
          <h3 className="text-2xl font-bold flex items-center">
            <CheckCircle2 size={24} className="text-[#FFD400] mr-3" />
            Scalable Workflow
          </h3>
          <p className="text-[#A0A0AA] leading-relaxed">
            I leverage AI tools to drastically reduce production time while maintaining (and often exceeding) premium quality standards.
          </p>
        </div>
      </section>

      {/* Languages */}
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center space-x-2 text-[#FFD400] font-bold tracking-widest uppercase text-xs">
          <Globe size={16} /> <span>Languages</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="space-y-1">
            <p className="text-2xl font-bold">Bengali</p>
            <p className="text-xs text-[#A0A0AA] uppercase tracking-widest font-bold">Native</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">English</p>
            <p className="text-xs text-[#A0A0AA] uppercase tracking-widest font-bold">C2 Proficient</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">German</p>
            <p className="text-xs text-[#A0A0AA] uppercase tracking-widest font-bold">A1 Beginner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
