import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/cybraryData';
import { Check, Sparkles } from 'lucide-react';

export default function PricingSection({ onOpenAuth }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
            Transparent Subscription Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Invest in High-Value Cybersecurity Skills.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Start with our 7-day full access free trial. Cancel anytime with a single click.
          </p>

          {/* Toggle */}
          <div className="pt-3 flex items-center justify-center space-x-3 text-xs sm:text-sm">
            <span className={!isAnnual ? 'text-white font-semibold' : 'text-slate-400'}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full bg-slate-800 border border-slate-700 p-0.5 transition-colors"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-4 h-4 rounded-full bg-emerald-400 transition-transform duration-150 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              ></div>
            </button>
            <div className="flex items-center space-x-1.5">
              <span className={isAnnual ? 'text-white font-semibold' : 'text-slate-400'}>
                Annual Billing
              </span>
              <span className="text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
                SAVE 35%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.popular;
            const price = plan.id === 'pro' 
              ? (isAnnual ? plan.priceAnnual : plan.priceMonthly)
              : (plan.id === 'free' ? '$0' : 'Custom');
            const period = plan.id === 'pro'
              ? (isAnnual ? 'per month, billed annually ($299/yr)' : 'per month, billed monthly')
              : plan.period;

            return (
              <div 
                key={plan.id}
                className={`rounded-xl p-7 flex flex-col justify-between transition-all ${
                  isPro 
                    ? 'bg-slate-900 border-2 border-emerald-500 shadow-xl lg:-translate-y-2' 
                    : 'bg-slate-900/60 border border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                    {isPro && (
                      <span className="text-[10px] font-mono font-bold uppercase bg-emerald-500 text-slate-950 px-2 py-0.5 rounded">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                    {plan.desc}
                  </p>

                  <div className="mt-5 mb-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      {price}
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                      {period}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenAuth('signup')}
                    className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs transition-colors mt-2 mb-6 ${
                      isPro 
                        ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950' 
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Included with {plan.name}:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-center text-[10px] text-slate-400 font-mono">
                  {plan.id === 'pro' ? '✓ Instant 7-Day Access • Cancel in 1-Click' : '✓ Community Access'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
