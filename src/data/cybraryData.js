export const COMPANY_LOGOS = [
  { name: "Google", domain: "google.com", category: "Tech Leader" },
  { name: "Microsoft", domain: "microsoft.com", category: "Cloud & Cyber" },
  { name: "Amazon AWS", domain: "aws.amazon.com", category: "Cloud Infrastructure" },
  { name: "Cisco", domain: "cisco.com", category: "Networking & Security" },
  { name: "Palo Alto Networks", domain: "paloaltonetworks.com", category: "Enterprise Defense" },
  { name: "Raytheon", domain: "rtx.com", category: "Defense Contractor" },
  { name: "Booz Allen Hamilton", domain: "boozallen.com", category: "Gov & Defense" },
  { name: "CrowdStrike", domain: "crowdstrike.com", category: "EDR & Intelligence" },
  { name: "Lockheed Martin", domain: "lockheedmartin.com", category: "Aerospace & Defense" },
  { name: "Department of Defense", domain: "defense.gov", category: "Federal Agency" }
];

export const HERO_STATS = [
  { value: "3.5M+", label: "Cyber Professionals Trained", highlight: "Global Community" },
  { value: "96%", label: "First-Time Exam Pass Rate", highlight: "Industry Leading" },
  { value: "1,200+", label: "Virtual Hands-On Labs", highlight: "Real Environments" },
  { value: "500+", label: "Enterprise & Gov Teams", highlight: "Fortune 500 Trusted" }
];

export const VALUE_PILLARS = [
  {
    id: "threat-informed",
    tag: "MITRE ATT&CK® Aligned",
    title: "Threat-Informed Training",
    description: "Train against actual adversary tactics, techniques, and procedures (TTPs). Our curriculum is updated continuously as new zero-days and CVEs emerge.",
    icon: "ShieldAlert",
    stats: "450+ CVE Labs",
    gradient: "from-emerald-500/20 to-teal-500/5",
    borderAccent: "border-emerald-500/30"
  },
  {
    id: "virtual-labs",
    tag: "Browser-Based Sandbox",
    title: "Hands-On Virtual Labs",
    description: "Spin up isolated Kali Linux, Ubuntu Server, Splunk, and Wireshark instances in seconds. Break, defend, and investigate with zero risk to local machines.",
    icon: "Terminal",
    stats: "Instant 1-Click Launch",
    gradient: "from-cyan-500/20 to-blue-500/5",
    borderAccent: "border-cyan-500/30"
  },
  {
    id: "career-paths",
    tag: "NICE Framework Mapped",
    title: "Guided Career Pathways",
    description: "Follow curated, step-by-step role blueprints from entry-level SOC Analyst Tier 1 to Offensive Security Engineer and Chief Information Security Officer.",
    icon: "Compass",
    stats: "18 Structured Roles",
    gradient: "from-purple-500/20 to-indigo-500/5",
    borderAccent: "border-purple-500/30"
  },
  {
    id: "enterprise-readiness",
    tag: "Workforce Intelligence",
    title: "Team Skill Matrix & Metrics",
    description: "Assess security postures with verifiable skill benchmarks. Identify blindspots, track remediation velocity, and prove compliance with verifiable scorecards.",
    icon: "Activity",
    stats: "Real-time Telemetry",
    gradient: "from-amber-500/20 to-orange-500/5",
    borderAccent: "border-amber-500/30"
  }
];

export const COURSE_CATEGORIES = [
  { id: "all", label: "All Curriculums" },
  { id: "soc", label: "SOC & Defense" },
  { id: "offensive", label: "Ethical Hacking & Pen Testing" },
  { id: "certifications", label: "Certifications Prep" },
  { id: "cloud", label: "Cloud & DevSecOps" },
  { id: "incident", label: "Incident Response & DFIR" }
];

