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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Alert Bar */}
      <aside aria-label="Cybersecurity Threat Alert" className="bg-[#05080E] border-b border-slate-800 text-xs py-2 px-4 text-slate-400 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-emerald-400 tracking-wider uppercase text-[11px] font-mono">CVE-2024-21887 ALERT:</span>
            <span className="hidden md:inline text-slate-300">Active exploitation of Ivanti Connect Secure Zero-Day.</span>
            <a 
              href="#labs" 
              className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1 ml-1"
            >
              Launch Live Mitigation Lab <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-emerald-400" /> NIST 800-53 & NICE Mapped
            </span>
            <span className="text-slate-700">|</span>
            <a href="#enterprise" className="hover:text-white transition-colors">Cybrary for Enterprise & Gov</a>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-2.5' 
            : 'bg-[#090D16] border-b border-slate-800/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xl font-extrabold tracking-tight text-white font-mono">CYBRARY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
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
                  <button className="flex items-center space-x-1 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded hover:bg-slate-800/60">
                    <span>Courses & Labs</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-150" />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === 'courses' && (
                    <div className="absolute top-full left-0 w-[500px] pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-100">
                      <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-xl">
                        <div className="grid grid-cols-2 gap-3">
                          <a href="#courses" className="p-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">
                                <Terminal className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white group-hover/item:text-emerald-400 transition-colors">Virtual Cloud Labs</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">1,250+ browser Kali & Splunk sandboxes.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#certifications" className="p-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 mt-0.5">
                                <GraduationCap className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white group-hover/item:text-cyan-400 transition-colors">Certifications Prep</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Security+, CISSP, CEH, CySA+ blueprints.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#labs" className="p-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-1.5 rounded bg-purple-500/10 text-purple-400 mt-0.5">
                                <Flame className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white group-hover/item:text-purple-400 transition-colors">CVE Emulation Series</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Zero-day adversary emulation labs.</p>
                              </div>
                            </div>
                          </a>

                          <a href="#career-paths" className="p-2.5 rounded-lg hover:bg-slate-800 transition-colors group/item">
                            <div className="flex items-start space-x-2.5">
                              <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-white group-hover/item:text-amber-400 transition-colors">Career Pathways</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Curated tracks for SOC Analysts & Pen Testers.</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a href="#career-paths" className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded hover:bg-slate-800/60">
                  Career Pathways
                </a>

                <a href="#enterprise" className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded hover:bg-slate-800/60 flex items-center gap-1.5">
                  <span>For Teams</span>
                  <span className="text-[10px] uppercase font-mono font-bold bg-slate-800 text-emerald-400 px-1 py-0.2 rounded border border-slate-700">BUSINESS</span>
                </a>

                <a href="#pricing" className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded hover:bg-slate-800/60">
                  Pricing
                </a>

                <a href="#faq" className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded hover:bg-slate-800/60">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search Trigger Button */}
              <button 
                onClick={onOpenSearch}
                className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded px-2.5 py-1.5 transition-colors"
                title="Search courses, labs, and certifications"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search courses, labs...</span>
                <kbd className="hidden lg:inline-block px-1 py-0.2 text-[10px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700">Ctrl+K</kbd>
              </button>

              {/* Login Button */}
              <button 
                onClick={() => onOpenAuth('login')}
                className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded transition-colors"
              >
                Log In
              </button>

              {/* Free Trial Button */}
              <button 
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                Start Free Trial
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center space-x-2">
              <button 
                onClick={onOpenSearch} 
                className="p-1.5 text-slate-400 hover:text-white rounded bg-slate-900 border border-slate-800"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-400 hover:text-white rounded bg-slate-900 border border-slate-800"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-slate-200 hover:bg-slate-900"
            >
              Courses & Labs
            </a>
            <a 
              href="#career-paths" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-slate-200 hover:bg-slate-900"
            >
              Career Pathways
            </a>
            <a 
              href="#enterprise" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-slate-200 hover:bg-slate-900"
            >
              Cybrary for Teams
            </a>
            <a 
              href="#certifications" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-slate-200 hover:bg-slate-900"
            >
              Certifications
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm text-slate-200 hover:bg-slate-900"
            >
              Pricing
            </a>

            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
                className="w-full py-2 px-3 rounded text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800"
              >
                Log In
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full py-2 px-3 rounded text-xs font-bold text-slate-950 bg-emerald-400"
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
