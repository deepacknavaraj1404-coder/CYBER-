import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../data/cybraryData';
import { 
  Search, 
  Star, 
  Clock, 
  Terminal, 
  ChevronRight, 
  Filter, 
  BookOpen,
  Zap,
  CheckCircle2
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Curriculums' },
  { id: 'soc', label: 'SOC & Defensive Ops' },
  { id: 'offensive', label: 'Pen Testing & Ethical Hacking' },
  { id: 'certifications', label: 'Certifications Prep' },
  { id: 'cloud', label: 'Cloud & DevSecOps' },
  { id: 'incident', label: 'DFIR & Ransomware Response' }
];

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
    <section id="courses" className="py-20 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
              Curated Curriculum & Threat Labs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Courses, Labs & Certifications
            </h2>
            <p className="text-sm text-slate-300">
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
              className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 outline-none transition-colors"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-slate-800">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCat === cat.id
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course)}
                className="group cursor-pointer rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Top Banner */}
                <div className={`p-5 pb-4 bg-gradient-to-br ${course.thumbnailColor} border-b border-slate-800`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
                      {course.badge}
                    </span>
                    <span className="text-[11px] text-slate-300 font-mono">
                      {course.updatedDate}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-300">
                    {course.type}
                  </span>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mt-1 leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Instructor */}
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-200">{course.instructor}</span> • {course.instructorTitle}
                  </div>

                  {/* MITRE Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {course.mitreTactics.slice(0, 2).map((tac, i) => (
                      <span key={i} className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        {tac.split(' ')[0]}
                      </span>
                    ))}
                    {course.mitreTactics.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-400 py-0.5">
                        +{course.mitreTactics.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Meta Row: Rating, Duration, Labs */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400">({course.reviewsCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{course.labsCount} Labs</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-1">
                    <button className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors flex items-center justify-center gap-1">
                      <span>View Syllabus & Labs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-800 space-y-2">
            <p className="text-sm font-semibold text-white">No courses found matching "{query}"</p>
            <button
              onClick={() => { setSelectedCat('all'); setQuery(''); }}
              className="text-xs text-emerald-400 underline font-medium"
            >
              Clear filters and view all
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
