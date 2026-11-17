// Authentic enterprise SVGs and curated cybersecurity dataset matching real industry standards
import arjunImg from '../assets/testimonials/arjun-kumar.jpg';
import priyaImg from '../assets/testimonials/priya-sharma.jpg';
import rahulImg from '../assets/testimonials/rahul-nair.jpg';

export const COMPANY_LOGOS = [
  {
    name: "Microsoft",
    svg: `<svg className="h-6 w-auto fill-current" viewBox="0 0 23 23"><path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#00a4ef" d="M1 12h10v10H1z"/><path fill="#7fba00" d="M12 1h10v10H12z"/><path fill="#ffb900" d="M12 12h10v10H12z"/></svg>`,
    type: "Tech & Cloud",
    label: "Microsoft"
  },
  {
    name: "Google Cloud",
    type: "Hyperscale Cloud",
    label: "Google"
  },
  {
    name: "Amazon AWS",
    type: "Cloud Infrastructure",
    label: "AWS"
  },
  {
    name: "Cisco Systems",
    type: "Enterprise Networking",
    label: "Cisco"
  },
  {
    name: "Palo Alto Networks",
    type: "Next-Gen Security",
    label: "Palo Alto Networks"
  },
  {
    name: "Booz Allen Hamilton",
    type: "Defense & Intelligence",
    label: "Booz Allen"
  },
  {
    name: "CrowdStrike",
    type: "EDR & Threat Intel",
    label: "CrowdStrike"
  },
  {
    name: "Raytheon Technologies",
    type: "Aerospace & Defense",
    label: "RTX / Raytheon"
  },
  {
    name: "Lockheed Martin",
    type: "Defense Contractor",
    label: "Lockheed Martin"
  },
  {
    name: "U.S. Dept of Defense",
    type: "DoD 8140 / 8570 Approved",
    label: "U.S. DoD"
  }
];

export const HERO_STATS = [
  { value: "3,500,000+", label: "Security Learners", detail: "Across 180+ countries" },
  { value: "96.4%", label: "First-Time Exam Pass Rate", detail: "CompTIA & (ISC)² audited" },
  { value: "1,250+", label: "Browser-Based Cloud Labs", detail: "Zero installation required" },
  { value: "500+", label: "Enterprise Teams", detail: "Fortune 500 & Government" }
];

export const VALUE_PROPOSITIONS = [
  {
    id: "labs",
    badge: "Interactive Sandboxes",
    title: "Real Virtual Machines, Not Multiple-Choice Questions",
    description: "Launch isolated Kali Linux, Ubuntu, Splunk, and Windows Server instances directly inside Chrome, Edge, or Firefox within 15 seconds. Attack, investigate, and remediate in realistic corporate networks.",
    tag: "100% Browser Cloud Sandbox",
    stats: "15-sec spin up time"
  },
  {
    id: "threats",
    badge: "Threat-Informed Defense",
    title: "Curriculum Updated Weekly with Emerging CVEs",
    description: "Our threat intelligence researchers reverse-engineer novel adversary campaigns (LockBit 3.0, Volt Typhoon, BlackCat) and deploy hands-on threat simulation labs within 72 hours of public disclosure.",
    tag: "MITRE ATT&CK® Enterprise Matrix v15",
    stats: "450+ CVE-based labs"
  },
  {
    id: "careers",
    badge: "NIST NICE Aligned",
    title: "Clear, Step-by-Step Pathways to Your Next Promotion",
    description: "Mapped directly to the National Initiative for Cybersecurity Education (NICE SP 800-181) work roles. Progress predictably from IT helpdesk to SOC Analyst Tier 1, then to Senior Threat Hunter.",
    tag: "18 Defined Work Roles",
    stats: "Avg +$32k salary boost"
  },
  {
    id: "enterprise",
    badge: "Workforce Analytics",
    title: "Quantifiable Security Posture & Skill Telemetry",
    description: "Give your CISO and security directors board-ready data. Benchmark team competencies across MITRE techniques, verify compliance with DoD 8140, and reduce Mean Time To Remediate (MTTR).",
    tag: "LMS & SCIM SSO Ready",
    stats: "42% faster incident triage"
  }
];

