import React from 'react';
import { 
  Shield, 
  Terminal, 
  Lock, 
  CheckCircle2, 
  Radio, 
  Heart,
  ExternalLink 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04080F] border-t border-[#19253B] text-slate-400 text-xs font-sans">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0D1728] border border-[#00E599]/40 shadow-[0_0_15px_rgba(0,229,153,0.2)]">
                <Shield className="w-5 h-5 text-[#00E599]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl font-black tracking-tight text-white font-mono">CYBRARY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] ml-1"></span>
                </div>
                <span className="text-[8px] tracking-[0.2em] uppercase font-semibold text-slate-400 -mt-0.5 font-mono">
                  DEFENSE ACADEMY
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Cybrary is the premier cybersecurity workforce development platform. Threat-informed training, hands-on virtual labs, and quantifiable readiness for individuals and enterprise defense units.
            </p>

            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1424] border border-[#19253B] text-[11px] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E599] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E599]"></span>
              </span>
              <span className="text-[#00E599] font-medium">All Cloud Labs Operational</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">99.99% Uptime</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#0D1728] border border-white/5 hover:border-[#00E599]/40 flex items-center justify-center text-slate-400 hover:text-[#00E599] transition-colors" aria-label="X Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#0D1728] border border-white/5 hover:border-[#00E599]/40 flex items-center justify-center text-slate-400 hover:text-[#00E599] transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66 0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#0D1728] border border-white/5 hover:border-[#00E599]/40 flex items-center justify-center text-slate-400 hover:text-[#00E599] transition-colors" aria-label="GitHub">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#0D1728] border border-white/5 hover:border-[#00E599]/40 flex items-center justify-center text-slate-400 hover:text-[#00E599] transition-colors" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column: Products & Labs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Platform & Labs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#courses" className="hover:text-white transition-colors">Course Catalog</a></li>
              <li><a href="#labs" className="hover:text-white transition-colors">Virtual Sandbox Labs</a></li>
              <li><a href="#career-paths" className="hover:text-white transition-colors">Career Pathways</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certification Prep</a></li>
              <li><a href="#labs" className="hover:text-white transition-colors">CVE Attack Simulations</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Splunk & SIEM Range</a></li>
            </ul>
          </div>

          {/* Column: Certifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Certifications
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#certifications" className="hover:text-white transition-colors">CompTIA Security+</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">CISSP Masterclass</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certified Ethical Hacker</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">CompTIA CySA+</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">CISM Governance</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">AWS Security Specialty</a></li>
            </ul>
          </div>

          {/* Column: Enterprise & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Enterprise & Org
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#enterprise" className="hover:text-white transition-colors">Cybrary for Teams</a></li>
              <li><a href="#enterprise" className="hover:text-white transition-colors">Government & Defense</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & ROI</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Support & FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SOC 2 Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-[#19253B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Cybrary Inc. Replica for Demonstration & Portfolio. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
