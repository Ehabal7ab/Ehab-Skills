// Cyber Command Center Portfolio Script
// Keep this file modular and readable for easy GitHub Pages hosting.

const skillsData = [
  {
    category: 'Offensive',
    accent: 'text-cyberAmber',
    items: [
      { name: 'Web Exploitation', level: 'Advanced', meta: 'OWASP Top 10 · Burp · Manual testing' },
      { name: 'Network Pentesting', level: 'Intermediate', meta: 'Nmap · Enumeration · Service abuse' },
      { name: 'CTF Methodology', level: 'Advanced', meta: 'Recon → Exploit → PrivEsc workflow' }
    ]
  },
  {
    category: 'Defensive',
    accent: 'text-cyber',
    items: [
      { name: 'SIEM Engineering', level: 'Advanced', meta: 'Log correlation · Detection tuning' },
      { name: 'Incident Response', level: 'Advanced', meta: 'Playbooks · Triage · Containment' },
      { name: 'Threat Hunting', level: 'Intermediate', meta: 'Behavioral analytics · IOC pivoting' }
    ]
  },
  {
    category: 'Tools',
    accent: 'text-cyberBlue',
    items: [
      { name: 'Burp Suite', level: 'Advanced', meta: 'Proxy · Repeater · Intruder strategy' },
      { name: 'Wireshark', level: 'Intermediate', meta: 'Packet-level protocol analysis' },
      { name: 'Splunk / ELK', level: 'Intermediate', meta: 'Dashboards · Alert pipelines' }
    ]
  },
  {
    category: 'DevSecOps',
    accent: 'text-cyberBlue',
    items: [
      { name: 'CI/CD Security', level: 'Intermediate', meta: 'SAST/DAST gates in pipelines' },
      { name: 'Container Hardening', level: 'Intermediate', meta: 'Image scanning · Runtime policies' },
      { name: 'Cloud Security', level: 'Intermediate', meta: 'IAM least privilege · CSPM baseline' }
    ]
  }
]

const projectsData = [
  {
    name: 'SOC Alert Correlation Engine',
    summary: 'Reduced alert fatigue by mapping duplicate detections into a unified incident timeline.',
    language: 'Python + JS',
    impact: 'False positives down 37%',
    module: 'Rule Normalizer',
    status: 'Production'
  },
  {
    name: 'Web App Security Baseline',
    summary: 'Built an automated secure baseline checklist integrated into pull request workflows.',
    language: 'TypeScript',
    impact: 'Pre-release vuln leakage down 48%',
    module: 'Policy as Code',
    status: 'Active'
  },
  {
    name: 'Cloud IAM Auditor',
    summary: 'Audits over-privileged identities and generates remediation actions by severity.',
    language: 'Go + Bash',
    impact: 'Critical permissions drift reduced',
    module: 'Privilege Graph Analyzer',
    status: 'Rolling Out'
  }
]

const syncFeed = [
  '[SYNC] TryHackMe profile heartbeat acknowledged',
  '[SYNC] Rank trend stable over last 14 days',
  '[SYNC] New room completed: Threat Intel Tools',
  '[SYNC] HTB machine solved: Linux hard box',
  '[SYNC] Competency map re-indexed successfully'
]

const commandHandlers = {
  help: () => [
    'Available commands:',
    '  help      - Show command list',
    '  skills    - Print skill categories',
    '  projects  - Print project names',
    '  about     - Brief profile summary',
    '  clear     - Clear terminal output'
  ],
  skills: () => {
    const lines = ['Skill inventory:']
    skillsData.forEach((group) => {
      lines.push(`- ${group.category}: ${group.items.map((i) => i.name).join(', ')}`)
    })
    return lines
  },
  projects: () => {
    return ['Projects:', ...projectsData.map((p, i) => `${i + 1}. ${p.name} [${p.status}]`)]
  },
  about: () => [
    'Cybersecurity engineer focused on secure architecture,',
    'detection engineering, and resilient deployment workflows.'
  ]
}