export const COURSES_DATA = [
  {
    id: "soc-101",
    category: "soc",
    title: "SOC Analyst Level 1: Incident Triage & SIEM Analysis",
    description: "Master alert ingestion, log correlation, packet analysis with Wireshark, and event investigation in real Splunk and ELK instances.",
    instructor: "David Miller, CISSP, Former NSA",
    level: "Intermediate",
    duration: "24 Hours",
    rating: 4.9,
    reviewsCount: 1420,
    labsCount: 18,
    cpeCredits: 24,
    badge: "Most Popular",
    mitreTactics: ["Initial Access", "Execution", "Persistence"],
    tools: ["Splunk", "Wireshark", "Sysmon", "Suricata"],
    xp: 2400
  },
  {
    id: "pentest-pro",
    category: "offensive",
    title: "Advanced Web Application Penetration Testing & API Hacking",
    description: "Exploit OWASP Top 10 vulnerabilities, bypass modern WAFs, execute SSTI, SQLi, SSRF, and weaponize GraphQL and REST endpoints.",
    instructor: "Sarah 'ZeroDay' Chen, OSCP, CREST",
    level: "Advanced",
    duration: "32 Hours",
    rating: 4.95,
    reviewsCount: 980,
    labsCount: 26,
    cpeCredits: 32,
    badge: "Hands-on Heavy",
    mitreTactics: ["Exploitation", "Credential Access", "Discovery"],
    tools: ["Burp Suite Pro", "OWASP ZAP", "Postman", "Sqlmap"],
    xp: 3200
  },
  {
    id: "comptia-secplus",
    category: "certifications",
    title: "CompTIA Security+ (SY0-701) Comprehensive Certification Prep",
    description: "The complete blueprint to pass SY0-701 on your first attempt. Covers enterprise security concepts, cryptography, architecture, and incident response.",
    instructor: "Marcus Vance, CompTIA Security Fellow",
    level: "Beginner / Intermediate",
    duration: "40 Hours",
    rating: 4.88,
    reviewsCount: 4210,
    labsCount: 30,
    cpeCredits: 40,
    badge: "Official Exam Prep",
    mitreTactics: ["Defense Evasion", "Command & Control"],
    tools: ["Nmap", "Wireshark", "OpenSSL", "Metasploit"],
    xp: 4000
  },
  {
    id: "cissp-accelerator",
    category: "certifications",
    title: "CISSP (Certified Information Systems Security Professional) Masterclass",
    description: "Deep dive into all 8 (ISC)² domains with scenario-based practice questions, risk assessment frameworks, and enterprise leadership governance.",
    instructor: "Dr. Elena Rostova, CISM, CISSP",
    level: "Advanced",
    duration: "52 Hours",
    rating: 4.92,
    reviewsCount: 2310,
    labsCount: 15,
    cpeCredits: 52,
    badge: "High Pass Guarantee",
    mitreTactics: ["Impact", "Exfiltration"],
    tools: ["NIST 800-53", "ISO 27001", "ThreatModeler"],
    xp: 5200
  },
  {
    id: "cloud-aws-sec",
    category: "cloud",
    title: "AWS Cloud Security & IAM Privilege Escalation Defense",
    description: "Secure multi-account AWS environments, audit IAM permissions, detect suspicious CloudTrail events, and automate container security with Falco.",
    instructor: "Tariq Al-Mansoor, AWS Security Hero",
    level: "Intermediate",
    duration: "20 Hours",
    rating: 4.86,
    reviewsCount: 870,
    labsCount: 14,
    cpeCredits: 20,
    badge: "Cloud Native",
    mitreTactics: ["Privilege Escalation", "Collection"],
    tools: ["AWS IAM", "CloudTrail", "Pacu", "Prowler", "Falco"],
    xp: 2000
  },
  {
    id: "dfir-ransomware",
    category: "incident",
    title: "Ransomware Response & Memory Forensics: The BlackCat Campaign",
    description: "Live investigation of real-world ransomware breaches. Extract volatile memory using Volatility 3, analyze registry artifacts, and rebuild attack chains.",
    instructor: "Agent James Thorne, Ex-FBI Cyber Division",
    level: "Advanced",
    duration: "28 Hours",
    rating: 4.97,
    reviewsCount: 650,
    labsCount: 22,
    cpeCredits: 28,
    badge: "Live Threat Lab",
    mitreTactics: ["Lateral Movement", "Impact", "Execution"],
    tools: ["Volatility 3", "FTK Imager", "YARA", "Autopsy"],
    xp: 2800
  }
];

