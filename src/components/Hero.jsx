import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Server, 
  Code, 
  Lock, 
  Flame,
  Radio,
  Zap
} from 'lucide-react';
import { HERO_STATS } from '../data/cybraryData';

export default function Hero({ onOpenAuth, onOpenLab }) {
  const [activeTab, setActiveTab] = useState('terminal');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: '[!] INITIALIZING CYBRARY THREAT-INFORMED LAB SANDBOX v4.8...' },
    { type: 'system', text: '[+] Connected to isolated hypervisor node us-east-2 (Kali Linux 2024.1)' },
    { type: 'input', text: 'soc-analyst@cybrary-box:~$ nmap -sV -p 80,443,445 10.10.42.15' },
    { type: 'output', text: 'PORT    STATE SERVICE     VERSION\n80/tcp  open  http        Apache httpd 2.4.49 (Vulnerable: Path Traversal)\n443/tcp open  ssl/https   OpenSSL 1.1.1k\n445/tcp open  microsoft-ds Windows Server 2022' },
    { type: 'alert', text: '[CRITICAL ALERT] Detected CVE-2021-41773 & SMB Signing Disabled!' },
    { type: 'success', text: '[✓] Remediation policy generated: apply WAF rule #8092 and enforce SMB v3' }
  ]);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleCommands = [
    { label: 'nmap scan', cmd: 'nmap -sV -T4 10.10.42.15' },
    { label: 'mitre check', cmd: 'mitre --query T1059.001 --technique' },
    { label: 'splunk alert', cmd: 'splunk-search "index=security EventCode=4624 | stats count by TargetUserName"' },
    { label: 'remediate', cmd: 'cybrary-shield --apply-hardening-profile zero-trust' }
  ];

  const handleRunCommand = (cmdText) => {
    if (!cmdText.trim()) return;
    setIsTyping(true);

    const newHistory = [...terminalHistory, { type: 'input', text: `soc-analyst@cybrary-box:~$ ${cmdText}` }];
    setTerminalHistory(newHistory);
    setCustomInput('');

    setTimeout(() => {
      let responseObj;
      const lower = cmdText.toLowerCase();

      if (lower.includes('nmap')) {
        responseObj = {
          type: 'output',
          text: 'Starting Nmap 7.94... Host is up (0.0024s latency).\nNmap scan report for 10.10.42.15:\n80/tcp   open  http       Apache 2.4.49 (Exploitable)\n443/tcp  open  https      OpenSSL 1.1.1\n8080/tcp open  http-proxy Jenkins CI 2.303.1 (Unauthenticated)'
        };
      } else if (lower.includes('mitre')) {
        responseObj = {
          type: 'alert',
          text: '[MITRE ATT&CK T1059.001]\nName: PowerShell Execution\nTactic: Execution (TA0002)\nAdversary Group: APT29 (Cozy Bear), FIN7\nRecommended Action: ConstrainedLanguageMode + ScriptBlockLogging'
        };
      } else if (lower.includes('splunk')) {
        responseObj = {
          type: 'output',
          text: 'SIEM Correlation Query Executed (240 events matched):\n- TargetUserName: Administrator | Count: 84 | Origin: 198.51.100.44 (Brute Force)\n- TargetUserName: svc-backup     | Count: 12 | Origin: 10.10.12.8 (Internal Pass-the-Hash)'
        };
      } else if (lower.includes('remediate')) {
        responseObj = {
          type: 'success',
          text: '[✓] SUCCESS: Micro-segmentation applied.\n[✓] Blocked malicious ingress IP 198.51.100.44\n[✓] Forced Kerberos AES-256 encryption. SOC incident ticket #CYB-9921 resolved.'
        };
      } else {
        responseObj = {
          type: 'system',
          text: `Command executed: "${cmdText}". Sandbox state updated. Type 'nmap', 'mitre', or 'remediate' for simulations.`
        };
      }

      setTerminalHistory(prev => [...prev, responseObj]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#060B13]">
      {/* High-tech Background Ambient Lights & Grid */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00E599]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1728] border border-[#00E599]/30 text-xs font-semibold text-white shadow-[0_0_15px_rgba(0,229,153,0.15)] animate-in fade-in zoom-in duration-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E599] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E599]"></span>
            </span>
            <span className="text-[#00E599] uppercase tracking-wider text-[11px] font-mono">THREAT-INFORMED WORKFORCE INTELLIGENCE</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Over 1,200+ Browser-Based Labs</span>
          </div>

          {/* Main Bold Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Build Cybersecurity Skills That <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] via-[#33ebb0] to-[#00D2FF] text-glow">
              Actually Matter in the Real World.
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto font-normal">
            Develop job-ready cybersecurity capabilities with browser-based virtual labs, role-aligned career paths, and live threat simulations mapped directly to the <span className="text-white font-medium">MITRE ATT&CK®</span> framework.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-[#060B13] bg-[#00E599] hover:bg-[#00c784] shadow-[0_0_25px_rgba(0,229,153,0.4)] hover:shadow-[0_0_35px_rgba(0,229,153,0.6)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start 7-Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a 
              href="#enterprise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-[#0D1728]/80 hover:bg-[#132139] border border-[#19253B] hover:border-[#00E599]/40 transition-all duration-200"
            >
              <span>Explore Enterprise Training</span>
              <Play className="w-4 h-4 text-[#00E599] fill-[#00E599]" />
            </a>
          </div>

          {/* Micro Proof Points */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E599]" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E599]" /> 100% browser-based sandbox
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E599]" /> 96% certification pass rate
            </span>
          </div>

        </div>

        {/* Interactive Threat & Virtual Lab Sandbox Visual */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#132139] via-[#0D1728] to-[#0A1220] p-1 shadow-2xl border border-[#1e3252] group">
            
            {/* Outer Subtle Neon Glow Rim */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00E599]/20 via-[#00D2FF]/20 to-[#00E599]/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none"></div>

            <div className="relative bg-[#080E1A] rounded-xl overflow-hidden">
              
              {/* Terminal Window Header Bar */}
              <div className="bg-[#0A1322] border-b border-[#19253B] px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-2 hidden sm:inline">
                    cybrary@live-sandbox:~# threat-defense-cluster
                  </span>
                </div>

                {/* Sub-Tabs */}
                <div className="flex items-center space-x-1 bg-[#060B13] p-1 rounded-lg border border-white/5 text-xs font-medium">
                  <button 
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                      activeTab === 'terminal' 
                        ? 'bg-[#00E599] text-[#060B13] font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Live Interactive Shell</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('telemetry')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                      activeTab === 'telemetry' 
                        ? 'bg-[#00E599] text-[#060B13] font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>Real-Time Telemetry</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('matrix')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                      activeTab === 'matrix' 
                        ? 'bg-[#00E599] text-[#060B13] font-bold shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ATT&CK Matrix</span>
                  </button>
                </div>

                {/* Live Node Status Pill */}
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
                  <span className="text-[#00E599] font-medium hidden md:inline">VM NODE ONLINE</span>
                  <span className="text-slate-500 font-mono text-[10px]">12ms</span>
                </div>
              </div>

              {/* Terminal View Content */}
              {activeTab === 'terminal' && (
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                  {/* Terminal Log Console */}
                  <div className="h-64 sm:h-72 overflow-y-auto space-y-2.5 pr-2 select-text">
                    {terminalHistory.map((line, idx) => (
                      <div key={idx} className="leading-relaxed">
                        {line.type === 'system' && (
                          <p className="text-slate-400">{line.text}</p>
                        )}
                        {line.type === 'input' && (
                          <p className="text-[#00E599] font-semibold">{line.text}</p>
                        )}
                        {line.type === 'output' && (
                          <pre className="text-slate-300 bg-[#060B13]/70 p-2.5 rounded-lg border border-white/5 whitespace-pre-wrap font-mono">
                            {line.text}
                          </pre>
                        )}
                        {line.type === 'alert' && (
                          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-2.5 rounded-lg flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <pre className="whitespace-pre-wrap font-mono text-xs">{line.text}</pre>
                          </div>
                        )}
                        {line.type === 'success' && (
                          <div className="bg-emerald-500/10 border border-emerald-500/30 text-[#00E599] p-2.5 rounded-lg flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#00E599] flex-shrink-0 mt-0.5" />
                            <pre className="whitespace-pre-wrap font-mono text-xs">{line.text}</pre>
                          </div>
                        )}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="text-slate-400 flex items-center gap-2">
                        <span className="animate-spin text-[#00E599]">●</span> Running cyber inspection script...
                      </div>
                    )}
                  </div>

                  {/* Interactive Quick Command Triggers */}
                  <div className="mt-4 pt-4 border-t border-[#19253B]">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-400 font-sans font-medium">Quick commands:</span>
                      {sampleCommands.map((sample, i) => (
                        <button
                          key={i}
                          onClick={() => handleRunCommand(sample.cmd)}
                          className="px-2.5 py-1 rounded bg-[#132139] hover:bg-[#1c3050] text-[#00E599] border border-[#1e3252] hover:border-[#00E599]/50 transition-all font-mono"
                        >
                          ${sample.label}
                        </button>
                      ))}
                    </div>

                    {/* Interactive Input Form */}
                    <form 
                      onSubmit={(e) => { e.preventDefault(); handleRunCommand(customInput); }}
                      className="mt-3 flex items-center gap-2"
                    >
                      <span className="text-[#00E599] font-mono text-sm hidden sm:inline">guest@cybrary:~#</span>
                      <input 
                        type="text"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder="Type any cyber command (e.g. nmap, mitre, splunk, remediate)..."
                        className="flex-1 bg-[#060B13] border border-[#19253B] focus:border-[#00E599] rounded-lg px-3.5 py-2 text-white font-mono text-xs sm:text-sm outline-none transition-colors"
                      />
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-[#00E599] text-[#060B13] font-bold rounded-lg hover:bg-[#00c784] transition-colors font-sans text-xs"
                      >
                        Execute
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Telemetry Tab */}
              {activeTab === 'telemetry' && (
                <div className="p-6 text-xs font-mono space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#060B13] p-4 rounded-xl border border-[#19253B]">
                      <div className="text-slate-400">IDS Traffic Monitored</div>
                      <div className="text-xl font-bold text-white mt-1">4.2 Gbps</div>
                      <div className="text-[#00E599] text-[11px] mt-1">0 dropped packets</div>
                    </div>
                    <div className="bg-[#060B13] p-4 rounded-xl border border-[#19253B]">
                      <div className="text-slate-400">Active Adversary Vectors</div>
                      <div className="text-xl font-bold text-red-400 mt-1">14 Flagged</div>
                      <div className="text-slate-400 text-[11px] mt-1">APT29 & LockBit 3.0</div>
                    </div>
                    <div className="bg-[#060B13] p-4 rounded-xl border border-[#19253B]">
                      <div className="text-slate-400">Sandbox Protection</div>
                      <div className="text-xl font-bold text-[#00E599] mt-1">ENFORCED</div>
                      <div className="text-slate-400 text-[11px] mt-1">Container isolation strict</div>
                    </div>
                  </div>

                  <div className="bg-[#060B13] p-4 rounded-xl border border-[#19253B] space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>LIVE WIRESHARK PCAP STREAM</span>
                      <span className="text-[#00E599]">● CAPTURING</span>
                    </div>
                    <div className="text-slate-300 font-mono space-y-1 text-[11px]">
                      <div>12:14:02.102 IP 192.168.1.50.443 &gt; 10.0.0.12.54122: Flags [P.], seq 1:450, ack 1</div>
                      <div className="text-amber-400">12:14:02.341 IP 198.51.100.12.8080 &gt; 10.0.0.12.445: SMB2 Negotiate Protocol Request (Suspect)</div>
                      <div className="text-red-400">12:14:02.489 IP 198.51.100.12 &gt; 10.0.0.12: [ALERT] NTLMSSP Auth brute-force attempt logged</div>
                    </div>
                  </div>
                </div>
              )}

              {/* ATT&CK Matrix Tab */}
              {activeTab === 'matrix' && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">Adversary Tactics & Techniques Coverage</h4>
                    <span className="text-xs text-[#00E599] font-mono">100% Cybrary Lab Coverage</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-[#060B13] border border-[#19253B]">
                      <div className="text-[#00E599] font-bold">Initial Access</div>
                      <div className="text-slate-400 text-[11px] mt-1">T1190: Exploit Facing App</div>
                      <div className="text-slate-500 text-[10px]">14 Hands-on Labs</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#060B13] border border-[#19253B]">
                      <div className="text-cyan-400 font-bold">Execution</div>
                      <div className="text-slate-400 text-[11px] mt-1">T1059: Command & Script</div>
                      <div className="text-slate-500 text-[10px]">22 Hands-on Labs</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#060B13] border border-[#19253B]">
                      <div className="text-purple-400 font-bold">Credential Access</div>
                      <div className="text-slate-400 text-[11px] mt-1">T1003: OS Credential Dump</div>
                      <div className="text-slate-500 text-[10px]">19 Hands-on Labs</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#060B13] border border-[#19253B]">
                      <div className="text-amber-400 font-bold">Lateral Movement</div>
                      <div className="text-slate-400 text-[11px] mt-1">T1021: Remote Services</div>
                      <div className="text-slate-500 text-[10px]">18 Hands-on Labs</div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Hero Proof Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-[#19253B]/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left p-4 rounded-xl bg-[#0D1728]/40 border border-white/5 hover:border-[#00E599]/20 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center justify-center sm:justify-start">
                  <span>{stat.value}</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#00E599] font-medium mt-0.5">
                  {stat.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

