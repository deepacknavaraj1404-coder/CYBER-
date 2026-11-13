import React from 'react';
import { CERTIFICATIONS } from '../data/cybraryData';
import { GraduationCap, Award, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function CertificationSection({ onOpenAuth }) {
  return (
    <section id="certifications" className="py-20 bg-[#060B13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>INDUSTRY RECOGNIZED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pass Your Cybersecurity Certifications <br />
            <span className="text-[#00E599]">On The First Attempt. Guaranteed.</span>
          </h2>
          <p className="text-base text-slate-400">
            Comprehensive exam blueprints, official practice exams, scenario questions, and hands-on performance-based question (PBQ) simulations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#0A1220] border border-[#19253B] hover:border-[#00E599]/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#0D1728] border border-[#1e3252] text-[#00E599] group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#00E599] bg-[#00E599]/10 px-2.5 py-1 rounded-md border border-[#00E599]/20">
                    {cert.passRate} Pass Rate
                  </span>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">Verified Outcomes</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#00E599] transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {cert.code} • Vendor: {cert.org}
              </p>

              <div className="mt-5 pt-4 border-t border-[#19253B] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-[#00E599]" /> {cert.labs} Interactive PBQs
                </span>
                <span className="text-[#00E599] font-bold group-hover:underline flex items-center gap-0.5">
                  Prep Blueprint <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cert Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0D1728] via-[#112338] to-[#0D1728] border border-[#00E599]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#00E599]/20 flex items-center justify-center flex-shrink-0 text-[#00E599]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Cybrary 100% Pass Protection Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5">Complete our certification path. If you don't pass your exam, we refund your exam voucher or subscription.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenAuth('signup')}
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-md transition-all whitespace-nowrap"
          >
            Claim Exam Guarantee
          </button>
        </div>

      </div>
    </section>
  );
}

