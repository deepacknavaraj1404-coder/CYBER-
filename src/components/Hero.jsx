import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Server, 
  Copy, 
  RotateCcw, 
  ExternalLink,
  ChevronRight,
  Flame,
  AlertCircle
} from 'lucide-react';
import { HERO_STATS } from '../data/cybraryData';

export default function Hero({ onOpenAuth }) {
  const [activeTab, setActiveTab] = useState('terminal');
  const [copied, setCopied] = useState(false);
  
  // Realistic terminal history with authentic tool output
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'cmd',
      prompt: 'kali@cybrary-sandbox:~$',
      text: 'nmap -sV -p 80,443,445,8080 10.10.14.8'
    },
    {
      type: 'output',
      text: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-13 07:14 UTC
Nmap scan report for corp-srv01.internal (10.10.14.8)
Host is up (0.0018s latency).

PORT     STATE SERVICE       VERSION
80/tcp   open  http          Apache httpd 2.4.49
443/tcp  open  ssl/http      OpenSSL/1.1.1k
445/tcp  open  microsoft-ds  Windows Server 2022 Standard 20348
8080/tcp open  http-proxy    Jenkins CI 2.319 (Authentication: Disabled)`
    },
    {
      type: 'vuln',
      text: '[!] VULNERABILITY CONFIRMED: CVE-2021-41773 (Apache Path Traversal & RCE) detected on port 80.'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const sampleCommands = [
    { label: 'nmap scan', cmd: 'nmap -sV -T4 10.10.14.8' },
    { label: 'exploit check', cmd: 'curl -s --path-as-is "http://10.10.14.8/icons/.%2e/%2e%2e/%2e%2e/etc/passwd"' },
    { label: 'splunk query', cmd: 'splunk-cli search "index=windows EventCode=4624 | head 5"' },
    { label: 'mitigate', cmd: 'sudo iptables -A INPUT -s 192.168.1.100 -j DROP && echo "[✓] Rule Active"' }
  ];

  const handleCommand = (cmd) => {
    if (!cmd.trim()) return;
    setIsRunning(true);

    const updated = [
      ...terminalHistory,
      { type: 'cmd', prompt: 'kali@cybrary-sandbox:~$', text: cmd }
    ];
    setTerminalHistory(updated);
    setUserInput('');

    setTimeout(() => {
      const lower = cmd.toLowerCase();
      let res;

      if (lower.includes('curl') || lower.includes('exploit')) {
        res = {
          type: 'output',
          text: `root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nsoc-admin:x:1001:1001:SOC Admin:/home/soc-admin:/bin/bash\n\n[✓] Path traversal succeeded. Target /etc/passwd extracted.`
        };
      } else if (lower.includes('splunk')) {
        res = {
          type: 'output',
          text: `2026-11-13 07:12:01 Host=corp-srv01 EventCode=4624 LogonType=3 TargetUser=Administrator SourceIP=192.168.1.100\n2026-11-13 07:11:58 Host=corp-srv01 EventCode=4625 LogonType=3 TargetUser=Administrator SourceIP=192.168.1.100\n[ALERT] Correlated 84 failed logons followed by successful Type-3 network login from external IP.`
        };
      } else if (lower.includes('mitigate') || lower.includes('iptables')) {
        res = {
          type: 'success',
          text: `[✓] FIREWALL ENFORCED: Ingress IP 192.168.1.100 dropped.\n[✓] Active Directory password reset ticket dispatched for user: Administrator.\n[✓] Lab objective 3 of 3 completed! 100 XP awarded.`
        };
      } else if (lower.includes('nmap')) {
        res = {
          type: 'output',
          text: `PORT     STATE SERVICE       VERSION\n80/tcp   open  http          Apache httpd 2.4.49\n445/tcp  open  microsoft-ds  Windows Server 2022\n8080/tcp open  http-proxy    Jenkins CI 2.319`
        };
      } else {
        res = {
          type: 'output',
          text: `Command executed: ${cmd}. Sandbox hypervisor state: ACTIVE.\nTry: 'nmap scan', 'exploit check', 'splunk query', or 'mitigate'.`
        };
      }

      setTerminalHistory(prev => [...prev, res]);
      setIsRunning(false);
    }, 400);
  };

  const handleCopyIP = () => {
    navigator.clipboard?.writeText('10.10.14.8');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-[#090D16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow + Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* Subtle Authentic Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white tracking-wide uppercase text-[11px] font-mono">
              Cybersecurity Workforce Development
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">1,250+ Hands-On Cloud Labs</span>
          </div>

          {/* Clean, High-Conversion Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Build Cybersecurity Skills That <br className="hidden sm:inline" />
            <span className="text-emerald-400">
              Actually Matter in the Real World.
            </span>
          </h1>

          {/* High-credibility Sub-copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you are breaking into cybersecurity or upskilling your enterprise SOC, Cybrary delivers browser-based virtual labs, role-aligned career pathways, and certification prep designed by industry practitioners.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button 
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start 7-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href="#enterprise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-150"
            >
              <span>Explore Cybrary for Teams</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Micro Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% browser-based sandbox
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Aligned to NIST NICE & MITRE ATT&CK®
            </span>
          </div>

        </div>

        {/* Photorealistic Cybrary Virtual Lab Workspace Interface */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
            
            {/* Top Workspace Header Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-800"></div>
                <div className="flex items-center space-x-2 font-mono">
                  <span className="text-white font-bold">LAB #842:</span>
                  <span className="text-slate-300">Incident Triage & Web Shell Remediation</span>
                </div>
              </div>

              {/* Status and Action Buttons */}
              <div className="flex items-center space-x-3 font-mono text-[11px]">
                <div className="hidden sm:flex items-center space-x-1.5 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-300">Timer: 00:46:18</span>
                </div>
                
                <button 
                  onClick={handleCopyIP}
                  className="flex items-center space-x-1 bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded border border-slate-800 text-slate-300 transition-colors"
                  title="Copy target IP"
                >
                  <Copy className="w-3 h-3 text-emerald-400" />
                  <span>{copied ? 'Copied 10.10.14.8' : 'IP: 10.10.14.8'}</span>
                </button>

                <div className="flex items-center space-x-1 text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>VM ONLINE</span>
                </div>
              </div>

            </div>

            {/* Workspace Split View: Lab Guide on Left, Interactive Terminal on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Left Column: Realistic Guided Lab Tasks Checklist */}
              <div className="md:col-span-5 bg-slate-900/90 p-5 space-y-4 text-xs font-sans">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      Interactive Lab Guide
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">Apache Path Traversal (CVE-2021-41773)</h4>
                  </div>
                  <span className="text-[11px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    2/3 Done
                  </span>
                </div>

                {/* Tasks List */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-200">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Task 1: Recon & Port Fingerprint
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Nmap scan identified Apache 2.4.49 on port 80 and open SMB port 445.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-200">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Task 2: Validate Path Traversal
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Target vulnerable to encoded dot-dot-slash payload in <code className="text-slate-300 font-mono bg-slate-900 px-1 py-0.5 rounded">/icons/.%2e/</code>.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span className="flex items-center gap-1.5 text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Task 3: Apply Firewall Isolation
                      </span>
                      <span className="text-[10px] font-mono text-emerald-300">IN PROGRESS</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Block attacker IP <code className="text-emerald-300 font-mono">192.168.1.100</code> using iptables or enforce WAF rule #41773.
                    </p>
                    <button
                      onClick={() => handleCommand('sudo iptables -A INPUT -s 192.168.1.100 -j DROP && echo "[✓] Rule Active"')}
                      className="mt-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1"
                    >
                      Run mitigation command →
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Host: Ubuntu 22.04 LTS</span>
                  <span>RAM: 4 GB Allocated</span>
                </div>
              </div>

              {/* Right Column: Authentic Kali Linux / SOC Terminal Console */}
              <div className="md:col-span-7 bg-[#070B14] p-5 font-mono text-xs flex flex-col justify-between min-h-[340px]">
                
                {/* Console Log Area */}
                <div className="space-y-3 overflow-y-auto max-h-64 pr-2">
                  <div className="text-slate-500 text-[11px]">
                    Cybrary Cloud Lab Environment v4.12 • Session ID: #CYB-7192 • US-East
                  </div>

                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      {item.type === 'cmd' && (
                        <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                          <span className="text-slate-500">{item.prompt}</span>
                          <span>{item.text}</span>
                        </div>
                      )}
                      {item.type === 'output' && (
                        <pre className="text-slate-300 whitespace-pre-wrap text-[11px] leading-relaxed bg-slate-900/50 p-2.5 rounded border border-slate-800/50">
                          {item.text}
                        </pre>
                      )}
                      {item.type === 'vuln' && (
                        <div className="text-amber-400 bg-amber-950/20 p-2 rounded border border-amber-900/40 text-[11px]">
                          {item.text}
                        </div>
                      )}
                      {item.type === 'success' && (
                        <div className="text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-900/50 text-[11px]">
                          {item.text}
                        </div>
                      )}
                    </div>
                  ))}

                  {isRunning && (
                    <div className="text-slate-400 flex items-center gap-2 text-[11px]">
                      <span className="animate-spin text-emerald-400">●</span> Executing command against target hypervisor...
                    </div>
                  )}
                </div>

                {/* Bottom Interactive Command Controls */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400 font-sans">Quick scripts:</span>
                    {sampleCommands.map((sample, i) => (
                      <button
                        key={i}
                        onClick={() => handleCommand(sample.cmd)}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      >
                        {sample.label}
                      </button>
                    ))}
                  </div>

                  {/* Manual Command Form */}
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleCommand(userInput); }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-slate-500 hidden sm:inline">kali@cybrary:~$</span>
                    <input 
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Type a cyber command (e.g. nmap, exploit check, splunk query, mitigate)..."
                      className="flex-1 bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded px-3 py-1.5 text-white text-xs outline-none transition-colors"
                    />
                    <button 
                      type="submit"
                      className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded text-xs transition-colors"
                    >
                      Run
                    </button>
                  </form>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Clean, Realistic Metrics Row */}
        <div className="mt-14 pt-8 border-t border-slate-800/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
