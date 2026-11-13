import React from 'react';
import { CERTIFICATIONS } from '../data/cybraryData';
import { Award, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function CertificationSection({ onOpenAuth }) {
  return (
    <section id="certifications" className="py-20 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
            Industry Certification Blueprints
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pass Your Security Exams On The First Attempt.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Official exam outlines, performance-based question (PBQ) simulations, and full-length practice tests backed by Cybrary's Pass Guarantee.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
                      {cert.passRate} Pass Rate
                    </span>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">Audited Outcomes</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Code: {cert.code} • Vendor: {cert.vendor}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" /> {cert.labsCount} Practice PBQs
                </span>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="text-emerald-400 hover:underline flex items-center gap-0.5 font-semibold"
                >
                  <span>Start Prep</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Guarantee Bar */}
        <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Cybrary Pass Protection Policy</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Complete our curated exam path and score 85%+ on mock exams. If you don't pass on your first attempt, we extend your access or refund your preparation fee.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenAuth('signup')}
            className="flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors whitespace-nowrap"
          >
            Review Guarantee
          </button>
        </div>

      </div>
    </section>
  );
}
