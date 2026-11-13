import React from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  Compass, 
  Activity, 
  ArrowRight, 
  Zap, 
  Check, 
  Cpu, 
  Lock 
} from 'lucide-react';
import { VALUE_PILLARS } from '../data/cybraryData';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Terminal: Terminal,
  Compass: Compass,
  Activity: Activity
};

export default function ValuePillars({ onSelectFilter }) {
  return (
    <section className="py-20 bg-[#060B13] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00E599]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-semibold text-[#00E599] font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE CYBRARY METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Real Defense, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-[#00D2FF]">
              Not Just Multiple Choice Tests.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Cyber attackers don't follow textbook theory. Cybrary immerses you in live virtual sandboxes, active adversary emulation, and quantifiable competency development.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUE_PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || ShieldAlert;
            return (
              <div 
                key={pillar.id}
                className="group relative rounded-2xl bg-[#0A1220] border border-[#19253B] hover:border-[#00E599]/50 p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Corner Gradient Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.gradient} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Icon + Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-[#0D1728] border border-[#1e3252] text-[#00E599] group-hover:scale-110 group-hover:border-[#00E599]/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,229,153,0.15)]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#132139] text-slate-300 border border-white/5">
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00E599] transition-colors mb-3">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Stats & Action */}
                  <div className="mt-8 pt-6 border-t border-[#19253B] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00E599]"></span>
                      <span className="text-xs font-mono font-bold text-white">{pillar.stats}</span>
                    </div>
                    <a 
                      href="#courses"
                      className="text-xs font-bold text-[#00E599] group-hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Labs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

