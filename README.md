# Cybrary Frontend Replica 🛡️

A pixel-perfect, high-performance cybersecurity workforce development platform frontend replica inspired by [Cybrary.it](https://www.cybrary.it/).

Built with **React + Vite**, styled with **Tailwind CSS**, and powered by **Lucide React** icons.

---

## ⚡ Key Highlights & Features

### 1. **Cybersecurity-Themed Navigation Bar & Threat Alert**
- Real-time **CVE-2024-21887 alert bar** with active live indicator.
- Distinctive neon green shield branding with `CYBRARY DEFENSE ACADEMY` logo.
- Interactive dropdown mega-menus for **Courses & Labs**, **Career Pathways**, and **Enterprise Solutions**.
- Quick command palette trigger (`Ctrl+K` / `Cmd+K`).
- Seamless **Log In** and **Start Free Trial** action buttons.
- Fully responsive mobile drawer.

### 2. **High-Impact Hero Section with Interactive Live Sandbox Terminal**
- Bold headline: *"Build Cybersecurity Skills That Actually Matter in the Real World."*
- High-contrast neon green text glow gradients (`#00E599` to `#00D2FF`).
- **Interactive Live Defensive SOC Sandbox Terminal Simulation**:
  - Run real cyber commands directly in the browser (`nmap -sV`, `mitre --query`, `splunk-search`, `cybrary-shield --apply-hardening-profile`).
  - Realistic color-coded console logs (Alerts, Exploitation traces, Remediation verification).
  - Mode switching between **Interactive Shell**, **Real-Time Telemetry Feed**, and **MITRE ATT&CK Matrix**.
- Social proof stats: **3.5M+ Professionals**, **96% Exam Pass Rate**, **1,200+ Virtual Labs**, **500+ Enterprise Teams**.

### 3. **Trusted Company Logos & Federal Agencies**
- Enterprise trust badges: Google, Microsoft, Amazon AWS, Cisco, Palo Alto Networks, Raytheon, Booz Allen Hamilton, CrowdStrike, Lockheed Martin, and Department of Defense.
- Compliance verifications: **SOC 2 Type II**, **DoD 8140/8570**, **NIST NICE Framework**, **ISO 27001**.

### 4. **Methodology & 4 Core Pillars**
- Threat-Informed Training (MITRE ATT&CK mapped, 450+ CVE labs).
- Browser-based Virtual Labs (Kali Linux, Splunk, Ubuntu).
- Guided Career Pathways (18 structured roles).
- Team Skill Readiness & Scorecards.

### 5. **Interactive Step-by-Step Lab Sandbox Walkthrough**
- Multi-scenario toggle: **SOC Triage (Apache Log4j)** vs. **Red Team (AD Kerberoasting)**.
- Step-by-step interactive commands with execution progress, terminal logs, and container hardware specs.

### 6. **Threat-Informed Course & Lab Catalog**
- Filter by category: *All, SOC & Defense, Ethical Hacking & Pen Testing, Certifications, Cloud Security, Incident Response*.
- Live real-time search filtering across course descriptions, tools, and MITRE tactics.
- Interactive course detail modal with syllabus, CPE credits, lab environment specs, and direct sandbox enrollment.

### 7. **Role-Aligned Career Pathways**
- Structured tracks: *SOC Analyst*, *Penetration Tester / Red Teamer*, *Cloud Security Architect*.
- Metrics: Average salary, industry market growth (+35%), estimated time to complete.
- 4-phase sequential milestones.

### 8. **Cybrary for Enterprise & Teams + Interactive ROI Calculator**
- Tailored for security engineering leaders and CISOs.
- **Interactive Team ROI Slider**: Adjust security team size (5 to 200+ engineers) to calculate annual cost savings, reclaimed engineering hours, and certification pass rates.

### 9. **Official Certification Pass Guarantee**
- CompTIA Security+ (SY0-701), CISSP, CEH v12, CompTIA CySA+, CISM, AWS Security.
- Performance-Based Question (PBQ) counts and pass protection guarantee.

### 10. **Practitioner Testimonials**
- Verified credentials and success quotes from Incident Responders, Red Teamers, and VPs of Cyber Defense.

### 11. **Transparent Value Pricing Plans**
- Monthly vs. Annual toggle with **Save 35%** discount badge.
- **Community Free ($0)**, **Insider Pro ($39/mo or $25/mo annual)**, and **Cybrary for Teams**.

### 12. **Interactive Modals & Search Palette**
- **AuthModal**: Tabbed Log In & Sign Up with demo account auto-fill (SOC Analyst / Red Team Lead) and password reveal.
- **CourseModal**: Detailed syllabus breakdown and virtual machine specifications.
- **SearchModal (`Ctrl+K`)**: Live search indexing across all labs, courses, and certifications.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Design Tokens & Palette

- **Deep Navy Background**: `#060B13`
- **Elevated Dark Card**: `#0A1220` / `#0D1728`
- **Primary Brand Neon Green**: `#00E599`
- **Electric Cyan Glow**: `#00D2FF`
- **Border Navy**: `#19253B`
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Code/Terminal)