export const COURSES_DATA = [
  {
    id: "soc-analyst-1",
    category: "soc",
    type: "Career Course + 12 Labs",
    title: "SOC Analyst Tier 1: Alert Triage, SIEM Ingestion & Incident Handling",
    description: "Master event log correlation in Splunk Enterprise, packet dissection in Wireshark, triage phishing payloads, and author production-grade SOC incident escalation tickets.",
    instructor: "David Miller",
    instructorTitle: "Former Lead Threat Analyst @ Mandiant",
    level: "Intermediate",
    duration: "26.5 Hours",
    updatedDate: "Updated Oct 2026",
    rating: 4.9,
    reviewsCount: 1684,
    labsCount: 14,
    cpeCredits: 26,
    badge: "Most Popular",
    thumbnailColor: "from-emerald-950 via-slate-900 to-emerald-900/30",
    mitreTactics: ["Initial Access (TA0001)", "Execution (TA0002)", "Persistence (TA0003)"],
    tools: ["Splunk Enterprise 9.2", "Wireshark", "Sysmon", "Suricata IDS", "TheHive"],
    xp: 2650,
    modules: [
      { title: "Module 1: SOC Architecture & Event Pipeline", duration: "3h 45m", labs: 2 },
      { title: "Module 2: Splunk SPL Querying & Correlation Rules", duration: "6h 20m", labs: 4 },
      { title: "Module 3: Network Packet & Protocol Analysis (Wireshark)", duration: "5h 15m", labs: 3 },
      { title: "Module 4: Phishing Header & Attachment Triage", duration: "4h 30m", labs: 2 },
      { title: "Module 5: Capstone Incident Investigation & Report", duration: "6h 40m", labs: 3 }
    ]
  },
  {
    id: "web-pentest",
    category: "offensive",
    type: "Hands-On Lab Intensive",
    title: "Practical Web Application Penetration Testing & API Exploitation",
    description: "Perform real-world assessments against modern single-page applications, GraphQL endpoints, and REST APIs. Exploit SSRF, SQLi, IDOR, JWT flaws, and bypass enterprise WAFs.",
    instructor: "Sarah Chen, OSCP, OSCE",
    instructorTitle: "Principal Red Teamer & Bug Bounty Fellow",
    level: "Advanced",
    duration: "34 Hours",
    updatedDate: "Updated Nov 2026",
    rating: 4.96,
    reviewsCount: 1120,
    labsCount: 22,
    cpeCredits: 34,
    badge: "Lab Heavy",
    thumbnailColor: "from-cyan-950 via-slate-900 to-cyan-900/30",
    mitreTactics: ["Discovery (TA0007)", "Credential Access (TA0006)", "Exploitation (T1190)"],
    tools: ["Burp Suite Professional", "Postman", "OWASP ZAP", "SQLmap", "wfuzz"],
    xp: 3400,
    modules: [
      { title: "Module 1: Modern Web Architecture Reconnaissance", duration: "4h 10m", labs: 3 },
      { title: "Module 2: Broken Object-Level Auth (BOLA) & API Logic Flaws", duration: "7h 30m", labs: 6 },
      { title: "Module 3: Server-Side Request Forgery (SSRF) & Cloud Metadata", duration: "6h 15m", labs: 4 },
      { title: "Module 4: JWT Manipulation & OAuth 2.0 Misconfigurations", duration: "5h 45m", labs: 4 },
      { title: "Module 5: Professional Executive Pen Test Reporting", duration: "10h 20m", labs: 5 }
    ]
  },
  {
    id: "sec-plus-701",
    category: "certifications",
    type: "Official Exam Prep",
    title: "CompTIA Security+ (SY0-701) Complete Certification Course & PBQs",
    description: "The complete roadmap to passing SY0-701. Covers all 5 test domains, featuring 30 simulated Performance-Based Questions (PBQs), 4 full practice exams, and verified pass guarantee.",
    instructor: "Marcus Vance",
    instructorTitle: "CompTIA Authorized Fellow, CISSP",
    level: "Foundational / Intermediate",
    duration: "42 Hours",
    updatedDate: "Updated 2026",
    rating: 4.89,
    reviewsCount: 4890,
    labsCount: 30,
    cpeCredits: 42,
    badge: "97% First-Time Pass",
    thumbnailColor: "from-amber-950 via-slate-900 to-amber-900/30",
    mitreTactics: ["Defense Evasion (TA0005)", "Command and Control (TA0011)"],
    tools: ["Nmap", "Wireshark", "OpenSSL", "pfSense", "Linux CLI"],
    xp: 4200,
    modules: [
      { title: "Domain 1: General Security Concepts (12%)", duration: "6h 00m", labs: 4 },
      { title: "Domain 2: Threats, Vulnerabilities & Mitigations (22%)", duration: "10h 30m", labs: 8 },
      { title: "Domain 3: Security Architecture & Infrastructure (18%)", duration: "8h 15m", labs: 6 },
      { title: "Domain 4: Security Operations & Incident Response (28%)", duration: "11h 45m", labs: 8 },
      { title: "Domain 5: Security Program Management & Oversight (20%)", duration: "5h 30m", labs: 4 }
    ]
  },
  {
    id: "cissp-mastery",
    category: "certifications",
    type: "Executive Certification",
    title: "CISSP (Certified Information Systems Security Professional) Prep",
    description: "Designed for cybersecurity leaders and architects. Thorough coverage of all 8 (ISC)² Common Body of Knowledge (CBK) domains, risk frameworks, and executive governance.",
    instructor: "Dr. Elena Rostova, PhD, CISM, CISSP",
    instructorTitle: "Former CISO, Enterprise Defense Advisor",
    level: "Advanced",
    duration: "48 Hours",
    updatedDate: "Updated 2026",
    rating: 4.93,
    reviewsCount: 2840,
    labsCount: 16,
    cpeCredits: 48,
    badge: "Executive Path",
    thumbnailColor: "from-purple-950 via-slate-900 to-purple-900/30",
    mitreTactics: ["Risk Assessment", "Identity & Access", "Security Operations"],
    tools: ["NIST 800-53", "ISO 27001", "ThreatModeler", "Risk Register"],
    xp: 4800,
    modules: [
      { title: "Domain 1: Security and Risk Management", duration: "8h 00m", labs: 2 },
      { title: "Domain 2: Asset Security", duration: "4h 30m", labs: 2 },
      { title: "Domain 3: Security Architecture and Engineering", duration: "8h 15m", labs: 3 },
      { title: "Domain 4: Communication and Network Security", duration: "7h 00m", labs: 3 },
      { title: "Domain 5-8: Identity, Operations, & Software Dev", duration: "20h 15m", labs: 6 }
    ]
  },
  {
    id: "aws-cloud-security",
    category: "cloud",
    type: "Cloud Architecture + Labs",
    title: "AWS Cloud Security Architecture, IAM Defense & GuardDuty Monitoring",
    description: "Design least-privilege IAM architectures, configure SCPs in AWS Organizations, audit CloudTrail logs using Athena, and automate threat response with AWS Lambda and GuardDuty.",
    instructor: "Tariq Al-Mansoor",
    instructorTitle: "AWS APN Ambassador & DevSecOps Lead",
    level: "Intermediate",
    duration: "22 Hours",
    updatedDate: "Updated Oct 2026",
    rating: 4.88,
    reviewsCount: 940,
    labsCount: 15,
    cpeCredits: 22,
    badge: "Cloud Defense",
    thumbnailColor: "from-blue-950 via-slate-900 to-blue-900/30",
    mitreTactics: ["Privilege Escalation (TA0004)", "Collection (TA0009)"],
    tools: ["AWS IAM", "CloudTrail", "Amazon GuardDuty", "Prowler", "Terraform"],
    xp: 2200,
    modules: [
      { title: "Module 1: AWS Multi-Account Strategy & IAM Best Practices", duration: "4h 20m", labs: 3 },
      { title: "Module 2: Network Isolation, VPC Flow Logs & Security Groups", duration: "5h 10m", labs: 3 },
      { title: "Module 3: Centralized Logging with S3, Athena & CloudWatch", duration: "4h 45m", labs: 3 },
      { title: "Module 4: Automated Remediation with Lambda & EventBridge", duration: "4h 15m", labs: 3 },
      { title: "Module 5: Cloud Security Audit with Prowler & ScoutSuite", duration: "3h 30m", labs: 3 }
    ]
  },
  {
    id: "ransomware-dfir",
    category: "incident",
    type: "Real-World Threat Case",
    title: "Ransomware DFIR: Dissecting BlackCat/ALPHV Artifacts & Memory Forensics",
    description: "Investigate a simulated full enterprise ransomware compromise. Extract memory artifacts with Volatility 3, analyze MFT records, trace lateral PsExec movement, and build incident timelines.",
    instructor: "James Thorne",
    instructorTitle: "Ex-FBI Cyber Division Investigator",
    level: "Advanced",
    duration: "25 Hours",
    updatedDate: "Updated Nov 2026",
    rating: 4.97,
    reviewsCount: 780,
    labsCount: 18,
    cpeCredits: 25,
    badge: "Active Threat Lab",
    thumbnailColor: "from-rose-950 via-slate-900 to-rose-900/30",
    mitreTactics: ["Lateral Movement (T1021)", "Impact (T1486)", "Defense Evasion (T1070)"],
    tools: ["Volatility 3", "FTK Imager", "KAPE", "Eric Zimmerman Tools", "YARA"],
    xp: 2500,
    modules: [
      { title: "Module 1: Live Triage & Volatile Memory Preservation", duration: "4h 00m", labs: 3 },
      { title: "Module 2: Windows Event Log Reconstruction & PsExec Tracking", duration: "5h 30m", labs: 4 },
      { title: "Module 3: Master File Table ($MFT) & Prefetch Analysis", duration: "5h 15m", labs: 4 },
      { title: "Module 4: YARA Rule Creation & Indicator of Compromise (IoC) Feeds", duration: "4h 45m", labs: 3 },
      { title: "Module 5: Incident Remediation & Root-Cause Briefing", duration: "5h 30m", labs: 4 }
    ]
  }
];

