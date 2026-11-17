import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Cpu 
} from 'lucide-react';
import skillMatricesImg from '../assets/enterprise/skill-matrices.jpg';
import cloudRangeImg from '../assets/enterprise/cloud-range.jpg';
import ssoLmsImg from '../assets/enterprise/sso-lms.jpg';
import mttrReductionImg from '../assets/enterprise/mttr-reduction.jpg';

export default function EnterpriseSection({ onOpenAuth }) {
  const [teamSize, setTeamSize] = useState(25);

  const estimatedHoursSaved = teamSize * 36;
  const estimatedCostSavings = teamSize * 2200;

  return (
    <section id="enterprise" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 2-Column Layout: Left = 4 Images in 2x2 Grid, Right = Section Heading, Description & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: 4 Images in clean 2-column x 2-row grid */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={skillMatricesImg} 
                  alt="Workforce Skill Matrices" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={cloudRangeImg} 
                  alt="Custom Cloud Range Days" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={ssoLmsImg} 
                  alt="SSO & LMS Integration" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={mttrReductionImg} 
                  alt="42% MTTR Reduction" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Section Heading, Description, Feature Cards & CTA Buttons */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
              Cybrary for Enterprise & Government
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transform Your Security Organization from Reactive to Threat-Ready.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Equip your SOC, incident response, and cloud engineering units with verifiable competencies. Replace passive annual awareness videos with continuous adversary emulation exercises.
            </p>

            {/* Original 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <BarChart3 className="w-4 h-4 text-emerald-600" />
                  <span>Workforce Skill Matrices</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Quantifiable proof of defensive proficiency mapped to MITRE ATT&CK for your executive board.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <Cpu className="w-4 h-4 text-sky-600" />
                  <span>Custom Cloud Range Days</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Host live team-based red vs. blue simulation events in dedicated sandboxed environments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <Lock className="w-4 h-4 text-purple-600" />
                  <span>SSO & LMS Integration</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Seamless Okta, Azure AD, SCIM automated provisioning and LTI 1.3 compliance reporting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>42% MTTR Reduction</span>
                </div>
                <p className="text-slate-500 text-xs">
                  Proven decrease in Mean Time To Remediate security incidents within 90 days.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#pricing"
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center transition-colors"
              >
                View Team Pricing
              </a>
            </div>
          </div>

        </div>

        {/* Team ROI & Readiness Estimator: Original layout, styling, and full interactive functionality */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-slate-200/80">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Team ROI & Readiness Estimator</span>
              </h4>
              <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Interactive
              </span>
            </div>

            {/* Slider for team size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Security Engineering Seats:</span>
                <span className="text-sm font-bold text-emerald-700 font-mono">{teamSize} Engineers</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="200" 
                step="5"
                value={teamSize} 
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-emerald-600 bg-slate-200 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5 seats</span>
                <span>100 seats</span>
                <span>200+ seats</span>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Est. Annual Cost Avoidance:</span>
                <span className="text-base font-bold text-slate-900">
                  ${estimatedCostSavings.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Engineering Hours Reclaimed:</span>
                <span className="text-sm font-bold text-emerald-700">
                  {estimatedHoursSaved.toLocaleString()} hrs / yr
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-600">First-Time Certification Pass:</span>
                <span className="text-sm font-bold text-sky-700">96.4%</span>
              </div>
            </div>

            <button
              onClick={() => onOpenAuth('signup')}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs text-center"
            >
              Download Organizational Capability PDF
            </button>

            <p className="text-[10px] text-slate-400 text-center font-mono">
              * Based on independent Forrester TEI enterprise cyber workforce studies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
