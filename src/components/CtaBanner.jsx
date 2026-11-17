import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function CtaBanner({ onOpenAuth }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenAuth('signup', email);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white p-8 sm:p-14 shadow-lg border border-emerald-500/40 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-950 bg-emerald-100 px-3.5 py-1 rounded-full shadow-2xs inline-block">
              Start Your Free 7-Day Trial Today
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Advance Your Cybersecurity Career?
            </h2>

            <p className="text-sm sm:text-base text-emerald-50">
              Join 3.5 million professionals developing job-ready defense skills through browser-based labs, certification blueprints, and threat-informed training.
            </p>

            <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work or personal email..."
                className="flex-1 bg-white text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-xs outline-none shadow-xs border border-white/80 focus:ring-2 focus:ring-emerald-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-emerald-100 font-mono pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" /> No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-white" /> 15-second browser VM launch
              </span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
