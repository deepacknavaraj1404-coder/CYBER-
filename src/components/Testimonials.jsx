import React from 'react';
import { TESTIMONIALS } from '../data/cybraryData';
import { Star, CheckCircle2, Shield, GraduationCap, Laptop } from 'lucide-react';

const renderCourseIcon = (iconName) => {
  switch (iconName) {
    case 'Shield':
      return <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    case 'GraduationCap':
      return <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    case 'Laptop':
      return <Laptop className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    default:
      return <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
  }
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
            Student & Professional Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Learners & Security Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            See how hands-on labs and real-world cybersecurity practice transformed careers across India and worldwide.
          </p>
        </div>

        {/* Testimonials Grid: Responsive 3-column desktop, 2-column tablet, 1-column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={index}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between h-full"
            >
              {/* Top Section: 5 Golden Stars & Dark Navy Quote */}
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-800 text-sm leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Section: Thin Divider, Author Details & Green Course Label */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center space-x-3.5">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  width="64"
                  height="64"
                  className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-full object-cover object-top border border-slate-200 shadow-xs shrink-0"
                />
                <div className="min-w-0 flex-1">
                  {/* Bold Author Name with Green Verified Check Icon */}
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>

                  {/* Muted Gray Role & Location */}
                  <div className="text-xs text-slate-500 truncate mt-0.5">
                    {item.role} • {item.location}
                  </div>

                  {/* Green Course Label with Small Icon */}
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-medium">
                    {renderCourseIcon(item.tagIcon)}
                    <span>{item.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
