import React from 'react';
import { COMPANY_LOGOS } from '../data/cybraryData';
import { Shield, CheckCircle } from 'lucide-react';

export default function TrustedLogos() {
  return (
    <section className="py-14 border-y border-[#19253B] bg-[#070D18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00E599]">
            <Shield className="w-3.5 h-3.5" />
            <span>ENTERPRISE & GOVERNMENT TRUST</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Trusted by Security Teams at Fortune 500 Leaders & Federal Agencies
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            From the Fortune 100 to frontline defense units, over 3.5 million professionals use Cybrary to defend mission-critical systems.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
          {COMPANY_LOGOS.map((company, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center p-5 rounded-xl bg-[#0B1424] border border-[#19253B] hover:border-[#00E599]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,153,0.15)] hover:-translate-y-1"
            >
              <div className="h-9 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold font-mono tracking-tight text-slate-300 group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
              <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-[#00E599] transition-colors flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-[#00E599]/80" />
                <span>{company.category}</span>
              </div>
              
              {/* Subtle top edge glow on hover */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E599]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Compliance Badges Row */}
        <div className="mt-10 pt-8 border-t border-[#19253B]/50 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E599]"></span>
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF]"></span>
            <span>DoD 8140 / 8570 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>NIST NICE Framework Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span>ISO/IEC 27001 Audited</span>
          </div>
        </div>

      </div>
    </section>
  );
}

