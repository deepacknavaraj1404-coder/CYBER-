import React, { useState, useMemo } from 'react';
import { 
  COURSE_CATEGORIES, 
  COURSES_DATA 
} from '../data/cybraryData';
import { 
  Search, 
  Star, 
  Clock, 
  Terminal, 
  Award, 
  ChevronRight, 
  Filter, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  BookOpen
} from 'lucide-react';

export default function CourseCatalog({ onSelectCourse, onOpenAuth }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesQuery = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.mitreTactics.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="courses" className="py-20 bg-[#060B13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>EXPLORE THE THREAT-INFORMED CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Master Cybersecurity Disciplines <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-[#00D2FF]">
                With Elite Industry Practitioners.
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Learn offensive, defensive, and leadership skills mapped to industry standards and threat actor campaigns.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool, CVE, or topic..."
              className="w-full bg-[#0A1220] border border-[#19253B] focus:border-[#00E599] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-[#19253B]/50">
          {COURSE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#00E599] text-[#060B13] font-bold shadow-[0_0_15px_rgba(0,229,153,0.3)]'
                  : 'bg-[#0A1220] text-slate-400 hover:text-white hover:bg-[#132139] border border-[#19253B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                onClick={() => onSelectCourse(course)}
                className="group cursor-pointer rounded-2xl bg-[#0A1220] border border-[#19253B] hover:border-[#00E599]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Top Banner Tag */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0D1728] text-[#00E599] border border-[#00E599]/30">
                      {course.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00E599] transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="p-6 pt-4 space-y-4">
                  {/* MITRE ATT&CK Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {course.mitreTactics.map((tactic, i) => (
                      <span key={i} className="text-[10px] font-mono bg-[#132139] text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
                        {tactic}
                      </span>
                    ))}
                  </div>

                  {/* Tools List */}
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                    <Terminal className="w-3.5 h-3.5 text-[#00E599] flex-shrink-0" />
                    <span>Tools: {course.tools.join(', ')}</span>
                  </div>

                  {/* Rating & Stats Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#19253B] text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500 text-[11px]">({course.reviewsCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#00E599]">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{course.labsCount} Labs</span>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <button 
                    className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#132139] group-hover:bg-[#00E599] group-hover:text-[#060B13] border border-[#1e3252] group-hover:border-[#00E599] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Launch Virtual Lab & Syllabus</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0A1220] rounded-2xl border border-[#19253B] space-y-3">
            <Filter className="w-8 h-8 text-slate-500 mx-auto" />
            <h4 className="text-lg font-bold text-white">No courses match your search</h4>
            <p className="text-sm text-slate-400">Try adjusting your keywords or selecting another category.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#00E599] text-[#060B13] text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Catalog Callout */}
        <div className="mt-14 text-center">
          <button 
            onClick={() => onOpenAuth('signup')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0D1728] hover:bg-[#132139] border border-[#19253B] hover:border-[#00E599]/40 transition-all"
          >
            <span>Explore All 1,200+ Interactive Cyber Labs in Full Catalog</span>
            <ChevronRight className="w-4 h-4 text-[#00E599]" />
          </button>
        </div>

      </div>
    </section>
  );
}

