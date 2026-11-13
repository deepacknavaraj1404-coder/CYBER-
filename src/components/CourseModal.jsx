import React from 'react';
import { 
  X, 
  Terminal, 
  Clock, 
  Star, 
  Award, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  Layers, 
  Play, 
  Cpu, 
  UserCheck 
} from 'lucide-react';

export default function CourseModal({ course, onClose, onOpenAuth }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A1220] border border-[#1e3252] shadow-2xl p-6 sm:p-8 z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0D1728] text-[#00E599] border border-[#00E599]/30">
            {course.badge}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {course.level} Level
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-cyan-400 font-mono">
            {course.cpeCredits} CPE Credits
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          {course.description}
        </p>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3 rounded-xl bg-[#060B13] border border-[#19253B]">
            <div className="text-slate-400 text-xs flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Rating
            </div>
            <div className="text-base font-bold text-white mt-1 font-mono">
              {course.rating} / 5.0
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#060B13] border border-[#19253B]">
            <div className="text-slate-400 text-xs flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> Duration
            </div>
            <div className="text-base font-bold text-white mt-1 font-mono">
              {course.duration}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#060B13] border border-[#19253B]">
            <div className="text-slate-400 text-xs flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#00E599]" /> Labs Included
            </div>
            <div className="text-base font-bold text-[#00E599] mt-1 font-mono">
              {course.labsCount} Labs
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#060B13] border border-[#19253B]">
            <div className="text-slate-400 text-xs flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-purple-400" /> XP Award
            </div>
            <div className="text-base font-bold text-purple-400 mt-1 font-mono">
              +{course.xp} XP
            </div>
          </div>
        </div>

        {/* Virtual Sandbox Environment Details */}
        <div className="p-4 rounded-2xl bg-[#0D1728] border border-[#19253B] space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-white flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#00E599]" /> VIRTUAL LAB CLOUD ENVIRONMENT
            </span>
            <span className="text-[#00E599] font-mono">1-CLICK BROWSER ACCESS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.tools.map((tool, i) => (
              <span key={i} className="text-xs font-mono bg-[#132139] text-slate-200 px-2.5 py-1 rounded-lg border border-white/5">
                {tool}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 font-mono">
            * Isolated cloud VM container spins up in 15 seconds. No hypervisor or software installation required on your computer.
          </p>
        </div>

        {/* MITRE ATT&CK Mapping */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Mapped MITRE ATT&CK® Tactics:
          </h4>
          <div className="flex flex-wrap gap-2">
            {course.mitreTactics.map((tactic, i) => (
              <span key={i} className="text-xs font-mono bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/30 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{tactic}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#060B13] border border-[#19253B] mb-6">
          <div className="w-10 h-10 rounded-full bg-[#132139] border border-[#00E599]/40 flex items-center justify-center text-[#00E599]">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-mono">Instructor & Cyber Fellow</div>
            <div className="text-sm font-bold text-white">{course.instructor}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => { onClose(); onOpenAuth('signup'); }}
            className="flex-1 py-3.5 px-4 rounded-xl font-bold text-sm text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-[0_0_20px_rgba(0,229,153,0.35)] transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-[#060B13]" />
            <span>Launch Virtual Lab Sandbox</span>
          </button>
          <button
            onClick={onClose}
            className="py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-300 bg-[#132139] hover:bg-[#1c3050] border border-[#1e3252] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

