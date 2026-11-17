import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../data/cybraryData';
import { 
  Search, 
  Star, 
  Clock, 
  Terminal, 
  ChevronRight, 
  Zap
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Curriculums' },
  { id: 'soc', label: 'SOC & Defensive Ops' },
  { id: 'offensive', label: 'Pen Testing & Ethical Hacking' },
  { id: 'certifications', label: 'Certifications Prep' },
  { id: 'cloud', label: 'Cloud & DevSecOps' },
  { id: 'incident', label: 'DFIR & Ransomware Response' }
];

const bannerThemes = {
  soc: 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-100 text-emerald-900',
  offensive: 'bg-gradient-to-r from-sky-50 to-cyan-50 border-sky-100 text-sky-900',
  certifications: 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100 text-amber-900',
  cloud: 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-100 text-indigo-900',
  incident: 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-100 text-rose-900'
};

export default function CourseCatalog({ onSelectCourse, onOpenAuth }) {
  const [selectedCat, setSelectedCat] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return COURSES_DATA.filter(c => {
      const matchCat = selectedCat === 'all' || c.category === selectedCat;
      const matchQuery = 
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.tools.some(t => t.toLowerCase().includes(query.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCat, query]);

  return (
    <section id="courses" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
              Curated Curriculum & Threat Labs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Courses, Labs & Certifications
            </h2>
            <p className="text-sm text-slate-600">
              Developed by former NSA operators, Mandiant threat hunters, and Fortune 500 security architects.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by tool, CVE, or topic..."
              className="w-full bg-white border border-slate-300 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors shadow-2xs"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-slate-200">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCat === cat.id
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => {
              const bannerClass = bannerThemes[course.category] || bannerThemes.soc;
              return (
                <div
                  key={course.id}
                  onClick={() => onSelectCourse(course)}
                  className="group cursor-pointer rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between overflow-hidden"
                >
                  {/* Visual Top Banner */}
                  <div className={`p-5 pb-4 border-b ${bannerClass}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-slate-800 px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                        {course.badge}
                      </span>
                      <span className="text-[11px] text-slate-600 font-mono">
                        {course.updatedDate}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono font-semibold text-slate-600 block">
                      {course.type}
                    </span>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-1 leading-snug line-clamp-2">
                      {course.title}
                    </h3>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3.5">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Instructor */}
                    <div className="text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-800">{course.instructor}</span> • {course.instructorTitle}
                    </div>

                    {/* MITRE Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {course.mitreTactics.slice(0, 2).map((tac, i) => (
                        <span key={i} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {tac.split(' ')[0]}
                        </span>
                      ))}
                      {course.mitreTactics.length > 2 && (
                        <span className="text-[10px] font-mono text-slate-500 py-0.5">
                          +{course.mitreTactics.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Meta Row: Rating, Duration, Labs */}
                    <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400">({course.reviewsCount})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-700 font-bold">
                        <Zap className="w-3.5 h-3.5" />
                        <span>{course.labsCount} Labs</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-1">
                      <button className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center gap-1">
                        <span>View Syllabus & Labs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 space-y-2">
            <p className="text-sm font-semibold text-slate-900">No courses found matching "{query}"</p>
            <button
              onClick={() => { setSelectedCat('all'); setQuery(''); }}
              className="text-xs text-emerald-700 underline font-semibold"
            >
              Clear filters and view all
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
