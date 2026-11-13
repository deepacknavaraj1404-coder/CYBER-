import React from 'react';
import { 
  X, 
  Clock, 
  Star, 
  Award, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  Cpu, 
  Play, 
  BookOpen 
} from 'lucide-react';

export default function CourseModal({ course, onClose, onOpenAuth }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-7 z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono">
          <span className="bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
            {course.badge}
          </span>
          <span className="text-slate-400">
            {course.level} Level
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">
            {course.cpeCredits} CPE Credits
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
          {course.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Rating
            </div>
            <div className="text-sm font-bold text-white mt-0.5">
              {course.rating} ({course.reviewsCount})
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> Duration
            </div>
            <div className="text-sm font-bold text-white mt-0.5">
              {course.duration}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" /> Labs Included
            </div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">
              {course.labsCount} Cloud Labs
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-slate-400 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-purple-400" /> Experience
            </div>
            <div className="text-sm font-bold text-purple-400 mt-0.5">
              +{course.xp} XP
            </div>
          </div>
        </div>

        {/* Modules Breakdown */}
        {course.modules && course.modules.length > 0 && (
          <div className="space-y-2 mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Curriculum Syllabus Breakdown ({course.modules.length} Modules):</span>
            </h4>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {course.modules.map((m, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">{m.title}</span>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                    <span>{m.duration}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{m.labs} Labs</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lab Specs */}
        <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2 mb-5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Browser Virtual Lab Specifications:
            </span>
            <span className="text-emerald-400 text-[11px]">15-Sec Instant Launch</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {course.tools.map((tool, i) => (
              <span key={i} className="text-xs font-mono bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Instructor */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 mb-5 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-400 block font-mono text-[10px]">Instructor:</span>
            <span className="font-bold text-white">{course.instructor}</span>
            <span className="text-slate-400 ml-1.5">({course.instructorTitle})</span>
          </div>
          <span className="text-emerald-400 font-mono text-[11px]">Verified Fellow</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2.5 pt-2 border-t border-slate-800">
          <button
            onClick={() => { onClose(); onOpenAuth('signup'); }}
            className="flex-1 py-2.5 px-4 rounded-lg font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>Launch Virtual Lab with Free Trial</span>
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-lg font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
