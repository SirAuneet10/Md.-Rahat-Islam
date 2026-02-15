
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, CategoryInfo, CategoryType } from '../types';
import { projects as initialProjects, categories as initialCategories } from '../data/portfolio';

interface PortfolioContextType {
  projects: Project[];
  categories: CategoryInfo[];
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addCategory: (category: CategoryInfo) => void;
  updateCategory: (category: CategoryInfo) => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    const savedCategories = localStorage.getItem('portfolio_categories');
    const savedAdmin = localStorage.getItem('portfolio_admin') === 'true';

    setProjects(savedProjects ? JSON.parse(savedProjects) : initialProjects);
    setCategories(savedCategories ? JSON.parse(savedCategories) : initialCategories);
    setIsAdmin(savedAdmin);
  }, []);

  useEffect(() => {
    if (projects.length > 0) localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    if (categories.length > 0) localStorage.setItem('portfolio_categories', JSON.stringify(categories));
  }, [projects, categories]);

  const login = (password: string) => {
    if (password === 'rahat2024') { // Secure-ish placeholder for client-side demo
      setIsAdmin(true);
      localStorage.setItem('portfolio_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('portfolio_admin');
  };

  const addProject = (project: Project) => setProjects(prev => [project, ...prev]);
  const updateProject = (project: Project) => setProjects(prev => prev.map(p => p.id === project.id ? project : p));
  const deleteProject = (id: string) => setProjects(prev => prev.filter(p => p.id !== id));
  
  const addCategory = (category: CategoryInfo) => setCategories(prev => [...prev, category]);
  const updateCategory = (category: CategoryInfo) => setCategories(prev => prev.map(c => c.type === category.type ? category : c));

  return (
    <PortfolioContext.Provider value={{ 
      projects, categories, addProject, updateProject, deleteProject, 
      addCategory, updateCategory, isAdmin, login, logout 
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
};
