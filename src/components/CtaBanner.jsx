import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function CtaBanner({ onOpenAuth }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenAuth('signup', email);
  };

  return (
    <section className="py-16 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/80 p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
              Start Your Free 7-Day Trial Today
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Advance Your Cybersecurity Career?
            </h2>

            <p className="text-sm sm:text-base text-slate-300">
              Join 3.5 million professionals developing job-ready defense skills through browser-based labs, certification blueprints, and threat-informed training.
            </p>

            <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work or personal email..."
                className="flex-1 bg-slate-950 border border-slate-700 focus:border-emerald-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-400 outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-emerald-400" /> 15-second browser VM launch
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