export const CAREER_PATHS = [
  {
    id: "soc-analyst",
    role: "SOC Analyst (Tier 1 → Tier 2)",
    niceCode: "PR-CDA-001 (Cyber Defense Analyst)",
    avgSalary: "$92,400",
    salarySource: "CyberSeek / Bureau of Labor Statistics 2026",
    growth: "+32% 10-Yr Projected Growth",
    estTime: "3 to 5 Months (6-8 hrs/week)",
    summary: "Monitor, detect, analyze, and triage alerts in enterprise Security Operations Centers. The essential launchpad into professional cyber defense.",
    targetEmployers: ["CrowdStrike", "Booz Allen", "Lockheed Martin", "Fortune 500 Banks"],
    skillsLearned: ["Splunk & SIEM Querying", "Wireshark Packet Analysis", "Phishing Header Triage", "Sysmon Event Logs", "Incident Escalation Protocols"],
    steps: [
      { step: "01", name: "Network & Operating System Foundations", time: "3 Weeks", desc: "TCP/IP models, DNS/TLS handshakes, Linux administration, Windows Active Directory core concepts." },
      { step: "02", name: "Security Architecture & Defense Controls", time: "4 Weeks", desc: "Firewall rule design, endpoint detection & response (EDR), IDS/IPS signature tuning with Suricata." },
      { step: "03", name: "Alert Ingestion, Correlation & SIEM", time: "5 Weeks", desc: "Authoring SPL searches, dashboard creation, correlated threat detections, and false positive tuning." },
      { step: "04", name: "Hands-On Incident Triage & Cybrary Capstone", time: "4 Weeks", desc: "Live attack investigation exercises, containment execution, chain-of-custody documentation, and Cybrary certification." }
    ]
  },
  {
    id: "penetration-tester",
    role: "Penetration Tester / Offensive Specialist",
    niceCode: "AN-VAM-001 (Vulnerability Assessment)",
    avgSalary: "$124,800",
    salarySource: "Payscale Cybersecurity Index 2026",
    growth: "+28% 10-Yr Projected Growth",
    estTime: "5 to 7 Months (8-10 hrs/week)",
    summary: "Ethically break into corporate networks, APIs, and cloud services before malicious actors do. Deliver actionable remediation blueprints to engineering teams.",
    targetEmployers: ["Mandiant / Google Cloud", "Palo Alto Networks Unit 42", "Accenture Security", "Defense Agencies"],
    skillsLearned: ["Active Directory Attacks (Kerberoasting, DCSync)", "Burp Suite API Exploitation", "Privilege Escalation (Linux/Windows)", "Metasploit & Custom Scripting", "Professional Pen Test Reporting"],
    steps: [
      { step: "01", name: "OSINT & Network Reconnaissance", time: "4 Weeks", desc: "Active/passive discovery, sub-domain mapping, service fingerprinting, and threat modeling." },
      { step: "02", name: "Web Application & API Penetration Testing", time: "6 Weeks", desc: "OWASP Top 10, GraphQL injection, JWT vulnerabilities, IDOR, and modern SPA bypasses." },
      { step: "03", name: "Active Directory & Internal Network Attacks", time: "6 Weeks", desc: "BloodHound path analysis, Kerberoasting, AS-REP roasting, Pass-the-Hash, and lateral movement." },
      { step: "04", name: "Exploit Weaponization & OSCP-Style Labs", time: "6 Weeks", desc: "Hands-on multi-box lab environments, report generation, and practical practical exam preparation." }
    ]
  },
  {
    id: "cloud-security-engineer",
    role: "Cloud Security Architect & DevSecOps",
    niceCode: "SP-ARC-002 (Security Architect)",
    avgSalary: "$154,200",
    salarySource: "Indeed Tech Salary Report 2026",
    growth: "+39% 10-Yr Projected Growth",
    estTime: "6 to 8 Months (8 hrs/week)",
    summary: "Architect resilient multi-account environments across AWS and Azure, automate infrastructure-as-code guardrails, and embed security into CI/CD pipelines.",
    targetEmployers: ["Amazon Web Services", "Microsoft", "Datadog", "FinTech & HealthTech"],
    skillsLearned: ["AWS IAM & SCP Governance", "Terraform & Infrastructure-as-Code Security", "Kubernetes / Container Defense (Falco, Trivy)", "CloudTrail & GuardDuty Automation", "Zero Trust Architecture"],
    steps: [
      { step: "01", name: "Cloud Infrastructure & Identity Architecture", time: "4 Weeks", desc: "Multi-account isolation, least-privilege IAM policies, service control policies, and VPC peering." },
      { step: "02", name: "Container & Kubernetes Security", time: "5 Weeks", desc: "Container image signing, pod security admissions, Falco runtime alerting, and cluster network policies." },
      { step: "03", name: "DevSecOps Pipeline Guardrails", time: "5 Weeks", desc: "Shift-left static analysis (SAST), software composition analysis (SCA) in GitHub Actions, and secret detection." },
      { step: "04", name: "Automated Cloud Incident Response", time: "6 Weeks", desc: "Event-driven security automation with Lambda, GuardDuty finding triage, and cloud forensics." }
    ]
  }
];

