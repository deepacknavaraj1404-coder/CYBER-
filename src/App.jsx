import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedLogos from './components/TrustedLogos';
import ValuePillars from './components/ValuePillars';
import InteractiveLabDemo from './components/InteractiveLabDemo';
import CourseCatalog from './components/CourseCatalog';
import CareerPaths from './components/CareerPaths';
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
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenAuth={handleOpenAuth}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenAuth={handleOpenAuth} 
          onOpenLab={() => {
            const el = document.getElementById('labs');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Enterprise & Gov Trusted Logos */}
        <TrustedLogos />

        {/* Core Value Pillars / Differentiators */}
        <ValuePillars />

        {/* Live Virtual Lab Sandbox Interactive Simulation */}
        <InteractiveLabDemo onOpenAuth={handleOpenAuth} />

        {/* Comprehensive Threat-Informed Course & Lab Catalog */}
        <CourseCatalog 
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenAuth={handleOpenAuth}
        />

        {/* Role-Aligned Career Pathways */}
        <CareerPaths onOpenAuth={handleOpenAuth} />

        {/* Cybrary for Enterprise & Teams + ROI Calculator */}
        <EnterpriseSection onOpenAuth={handleOpenAuth} />

        {/* Official Certification Prep Tracks */}
        <CertificationSection onOpenAuth={handleOpenAuth} />

        {/* Practitioner & Leader Testimonials */}
        <Testimonials />

        {/* Value Pricing Tiers */}
        <PricingSection onOpenAuth={handleOpenAuth} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Final Conversion Call To Action Banner */}
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

