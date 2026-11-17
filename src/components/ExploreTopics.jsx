import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Network, 
  Eye, 
  Crosshair, 
  Cloud, 
  Search, 
  Bug, 
  Code2, 
  Cpu, 
  GitBranch, 
  Wrench, 
  ArrowRight,
  BookOpen,
  FlaskConical
} from 'lucide-react';
import { EXPLORE_CATEGORIES } from '../data/cybraryData';

const ICON_MAP = {
  ShieldCheck,
  Terminal,
  Network,
  Eye,
  Crosshair,
  Cloud,
  Search,
  Bug,
  Code2,
  Cpu,
  GitBranch,
  Wrench
};

export default function ExploreTopics({ onSelectCategory }) {
  const [filter, setFilter] = useState('all');

  const filteredCategories = EXPLORE_CATEGORIES.filter(cat => {
    if (filter === 'all') return true;
    if (filter === 'offensive') {
      return ['ethical-hacking', 'penetration-testing', 'malware-analysis'].includes(cat.id);
    }
    if (filter === 'defensive') {
      return ['soc-blue-team', 'network-security', 'digital-forensics', 'security-engineering'].includes(cat.id);
    }
    if (filter === 'cloud-dev') {
      return ['cloud-security', 'devsecops', 'app-security', 'ai-security'].includes(cat.id);
    }
    return true;
  });

  return (
    <section id="explore-topics" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Structured Cybersecurity Knowledge Base</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore Cybersecurity Topics
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Browse organized learning tracks, technical articles, and browser sandboxes curated across 12 core domains of cybersecurity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-emerald-600 text-white shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Topics (12)
            </button>
            <button
              onClick={() => setFilter('defensive')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'defensive' 
                  ? 'bg-emerald-600 text-white shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Blue Team & Defense
            </button>
            <button
              onClick={() => setFilter('offensive')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'offensive' 
                  ? 'bg-emerald-600 text-white shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Offensive & Red Team
            </button>
            <button
              onClick={() => setFilter('cloud-dev')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'cloud-dev' 
                  ? 'bg-emerald-600 text-white shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Cloud, AppSec & AI
            </button>
          </div>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCategories.map((category) => {
            const IconComponent = ICON_MAP[category.icon] || ShieldCheck;
            
            return (
              <div 
                key={category.id}
                className="group bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-150 p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon + Popular Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {category.popularTag && (
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-700 border border-slate-200 transition-colors">
                        {category.popularTag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Card Footer: Metadata & Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <span>{category.articleCount} Articles</span>
                    <span>•</span>
                    <span>{category.labCount} Labs</span>
                  </div>
                  <a
                    href="#courses"
                    onClick={() => onSelectCategory && onSelectCategory(category.id)}
                    className="inline-flex items-center gap-1 font-bold text-emerald-600 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all text-xs"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
