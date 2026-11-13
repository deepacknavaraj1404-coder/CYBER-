import React, { useState } from 'react';
import { CAREER_PATHS } from '../data/cybraryData';
import { 
  Compass, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Award
} from 'lucide-react';

export default function CareerPaths({ onOpenAuth }) {
  const [selectedPathId, setSelectedPathId] = useState('soc-analyst');
  const activePath = CAREER_PATHS.find(p => p.id === selectedPathId) || CAREER_PATHS[0];

  return (
    <section id="career-paths" className="py-20 bg-[#070D18] border-t border-[#19253B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
            <Compass className="w-3.5 h-3.5" />
            <span>NICE CYBERSECURITY WORKFORCE FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Role-Aligned Career Pathways <br />
            <span className="text-[#00E599]">From Zero to Senior Practitioner.</span>
          </h2>
          <p className="text-base text-slate-400">
            Stop guessing what to learn next. Follow structured, end-to-end curriculums aligned with actual job role requirements and market demand.
          </p>
        </div>

        {/* Career Path Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CAREER_PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => setSelectedPathId(path.id)}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                selectedPathId === path.id
                  ? 'bg-[#00E599] text-[#060B13] shadow-[0_0_20px_rgba(0,229,153,0.35)] scale-105'
                  : 'bg-[#0A1220] text-slate-300 hover:text-white hover:bg-[#132139] border border-[#19253B]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{path.role}</span>
            </button>
          ))}
        </div>

        {/* Selected Path Details Card */}
        <div className="rounded-3xl bg-[#0A1220] border border-[#19253B] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Header Info Grid */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-[#19253B] gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E599] font-bold">
                CAREER TRACK BLUEPRINT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {activePath.role} Career Path
              </h3>
              <p className="text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
                {activePath.summary}
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0D1728] border border-white/5">
                <div className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                  <DollarSign className="w-3.5 h-3.5 text-[#00E599]" /> Avg Salary
                </div>
                <div className="text-base sm:text-lg font-bold text-white mt-1 font-mono">
                  {activePath.avgSalary}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0D1728] border border-white/5">
                <div className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Market Growth
                </div>
                <div className="text-base sm:text-lg font-bold text-cyan-400 mt-1 font-mono">
                  {activePath.jobGrowth}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0D1728] border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-purple-400" /> Completion
                </div>
                <div className="text-base sm:text-lg font-bold text-purple-400 mt-1 font-mono">
                  {activePath.estimatedTime}
                </div>
              </div>
            </div>
          </div>

          {/* Stepped Progression Timeline */}
          <div className="py-8">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-6">
              Curriculum Milestone Progression:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activePath.steps.map((st, i) => (
                <div 
                  key={i}
                  className="relative p-5 rounded-2xl bg-[#0D1728] border border-[#19253B] hover:border-[#00E599]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono text-[#00E599]/80 group-hover:text-[#00E599] transition-colors">
                      {st.step}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#132139] flex items-center justify-center text-xs font-mono text-slate-300">
                      #{i + 1}
                    </div>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-[#00E599] transition-colors">
                    {st.title}
                  </h5>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#19253B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Award className="w-4 h-4 text-[#00E599]" />
              <span>Includes verifiable digital badge + CPE credit hours upon completion</span>
            </div>
            <button
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-md transition-all"
            >
              <span>Enroll in {activePath.role} Pathway</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

