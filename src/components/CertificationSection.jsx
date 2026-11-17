import React from 'react';
import { CERTIFICATIONS } from '../data/cybraryData';
import { Award, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function CertificationSection({ onOpenAuth }) {
  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
            Industry Certification Blueprints
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pass Your Security Exams On The First Attempt.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Official exam outlines, performance-based question (PBQ) simulations, and full-length practice tests backed by Cybrary's Pass Guarantee.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {cert.passRate} Pass Rate
                    </span>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">Audited Outcomes</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  Code: {cert.code} • Vendor: {cert.vendor}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 flex items-center gap-1 font-medium">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" /> {cert.labsCount} Practice PBQs
                </span>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-0.5 font-bold"
                >
                  <span>Start Prep</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Cybrary Pass Protection Policy</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Complete our curated exam path and score 85%+ on mock exams. If you don't pass on your first attempt, we extend your access or refund your preparation fee.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenAuth('signup')}
            className="flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs whitespace-nowrap"
          >
            Review Guarantee
          </button>
        </div>

      </div>
    </section>
  );
}
