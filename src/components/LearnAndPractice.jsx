import React, { useState } from 'react';
import { 
  BookOpen, 
  Terminal, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
  Flag,
  Shield,
  Search
} from 'lucide-react';
import { TUTORIALS_DATA, PRACTICE_LABS } from '../data/cybraryData';

export default function LearnAndPractice({ onOpenAuth }) {
  const [activeTab, setActiveTab] = useState('learn'); // 'learn' or 'practice'
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredTutorials = TUTORIALS_DATA.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          t.summary.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          t.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase()));
    const matchesDiff = selectedDifficulty === 'all' || t.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase());
    return matchesSearch && matchesDiff;
  });

  const filteredLabs = PRACTICE_LABS.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          l.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          l.tools.some(tool => tool.toLowerCase().includes(searchFilter.toLowerCase()));
    const matchesDiff = selectedDifficulty === 'all' || l.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase());
    return matchesSearch && matchesDiff;
  });

  return (
    <section id="learn-and-practice" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-mono uppercase font-bold mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Learning Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn & Practice Cybersecurity
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read structured tutorials and step-by-step guides, then immediately test your skills inside live browser-based sandboxes and CTF challenges.
          </p>

          {/* Primary View Switcher: Learn vs. Practice */}
          <div className="mt-6 inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200 shadow-inner">
            <button
              id="learn-section"
              onClick={() => setActiveTab('learn')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                activeTab === 'learn'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>LEARN (Tutorials & Guides)</span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">
                {TUTORIALS_DATA.length}
              </span>
            </button>

            <button
              id="practice-section"
              onClick={() => setActiveTab('practice')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                activeTab === 'practice'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>PRACTICE (Hands-On Labs & CTFs)</span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded">
                {PRACTICE_LABS.length}
              </span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={`Search in ${activeTab === 'learn' ? 'tutorials' : 'practice labs'}...`}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:border-emerald-600 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-slate-500 font-medium">Difficulty:</span>
            <div className="flex gap-1 text-xs">
              {['all', 'foundational', 'intermediate', 'advanced'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedDifficulty(lvl)}
                  className={`px-2.5 py-1 rounded capitalize font-medium transition-colors ${
                    selectedDifficulty === lvl
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= TAB 1: LEARN (TUTORIALS & GUIDES) ================= */}
        {activeTab === 'learn' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTutorials.map((tut) => (
                <article 
                  key={tut.id}
                  className="bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all p-5 flex flex-col justify-between"
                >
                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs mb-2.5">
                      <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {tut.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                        <Clock className="w-3 h-3" />
                        {tut.readTime}
                      </span>
                    </div>

                    {/* Tutorial Title */}
                    <h3 className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors leading-snug">
                      {tut.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {tut.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {tut.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta & Button */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400">
                      <span>By <strong className="text-slate-700">{tut.author}</strong></span>
                      <span className="mx-1">•</span>
                      <span>{tut.difficulty}</span>
                    </div>

                    <button 
                      onClick={() => onOpenAuth('signup')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Structured Learning Roadmaps Callout */}
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-600 text-white shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Looking for structured learning roadmaps?</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Follow step-by-step career tracks mapped directly to industry roles: SOC Analyst, Penetration Tester, Cloud Security Architect, and AI Security Engineer.
                  </p>
                </div>
              </div>
              <a 
                href="#career-paths"
                className="shrink-0 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
              >
                View Career Roadmaps →
              </a>
            </div>
          </div>
        )}

        {/* ================= TAB 2: PRACTICE (HANDS-ON LABS & CTFS) ================= */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredLabs.map((lab) => (
                <div 
                  key={lab.id}
                  className="bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all p-5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Category Badge + Type */}
                    <div className="flex items-center justify-between text-xs mb-2.5">
                      <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {lab.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 text-[11px] font-mono">
                        <Flag className="w-3 h-3 text-emerald-600" />
                        {lab.type}
                      </span>
                    </div>

                    {/* Lab Title */}
                    <h3 className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors leading-snug">
                      {lab.title}
                    </h3>

                    {/* Lab Description */}
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {lab.description}
                    </p>

                    {/* Tools Used */}
                    <div className="mt-3.5">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Tools & Environment:</span>
                      <div className="flex flex-wrap gap-1">
                        {lab.tools.map((tool, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Meta & Action */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500 font-mono">
                      <span className="font-bold text-emerald-700">+{lab.xp} XP</span>
                      <span className="mx-1">•</span>
                      <span>{lab.duration}</span>
                    </div>

                    <button 
                      onClick={() => onOpenAuth('signup')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-2xs transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Launch Lab</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Sandbox Banner */}
            <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-600 text-white shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">Need a dedicated browser-based Kali Linux terminal?</h4>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Launch full cloud hypervisors with pre-installed Nmap, Metasploit, Wireshark, and Burp Suite directly in your browser. Zero local installation.
                  </p>
                </div>
              </div>
              <a 
                href="#labs"
                className="shrink-0 px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md transition-colors"
              >
                Open Virtual Sandbox →
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
