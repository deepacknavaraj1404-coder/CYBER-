import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Terminal, 
  ShieldCheck, 
  BookOpen, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Sparkles,
  Play
} from 'lucide-react';
import { HERO_STATS } from '../data/cybraryData';

const POPULAR_SEARCHES = [
  'Splunk',
  'Wireshark',
  'Nmap',
  'OWASP Top 10',
  'Metasploit',
  'Active Directory',
  'Docker Security'
];

export default function Hero({ onOpenAuth, onOpenLab }) {
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const coursesEl = document.getElementById('courses');
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    const coursesEl = document.getElementById('courses');
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* GeeksforGeeks-style Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-bold tracking-wide uppercase text-[11px] font-mono">
              CYBRARY DEFENSE ACADEMY
            </span>
            <span className="text-emerald-300">|</span>
            <span className="text-emerald-700 font-medium">1,250+ Hands-On Labs & Tutorials</span>
          </div>

          {/* Target Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Master Cybersecurity. <br className="hidden sm:inline" />
            <span className="text-emerald-600">Build Real-World Skills.</span>
          </h1>

          {/* Target Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Learn cybersecurity through structured tutorials, hands-on labs, practical projects and industry-aligned career pathways.
          </p>

          {/* GeeksforGeeks-style Prominent Learning Search Bar */}
          <div className="pt-2 max-w-2xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-sm">
              <div className="absolute left-4 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What do you want to learn today? (e.g. Splunk, Nmap, Active Directory...)"
                className="w-full pl-12 pr-32 py-3.5 text-sm bg-white border-2 border-slate-200 focus:border-emerald-600 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
              >
                Search
              </button>
            </form>

            {/* Popular Search Suggestions */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium mr-1 text-[11px]">Popular searches:</span>
              {POPULAR_SEARCHES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(item)}
                  className="px-2.5 py-0.5 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 text-slate-600 text-xs font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a 
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors"
            >
              <span>Explore Courses & Labs</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#practice-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-colors"
            >
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>Practice in Browser Labs</span>
            </a>

            <button 
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Free Trial</span>
            </button>
          </div>

          {/* Micro Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Browser-based VM labs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> NIST NICE & MITRE ATT&CK® aligned
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real CVE zero-day challenges
            </span>
          </div>

        </div>

        {/* Clean, Light-Themed Cloud Lab Workspace Preview */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Window Header Bar */}
            <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-300"></div>
                <div className="flex items-center space-x-2 font-mono text-slate-800 text-xs">
                  <span className="font-bold text-emerald-700">HANDS-ON LAB:</span>
                  <span className="text-slate-700 font-medium">Apache Path Traversal (CVE-2021-41773) Exploitation & Patching</span>
                </div>
              </div>

              {/* Status Pills */}
              <div className="flex items-center space-x-2.5 font-mono text-[11px]">
                <div className="hidden sm:flex items-center space-x-1.5 bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Timer: 00:46:18</span>
                </div>
                
                <button 
                  onClick={handleCopyIP}
                  className="flex items-center space-x-1 bg-white hover:bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-700 shadow-2xs transition-colors"
                  title="Copy target IP"
                >
                  <Copy className="w-3 h-3 text-emerald-600" />
                  <span>{copied ? 'Copied 10.10.14.8' : 'IP: 10.10.14.8'}</span>
                </button>

                <div className="flex items-center space-x-1 text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>VM ONLINE</span>
                </div>
              </div>

            </div>

            {/* Split View */}
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Left Column: Interactive Lab Guide */}
              <div className="md:col-span-5 bg-slate-50/70 p-4 space-y-3.5 text-xs font-sans">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                      Interactive Lab Guide
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-0.5">Objective: Verify Vulnerability & Enforce Patch</h4>
                  </div>
                  <span className="text-[11px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-semibold shadow-2xs">
                    2/3 Done
                  </span>
                </div>

                {/* Tasks List */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Task 1: Recon & Port Fingerprint
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-100">PASSED</span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Nmap scan identified Apache 2.4.49 on port 80 and open SMB port 445.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Task 2: Validate Path Traversal
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-100">PASSED</span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      Target vulnerable to encoded dot-dot-slash payload in <code className="text-slate-700 font-mono bg-slate-100 px-1 py-0.5 rounded">/icons/.%2e/</code>.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border-2 border-emerald-300 bg-emerald-50/20 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Task 3: Apply Firewall Mitigation Rule
                      </span>
                      <span className="text-[10px] font-mono text-amber-800 font-bold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">IN PROGRESS</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Execute iptables command or patch Apache configuration to block malicious traversal paths.
                    </p>
                  </div>
                </div>

                {/* Quick Hint Chips */}
                <div className="pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1.5">
                    Quick Commands:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sampleCommands.map((sc, i) => (
                      <button
                        key={i}
                        onClick={() => handleCommand(sc.cmd)}
                        className="text-[10px] font-mono bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-2 py-1 rounded transition-colors"
                      >
                        $ {sc.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Live Terminal */}
              <div className="md:col-span-7 bg-slate-950 p-4 font-mono text-xs flex flex-col justify-between h-[360px] overflow-hidden">
                <div className="overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                  <div className="text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                    Cybrary Cloud Hypervisor (Ubuntu 24.04 LTS / Kali v2026.3) — Session ID #CY-842
                  </div>
                  
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-0.5 leading-relaxed">
                      {item.type === 'cmd' && (
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <span className="text-emerald-500 font-bold">{item.prompt}</span>
                          <span className="text-slate-100">{item.text}</span>
                        </div>
                      )}
                      {item.type === 'output' && (
                        <pre className="text-slate-300 text-[11px] whitespace-pre-wrap font-mono pl-2 border-l border-slate-800">
                          {item.text}
                        </pre>
                      )}
                      {item.type === 'vuln' && (
                        <div className="text-amber-400 bg-amber-950/40 p-2 rounded border border-amber-800/60 text-[11px] font-semibold">
                          {item.text}
                        </div>
                      )}
                      {item.type === 'success' && (
                        <div className="text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-800/60 text-[11px] font-semibold">
                          {item.text}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isRunning && (
                    <div className="text-slate-400 text-xs flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Processing payload execution on hypervisor...</span>
                    </div>
                  )}
                </div>

                {/* Input Prompt */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(userInput);
                  }}
                  className="mt-3 pt-2 border-t border-slate-800 flex items-center space-x-2 text-slate-100"
                >
                  <span className="text-emerald-400 font-bold shrink-0">kali@cybrary:~$</span>
                  <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type 'nmap scan', 'exploit check', 'splunk query', or 'mitigate'..."
                    className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs font-mono"
                  />
                  <button 
                    type="submit" 
                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded"
                  >
                    Run
                  </button>
                </form>

              </div>

            </div>

          </div>
        </div>

        {/* Global Learning Platform Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-4 text-center shadow-2xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-emerald-700 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
