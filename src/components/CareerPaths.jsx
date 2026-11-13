import React, { useState } from 'react';
import { CAREER_PATHS } from '../data/cybraryData';
import { 
  Compass, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Building
} from 'lucide-react';

export default function CareerPaths({ onOpenAuth }) {
  const [selectedId, setSelectedId] = useState('soc-analyst');
  const path = CAREER_PATHS.find(p => p.id === selectedId) || CAREER_PATHS[0];

  return (
    <section id="career-paths" className="py-20 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
            NIST NICE Framework Aligned
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Guided Cybersecurity Career Pathways
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Follow structured, role-aligned curriculums designed to take you from foundational IT knowledge to job-ready specialization.
          </p>
        </div>

        {/* Path Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CAREER_PATHS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                selectedId === p.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {p.role}
            </button>
          ))}
        </div>

        {/* Selected Career Blueprint Card */}
        <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-xl">
          
          {/* Header & Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-800 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>NICE ROLE CODE: {path.niceCode}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {path.role} Pathway
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {path.summary}
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Avg Salary
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  {path.avgSalary}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Source: BLS / CyberSeek</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Demand
                </div>
                <div className="text-base font-bold text-cyan-400 mt-0.5">
                  {path.growth}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">High hiring volume</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Time to Finish
                </div>
                <div className="text-base font-bold text-amber-400 mt-0.5">
                  {path.estTime.split('(')[0]}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Paced for working pros</div>
              </div>
            </div>
          </div>

          {/* Stepped Curriculum Milestones */}
          <div className="py-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              4-Phase Curriculum Roadmap:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {path.steps.map((st, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold font-mono text-emerald-400">
                      Phase {st.step}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                      {st.time}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {st.name}
                  </h5>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Target Employers */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-slate-300 block mb-1.5 font-mono">Core Competencies Verified:</span>
              <div className="flex flex-wrap gap-1.5">
                {path.skillsLearned.map((sk, idx) => (
                  <span key={idx} className="bg-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 md:pt-0">
              <div>
                <span className="font-semibold text-slate-300 block mb-1 font-mono">Target Employers:</span>
                <span className="text-slate-400">{path.targetEmployers.join(' • ')}</span>
              </div>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Enroll in Pathway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
