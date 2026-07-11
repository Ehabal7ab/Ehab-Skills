import { useMemo, useState } from "react";
import {
  Github,
  Shield,
  BookOpenCheck,
  UserCircle2,
  Languages,
  ExternalLink,
  BrainCircuit,
  Wrench,
  ServerCog,
} from "lucide-react";

const content = {
  en: {
    name: "Ehab Thaer",
    role: "Security Analyst | DevSecOps | Security/Detection Engineer",
    intro:
      "Cybersecurity Engineering student at NTU, focused on security analysis and engineering. I build practical security projects across DevSecOps, AI-driven tools, and defensive operations.",
    education: "Studying Cybersecurity Engineering at NTU.",
    focus: "Current focus: SOC operations, Splunk, and security analysis.",
    fun: "Fun fact: I look at malware code for fun.",
    sections: {
      links: "Platforms",
      skills: "Core Skills",
      projects: "Highlighted Work",
    },
    cta: "Open Profile",
    footer: "Built with React • Defensive Security Theme",
    projects: [
      "PTTAS security tool with AI",
      "Face recognition attendance system",
      "Hardware security projects",
      "DevSecOps-focused security implementations",
    ],
    skills: [
      "SOC Operations",
      "Security Analysis",
      "Detection Engineering",
      "DevSecOps",
      "Splunk",
      "Blue Teaming",
      "Threat Hunting",
      "SIEM",
      "Incident Investigation",
      "Secure Engineering",
    ],
  },
  ar: {
    name: "إيهاب ثائر",
    role: "محلل أمن سيبراني | DevSecOps | مهندس أمن / كشف التهديدات",
    intro:
      "طالب هندسة أمن سيبراني في NTU، أركز على التحليل والهندسة الأمنية، وأبني مشاريع عملية في DevSecOps والأدوات الأمنية المدعومة بالذكاء الاصطناعي والجانب الدفاعي.",
    education: "أدرس هندسة الأمن السيبراني في NTU.",
    focus: "التركيز الحالي: عمليات SOC وSplunk والتحليل الأمني.",
    fun: "معلومة ممتعة: أستمتع بتحليل أكواد البرمجيات الخبيثة.",
    sections: {
      links: "المنصات",
      skills: "المهارات الأساسية",
      projects: "أبرز الأعمال",
    },
    cta: "فتح الحساب",
    footer: "تم البناء باستخدام React • ثيم أمني دفاعي",
    projects: [
      "أداة أمنية PTTAS مدعومة بالذكاء الاصطناعي",
      "نظام حضور بالتعرف على الوجه",
      "مشاريع في أمن العتاد (Hardware Security)",
      "تنفيذات أمنية تركّز على DevSecOps",
    ],
    skills: [
      "عمليات SOC",
      "التحليل الأمني",
      "هندسة الكشف",
      "DevSecOps",
      "Splunk",
      "Blue Teaming",
      "صيد التهديدات",
      "SIEM",
      "التحقيق في الحوادث",
      "الهندسة الآمنة",
    ],
  },
};

const profileLinks = [
  {
    key: "GitHub",
    href: "https://github.com/Ehabal7ab",
    icon: Github,
    color: "var(--accent-1)",
  },
  {
    key: "TryHackMe",
    href: "https://tryhackme.com/p/ehabal7ab",
    icon: Shield,
    color: "var(--accent-2)",
  },
  {
    key: "LetsDefend",
    href: "https://app.letsdefend.io/user/ehabal7ab",
    icon: ServerCog,
    color: "var(--accent-3)",
  },
  {
    key: "CyberDefenders",
    href: "https://cyberdefenders.org/p/ehabalhab7/",
    icon: BookOpenCheck,
    color: "var(--accent-4)",
  },
];

export default function App() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => content[lang], [lang]);
  const isArabic = lang === "ar";

  return (
    <div className={`app ${isArabic ? "rtl" : ""}`}>
      <div className="bg-grid" />
      <header className="topbar">
        <div className="brand">
          <UserCircle2 size={18} />
          <span>{t.name}</span>
        </div>
        <button className="lang-btn" onClick={() => setLang((p) => (p === "en" ? "ar" : "en"))}>
          <Languages size={16} />
          {lang === "en" ? "AR" : "EN"}
        </button>
      </header>

      <main className="container">
        <section className="hero card glow">
          <p className="role">{t.role}</p>
          <h1>{t.name}</h1>
          <p className="intro">{t.intro}</p>
          <div className="meta">
            <div><strong>•</strong> {t.education}</div>
            <div><strong>•</strong> {t.focus}</div>
            <div><strong>•</strong> {t.fun}</div>
          </div>
        </section>

        <section className="card">
          <h2>{t.sections.links}</h2>
          <div className="links-grid">
            {profileLinks.map(({ key, href, icon: Icon, color }) => (
              <a key={key} href={href} target="_blank" rel="noreferrer" className="link-card">
                <div className="icon-wrap" style={{ borderColor: color }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="link-content">
                  <span>{key}</span>
                  <small>{t.cta}</small>
                </div>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>

        <section className="split">
          <div className="card">
            <h2><BrainCircuit size={18} /> {t.sections.skills}</h2>
            <div className="chips">
              {t.skills.map((skill) => <span key={skill} className="chip">{skill}</span>)}
            </div>
          </div>

          <div className="card">
            <h2><Wrench size={18} /> {t.sections.projects}</h2>
            <ul className="project-list">
              {t.projects.map((project) => <li key={project}>{project}</li>)}
            </ul>
          </div>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </div>
  );
}
