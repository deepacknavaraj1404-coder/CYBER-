import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Copy, 
  ChevronRight
} from 'lucide-react';
import { HERO_STATS } from '../data/cybraryData';

export default function Hero({ onOpenAuth }) {
  const [copied, setCopied] = useState(false);
  
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'cmd',
      prompt: 'kali@cybrary-sandbox:~$',
      text: 'nmap -sV -p 80,443,445,8080 10.10.14.8'
    },
    {
      type: 'output',
      text: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-17 05:30 UTC
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
          text: `2026-11-17 05:32:01 Host=corp-srv01 EventCode=4624 LogonType=3 TargetUser=Administrator SourceIP=192.168.1.100\n2026-11-17 05:31:58 Host=corp-srv01 EventCode=4625 LogonType=3 TargetUser=Administrator SourceIP=192.168.1.100\n[ALERT] Correlated 84 failed logons followed by successful Type-3 network login from external IP.`
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
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-bold tracking-wide uppercase text-[11px] font-mono">
              Cybersecurity Workforce Development
            </span>
            <span className="text-emerald-300">|</span>
            <span className="text-emerald-700 font-medium">1,250+ Hands-On Cloud Labs</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Build Cybersecurity Skills That <br className="hidden sm:inline" />
            <span className="text-emerald-600">
              Actually Matter in the Real World.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you are breaking into cybersecurity or upskilling your enterprise SOC, Cybrary delivers browser-based virtual labs, role-aligned career pathways, and certification prep designed by industry practitioners.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button 
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start 7-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href="#enterprise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-all duration-150"
            >
              <span>Explore Cybrary for Teams</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Micro Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-1 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% browser-based sandbox
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Aligned to NIST NICE & MITRE ATT&CK®
            </span>
          </div>

        </div>

        {/* Clean, Light-Themed Cloud Lab Workspace */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
            
            {/* Window Header Bar - Light Slate */}
            <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-300"></div>
                <div className="flex items-center space-x-2 font-mono text-slate-800 text-xs">
                  <span className="font-bold text-emerald-700">LAB #842:</span>
                  <span className="text-slate-700 font-medium">Incident Triage & Web Shell Remediation</span>
                </div>
              </div>

              {/* Status Pills */}
              <div className="flex items-center space-x-2.5 font-mono text-[11px]">
                <div className="hidden sm:flex items-center space-x-1.5 bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Timer: 00:46:18</span>
                </div>
                
                <button 
                  onClick={handleCopyIP}
                  className="flex items-center space-x-1 bg-white hover:bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 shadow-2xs transition-colors"
                  title="Copy target IP"
                >
                  <Copy className="w-3 h-3 text-emerald-600" />
                  <span>{copied ? 'Copied 10.10.14.8' : 'IP: 10.10.14.8'}</span>
                </button>

                <div className="flex items-center space-x-1 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>VM ONLINE</span>
                </div>
              </div>

            </div>

            {/* Split View */}
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Left Column: Interactive Lab Guide */}
              <div className="md:col-span-5 bg-slate-50/70 p-5 space-y-4 text-xs font-sans">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                      Interactive Lab Guide
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">Apache Path Traversal (CVE-2021-41773)</h4>
                  </div>
                  <span className="text-[11px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-semibold shadow-2xs">
                    2/3 Done
                  </span>
                </div>

                {/* Tasks List */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Task 1: Recon & Port Fingerprint
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">PASSED</span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Nmap scan identified Apache 2.4.49 on port 80 and open SMB port 445.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Task 2: Validate Path Traversal
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">PASSED</span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Target vulnerable to encoded dot-dot-slash payload in <code className="text-slate-700 font-mono bg-slate-100 px-1 py-0.5 rounded">/icons/.%2e/</code>.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span className="flex items-center gap-1.5 text-emerald-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        Task 3: Apply Firewall Isolation
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-emerald-200 font-bold">ACTIVE</span>
                    </div>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      Block attacker IP <code className="text-emerald-800 font-mono font-semibold">192.168.1.100</code> using iptables or enforce WAF rule #41773.
                    </p>
                    <button
                      onClick={() => handleCommand('sudo iptables -A INPUT -s 192.168.1.100 -j DROP && echo "[✓] Rule Active"')}
                      className="mt-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-850 underline flex items-center gap-1"
                    >
                      Run mitigation command in terminal →
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Host: Ubuntu 22.04 LTS</span>
                  <span>RAM: 4 GB Allocated</span>
                </div>
              </div>

              {/* Right Column: Clean Light macOS-style Terminal */}
              <div className="md:col-span-7 bg-white p-5 font-mono text-xs flex flex-col justify-between min-h-[340px]">
                
                {/* Console Output Area */}
                <div className="space-y-3 overflow-y-auto max-h-64 pr-2">
                  <div className="text-slate-400 text-[11px] flex items-center justify-between border-b border-slate-100 pb-1">
                    <span>Cybrary Cloud Lab Terminal • ID: #CYB-7192</span>
                    <span className="text-emerald-700 font-medium">● Connected (us-east)</span>
                  </div>

                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      {item.type === 'cmd' && (
                        <div className="text-emerald-700 font-semibold flex items-center gap-1.5">
                          <span className="text-slate-400 font-normal">{item.prompt}</span>
                          <span className="font-bold text-slate-900">{item.text}</span>
                        </div>
                      )}
                      {item.type === 'output' && (
                        <pre className="text-slate-700 whitespace-pre-wrap text-[11px] leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-200 font-mono">
                          {item.text}
                        </pre>
                      )}
                      {item.type === 'vuln' && (
                        <div className="text-amber-800 bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[11px] font-medium">
                          {item.text}
                        </div>
                      )}
                      {item.type === 'success' && (
                        <div className="text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-[11px] font-medium">
                          {item.text}
                        </div>
                      )}
                    </div>
                  ))}

                  {isRunning && (
                    <div className="text-slate-500 flex items-center gap-2 text-[11px]">
                      <span className="animate-spin text-emerald-600">●</span> Executing command against target hypervisor...
                    </div>
                  )}
                </div>

                {/* Bottom Controls */}
                <div className="mt-4 pt-3 border-t border-slate-200 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-slate-500 font-sans font-medium">Quick scripts:</span>
                    {sampleCommands.map((sample, i) => (
                      <button
                        key={i}
                        onClick={() => handleCommand(sample.cmd)}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors font-medium shadow-2xs"
                      >
                        {sample.label}
                      </button>
                    ))}
                  </div>

                  {/* Manual Input Form */}
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleCommand(userInput); }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-slate-400 font-mono hidden sm:inline text-xs">kali@cybrary:~$</span>
                    <input 
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Type a cyber command (nmap, exploit check, splunk query, mitigate)..."
                      className="flex-1 bg-slate-50 border border-slate-300 focus:border-emerald-500 rounded-lg px-3 py-1.5 text-slate-900 text-xs outline-none transition-colors"
                    />
                    <button 
                      type="submit"
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors shadow-2xs"
                    >
                      Run
                    </button>
                  </form>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Pleasant Metrics Row */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
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