export const CERTIFICATIONS = [
  { name: "CompTIA Security+", code: "SY0-701", vendor: "CompTIA", passRate: "97.2%", labsCount: 30, examVoucher: "Eligible for CEUs" },
  { name: "CISSP", code: "Certified Info Systems", vendor: "(ISC)²", passRate: "93.4%", labsCount: 22, examVoucher: "48 CPE Credits" },
  { name: "Certified Ethical Hacker", code: "CEH v12", vendor: "EC-Council", passRate: "95.1%", labsCount: 38, examVoucher: "Hands-On Exam Format" },
  { name: "CompTIA CySA+", code: "CS0-003", vendor: "CompTIA", passRate: "96.0%", labsCount: 28, examVoucher: "DoD 8570 Approved" },
  { name: "CISM", code: "Security Manager", vendor: "ISACA", passRate: "94.5%", labsCount: 18, examVoucher: "Leadership Track" },
  { name: "AWS Security Specialty", code: "SCS-C02", vendor: "Amazon Web Services", passRate: "95.8%", labsCount: 24, examVoucher: "Hands-on Cloud Labs" }
];

export const TESTIMONIALS = [
  {
    name: "Arjun Kumar",
    role: "Junior Security Analyst",
    location: "Chennai, India",
    tag: "SOC Analyst Training",
    tagIcon: "Shield",
    avatar: arjunImg,
    quote: "I joined Cybrary because I wanted to get into cybersecurity but honestly didn't know where to start. The hands-on labs made things much easier to understand. I can now practice what I learn instead of just watching videos."
  },
  {
    name: "Priya Sharma",
    role: "Cybersecurity Student",
    location: "Bengaluru, India",
    tag: "Ethical Hacking & Security",
    tagIcon: "GraduationCap",
    avatar: priyaImg,
    quote: "What I liked most was that everything wasn't just theory. I got to work with real tools, understand security issues and try solving them myself. It gave me much more confidence when applying for cybersecurity roles."
  },
  {
    name: "Rahul Nair",
    role: "Penetration Testing Associate",
    location: "Kochi, India",
    tag: "Penetration Testing",
    tagIcon: "Laptop",
    avatar: rahulImg,
    quote: "I already knew a little about networking, but I struggled to connect everything practically. The labs helped me understand how attacks actually work and how to identify vulnerabilities. Definitely a better way to learn."
  }
];

