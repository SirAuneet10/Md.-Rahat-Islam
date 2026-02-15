
import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, CategoryType, CategoryInfo } from '../types';
import { Plus, Trash2, Edit3, Save, X, Lock, LogOut, LayoutGrid, FolderPlus, Upload, Image as ImageIcon, Type, AlignLeft } from 'lucide-react';

const Admin: React.FC = () => {
  const { projects, categories, addProject, updateProject, deleteProject, addCategory, updateCategory, isAdmin, login, logout } = usePortfolio();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [editingCategory, setEditingCategory] = useState<Partial<CategoryInfo> | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'categories'>('projects');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const catImageInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError('');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  // --- Project Handlers ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProject(prev => prev ? { ...prev, image: reader.result as string } : null);
      };
      reader.readAsDataURL(file as Blob);
    }
  };

  const handleGalleryFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditingProject(prev => {
            if (!prev) return null;
            const currentGallery = prev.gallery || [];
            return { ...prev, gallery: [...currentGallery, reader.result as string] };
          });
        };
        reader.readAsDataURL(file as Blob);
      });
    }
  };

  const removeGalleryImage = (index: number) => {
    setEditingProject(prev => {
      if (!prev || !prev.gallery) return prev;
      const newGallery = [...prev.gallery];
      newGallery.splice(index, 1);
      return { ...prev, gallery: newGallery };
    });
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const projectData = {
      ...editingProject,
      id: editingProject.id || `proj-${Date.now()}`,
      featured: editingProject.featured || false,
      tools: Array.isArray(editingProject.tools) ? editingProject.tools : [],
      deliverables: Array.isArray(editingProject.deliverables) ? editingProject.deliverables : [],
      tags: Array.isArray(editingProject.tags) ? editingProject.tags : [],
      gallery: Array.isArray(editingProject.gallery) ? editingProject.gallery : [],
    } as Project;

    if (isAddingProject) {
      addProject(projectData);
    } else {
      updateProject(projectData);
    }
    setEditingProject(null);
    setIsAddingProject(false);
  };

  // --- Category Handlers ---
  const handleCatImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingCategory(prev => prev ? { ...prev, image: reader.result as string } : null);
      };
      reader.readAsDataURL(file as Blob);
    }
  };

  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory || !editingCategory.type) return;

    const categoryData = editingCategory as CategoryInfo;
    updateCategory(categoryData);
    setEditingCategory(null);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0D] px-6">
        <div className="w-full max-w-md bg-[#111114] border border-[#23232A] rounded-3xl p-10 space-y-8 text-center">
          <div className="w-16 h-16 bg-[#FFD400] text-[#0B0B0D] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,212,0,0.2)]">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-bold">Admin Access</h1>
          <p className="text-[#A0A0AA]">Only Md. Rahat Islam has permission to manage this portfolio.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Admin Password"
              className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-4 text-center focus:border-[#FFD400] transition-colors outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
            <button className="w-full bg-[#FFD400] text-[#0B0B0D] py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold">Management <span className="text-[#FFD400]">Panel</span></h1>
          <p className="text-[#A0A0AA]">Control your brand assets and projects.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setActiveTab(activeTab === 'projects' ? 'categories' : 'projects')}
            className={`flex items-center px-6 py-3 border rounded-xl font-bold text-sm transition-all ${
              activeTab === 'categories' ? 'bg-[#FFD400] text-[#0B0B0D] border-[#FFD400]' : 'bg-[#111114] border-[#23232A] hover:border-[#FFD400]'
            }`}
          >
            {activeTab === 'projects' ? <FolderPlus size={18} className="mr-2" /> : <LayoutGrid size={18} className="mr-2" />}
            {activeTab === 'projects' ? 'Manage Categories' : 'Back to Projects'}
          </button>
          <button 
            onClick={logout}
            className="flex items-center px-6 py-3 bg-red-500/10 text-red-500 border border-red-500/30 rounded-xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all"
          >
            <LogOut size={18} className="mr-2" /> Logout
          </button>
        </div>
      </header>

      {activeTab === 'projects' ? (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Project List</h2>
            <button 
              onClick={() => {
                setEditingProject({
                  title: '',
                  description: '',
                  image: '',
                  category: CategoryType.FLYERS,
                  goal: '',
                  tools: [],
                  deliverables: [],
                  tags: [],
                  gallery: []
                });
                setIsAddingProject(true);
              }}
              className="bg-[#FFD400] text-[#0B0B0D] px-6 py-3 rounded-xl font-bold flex items-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,212,0,0.2)]"
            >
              <Plus size={20} className="mr-2" /> New Project
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {projects.map(project => (
              <div key={project.id} className="bg-[#111114] border border-[#23232A] p-6 rounded-2xl flex items-center justify-between group hover:border-[#FFD400]/40 transition-all">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#23232A]">
                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-[#A0A0AA] text-sm uppercase tracking-widest">{project.category}</p>
                    {project.gallery && project.gallery.length > 0 && (
                      <p className="text-[10px] text-[#FFD400] font-bold mt-1">+{project.gallery.length} more images</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => {
                      setEditingProject(project);
                      setIsAddingProject(false);
                    }}
                    className="p-3 bg-[#23232A] text-[#A0A0AA] rounded-xl hover:bg-[#FFD400] hover:text-[#0B0B0D] transition-all"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      if(confirm('Are you sure you want to delete this project?')) deleteProject(project.id);
                    }}
                    className="p-3 bg-[#23232A] text-[#A0A0AA] rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Category Hub Management</h2>
            <button 
              onClick={() => {
                const label = prompt('New Category Name:');
                if (label) {
                  const type = label.toLowerCase().replace(/\s+/g, '-') as CategoryType;
                  addCategory({
                    type,
                    label,
                    description: 'New category description here...',
                    icon: 'Layout',
                    image: 'https://images.unsplash.com/photo-1541462608141-ad511a7ee596?auto=format&fit=crop&q=80&w=800'
                  });
                }
              }}
              className="bg-[#F4F4F5] text-[#0B0B0D] px-6 py-3 rounded-xl font-bold flex items-center hover:scale-105 transition-transform"
            >
              <Plus size={20} className="mr-2" /> Add Category
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <div key={cat.type} className="bg-[#111114] border border-[#23232A] p-8 rounded-3xl flex flex-col group hover:border-[#FFD400]/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-xl font-bold text-[#F4F4F5] group-hover:text-[#FFD400] transition-colors">{cat.label}</h3>
                   <span className="text-[10px] text-[#A0A0AA] font-bold uppercase border border-[#23232A] px-2 py-1 rounded">{cat.type}</span>
                </div>
                <p className="text-sm text-[#A0A0AA] mb-6 line-clamp-3 h-[4.5rem] leading-relaxed">
                  {cat.description}
                </p>
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-[#23232A]">
                  <img src={cat.image} className="w-full h-full object-cover" alt={cat.label} />
                </div>
                <button 
                  className="mt-auto w-full bg-[#23232A] py-4 rounded-xl font-bold text-sm hover:bg-[#FFD400] hover:text-[#0B0B0D] transition-all flex items-center justify-center"
                  onClick={() => setEditingCategory(cat)}
                >
                  <Edit3 size={16} className="mr-2" /> Edit Category Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Modals --- */}

      {/* Project Editor Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0D]/90 backdrop-blur-md p-6">
          <div className="w-full max-w-4xl bg-[#111114] border border-[#23232A] rounded-[40px] overflow-hidden flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <header className="p-8 border-b border-[#23232A] flex justify-between items-center bg-[#111114] sticky top-0 z-10">
               <h2 className="text-2xl font-bold">
                 {isAddingProject ? 'Upload New Design' : 'Edit Project Details'}
               </h2>
               <button onClick={() => setEditingProject(null)} className="p-2 hover:text-[#FFD400] transition-colors">
                 <X size={28} />
               </button>
            </header>

            <form onSubmit={handleSaveProject} className="p-8 space-y-8 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Image Upload Area */}
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA] flex items-center">
                    <ImageIcon size={14} className="mr-2 text-[#FFD400]" /> Primary Image (Thumbnail)
                  </label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="relative aspect-[4/3] rounded-3xl border-2 border-dashed border-[#23232A] bg-[#0B0B0D] flex flex-col items-center justify-center cursor-pointer hover:border-[#FFD400] transition-all overflow-hidden group shadow-inner"
                  >
                    {editingProject.image ? (
                      <>
                        <img src={editingProject.image} className="w-full h-full object-cover" alt="Preview" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="bg-[#FFD400] text-[#0B0B0D] px-6 py-2 rounded-xl font-bold flex items-center shadow-xl">
                              <Upload size={18} className="mr-2" /> Change Image
                           </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-[#23232A] rounded-2xl flex items-center justify-center mx-auto text-[#FFD400]">
                          <ImageIcon size={32} />
                        </div>
                        <div>
                          <p className="font-bold text-[#F4F4F5]">Click to upload primary</p>
                        </div>
                      </div>
                    )}
                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                  </div>
                </div>

                {/* Gallery Upload Area */}
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA] flex items-center">
                    <LayoutGrid size={14} className="mr-2 text-[#FFD400]" /> Gallery (Additional Images)
                  </label>
                  <div className="grid grid-cols-3 gap-2 min-h-[160px] p-4 bg-[#0B0B0D] border border-[#23232A] rounded-3xl shadow-inner">
                    {editingProject.gallery?.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group/gal shadow-md">
                        <img src={img} className="w-full h-full object-cover" alt="" />
                        <button 
                          type="button"
                          onClick={() => removeGalleryImage(idx)}
                          className="absolute top-1 right-1 p-1 bg-red-500 rounded-lg opacity-0 group-hover/gal:opacity-100 transition-opacity"
                        >
                          <X size={12} className="text-white" />
                        </button>
                      </div>
                    ))}
                    <button 
                      type="button"
                      onClick={() => galleryInputRef.current?.click()}
                      className="aspect-square rounded-xl border-2 border-dashed border-[#23232A] flex items-center justify-center hover:border-[#FFD400] transition-colors bg-[#0B0B0D]/50"
                    >
                      <Plus size={24} className="text-[#A0A0AA]" />
                    </button>
                  </div>
                  <input type="file" ref={galleryInputRef} className="hidden" accept="image/*" multiple onChange={handleGalleryFilesChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Project Title</label>
                  <input 
                    required
                    className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-4 focus:border-[#FFD400] outline-none text-[#F4F4F5] transition-all"
                    value={editingProject.title || ''}
                    onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Category</label>
                  <select 
                    className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-4 focus:border-[#FFD400] outline-none text-[#F4F4F5] transition-all cursor-pointer"
                    value={editingProject.category || CategoryType.FLYERS}
                    onChange={(e) => setEditingProject({...editingProject, category: e.target.value as CategoryType})}
                  >
                    {categories.map(c => <option key={c.type} value={c.type}>{c.label}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Detailed Description</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-4 focus:border-[#FFD400] outline-none text-[#F4F4F5] transition-all resize-none"
                  value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA]">Project Goal</label>
                  <input 
                    className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-4 focus:border-[#FFD400] outline-none text-[#F4F4F5] transition-all"
                    value={editingProject.goal || ''}
                    onChange={(e) => setEditingProject({...editingProject, goal: e.target.value})}
                  />
                </div>
                <div className="space-y-4 flex items-center h-full pt-4">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox"
                        className="sr-only"
                        checked={editingProject.featured || false}
                        onChange={(e) => setEditingProject({...editingProject, featured: e.target.checked})}
                      />
                      <div className={`w-12 h-6 rounded-full transition-colors ${editingProject.featured ? 'bg-[#FFD400]' : 'bg-[#23232A]'}`}></div>
                      <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform ${editingProject.featured ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                    <span className="ml-4 text-sm font-bold text-[#F4F4F5]">Show in Best Work section</span>
                  </label>
                </div>
              </div>

              <div className="sticky bottom-0 bg-[#111114] pt-8 pb-4">
                <button type="submit" className="w-full bg-[#FFD400] text-[#0B0B0D] py-5 rounded-2xl font-bold text-lg yellow-glow flex items-center justify-center transition-all hover:-translate-y-1">
                   <Save size={20} className="mr-2" /> Save Project Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Editor Modal */}
      {editingCategory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0D]/90 backdrop-blur-md p-6">
          <div className="w-full max-w-2xl bg-[#111114] border border-[#23232A] rounded-[40px] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <header className="p-8 border-b border-[#23232A] flex justify-between items-center bg-[#111114]">
               <h2 className="text-2xl font-bold">Edit <span className="text-[#FFD400]">Category Hub</span></h2>
               <button onClick={() => setEditingCategory(null)} className="p-2 hover:text-[#FFD400] transition-colors">
                 <X size={28} />
               </button>
            </header>

            <form onSubmit={handleSaveCategory} className="p-8 space-y-8 overflow-y-auto custom-scrollbar max-h-[75vh]">
              {/* Cover Image Upload */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA] flex items-center">
                  <ImageIcon size={14} className="mr-2 text-[#FFD400]" /> Category Cover Image
                </label>
                <div 
                  onClick={() => catImageInputRef.current?.click()}
                  className="relative aspect-video rounded-3xl border-2 border-dashed border-[#23232A] bg-[#0B0B0D] flex flex-col items-center justify-center cursor-pointer hover:border-[#FFD400] transition-all overflow-hidden group shadow-inner"
                >
                  <img src={editingCategory.image} className="w-full h-full object-cover" alt="Preview" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[#FFD400] text-[#0B0B0D] px-6 py-2 rounded-xl font-bold flex items-center shadow-xl">
                      <Upload size={18} className="mr-2" /> Upload New Cover
                    </div>
                  </div>
                  <input type="file" ref={catImageInputRef} className="hidden" accept="image/*" onChange={handleCatImageChange} />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA] flex items-center">
                   <Type size={14} className="mr-2 text-[#FFD400]" /> Category Title
                </label>
                <input 
                  required
                  className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-5 focus:border-[#FFD400] outline-none text-[#F4F4F5] text-xl font-bold transition-all"
                  value={editingCategory.label || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, label: e.target.value})}
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#A0A0AA] flex items-center">
                   <AlignLeft size={14} className="mr-2 text-[#FFD400]" /> Hub Description
                </label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-[#0B0B0D] border border-[#23232A] rounded-xl p-5 focus:border-[#FFD400] outline-none text-[#F4F4F5] transition-all resize-none leading-relaxed"
                  value={editingCategory.description || ''}
                  onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
                />
              </div>

              <div className="bg-[#FFD400]/5 p-6 rounded-2xl border border-[#FFD400]/20">
                <p className="text-sm text-[#FFD400] leading-relaxed italic">
                  Note: Changes to the Category ID (Type: {editingCategory.type}) are locked as they are used for routing. Only Title, Description, and Image are editable here.
                </p>
              </div>

              <button type="submit" className="w-full bg-[#FFD400] text-[#0B0B0D] py-5 rounded-2xl font-bold text-lg yellow-glow flex items-center justify-center transition-all hover:-translate-y-1">
                 <Save size={20} className="mr-2" /> Update Category Hub
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
