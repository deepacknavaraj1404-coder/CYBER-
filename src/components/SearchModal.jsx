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

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-xl rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-10">
        
        {/* Search Bar */}
        <div className="p-3.5 border-b border-slate-800 flex items-center space-x-2.5 bg-slate-950">
          <Search className="w-4 h-4 text-emerald-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search virtual labs, courses, certs (Splunk, Nmap, Security+, CISSP)..."
            className="flex-1 bg-transparent text-white text-xs sm:text-sm outline-none placeholder-slate-500 font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[55vh] overflow-y-auto p-3 space-y-4 text-xs">
          
          {/* Courses */}
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-emerald-400" />
              <span>Courses & Hands-On Labs ({matchedCourses.length})</span>
            </div>
            <div className="space-y-1">
              {matchedCourses.map(course => (
                <div
                  key={course.id}
                  onClick={() => { onSelectCourse(course); onClose(); }}
                  className="p-2.5 rounded-lg bg-slate-950/60 hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <h5 className="font-bold text-white group-hover:text-emerald-300">
                      {course.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {course.level} • {course.duration} • {course.labsCount} Labs
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {matchedCerts.length > 0 && (
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-cyan-400" />
                <span>Certification Prep ({matchedCerts.length})</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {matchedCerts.map((cert, idx) => (
                  <div
                    key={idx}
                    onClick={() => { onClose(); window.location.hash = '#certifications'; }}
                    className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-white">{cert.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{cert.code} • {cert.passRate} pass rate</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Paths */}
          {matchedPaths.length > 0 && (
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-400" />
                <span>Career Pathways ({matchedPaths.length})</span>
              </div>
              <div className="space-y-1">
                {matchedPaths.map(path => (
                  <div
                    key={path.id}
                    onClick={() => { onClose(); window.location.hash = '#career-paths'; }}
                    className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-white">{path.role}</div>
                      <div className="text-[10px] text-slate-400">{path.avgSalary} • {path.growth}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span>Navigate with mouse or Esc to exit</span>
          <span className="text-emerald-400">1,250+ Virtual Labs Indexed</span>
        </div>

      </div>
    </div>
  );
}