export const CAREER_PATHS = [
  {
    id: "soc-analyst",
    role: "SOC Analyst",
    avgSalary: "$92,000 / yr",
    jobGrowth: "+35% (High Demand)",
    estimatedTime: "3-5 Months",
    summary: "Monitor, detect, analyze, and respond to cyber security incidents in high-tempo security operations centers.",
    steps: [
      { step: "01", title: "Cyber Foundations", desc: "Networking protocols (TCP/IP, DNS, TLS), Linux & Windows internals, basic scripting." },
      { step: "02", title: "Threat Detection & SIEM", desc: "Splunk search queries, ELK Stack, Suricata IDS alerts, and endpoint detection." },
      { step: "03", title: "Triage & Incident Response", desc: "Phishing analysis, malware detonation in sandboxes, chain of custody." },
      { step: "04", title: "Certification", desc: "CompTIA CySA+ and certified Cybrary SOC Analyst Assessment." }
    ]
  },
  {
    id: "pen-tester",
    role: "Penetration Tester / Red Teamer",
    avgSalary: "$124,000 / yr",
    jobGrowth: "+32% (Rapid Expansion)",
    estimatedTime: "5-7 Months",
    summary: "Simulate real-world attacks to find weaknesses before adversaries do. Break networks, web apps, and active directories.",
    steps: [
      { step: "01", title: "Recon & Fingerprinting", desc: "Passive/Active OSINT, Shodan, Nmap port scanning, sub-domain discovery." },
      { step: "02", title: "Exploit Development & Web", desc: "Buffer overflows, Metasploit, Burp Suite automation, SQLi & XSS chains." },
      { step: "03", title: "Active Directory Attacks", desc: "Kerberoasting, Pass-the-Hash, BloodHound graph analysis, lateral movement." },
      { step: "04", title: "Reporting & OSCP Prep", desc: "Executive findings report, defense remediation plans, hands-on exam prep." }
    ]
  },
  {
    id: "cloud-architect",
    role: "Cloud Security Architect",
    avgSalary: "$152,000 / yr",
    jobGrowth: "+41% (Critical Need)",
    estimatedTime: "6-8 Months",
    summary: "Design resilient cloud foundations across AWS, Azure, and GCP while implementing zero trust and automated CI/CD guardrails.",
    steps: [
      { step: "01", title: "Cloud Fundamentals & IAM", desc: "Cloud identity, least-privilege policies, security groups, VPC peering." },
      { step: "02", title: "DevSecOps & Containers", desc: "Kubernetes security, Docker bench, CI/CD pipeline scanning with Snyk/Trivy." },
      { step: "03", title: "Cloud Incident Response", desc: "CloudTrail analysis, GuardDuty alerts, automated Lambda remediation." },
      { step: "04", title: "Architecture Certification", desc: "AWS Certified Security Specialty & CCSP accreditation." }
    ]
  }
];

export const CERTIFICATIONS = [
  { name: "CompTIA Security+", code: "SY0-701", org: "CompTIA", passRate: "97%", labs: 35 },
  { name: "CISSP", code: "Certified Info Systems", org: "(ISC)²", passRate: "93%", labs: 28 },
  { name: "Certified Ethical Hacker", code: "CEH v12", org: "EC-Council", passRate: "95%", labs: 42 },
  { name: "CompTIA CySA+", code: "CS0-003", org: "CompTIA", passRate: "96%", labs: 30 },
  { name: "CISM", code: "Information Security Manager", org: "ISACA", passRate: "94%", labs: 20 },
  { name: "AWS Security Specialty", code: "SCS-C02", org: "Amazon Web Services", passRate: "95%", labs: 25 }
];

export const TESTIMONIALS = [
  {
    name: "Alexandria Rivera",
    role: "Lead Incident Responder",
    company: "Palo Alto Networks",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "The hands-on labs on Cybrary were the exact catalyst that took me from tier-1 helpdesk to lead incident responder in under 18 months. The MITRE ATT&CK integration gives you realistic adversary context you cannot get from textbooks.",
    certAchieved: "CompTIA CySA+ & CEH"
  },
  {
    name: "Darnell Washington",
    role: "Senior Penetration Tester",
    company: "Booz Allen Hamilton",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Our red team uses Cybrary's CVE challenge series every single Friday. It keeps our skills razor-sharp against novel lateral movement tactics and Kerberos exploits.",
    certAchieved: "OSCP & CISSP"
  },
  {
    name: "Kavita Patel",
    role: "VP of Cyber Defense",
    company: "FinTech Global",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "Upskilling 120 SOC engineers across 4 time zones used to be a logistics nightmare. With Cybrary Enterprise, we saw a 42% reduction in Mean Time To Remediate (MTTR) within 90 days.",
    certAchieved: "Enterprise Deployment"
  }
];

