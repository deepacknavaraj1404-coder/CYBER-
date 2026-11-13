import React from 'react';
import { TESTIMONIALS } from '../data/cybraryData';
import { Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#060B13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
            <Quote className="w-3.5 h-3.5" />
            <span>PRACTITIONER VERIFIED STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by Frontline Responders & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-[#00D2FF]">
              Fortune 500 Security Leaders.
            </span>
          </h2>
          <p className="text-base text-slate-400">
            Hear from cybersecurity professionals who advanced their careers, certified on the first try, and defended critical infrastructure with Cybrary.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-[#0A1220] border border-[#19253B] hover:border-[#00E599]/40 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-[#19253B] flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00E599]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role} • <span className="text-slate-300 font-semibold">{item.company}</span>
                  </p>
                  <p className="text-[11px] text-[#00E599] font-mono mt-0.5">
                    Achieved: {item.certAchieved}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

