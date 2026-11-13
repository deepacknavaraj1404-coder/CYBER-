import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Cpu 
} from 'lucide-react';

export default function EnterpriseSection({ onOpenAuth }) {
  const [teamSize, setTeamSize] = useState(25);

  const estimatedHoursSaved = teamSize * 36;
  const estimatedCostSavings = teamSize * 2200;

  return (
    <section id="enterprise" className="py-20 bg-[#090D16] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
              Cybrary for Enterprise & Government
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Transform Your Security Organization from Reactive to Threat-Ready.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Equip your SOC, incident response, and cloud engineering units with verifiable competencies. Replace passive annual awareness videos with continuous adversary emulation exercises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span>Workforce Skill Matrices</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Quantifiable proof of defensive proficiency mapped to MITRE ATT&CK for your executive board.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Custom Cloud Range Days</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Host live team-based red vs. blue simulation events in dedicated sandboxed environments.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span>SSO & LMS Integration</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Seamless Okta, Azure AD, SCIM automated provisioning and LTI 1.3 compliance reporting.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>42% MTTR Reduction</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Proven decrease in Mean Time To Remediate security incidents within 90 days.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-6 py-3 rounded-lg font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#pricing"
                className="px-5 py-3 rounded-lg font-semibold text-xs sm:text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center transition-colors"
              >
                View Team Pricing
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Team ROI Calculator */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-xl bg-slate-900 border border-slate-700 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Team ROI & Readiness Estimator</span>
                </h4>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
                  Interactive
                </span>
              </div>

              {/* Slider for team size */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Security Engineering Seats:</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">{teamSize} Engineers</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  step="5"
                  value={teamSize} 
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5 seats</span>
                  <span>100 seats</span>
                  <span>200+ seats</span>
                </div>
              </div>

              {/* Calculated Results */}
              <div className="space-y-3 p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Est. Annual Training Cost Avoidance:</span>
                  <span className="text-base font-bold text-white">
                    ${estimatedCostSavings.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Engineering Hours Reclaimed:</span>
                  <span className="text-sm font-semibold text-emerald-400">
                    {estimatedHoursSaved.toLocaleString()} hrs / yr
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">First-Time Certification Pass:</span>
                  <span className="text-sm font-semibold text-cyan-400">96.4%</span>
                </div>
              </div>

              <button
                onClick={() => onOpenAuth('signup')}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors text-center"
              >
                Download Organizational Capability PDF
              </button>

              <p className="text-[10px] text-slate-500 text-center font-mono">
                * Based on independent Forrester TEI enterprise cyber workforce studies.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