export const PRICING_PLANS = [
  {
    id: "free",
    name: "Community",
    price: "$0",
    period: "forever free",
    desc: "Essential introduction to cybersecurity fundamentals for beginners exploring the field.",
    popular: false,
    cta: "Sign Up Free",
    features: [
      "Access to 50+ Intro Courses",
      "Limited Virtual Lab Sandbox (5 hours/mo)",
      "Cybrary Community Forum & Discord",
      "Basic Skill Assessments",
      "Standard Definition Video Streams"
    ]
  },
  {
    id: "pro",
    name: "Insider Pro",
    price: "$39",
    period: "per month, billed annually ($299/yr)",
    badge: "Most Popular",
    desc: "The complete tactical cyber warfare & certification prep suite for ambitious practitioners.",
    popular: true,
    cta: "Start 7-Day Free Trial",
    features: [
      "Unlimited Access to 1,200+ Hands-On Labs",
      "Full Exam Prep for Security+, CISSP, CEH, CySA+",
      "CVE-Based Threat Emulation & MITRE Labs",
      "Browser Kali Linux & Splunk Sandboxes",
      "Downloadable Course Materials & Transcripts",
      "Verifiable Digital Badges & CPE Credits",
      "Priority 1-on-1 Mentor Guidance"
    ]
  },
  {
    id: "teams",
    name: "Cybrary for Teams",
    price: "Custom",
    period: "tailored for 5+ seats",
    desc: "Measurable cyber readiness, threat-informed team exercises, and workforce intelligence.",
    popular: false,
    cta: "Request Team Demo",
    features: [
      "Everything in Insider Pro for All Members",
      "Custom Curated Organizational Learning Paths",
      "Real-Time Cyber Readiness & Skill Matrix",
      "LMS & SSO Integration (Okta, Azure AD)",
      "Dedicated Enterprise Success Manager",
      "Team Threat Emulation Range Days",
      "Executive Board-Ready Compliance Reports"
    ]
  }
];

export const FAQS = [
  {
    q: "How do Cybrary's virtual labs work without installing software?",
    a: "All Cybrary hands-on labs run in secure, isolated cloud sandboxes accessible directly through your standard web browser (Chrome, Firefox, Safari, Edge). Within seconds, you get direct GUI or terminal access to Kali Linux, Splunk, Windows Server, Metasploitable, and cloud environments with zero local setup or resource strain."
  },
  {
    q: "Are Cybrary certificates and CPE credits accredited for renewals?",
    a: "Yes! Cybrary courses qualify for Continuing Professional Education (CPE) credits and Continuing Education Units (CEUs) recognized by major bodies including CompTIA, (ISC)², ISACA, and SANS/GIAC. You will receive verifiable digital certificates upon course completion."
  },
  {
    q: "How does Cybrary align with the MITRE ATT&CK® framework?",
    a: "Our tactical labs are mapped directly to specific MITRE ATT&CK techniques, tactics, and procedures (TTPs). As new CVEs and threat actor campaigns (e.g., APT29, BlackCat, Lazarus) emerge, our threat research team deploys corresponding adversary emulation labs within 72 hours."
  },
  {
    q: "Can I switch between monthly and annual billing or cancel anytime?",
    a: "Yes. You have total flexibility. You can cancel your subscription at any time with a single click from your account settings. If you cancel during your trial, your card will never be charged."
  },
  {
    q: "Does Cybrary offer team management and reporting for managers?",
    a: "Absolutely. Cybrary for Teams provides comprehensive administrator dashboards showing seat utilization, lab completion rates, skill proficiency matrices, and exportable compliance reports for SOC 2, ISO 27001, and DoD 8140/8570 compliance."
  }
];

