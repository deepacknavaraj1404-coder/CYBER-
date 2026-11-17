import React, { useState } from 'react';
import { CAREER_PATHS } from '../data/cybraryData';
import {
  TrendingUp,
  DollarSign,
  Clock,
  ArrowRight
} from 'lucide-react';
import socIllustration from '../assets/pathways/soc-analyst-illustration.jpg';
import pentestIllustration from '../assets/pathways/pentest-illustration.jpg';

const PATH_ILLUSTRATIONS = {
  'soc-analyst': socIllustration,
  'penetration-tester': pentestIllustration,
  'cloud-security-engineer': socIllustration,
};

export default function CareerPaths({ onOpenAuth }) {
  const [selectedId, setSelectedId] = useState('soc-analyst');
  const path = CAREER_PATHS.find(p => p.id === selectedId) || CAREER_PATHS[0];

  return (
    <section id="career-paths" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
            NIST NICE Framework Aligned
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guided Cybersecurity Career Pathways
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Follow structured, role-aligned curriculums designed to take you from foundational IT knowledge to job-ready specialization.
          </p>
        </div>

        {/* Path Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CAREER_PATHS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedId === p.id
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {p.role}
            </button>
          ))}
        </div>

        {/* ── Main Pathway Card: 2-Column Layout ── */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 shadow-xs overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* LEFT COLUMN (42%) — Illustration */}
            <div className="lg:w-[42%] shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center p-6 sm:p-8 min-h-[260px] lg:min-h-0">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50">
                <img
                  src={PATH_ILLUSTRATIONS[selectedId] || socIllustration}
                  alt={`${path.role} illustration`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT COLUMN (58%) — Pathway Content */}
            <div className="lg:w-[58%] flex flex-col p-6 sm:p-8 space-y-5">

              {/* Top Row: Role label + Time-to-Finish stat */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Green Role Code Label */}
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-2">
                    NICE ROLE: {path.niceCode}
                  </span>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    {path.role} Pathway
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-lg">
                    {path.summary}
                  </p>
                </div>

                {/* Time to Finish — top-right stat card */}
                <div className="shrink-0 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-right min-w-[130px] font-mono">
                  <div className="text-[11px] text-slate-500 flex items-center justify-end gap-1 mb-0.5">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    Time to Finish
                  </div>
                  <div className="text-sm font-bold text-amber-700">
                    {path.estTime.split('(')[0].trim()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Paced for working pros</div>
                </div>
              </div>

              {/* Thin Divider */}
              <hr className="border-slate-200" />

              {/* 4-Phase Curriculum Roadmap */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                  4-Phase Curriculum Roadmap:
                </h4>

                {/* Horizontally scrollable on small screens */}
                <div className="overflow-x-auto pb-1 -mx-1">
                  <div className="flex gap-3 min-w-max px-1 lg:grid lg:grid-cols-4 lg:min-w-0">
                    {path.steps.map((st, i) => (
                      <div
                        key={i}
                        className="w-44 lg:w-auto shrink-0 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-200 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                            Phase {st.step}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 font-medium">
                            {st.time}
                          </span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-900 mt-1.5 leading-snug">
                          {st.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Core Competencies + Employers + Enroll CTA */}
              <div className="pt-1 border-t border-slate-200">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

                  {/* Left: Core Competencies Tags */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-2 font-mono uppercase tracking-wide">
                      Core Competencies Verified:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {path.skillsLearned.map((sk, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-50 text-emerald-800 text-[11px] px-2.5 py-1 rounded-lg border border-emerald-200 font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Target Employers + Enroll Button */}
                  <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-slate-700 block mb-0.5 font-mono uppercase tracking-wide">
                        Target Employers:
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {path.targetEmployers.join(' • ')}
                      </span>
                    </div>
                    <button
                      onClick={() => onOpenAuth('signup')}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
                    >
                      <span>Enroll in Pathway</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
            {/* END RIGHT COLUMN */}

          </div>
        </div>
        {/* END Main Card */}

      </div>
    </section>
  );
}
