import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function TrustedLogos() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Header */}
        <div className="text-center space-y-1.5 mb-8">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 font-mono">
            Trusted by Security Teams at Global Enterprises & Government Agencies
          </p>
        </div>

        {/* Realistic High-Fidelity Company Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          
          {/* Microsoft */}
          <div className="flex items-center space-x-2.5 text-slate-400 hover:text-white transition-colors group">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 23 23">
              <path fill="#f25022" d="M1 1h10v10H1z"/>
              <path fill="#00a4ef" d="M1 12h10v10H1z"/>
              <path fill="#7fba00" d="M12 1h10v10H12z"/>
              <path fill="#ffb900" d="M12 12h10v10H12z"/>
            </svg>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Microsoft</span>
          </div>

          {/* Google Cloud */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Google Cloud</span>
          </div>

          {/* Amazon AWS */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <svg className="h-4 w-auto fill-current text-slate-300 group-hover:text-amber-400 transition-colors" viewBox="0 0 100 60">
              <path d="M18.8 45.3c-7.8 0-14.2-3.8-17.6-9.7 1.8-1.2 4.1-1.2 5.8-.1 2.5 4.3 6.9 6.9 11.8 6.9 7.7 0 13.5-5.5 13.5-12.8v-1.6c-2.8 3.5-7.1 5.6-11.8 5.6-9.6 0-16.7-7.3-16.7-17.1 0-9.8 7.1-17.1 16.7-17.1 4.7 0 9 2.1 11.8 5.6V0h6.6v33.4c0 11.5-8.9 19.9-20.1 19.9zm-2.8-42.5c-6.1 0-10.7 4.9-10.7 11.3 0 6.4 4.6 11.3 10.7 11.3 6.1 0 10.7-4.9 10.7-11.3 0-6.4-4.6-11.3-10.7-11.3z"/>
              <path d="M60.1 33.6h-6.7l-9.8-33.8h7.2l6.3 24.3 6.3-24.3h6.9l6.3 24.3 6.3-24.3h7.2l-9.8 33.8h-6.7l-6.6-25-6.6 25z"/>
            </svg>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">AWS</span>
          </div>

          {/* Cisco */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <svg className="h-5 w-auto fill-current text-cyan-400" viewBox="0 0 80 40">
              <path d="M8 24v-8h4v8H8zm12 6v-14h4v14h-4zm12 6V10h4v26h-4zm12 4V6h4v34h-4zm12-4V10h4v26h-4zm12-6v-14h4v14h-4zm12-6v-8h4v8h-4z"/>
            </svg>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Cisco</span>
          </div>

          {/* Palo Alto Networks */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <div className="w-4 h-4 rounded bg-orange-500/80 flex items-center justify-center text-[10px] font-bold text-white">
              P
            </div>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Palo Alto Networks</span>
          </div>

          {/* CrowdStrike */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">CrowdStrike</span>
          </div>

          {/* Booz Allen Hamilton */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <span className="font-serif font-black text-xs text-slate-300 group-hover:text-white">BAH</span>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Booz Allen</span>
          </div>

          {/* Raytheon / RTX */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <span className="font-mono font-black text-xs text-slate-300 group-hover:text-white">RTX</span>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Raytheon</span>
          </div>

          {/* Lockheed Martin */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <span className="font-sans font-bold text-xs tracking-tighter text-blue-400">LM</span>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">Lockheed Martin</span>
          </div>

          {/* Department of Defense */}
          <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">DoD</span>
            <span className="font-semibold text-sm tracking-tight text-slate-300 group-hover:text-white">U.S. Dept of Defense</span>
          </div>

        </div>

        {/* Realistic Federal & Industry Accreditation Badges */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>DoD 8140 / 8570 Baseline Approved</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>NIST NICE Framework SP 800-181 Aligned</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOC 2 Type II Certified & Audited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>(ISC)² & CompTIA Approved CPE/CEU Partner</span>
          </div>
        </div>

      </div>
    </section>
  );
}
