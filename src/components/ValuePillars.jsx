import React from 'react';
import { 
  Terminal, 
  ShieldAlert, 
  Compass, 
  BarChart3 
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/cybraryData';

const iconConfig = {
  labs: { icon: Terminal, bg: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  threats: { icon: ShieldAlert, bg: 'bg-rose-50 text-rose-600 border-rose-200' },
  careers: { icon: Compass, bg: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
  enterprise: { icon: BarChart3, bg: 'bg-amber-50 text-amber-600 border-amber-200' }
};

export default function ValuePillars() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-200">
            The Cybrary Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Purpose-Built for Real-World Cyber Defense.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Adversaries do not follow multiple-choice tests. Cybrary equips practitioners and enterprise teams through continuous hands-on validation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUE_PROPOSITIONS.map((item) => {
            const cfg = iconConfig[item.id] || iconConfig.labs;
            const Icon = cfg.icon;
            return (
              <div 
                key={item.id}
                className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${cfg.bg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-700 font-semibold">{item.tag}</span>
                  <span className="text-slate-500 font-medium">{item.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
