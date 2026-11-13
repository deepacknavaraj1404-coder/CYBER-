import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function EnterpriseSection({ onOpenAuth }) {
  const [teamSize, setTeamSize] = useState(25);

  const estimatedHoursSaved = teamSize * 38;
  const estimatedCostSavings = teamSize * 2400;

  return (
    <section id="enterprise" className="py-20 bg-[#070D18] border-t border-[#19253B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Enterprise Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
              <Building2 className="w-3.5 h-3.5" />
              <span>CYBRARY FOR ENTERPRISE & TEAMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transform Your Security Team From <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] to-[#00D2FF]">
                Reactive to Resilient.
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Equip your SOC, incident response, and cloud engineering units with verified competencies. Replace stale annual check-box training with continuous adversary emulation exercises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0A1220] border border-[#19253B] space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <BarChart3 className="w-4 h-4 text-[#00E599]" />
                  <span>Readiness Scorecards</span>
                </div>
                <p className="text-xs text-slate-400">
                  Quantifiable proof of team proficiency across MITRE ATT&CK tactics for executive boards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A1220] border border-[#19253B] space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Custom Range Days</span>
                </div>
                <p className="text-xs text-slate-400">
                  Host live team-based red vs. blue simulation events in sandboxed cloud ranges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A1220] border border-[#19253B] space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Lock className="w-4 h-4 text-purple-400" />
                  <span>SSO & LMS Integration</span>
                </div>
                <p className="text-xs text-slate-400">
                  Seamless Okta, Azure AD, SCIM provisioning and automated compliance reporting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A1220] border border-[#19253B] space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>42% MTTR Reduction</span>
                </div>
                <p className="text-xs text-slate-400">
                  Proven decrease in Mean Time To Remediate security incidents within 90 days.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#pricing"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#0A1220] hover:bg-[#132139] border border-[#19253B] flex items-center justify-center transition-all"
              >
                View Team Pricing Tiers
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Team ROI / Readiness Calculator */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#0A1220] border border-[#1e3252] shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E599]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#00E599]" />
                  <span>Team ROI Calculator</span>
                </h4>
                <span className="text-[11px] font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded border border-[#00E599]/20">
                  Interactive
                </span>
              </div>

              {/* Slider for team size */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300 font-medium">Security Team Size:</span>
                  <span className="text-xl font-extrabold text-[#00E599] font-mono">{teamSize} Engineers</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="200" 
                  step="5"
                  value={teamSize} 
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#00E599] bg-[#19253B] h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5 seats</span>
                  <span>100 seats</span>
                  <span>200+ seats</span>
                </div>
              </div>

              {/* Calculated Results Box */}
              <div className="space-y-4 p-5 rounded-2xl bg-[#060B13] border border-[#19253B]">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs text-slate-400">Estimated Annual Cost Savings:</span>
                  <span className="text-lg font-black text-white font-mono">
                    ${estimatedCostSavings.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs text-slate-400">Engineering Hours Reclaimed:</span>
                  <span className="text-base font-bold text-[#00E599] font-mono">
                    {estimatedHoursSaved.toLocaleString()} hrs / yr
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Target Certification Pass Rate:</span>
                  <span className="text-base font-bold text-cyan-400 font-mono">96.4%</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#060B13] bg-[#00E599] hover:bg-[#00c784] transition-all text-center"
                >
                  Download Custom Team Capability Report
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-3 font-mono">
                * Based on independent Forrester TEI study of enterprise cyber readiness programs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

