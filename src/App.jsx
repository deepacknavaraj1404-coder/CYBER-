import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreTopics from './components/ExploreTopics';
import CourseCatalog from './components/CourseCatalog';
import LearnAndPractice from './components/LearnAndPractice';
import CareerPaths from './components/CareerPaths';
import PentestPathway from './components/PentestPathway';
import InteractiveLabDemo from './components/InteractiveLabDemo';
import EnterpriseSection from './components/EnterpriseSection';
import CertificationSection from './components/CertificationSection';
import Testimonials from './components/Testimonials';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

import AuthModal from './components/AuthModal';
import CourseModal from './components/CourseModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [authModalState, setAuthModalState] = useState({
    isOpen: false,
    tab: 'signup',
    prefilledEmail: ''
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenAuth = (tab = 'signup', prefilledEmail = '') => {
    setAuthModalState({
      isOpen: true,
      tab,
      prefilledEmail
    });
  };

  const handleCloseAuth = () => {
    setAuthModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Navigation Bar with GeeksforGeeks-style topic sub-bar */}
      <Navbar 
        onOpenAuth={handleOpenAuth}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section: "Master Cybersecurity. Build Real-World Skills." */}
        <Hero 
          onOpenAuth={handleOpenAuth} 
          onOpenLab={() => {
            const el = document.getElementById('labs');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Explore Cybersecurity (12 Core Domains) */}
        <ExploreTopics 
          onSelectCategory={(catId) => {
            const el = document.getElementById('courses');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Professional Course Marketplace Cards with Video Previews */}
        <CourseCatalog 
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenAuth={handleOpenAuth}
        />

        {/* 4. Dedicated LEARN & PRACTICE Section (Tutorials, Guides, Hands-On Labs, CTFs) */}
        <LearnAndPractice onOpenAuth={handleOpenAuth} />

        {/* 5. Guided Career Pathways (SOC Analyst, Pentest, Cloud Security, AI Security Engineer) */}
        <CareerPaths onOpenAuth={handleOpenAuth} />

        {/* 6. Penetration Tester / Offensive Specialist Pathway Showcase */}
        <PentestPathway onOpenAuth={handleOpenAuth} />

        {/* 7. Live Virtual Lab Sandbox Interactive Simulation */}
        <InteractiveLabDemo onOpenAuth={handleOpenAuth} />

        {/* 8. Cybrary for Enterprise & Teams + ROI Calculator */}
        <EnterpriseSection onOpenAuth={handleOpenAuth} />

        {/* 9. Official Certification Prep Tracks */}
        <CertificationSection onOpenAuth={handleOpenAuth} />

        {/* 10. Practitioner & Leader Testimonials */}
        <Testimonials />

        {/* 11. Value Pricing Tiers */}
        <PricingSection onOpenAuth={handleOpenAuth} />

        {/* 12. Frequently Asked Questions */}
        <FAQ />

        {/* 13. Final Conversion Call To Action Banner */}
        <CtaBanner onOpenAuth={handleOpenAuth} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <AuthModal 
        isOpen={authModalState.isOpen}
        initialTab={authModalState.tab}
        prefilledEmail={authModalState.prefilledEmail}
        onClose={handleCloseAuth}
      />

      <CourseModal 
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenAuth={handleOpenAuth}
      />

      <SearchModal 
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectCourse={(course) => setSelectedCourse(course)}
      />

    </div>
  );
}
