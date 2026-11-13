import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Terminal } from 'lucide-react';

export default function CtaBanner({ onOpenAuth }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onOpenAuth('signup', email);
    } else {
      onOpenAuth('signup');
    }
  };

  return (
    <section className="py-20 bg-[#060B13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0B1728] via-[#0E2038] to-[#0A182B] border-2 border-[#00E599]/40 p-8 sm:p-14 shadow-[0_0_50px_rgba(0,229,153,0.15)] overflow-hidden">
          
          {/* Ambient Corner Blur */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00E599]/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#00D2FF]/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060B13] border border-[#00E599]/40 text-xs font-mono font-semibold text-[#00E599]">
              <Zap className="w-3.5 h-3.5" />
              <span>INSTANT 7-DAY FULL ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Defend Against <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-[#00D2FF]">
                Tomorrow's Threats, Today?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Join over 3.5 million cyber professionals mastering real-world skills through interactive virtual labs, certification prep, and threat-informed training.
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="pt-2 max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work or personal email..."
                className="flex-1 bg-[#060B13]/90 border border-[#19253B] focus:border-[#00E599] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-[0_0_20px_rgba(0,229,153,0.4)] transition-all whitespace-nowrap"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E599]" /> No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#00E599]" /> Instant browser VM spin-up
              </span>
              <span>•</span>
              <span>Cancel anytime in 1 click</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

