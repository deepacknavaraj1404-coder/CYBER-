import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  ExternalLink, 
  Flame, 
  Terminal, 
  Briefcase, 
  Users, 
  GraduationCap, 
  Zap,
  Building2,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Threat Alert Announcement Bar */}
      <aside aria-label="Cybersecurity Threat Alert" className="bg-gradient-to-r from-[#0d1728] via-[#112338] to-[#0d1728] border-b border-[#1f304d] text-xs py-2 px-4 text-[#94A3B8] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E599] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E599]"></span>
            </span>
            <span className="font-semibold text-[#00E599] tracking-wider uppercase text-[11px]">CVE-2024-21887 ALERT:</span>
            <span className="hidden md:inline text-slate-300">Active exploitation of Ivanti Connect Secure Zero-Day.</span>
            <a 
              href="#labs" 
              className="text-[#00E599] hover:underline font-medium inline-flex items-center gap-1 ml-1"
            >
              Launch Live Mitigation Lab <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#00E599]" /> NIST 800-53 & NICE Mapped
            </span>
            <span className="text-slate-600">|</span>
            <a href="#enterprise" className="hover:text-white transition-colors">Cybrary for Enterprise & Gov</a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#060B13]/95 backdrop-blur-md border-b border-[#19253B] shadow-2xl py-3' 
            : 'bg-[#060B13]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-3 group">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D1728] to-[#12223c] border border-[#00E599]/30 group-hover:border-[#00E599] shadow-[0_0_15px_rgba(0,229,153,0.2)] group-hover:shadow-[0_0_25px_rgba(0,229,153,0.4)] transition-all">
                  <Shield className="w-6 h-6 text-[#00E599] group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#00E599]/10 rounded-xl filter blur-sm"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-2xl font-black tracking-tight text-white font-mono">CYBRARY</span>
                    <span className="w-2 h-2 rounded-full bg-[#00E599] ml-1 shadow-[0_0_8px_#00E599]"></span>
                  </div>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-slate-400 -mt-1 font-mono">DEFENSE ACADEMY</span>
                </div>
              </a>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center space-x-1">
                {/* Courses & Labs Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('courses')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    <span>Courses & Labs</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === 'courses' && (
                    <div className="absolute top-full left-0 w-[540px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-[#0A1220] border border-[#19253B] rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-4">
                          <a href="#courses" className="p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 rounded-lg bg-emerald-500/10 text-[#00E599] group-hover/item:scale-110 transition-transform">
                                <Terminal className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-[#00E599] transition-colors">Virtual Hands-On Labs</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Over 1,200+ browser-based Kali & Splunk cloud sandboxes.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#certifications" className="p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover/item:scale-110 transition-transform">
                                <GraduationCap className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors">Certifications Prep</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Security+, CISSP, CEH, CySA+ with 96% first-time pass rates.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#labs" className="p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover/item:scale-110 transition-transform">
                                <Flame className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-purple-400 transition-colors">CVE & Threat Simulations</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Zero-day adversary emulation mapped to MITRE ATT&CK.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#career-paths" className="p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover/item:scale-110 transition-transform">
                                <Briefcase className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-amber-400 transition-colors">Role Career Pathways</h4>
                                <p className="text-xs text-slate-400 mt-0.5">End-to-end paths for SOC Analysts, Pen Testers, and Architects.</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#19253B] flex items-center justify-between text-xs text-slate-400">
                          <span>Looking for custom organizational curriculum?</span>
                          <a href="#enterprise" className="text-[#00E599] font-medium hover:underline flex items-center gap-1">
                            Cybrary for Teams <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Career Paths */}
                <a href="#career-paths" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  Career Paths
                </a>

                {/* Enterprise */}
                <a href="#enterprise" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1.5">
                  <span>For Teams</span>
                  <span className="text-[10px] uppercase font-bold bg-[#00E599]/20 text-[#00E599] px-1.5 py-0.5 rounded border border-[#00E599]/30">PRO</span>
                </a>

                {/* Pricing */}
                <a href="#pricing" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  Pricing
                </a>

                {/* Resources */}
                <a href="#faq" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  FAQs
                </a>
              </nav>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search Trigger Button */}
              <button 
                onClick={onOpenSearch}
                className="flex items-center space-x-2 text-xs text-slate-400 bg-[#0D1728] hover:bg-[#132139] border border-[#19253B] hover:border-slate-600 rounded-lg px-3 py-2 transition-all group"
                title="Search courses, labs, and certifications"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00E599] transition-colors" />
                <span>Search courses, labs...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#19253B] text-slate-300 rounded border border-white/5">Ctrl+K</kbd>
              </button>

              {/* Login Button */}
              <button 
                onClick={() => onOpenAuth('login')}
                className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                Log In
              </button>

              {/* Sign Up / Free Trial CTA */}
              <button 
                onClick={() => onOpenAuth('signup')}
                className="relative group inline-flex items-center justify-center text-sm font-bold text-[#060B13] bg-[#00E599] hover:bg-[#00c784] px-5 py-2 rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(0,229,153,0.3)] hover:shadow-[0_0_25px_rgba(0,229,153,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Free Trial</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button 
                onClick={onOpenSearch} 
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#19253B] bg-[#0A1220]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              <a 
                href="#courses" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5"
              >
                Course Catalog & Labs
              </a>
              <a 
                href="#career-paths" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5"
              >
                Career Pathways
              </a>
              <a 
                href="#enterprise" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5"
              >
                Cybrary for Teams & Enterprise
              </a>
              <a 
                href="#certifications" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5"
              >
                Certifications Prep
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5"
              >
                Pricing Plans
              </a>
            </div>

            <div className="pt-4 border-t border-[#19253B] grid grid-cols-2 gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
                className="w-full text-center py-2.5 px-4 rounded-lg font-medium text-slate-300 bg-white/5 hover:bg-white/10"
              >
                Log In
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full text-center py-2.5 px-4 rounded-lg font-bold text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-[0_0_15px_rgba(0,229,153,0.3)]"
              >
                Start Trial
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

