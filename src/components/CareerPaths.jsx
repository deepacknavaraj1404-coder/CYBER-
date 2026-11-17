import React, { useState } from 'react';
import { CAREER_PATHS } from '../data/cybraryData';
import {
  Play,
  Star,
  User,
  Clock,
  ArrowRight,
  TrendingUp,
  DollarSign,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import socIllustration from '../assets/pathways/soc-analyst-illustration.jpg';
import pentestIllustration from '../assets/pathways/pentest-illustration.jpg';

// Helper to extract YouTube video ID from standard, youtu.be, shorts, and embed URLs
function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

// Fallback images map by path ID
const FALLBACK_THUMBNAILS = {
  'soc-analyst': socIllustration,
  'penetration-tester': pentestIllustration,
  'cloud-security-engineer': socIllustration,
  'ai-security-engineer': pentestIllustration
};

export default function CareerPaths({ onOpenAuth }) {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [expandedRoadmapId, setExpandedRoadmapId] = useState(null);

  const toggleRoadmap = (id) => {
    setExpandedRoadmapId(prev => prev === id ? null : id);
  };

  return (
    <section id="career-paths" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
            NIST NICE Framework Aligned
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guided Cybersecurity Career Pathways
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Follow structured, role-aligned curriculums designed to take you from foundational IT knowledge to job-ready specialization.
          </p>
        </div>

        {/* Responsive Grid of Course Cards (Desktop: 4 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {CAREER_PATHS.map((course) => {
            const videoId = extractYouTubeId(course.videoUrl);
            const thumbnailUrl = videoId 
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : (FALLBACK_THUMBNAILS[course.id] || socIllustration);
            const isPlaying = playingVideoId === course.id && Boolean(videoId);
            const isRoadmapOpen = expandedRoadmapId === course.id;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* ── TOP: Video Player / Thumbnail with Play Button Overlay ── */}
                <div className="relative aspect-video w-full bg-slate-950 overflow-hidden shrink-0">
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={course.title || course.role}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideoId(null);
                        }}
                        className="absolute top-2 right-2 bg-slate-900/85 hover:bg-slate-900 text-white text-[11px] font-mono px-2 py-0.5 rounded shadow z-20 transition-colors"
                        title="Close Video"
                      >
                        ✕ Close
                      </button>
                    </div>
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer group/thumb"
                      onClick={() => {
                        if (videoId) {
                          setPlayingVideoId(course.id);
                        }
                      }}
                    >
                      <img
                        src={thumbnailUrl}
                        alt={course.title || course.role}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_THUMBNAILS[course.id] || socIllustration;
                        }}
                        loading="lazy"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover/thumb:bg-red-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover/thumb:scale-110">
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Video Duration / Time Chip */}
                      {course.estTime && (
                        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 text-[10px] font-mono font-medium text-white bg-slate-900/85 backdrop-blur-xs px-2 py-0.5 rounded shadow-sm">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{course.estTime.split('(')[0].trim()}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ── MIDDLE: Course Information ── */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  
                  {/* Category, Level & NICE Role */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {course.category || "Cyber Defense"}
                      </span>
                      {course.level && (
                        <span className="font-mono text-[11px] text-slate-500 font-medium">
                          {course.level}
                        </span>
                      )}
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug line-clamp-2">
                      {course.title || `${course.role} Pathway`}
                    </h3>

                    {/* Instructor */}
                    {course.instructor && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>
                          Instructor: <strong className="text-slate-800 font-semibold">{course.instructor}</strong>
                        </span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {course.summary}
                    </p>
                  </div>

                  {/* Rating, Reviews & Salary Stats */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      {course.rating && (
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="font-bold text-slate-800">{course.rating}</span>
                          </div>
                          {course.reviewsCount && (
                            <span className="text-[11px] text-slate-400 font-mono">
                              ({course.reviewsCount.toLocaleString()})
                            </span>
                          )}
                        </div>
                      )}

                      {course.avgSalary && (
                        <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 font-bold">
                          <DollarSign className="w-3 h-3 text-emerald-600" />
                          <span>Avg {course.avgSalary}</span>
                        </div>
                      )}
                    </div>

                    {/* 4-Phase Roadmap Toggle */}
                    {course.steps && course.steps.length > 0 && (
                      <button
                        onClick={() => toggleRoadmap(course.id)}
                        className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 transition-colors"
                      >
                        <span className="font-semibold">
                          {isRoadmapOpen ? "Hide Curriculum Roadmap" : `View 4-Phase Roadmap (${course.steps.length} Phases)`}
                        </span>
                        {isRoadmapOpen ? (
                          <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                        )}
                      </button>
                    )}

                    {/* Expanded 4-Phase Roadmap Details */}
                    {isRoadmapOpen && course.steps && (
                      <div className="pt-2 pb-1 space-y-2 text-xs border-t border-slate-100 animate-fadeIn">
                        <div className="space-y-1.5">
                          {course.steps.map((st, i) => (
                            <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                              <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                                <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                                  Phase {st.step}
                                </span>
                                <span className="text-slate-400">{st.time}</span>
                              </div>
                              <div className="font-bold text-slate-800 text-[11px]">{st.name}</div>
                              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{st.desc}</p>
                            </div>
                          ))}
                        </div>

                        {/* Competencies */}
                        {course.skillsLearned && (
                          <div className="pt-1">
                            <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block mb-1">
                              Core Competencies:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {course.skillsLearned.map((sk, idx) => (
                                <span key={idx} className="bg-emerald-50 text-emerald-800 text-[10px] px-2 py-0.5 rounded border border-emerald-200">
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* ── BOTTOM: Course Price & Enroll CTA ── */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Tuition</span>
                      <span className="text-xs font-bold text-emerald-700 font-mono">
                        {course.price || "Free with Membership"}
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenAuth('signup')}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
                    >
                      <span>Enroll in Pathway</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
