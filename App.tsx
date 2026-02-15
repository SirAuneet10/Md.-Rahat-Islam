
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkHub from './pages/WorkHub';
import CategoryPage from './pages/CategoryPage';
import AIContent from './pages/AIContent';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0D]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkHub />} />
          <Route path="/work/ai-content" element={<AIContent />} />
          <Route path="/work/:categoryId" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