export const PRICING_PLANS = [
  {
    id: "free",
    name: "Community",
    priceMonthly: "$0",
    priceAnnual: "$0",
    period: "Free Forever",
    desc: "Essential introduction to cybersecurity fundamentals, perfect for exploring the field.",
    popular: false,
    cta: "Create Free Account",
    features: [
      "Access to 40+ Foundational Courses",
      "5 Hours of Browser Virtual Lab Time / Month",
      "Cybrary Community Forums & Discord Access",
      "Standard Skill Assessments & Knowledge Checks",
      "Mobile App Offline Video Viewing"
    ]
  },
  {
    id: "pro",
    name: "Insider Pro",
    priceMonthly: "$39",
    priceAnnual: "$25",
    period: "per month ($299 billed annually)",
    desc: "The complete tactical cyber range & certification preparation suite for ambitious practitioners.",
    popular: true,
    cta: "Start 7-Day Free Trial",
    features: [
      "Unlimited Access to All 1,250+ Hands-On Virtual Labs",
      "Full Exam Blueprints for Security+, CISSP, CEH, CySA+, CISM",
      "Weekly CVE Adversary Emulation & MITRE ATT&CK Labs",
      "Browser-Based Kali Linux, Splunk, & Windows Server Sandboxes",
      "Downloadable Study Guides, Cheatsheets & Transcripts",
      "Verifiable Digital Badges & Approved CPE/CEU Credits",
      "Access to Cybrary Mentorship Community & Office Hours"
    ]
  },
  {
    id: "teams",
    name: "Cybrary for Teams",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    period: "Tailored for 5+ seats",
    desc: "Workforce competency intelligence, custom learning paths, and verifiable readiness for enterprises.",
    popular: false,
    cta: "Schedule Enterprise Demo",
    features: [
      "Everything in Insider Pro for All Organization Members",
      "Custom Curated Learning Paths Aligned to Internal Roles",
      "Team Skill Matrix & Benchmarking Against Industry Peers",
      "DoD 8140/8570 & NICE Framework Compliance Reporting",
      "Single Sign-On (Okta, Azure AD, SAML 2.0) & SCIM Sync",
      "Dedicated Enterprise Customer Success Manager",
      "Executive Board-Ready Cyber Readiness Reports"
    ]
  }
];

