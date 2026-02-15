
import React from 'react';
import { Mail, MessageCircle, ExternalLink, ArrowRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <header className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Let's <span className="text-[#FFD400]">Create.</span></h1>
        <p className="text-xl text-[#A0A0AA] leading-relaxed">
          Need high-performing flyers, social media content, or AI-powered marketing visuals? 
          Tell me what you need, and I'll help you boost your brand.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Form */}
        <div className="bg-[#111114] border border-[#23232A] p-8 md:p-12 rounded-[40px] space-y-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-2xl p-4 text-[#F4F4F5] focus:border-[#FFD400] transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-2xl p-4 text-[#F4F4F5] focus:border-[#FFD400] transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Project Type</label>
              <select className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-2xl p-4 text-[#F4F4F5] focus:border-[#FFD400] transition-colors outline-none appearance-none">
                <option>Flyers & Brochures</option>
                <option>Social Media Strategy</option>
                <option>AI Content Production</option>
                <option>YouTube Thumbnails</option>
                <option>Billboard/Banner Design</option>
                <option>Other / Custom</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Project Details</label>
              <textarea 
                rows={5}
                placeholder="Tell me what you need (flyer/brochure/social content)..."
                className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-2xl p-4 text-[#F4F4F5] focus:border-[#FFD400] transition-colors outline-none resize-none"
              />
            </div>
            <button className="w-full bg-[#FFD400] text-[#0B0B0D] py-5 rounded-2xl font-bold text-lg yellow-glow transition-all flex items-center justify-center">
              Send Message <Send size={20} className="ml-2" />
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Direct Channels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="mailto:auneetislam19@gmail.com"
                className="flex items-center p-6 bg-[#111114] border border-[#23232A] rounded-3xl hover:border-[#FFD400] transition-all group"
              >
                <div className="w-12 h-12 bg-[#23232A] rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#FFD400] group-hover:text-[#0B0B0D] transition-all">
                   <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#A0A0AA] font-bold uppercase">Email Me</p>
                  <p className="font-bold text-[#F4F4F5]">auneetislam19@gmail.com</p>
                </div>
              </a>
              <a 
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                className="flex items-center p-6 bg-[#111114] border border-[#23232A] rounded-3xl hover:border-[#FFD400] transition-all group"
              >
                <div className="w-12 h-12 bg-[#23232A] rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#25D366] group-hover:text-[#0B0B0D] transition-all">
                   <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#A0A0AA] font-bold uppercase">WhatsApp</p>
                  <p className="font-bold text-[#F4F4F5]">Send a message</p>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Hiring Platforms</h3>
            <div className="space-y-4">
              <a 
                href="https://www.upwork.com/freelancers/~0199bfd60461bc5c31" 
                target="_blank"
                className="flex items-center justify-between p-8 bg-[#111114] border border-[#23232A] rounded-[32px] hover:border-[#FFD400] transition-all group"
              >
                <div className="space-y-1">
                   <h4 className="text-xl font-bold text-[#F4F4F5]">Upwork Profile</h4>
                   <p className="text-sm text-[#A0A0AA]">100% Success • Rising Talent</p>
                </div>
                <ArrowRight className="text-[#A0A0AA] group-hover:text-[#FFD400] group-hover:translate-x-2 transition-all" />
              </a>
              <a 
                href="https://www.behance.net/auneetislam19" 
                target="_blank"
                className="flex items-center justify-between p-8 bg-[#111114] border border-[#23232A] rounded-[32px] hover:border-[#FFD400] transition-all group"
              >
                <div className="space-y-1">
                   <h4 className="text-xl font-bold text-[#F4F4F5]">Behance Portfolio</h4>
                   <p className="text-sm text-[#A0A0AA]">Extended Visual Gallery</p>
                </div>
                <ArrowRight className="text-[#A0A0AA] group-hover:text-[#FFD400] group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
