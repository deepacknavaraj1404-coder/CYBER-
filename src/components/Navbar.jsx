import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const TOPIC_CHIPS = [
  { name: 'Fundamentals', href: '#explore-topics' },
  { name: 'Ethical Hacking', href: '#explore-topics' },
  { name: 'Network Security', href: '#explore-topics' },
  { name: 'SOC & Blue Team', href: '#explore-topics' },
  { name: 'Penetration Testing', href: '#explore-topics' },
  { name: 'Cloud Security', href: '#explore-topics' },
  { name: 'Digital Forensics', href: '#explore-topics' },
  { name: 'Malware Analysis', href: '#explore-topics' },
  { name: 'AppSec & OWASP', href: '#explore-topics' },
  { name: 'AI Security', href: '#explore-topics' },
  { name: 'DevSecOps', href: '#explore-topics' },
  { name: 'Security Engineering', href: '#explore-topics' }
];

export default function Navbar({ onOpenAuth, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Threat Alert Announcement Bar - Clean GfG-style utility bar */}
      <aside aria-label="Security Announcement" className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px]">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 font-mono uppercase bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live CVE Lab
            </span>
            <span className="text-slate-300 font-medium">CVE-2024-21887 Authentication Bypass Sandbox is now live.</span>
            <a 
              href="#labs" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline inline-flex items-center gap-0.5 ml-1"
            >
              Start Lab <ChevronRight className="w-3 h-3" />
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4 font-mono text-slate-400">
            <span>NIST NICE & MITRE ATT&CK Mapped</span>
            <span className="text-slate-700">|</span>
            <a href="#enterprise" className="hover:text-emerald-400 transition-colors">Enterprise Cyber Range</a>
          </div>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-2.5 group">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-lg font-black tracking-tight text-slate-900 font-mono">CYBRARY</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 ml-1"></span>
                  </div>
                  <span className="text-[9px] font-bold tracking-widest text-emerald-700 uppercase font-mono -mt-1">
                    DEFENSE ACADEMY
                  </span>
                </div>
              </a>

              {/* GeeksforGeeks-style Search Input inside Navbar */}
              <div className="hidden xl:block w-72">
                <div 
                  onClick={onOpenSearch}
                  className="flex items-center w-full px-3 py-1.5 text-xs text-slate-500 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-md cursor-pointer transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                  <span className="truncate">Search tutorials, labs, courses...</span>
                  <kbd className="ml-auto font-mono text-[10px] bg-white border border-slate-200 text-slate-400 px-1.5 py-0.5 rounded shadow-2xs">Ctrl+K</kbd>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 text-[13px] font-semibold text-slate-700">
              <a href="#" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors">
                Home
              </a>
              <a href="#courses" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors">
                Courses & Labs
              </a>
              <a href="#learn-section" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors">
                Tutorials
              </a>
              <a href="#practice-section" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors">
                Practice
              </a>
              <a href="#career-paths" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors">
                Career Pathways
              </a>
              <a href="#enterprise" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors flex items-center gap-1">
                <span>For Teams</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">B2B</span>
              </a>
              <a href="#pricing" className="px-3 py-1.5 hover:text-emerald-700 hover:bg-slate-50 rounded-md transition-colors">
                Pricing
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <button 
                onClick={onOpenSearch}
                className="xl:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button 
                onClick={() => onOpenAuth('login')}
                className="text-xs font-bold text-slate-700 hover:text-slate-950 px-3.5 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Sign In
              </button>

              <button 
                onClick={() => onOpenAuth('signup')}
                className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center space-x-1">
              <button 
                onClick={onOpenSearch} 
                className="p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Secondary GeeksforGeeks-style Topic Sub-Navigation Bar */}
      <div className="bg-slate-50 border-b border-slate-200 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center space-x-2 text-xs whitespace-nowrap">
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mr-1 hidden sm:inline font-mono">
            Topics:
          </span>
          {TOPIC_CHIPS.map((chip, idx) => (
            <a
              key={idx}
              href={chip.href}
              className="px-2.5 py-1 text-slate-600 hover:text-emerald-700 bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded text-xs font-medium transition-colors"
            >
              {chip.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-md">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </a>
          <a 
            href="#courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Courses & Labs
          </a>
          <a 
            href="#learn-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Tutorials
          </a>
          <a 
            href="#practice-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Practice Labs
          </a>
          <a 
            href="#career-paths" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Career Pathways
          </a>
          <a 
            href="#enterprise" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            For Teams
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Pricing
          </a>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
              className="w-full py-2 px-3 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200"
            >
              Sign In
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
              className="w-full py-2 px-3 rounded-md text-xs font-bold text-white bg-emerald-600 shadow-xs"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
