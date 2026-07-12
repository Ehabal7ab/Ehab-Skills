const skills = [
  {
    category: "Offensive",
    color: "text-rose-300 border-rose-400/35",
    items: [
      "Web Penetration Testing (Foundation)",
      "Network Penetration Testing (Foundation)"
    ]
  },
  {
    category: "Defensive",
    color: "text-cyan-300 border-cyan-400/35",
    items: [
      "Security Analysis (Practical SIEM Actions)",
      "Malware Analysis"
    ]
  },
  {
    category: "Tools",
    color: "text-amber-300 border-amber-400/35",
    items: [
      "Splunk",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Kali Linux",
      "Linux CLI",
      "Git/GitHub"
    ]
  },
  {
    category: "DevSecOps",
    color: "text-blue-300 border-blue-400/35",
    items: [
      "CI/CD Security Basics",
      "SAST/DAST Fundamentals",
      "Secure SDLC Practices"
    ]
  }
];

const projects = [
  {
    title: "DevSecOps Web Application",
    repo: "CyberX-sec/DevSecOps-WebApplication",
    description:
      "Worked on DevSecOps integration for web application workflows with security checks in the pipeline.",
    stack: ["JavaScript", "CSS", "HTML", "DevSecOps"],
    link: "https://github.com/CyberX-sec/DevSecOps-WebApplication"
  },
  {
    title: "PeakSec (PTTAS Tool)",
    repo: "Ehabal7ab/PeakSec",
    description:
      "PTTAS security tool project focused on practical security workflow support and analysis tasks.",
    stack: ["JavaScript", "Security Tooling"],
    link: "https://github.com/Ehabal7ab/PeakSec"
  },
  {
    title: "Sentinel-HID",
    repo: "CyberX-sec/Sentinel-HID",
    description:
      "Security-focused project contribution related to defensive use cases and monitoring concepts.",
    stack: ["JavaScript", "CSS", "HTML", "Security"],
    link: "https://github.com/CyberX-sec/Sentinel-HID"
  }
];

const links = [
  "CyberDefenders: https://cyberdefenders.org/p/ehabalhab7/",
  "LetsDefend: https://app.letsdefend.io/user/ehabal7ab",
  "GitHub: https://github.com/Ehabal7ab",
  "TryHackMe: https://tryhackme.com/p/ehabal7ab"
];

const skillsGrid = document.getElementById("skills-grid");
const projectsGrid = document.getElementById("projects-grid");
const output = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function renderSkills() {
  skillsGrid.innerHTML = skills
    .map((group) => {
      const pills = group.items
        .map(
          (item) =>
            `<span class="inline-block text-xs px-2.5 py-1 rounded-md border border-slate-500/35 bg-slate-900/35">${item}</span>`
        )
        .join(" ");
      return `
        <article class="item rounded-xl p-4">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-semibold">${group.category}</h4>
            <span class="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${group.color}">Verified</span>
          </div>
          <div class="flex flex-wrap gap-2">${pills}</div>
        </article>
      `;
    })
    .join("");
}

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (p) => `
      <article class="item project rounded-xl p-4">
        <p class="text-xs text-slate-400">${p.repo}</p>
        <h4 class="mt-1 text-lg font-semibold">${p.title}</h4>
        <p class="mt-2 text-sm text-slate-300">${p.description}</p>

        <div class="manifest mt-3">
          <div class="text-xs text-slate-400 mb-2">Stack</div>
          <div class="flex flex-wrap gap-2">
            ${p.stack
              .map(
                (s) =>
                  `<span class="text-[11px] px-2 py-1 rounded border border-slate-500/35 bg-slate-900/40">${s}</span>`
              )
              .join("")}
          </div>
        </div>

        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="inline-flex mt-4 text-sm text-sky-300 hover:text-sky-200">
          Open Repository →
        </a>
      </article>
    `
    )
    .join("");
}

function println(text = "") {
  output.textContent += `${text}\n`;
  output.scrollTop = output.scrollHeight;
}

function bootTerminal() {
  output.textContent = "";
  println("Ehab Security Terminal v1.0");
  println("Type 'help' to view commands.");
  println("");
}

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return;

  println(`$ ${raw}`);

  switch (cmd) {
    case "help":
      println("Available commands:");
      println("- help");
      println("- skills");
      println("- projects");
      println("- links");
      println("- about");
      println("- clear");
      break;

    case "skills":
      println("Skills:");
      skills.forEach((g) => {
        println(`• ${g.category}: ${g.items.join(", ")}`);
      });
      break;

    case "projects":
      println("Projects:");
      projects.forEach((p) => println(`• ${p.repo}`));
      break;

    case "links":
      println("Verified links:");
      links.forEach((l) => println(`• ${l}`));
      break;

    case "about":
      println("Security Analyst focused on SIEM and Malware Analysis.");
      println("Foundation in Web and Network Penetration Testing.");
      break;

    case "clear":
      output.textContent = "";
      break;

    default:
      println(`Unknown command: ${raw}`);
      println("Type 'help' for available commands.");
  }

  println("");
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    runCommand(input.value);
    input.value = "";
  }
});

renderSkills();
renderProjects();
bootTerminal();