function renderSkills() {
  const root = document.getElementById('skills-grid')
  if (!root) return

  root.innerHTML = skillsData
    .map(
      (group) => `
      <article class="cyber-card rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <h4 class="font-semibold ${group.accent}">${group.category}</h4>
          <span class="text-xs font-mono text-textSoft">${group.items.length} nodes</span>
        </div>
        <div class="space-y-2">
          ${group.items
            .map(
              (skill) => `
                <div class="node rounded-lg border border-slate-600/40 bg-panel/70 p-3">
                  <div class="flex items-start justify-between gap-3">
                    <p class="font-medium">${skill.name}</p>
                    <span class="text-xs font-mono text-cyberBlue">${skill.level}</span>
                  </div>
                  <p class="text-xs text-textSoft mt-2 font-mono">${skill.meta}</p>
                </div>
              `
            )
            .join('')}
        </div>
      </article>
    `
    )
    .join('')
}

function renderProjects() {
  const root = document.getElementById('projects-grid')
  if (!root) return

  root.innerHTML = projectsData
    .map(
      (project) => `
        <article class="project-card cyber-card rounded-xl p-4 cursor-default">
          <div class="flex items-center justify-between gap-3">
            <h4 class="font-semibold">${project.name}</h4>
            <span class="text-[11px] font-mono px-2 py-1 rounded border border-cyberBlue/35 text-cyberBlue">${project.status}</span>
          </div>
          <p class="text-sm text-textSoft mt-3">${project.summary}</p>

          <div class="manifest mt-4 text-xs font-mono space-y-2 border-t border-slate-600/40 pt-3">
            <p><span class="text-textSoft">Language:</span> <span class="text-textMain">${project.language}</span></p>
            <p><span class="text-textSoft">Impact:</span> <span class="text-cyber">${project.impact}</span></p>
            <p><span class="text-textSoft">Core Module:</span> <span class="text-cyberAmber">${project.module}</span></p>
          </div>
        </article>
      `
    )
    .join('')
}

function bootSyncFeed() {
  const log = document.getElementById('sync-log')
  if (!log) return

  let i = 0
  function pushLine() {
    const line = document.createElement('p')
    line.className = 'text-cyberBlue/90'
    line.textContent = `${new Date().toLocaleTimeString()} ${syncFeed[i % syncFeed.length]}`
    log.appendChild(line)
    log.scrollTop = log.scrollHeight
    i += 1
  }

  for (let k = 0; k < 2; k += 1) pushLine()
  setInterval(pushLine, 2600)
}

function setupTerminal() {
  const output = document.getElementById('terminal-output')
  const input = document.getElementById('terminal-input')
  if (!output || !input) return

  const writeLine = (line = '') => {
    output.textContent += `${line}\n`
    output.scrollTop = output.scrollHeight
  }

  const bootLines = [
    'Cyber Command Terminal v1.0',
    'Type `help` to list available commands.',
    ''
  ]
  bootLines.forEach((line) => writeLine(line))

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return
    const raw = input.value.trim()
    if (!raw) return

    writeLine(`$ ${raw}`)
    const cmd = raw.toLowerCase()

    if (cmd === 'clear') {
      output.textContent = ''
    } else if (commandHandlers[cmd]) {
      commandHandlers[cmd]().forEach((line) => writeLine(line))
    } else {
      writeLine(`Unknown command: ${cmd}`)
      writeLine('Type `help` for supported commands.')
    }

    writeLine('')
    input.value = ''
  })
}

function setYear() {
  const y = document.getElementById('year')
  if (y) y.textContent = String(new Date().getFullYear())
}

function initPortfolio() {
  renderSkills()
  renderProjects()
  bootSyncFeed()
  setupTerminal()
  setYear()
}

document.addEventListener('DOMContentLoaded', initPortfolio)
