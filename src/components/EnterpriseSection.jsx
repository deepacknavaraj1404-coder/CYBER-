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

const ENTERPRISE_FEATURES = [
  {
    image: skillMatricesImg,
    title: "Workforce Skill Matrices",
    description: "Quantifiable proof of defensive proficiency mapped to MITRE ATT&CK for your executive board.",
    icon: BarChart3,
    color: "text-emerald-600",
  },
  {
    image: cloudRangeImg,
    title: "Custom Cloud Range Days",
    description: "Host live team-based red vs. blue simulation events in dedicated sandboxed environments.",
    icon: Cpu,
    color: "text-sky-600",
  },
  {
    image: ssoLmsImg,
    title: "SSO & LMS Integration",
    description: "Seamless Okta, Azure AD, SCIM automated provisioning and LTI 1.3 compliance reporting.",
    icon: Lock,
    color: "text-purple-600",
  },
  {
    image: mttrReductionImg,
    title: "42% MTTR Reduction",
    description: "Proven decrease in Mean Time To Remediate security incidents within 90 days.",
    icon: ShieldCheck,
    color: "text-amber-600",
  }
];

export default function EnterpriseSection({ onOpenAuth }) {
  const [teamSize, setTeamSize] = useState(25);

  const estimatedHoursSaved = teamSize * 36;
  const estimatedCostSavings = teamSize * 2200;

  return (
    <section id="enterprise" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout: Left = 4 Images in 2x2 Grid, Right = Section Heading & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: 4 Images in clean 2x2 Grid (Occupies full left column, stacks above on mobile) */}
          <div className="lg:col-span-6 w-full order-1">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4.5">
              {ENTERPRISE_FEATURES.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                >
                  <div className="aspect-square w-full overflow-hidden bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Section Heading, Description, Existing Content & ROI Estimator */}
          <div className="lg:col-span-6 space-y-6 order-2">
            
            {/* Tag, Heading, and Description */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                Cybrary for Enterprise & Government
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Transform Your Security Organization from Reactive to Threat-Ready.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Equip your SOC, incident response, and cloud engineering units with verifiable competencies. Replace passive annual awareness videos with continuous adversary emulation exercises.
              </p>
            </div>

            {/* Feature Highlights matching the 4 visual trophies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {ENTERPRISE_FEATURES.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                      <IconComponent className={`w-4 h-4 ${feat.color} shrink-0`} />
                      <span className="truncate">{feat.title}</span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Team ROI & Readiness Estimator */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600 shrink-0" />
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
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                <div>
                  <span className="text-slate-500 text-[11px] block">Est. Cost Avoidance:</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    ${estimatedCostSavings.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Hours Reclaimed:</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-700">
                    {estimatedHoursSaved.toLocaleString()} hrs/yr
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-3">
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

      </div>
    </section>
  );
}