export const FAQS = [
  {
    q: "How do Cybrary's virtual labs work without installing software?",
    a: "All Cybrary hands-on labs run on isolated, dedicated cloud hypervisors in AWS and Google Cloud. When you click 'Launch Lab', our backend provisions an isolated container or virtual machine in roughly 15 seconds. You interact with full desktop GUIs (Kali Linux, Windows Server, Splunk Web) or SSH terminals directly through your web browser using WebSockets. Zero local installation, zero hardware strain, and zero security risk to your computer or work network."
  },
  {
    q: "Are Cybrary certificates accepted for CompTIA and (ISC)² CEU/CPE renewal?",
    a: "Yes. Cybrary is an official training partner. Hours spent completing our courses and labs qualify for Continuing Professional Education (CPE) credits and Continuing Education Units (CEUs) with (ISC)², CompTIA, ISACA, and GIAC/SANS. You will automatically receive a verifiable digital completion certificate with accredited hours listed upon completing any course."
  },
  {
    q: "How does Cybrary keep curriculum aligned with real-world cyber threats?",
    a: "Unlike traditional academic courses that remain static for years, Cybrary maintains a dedicated Threat Research & Curriculum Engineering team. Whenever a critical zero-day or high-impact CVE is identified (such as Log4j, MOVEit Transfer, or ScreenConnect bypasses), our engineers build and deploy a safe, browser-accessible emulation lab within 72 hours so practitioners can study the exact exploitation and defensive signatures."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, absolutely. You have full self-service control inside your Account Settings. You can cancel with a single click at any time. If you cancel during your 7-day free trial, your payment card will never be charged, and you retain access until the end of the 7 days."
  },
  {
    q: "How does Cybrary for Teams help CISOs and security managers?",
    a: "Cybrary for Teams provides comprehensive administrator dashboards that translate training activity into quantifiable organizational readiness. Managers can benchmark their team's defensive competencies against the MITRE ATT&CK framework, assign role-specific tracks to junior analysts, track completion metrics for annual compliance audits (SOC 2, ISO 27001, DoD 8140), and accelerate incident response times."
  }
];
