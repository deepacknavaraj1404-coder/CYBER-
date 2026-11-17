import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Flame, 
  ArrowRight,
  Lock
} from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Threat Alert Announcement Bar - Light & Pleasant */}
      <aside aria-label="Cybersecurity Threat Alert" className="bg-emerald-50 border-b border-emerald-200/80 text-emerald-900 text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-bold text-emerald-800 tracking-wider uppercase text-[11px] font-mono">CVE-2024-21887 ALERT:</span>
            <span className="hidden md:inline text-emerald-800 font-medium">Active exploitation of Ivanti Connect Secure Zero-Day.</span>
            <a 
              href="#labs" 
              className="text-emerald-700 hover:text-emerald-900 font-bold underline inline-flex items-center gap-1 ml-1"
            >
              Launch Live Mitigation Lab <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[11px] text-emerald-800 font-mono">
            <span className="flex items-center gap-1.5 font-semibold">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> NIST 800-53 & NICE Mapped
            </span>
            <span className="text-emerald-300">|</span>
            <a href="#enterprise" className="hover:text-emerald-950 font-medium transition-colors">Cybrary for Enterprise & Gov</a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Bar - Light Theme */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2.5' 
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-xl font-extrabold tracking-tight text-slate-900 font-mono">CYBRARY</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1"></span>
                  </div>
                  <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase font-mono -mt-1">
                    DEFENSE ACADEMY
                  </span>
                </div>
              </a>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold">
                {/* Courses & Labs Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('courses')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 px-3 py-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors">
                    <span>Courses & Labs</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-150" />
                  </button>

                  {/* Mega Menu */}
                  {activeDropdown === 'courses' && (
                    <div className="absolute top-full left-0 w-[500px] pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-100">
                      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xl">
                        <div className="grid grid-cols-2 gap-2">
                          <a href="#courses" className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
                                <Terminal className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700 transition-colors">Virtual Cloud Labs</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">1,250+ browser Kali & Splunk sandboxes.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#certifications" className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-2 rounded-lg bg-sky-50 text-sky-600 mt-0.5">
                                <GraduationCap className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-sky-700 transition-colors">Certifications Prep</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Security+, CISSP, CEH, CySA+ tracks.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#labs" className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 mt-0.5">
                                <Flame className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-purple-700 transition-colors">CVE Emulation Series</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Real adversary zero-day simulations.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#career-paths" className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-2 rounded-lg bg-amber-50 text-amber-600 mt-0.5">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 group-hover/item:text-amber-700 transition-colors">Career Pathways</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">Guided roles for SOC Analysts & Pen Testers.</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a href="#career-paths" className="px-3 py-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors">
                  Career Pathways
                </a>

                <a href="#enterprise" className="px-3 py-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5">
                  <span>For Teams</span>
                  <span className="text-[10px] uppercase font-mono font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-200">
                    TEAMS
                  </span>
                </a>

                <a href="#pricing" className="px-3 py-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors">
                  Pricing
                </a>

                <a href="#faq" className="px-3 py-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search Pill */}
              <button 
                onClick={onOpenSearch}
                className="flex items-center space-x-2 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg px-3 py-1.5 transition-colors"
                title="Search courses, labs, and certifications"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search courses, labs...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-slate-500 rounded border border-slate-200">Ctrl+K</kbd>
              </button>

              {/* Login */}
              <button 
                onClick={() => onOpenAuth('login')}
                className="text-xs font-bold text-slate-700 hover:text-slate-950 px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Log In
              </button>

              {/* Start Free Trial */}
              <button 
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors shadow-xs"
              >
                Start Free Trial
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center space-x-2">
              <button 
                onClick={onOpenSearch} 
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg">
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Courses & Labs
            </a>
            <a 
              href="#career-paths" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Career Pathways
            </a>
            <a 
              href="#enterprise" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Cybrary for Teams
            </a>
            <a 
              href="#certifications" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Certifications
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Pricing
            </a>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200"
              >
                Log In
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-emerald-600 shadow-xs"
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
