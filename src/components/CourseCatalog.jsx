import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../data/cybraryData';
import { 
  Search, 
  Star, 
  Clock, 
  User, 
  Play, 
  ArrowRight, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'soc', label: 'SOC & Blue Team' },
  { id: 'offensive', label: 'Pen Testing & Ethical Hacking' },
  { id: 'certifications', label: 'Certifications Prep' },
  { id: 'cloud', label: 'Cloud & DevSecOps' },
  { id: 'incident', label: 'DFIR & Ransomware' }
];

// Helper to extract YouTube video ID
function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function CourseCatalog({ onSelectCourse, onOpenAuth }) {
  const [selectedCat, setSelectedCat] = useState('all');
  const [query, setQuery] = useState('');
  const [playingVideoId, setPlayingVideoId] = useState(null);

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
    <section id="courses" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Professional Course Marketplace</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Cybersecurity Courses & Labs
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Taught by former Mandiant incident responders, Fortune 500 CISOs, and defense specialists.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter courses by tool or skill..."
              className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 rounded-md pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 outline-none transition-colors"
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

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none mb-8 border-b border-slate-200 text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-md font-semibold whitespace-nowrap transition-colors ${
                selectedCat === cat.id
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
              const videoId = extractYouTubeId(course.videoUrl);
              const thumbnailUrl = videoId 
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80';
              const isPlaying = playingVideoId === course.id && Boolean(videoId);

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Thumbnail / Video Preview */}
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden shrink-0">
                    {isPlaying ? (
                      <div className="relative w-full h-full">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                          title={course.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideoId(null);
                          }}
                          className="absolute top-2 right-2 bg-slate-900/90 text-white text-[10px] font-mono px-2 py-0.5 rounded shadow z-20 hover:bg-black"
                        >
                          ✕ Close
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => {
                          if (videoId) {
                            setPlayingVideoId(course.id);
                          } else {
                            onSelectCourse(course);
                          }
                        }}
                        className="relative w-full h-full cursor-pointer group/thumb"
                      >
                        <img 
                          src={thumbnailUrl} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/35 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-red-600 group-hover/thumb:scale-110 text-white flex items-center justify-center shadow-lg transition-transform">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Top Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                            {course.badge}
                          </span>
                        </div>

                        {/* Duration Pill */}
                        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                    <div>
                      {/* Level and Category Tag */}
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          {course.level}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {course.labsCount} Hands-On Labs
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 
                        onClick={() => onSelectCourse(course)}
                        className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug line-clamp-2"
                      >
                        {course.title}
                      </h3>

                      {/* Instructor */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2">
                        <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">
                          {course.instructor} • <span className="text-slate-400">{course.instructorTitle}</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Footer Row: Rating, CPE, and Explore Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-slate-800">{course.rating}</span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          ({course.reviewsCount.toLocaleString()})
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectCourse(course)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:text-white bg-emerald-50 hover:bg-emerald-600 rounded-md border border-emerald-200 hover:border-emerald-600 transition-colors"
                      >
                        <span>Explore Course</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <p className="text-sm font-semibold text-slate-900">No courses found matching "{query}"</p>
            <button
              onClick={() => { setSelectedCat('all'); setQuery(''); }}
              className="text-xs text-emerald-700 underline font-semibold"
            >
              Clear search and view all courses
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
