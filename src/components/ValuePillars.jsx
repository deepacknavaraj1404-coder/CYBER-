import React from 'react';
import { 
  Terminal, 
  ShieldAlert, 
  Compass, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/cybraryData';

const iconMap = {
  labs: Terminal,
  threats: ShieldAlert,
  careers: Compass,
  enterprise: BarChart3
};

export default function ValuePillars() {
  return (
    <section className="py-20 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
            The Cybrary Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Purpose-Built for Real-World Cyber Defense.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Adversaries do not follow multiple-choice tests. Cybrary equips practitioners and enterprise teams through continuous hands-on validation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUE_PROPOSITIONS.map((item) => {
            const Icon = iconMap[item.id] || Terminal;
            return (
              <div 
                key={item.id}
                className="p-8 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/80">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold">{item.tag}</span>
                  <span className="text-slate-400">{item.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
