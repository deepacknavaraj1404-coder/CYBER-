import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/cybraryData';
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PricingSection({ onOpenAuth }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-[#070D18] border-t border-[#19253B] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00E599]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE PLANS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Invest in Skills That Advance <br />
            <span className="text-[#00E599]">Your Cybersecurity Career.</span>
          </h2>
          <p className="text-base text-slate-400">
            Start with our risk-free 7-day trial. Cancel anytime with a single click.
          </p>

          {/* Billing Interval Toggle */}
          <div className="pt-4 flex items-center justify-center space-x-3 text-sm">
            <span className={`font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-[#132139] border border-[#19253B] p-1 transition-colors"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-5 h-5 rounded-full bg-[#00E599] transition-transform duration-200 shadow-[0_0_10px_#00E599] ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <div className="flex items-center space-x-1.5">
              <span className={`font-medium ${isAnnual ? 'text-white' : 'text-slate-400'}`}>Annual Billing</span>
              <span className="text-[10px] uppercase font-bold bg-[#00E599]/20 text-[#00E599] px-2 py-0.5 rounded-full border border-[#00E599]/30">
                SAVE 35%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.popular;
            const displayPrice = plan.id === 'pro' 
              ? (isAnnual ? '$25' : '$39') 
              : plan.price;
            const displayPeriod = plan.id === 'pro'
              ? (isAnnual ? 'per month, billed annually ($299/yr)' : 'per month, billed monthly')
              : plan.period;

            return (
              <div 
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro 
                    ? 'bg-gradient-to-b from-[#0F1E33] to-[#0A1220] border-2 border-[#00E599] shadow-[0_0_35px_rgba(0,229,153,0.2)] lg:-translate-y-3' 
                    : 'bg-[#0A1220] border border-[#19253B] hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00E599] text-[#060B13] font-bold text-xs uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {isPro && <Sparkles className="w-5 h-5 text-[#00E599]" />}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        {displayPrice}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-1 block">
                      {displayPeriod}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenAuth('signup')}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 mt-4 mb-8 ${
                      isPro 
                        ? 'bg-[#00E599] hover:bg-[#00c784] text-[#060B13] shadow-[0_0_20px_rgba(0,229,153,0.35)]' 
                        : 'bg-[#132139] hover:bg-[#1a2d4d] text-white border border-[#1e3252]'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-[#19253B]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Included Capabilities:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#00E599] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#19253B]/50 text-center">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {plan.id === 'pro' ? '✓ Instant 7-Day Access • Cancel in 1-Click' : '✓ Standard Community Support'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

