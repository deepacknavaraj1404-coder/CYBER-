import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Terminal, GraduationCap, Compass, ArrowRight } from 'lucide-react';
import { COURSES_DATA, CAREER_PATHS, CERTIFICATIONS } from '../data/cybraryData';

export default function SearchModal({ isOpen, onClose, onSelectCourse }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global key listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Handled by parent or trigger
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedCourses = COURSES_DATA.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.tools.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    c.mitreTactics.some(m => m.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedCerts = CERTIFICATIONS.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.code.toLowerCase().includes(query.toLowerCase())
  );

  const matchedPaths = CAREER_PATHS.filter(p => 
    p.role.toLowerCase().includes(query.toLowerCase()) ||
    p.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0A1220] border border-[#19253B] shadow-2xl overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#19253B] flex items-center space-x-3 bg-[#0D1728]">
          <Search className="w-5 h-5 text-[#00E599]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search virtual labs, courses, certifications, tools (Splunk, Nmap, CISSP)..."
            className="flex-1 bg-transparent text-white text-sm sm:text-base outline-none placeholder-slate-500 font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          
          {/* Courses & Labs */}
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#00E599]" />
              <span>Courses & Hands-On Labs ({matchedCourses.length})</span>
            </div>
            <div className="space-y-1.5">
              {matchedCourses.map(course => (
                <div
                  key={course.id}
                  onClick={() => { onSelectCourse(course); onClose(); }}
                  className="p-3 rounded-xl bg-[#060B13]/60 hover:bg-[#132139] border border-transparent hover:border-[#00E599]/30 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00E599] transition-colors">
                      {course.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {course.level} • {course.duration} • {course.labsCount} Labs • {course.tools.slice(0, 3).join(', ')}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00E599] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {matchedCerts.length > 0 && (
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Certification Prep ({matchedCerts.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedCerts.map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => { onClose(); window.location.hash = '#certifications'; }}
                    className="p-3 rounded-xl bg-[#060B13]/60 hover:bg-[#132139] border border-transparent hover:border-cyan-500/30 transition-all cursor-pointer"
                  >
                    <div className="text-xs font-bold text-white">{cert.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">{cert.code} • {cert.passRate} pass rate</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Career Paths */}
          {matchedPaths.length > 0 && (
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                <span>Career Pathways ({matchedPaths.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedPaths.map(path => (
                  <div
                    key={path.id}
                    onClick={() => { onClose(); window.location.hash = '#career-paths'; }}
                    className="p-3 rounded-xl bg-[#060B13]/60 hover:bg-[#132139] border border-transparent hover:border-purple-500/30 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{path.role}</div>
                      <div className="text-[11px] text-slate-400">{path.avgSalary} • {path.jobGrowth}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#060B13] border-t border-[#19253B] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Tip: Navigate with mouse or Esc to close</span>
          <span className="text-[#00E599]">1,200+ Live Labs Indexed</span>
        </div>

      </div>
    </div>
  );
}

