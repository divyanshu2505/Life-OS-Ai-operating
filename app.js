// ─── RENDER AUTHOR ───
document.getElementById('authorName').textContent = AUTHOR.name;
document.getElementById('authorRole').textContent = AUTHOR.role;
document.getElementById('authorStack').innerHTML = AUTHOR.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');

// ─── RENDER NAV LINKS ───
const navLinks = document.getElementById('navLinks');
PROJECTS.forEach(p => {
  const a = document.createElement('a');
  a.className = 'nav-link';
  a.href = `#${p.id}`;
  a.textContent = p.num;
  a.title = p.name;
  navLinks.appendChild(a);
});

// ─── RENDER TOC ───
const toc = document.getElementById('toc');
PROJECTS.forEach(p => {
  const d = document.createElement('div');
  d.className = 'toc-dot';
  d.dataset.label = p.name;
  d.dataset.target = p.id;
  d.onclick = () => document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' });
  toc.appendChild(d);
});

// ─── CATEGORY MAP ───
const categories = {
  "01": "AI · Productivity", "02": "AI · Fintech", "03": "AI · Education",
  "04": "AI · Publishing", "05": "Navigation · Maps", "06": "Aviation · Tracking",
  "07": "Logistics · Freight", "08": "Careers · Jobs", "09": "Health · Fitness"
};
const accentColors = {
  "accent-violet": "#7c3aed", "accent-cyan": "#06b6d4", "accent-rose": "#f43f5e",
  "accent-amber": "#f59e0b", "accent-emerald": "#10b981", "accent-blue": "#3b82f6",
  "accent-orange": "#f97316", "accent-pink": "#ec4899", "accent-lime": "#84cc16"
};

// ─── RENDER OVERVIEW TABLE ───
const tbody = document.getElementById('overviewBody');
PROJECTS.forEach(p => {
  const color = accentColors[p.accent];
  const keyTech = p.stack.backend.slice(0, 2).concat(p.stack.frontend.slice(0, 1)).join(', ');
  tbody.innerHTML += `<tr>
    <td style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:${color}">${p.num}</td>
    <td><span class="proj-dot" style="background:${color}"></span>${p.name}</td>
    <td>${categories[p.num] || 'AI'}</td>
    <td style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;">${keyTech}</td>
  </tr>`;
});

// ─── RENDER PROJECTS ───
const container = document.getElementById('projectsContainer');

PROJECTS.forEach(p => {
  const color = accentColors[p.accent];
  
  // Build features HTML
  let featuresHTML = '';
  p.features.forEach(f => {
    featuresHTML += `
      <div class="card">
        <div class="card-icon">${f.icon}</div>
        <div class="card-title">${f.title}</div>
        <ul class="feature-list">${f.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`;
  });

  // Build tech stack HTML
  let techHTML = '';
  if (p.stack.frontend) {
    techHTML += `<div><div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.1em;">Frontend</div><div class="tech-stack">${p.stack.frontend.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div></div>`;
  }
  if (p.stack.backend) {
    techHTML += `<div><div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.1em;margin-top:1rem;">Backend</div><div class="tech-stack">${p.stack.backend.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div></div>`;
  }

  // Extra sections (problems, users, objective)
  let extraHTML = '';
  if (p.objective) {
    extraHTML += `
      <div style="margin-bottom:2rem;">
        <div class="section-label"><div class="line"></div><span>Core Objective</span></div>
        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7;max-width:800px;">${p.objective}</p>
      </div>`;
  }
  if (p.problems) {
    extraHTML += `
      <div style="margin-bottom:2rem;">
        <div class="section-label"><div class="line"></div><span>Problems Solved</span></div>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">${p.problems.map(pr => `<span class="page-tag">${pr}</span>`).join('')}</div>
      </div>`;
  }
  if (p.users) {
    extraHTML += `
      <div style="margin-bottom:2rem;">
        <div class="section-label"><div class="line"></div><span>Target Users</span></div>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">${p.users.map(u => `<span class="page-tag">${u}</span>`).join('')}</div>
      </div>`;
  }

  const html = `
    <div class="section-divider"></div>
    <section class="section">
      <div class="project ${p.accent}" id="${p.id}">
        <div class="project-header">
          <div class="project-number">${p.num}</div>
          <div class="project-title-block">
            <h2 class="project-name">${p.name}</h2>
            <p class="project-vision">${p.vision}</p>
          </div>
        </div>
        <div class="project-accent"></div>

        ${extraHTML}

        <div class="section-label"><div class="line"></div><span>Core Features</span></div>
        <div class="grid-3">${featuresHTML}</div>

        <div class="section-label"><div class="line"></div><span>Technical Stack</span></div>
        <div class="card" style="margin-bottom:2rem;">${techHTML}</div>

        <div class="section-label"><div class="line"></div><span>Awwwards UI Direction</span></div>
        <p style="color:var(--text-secondary);font-size:0.85rem;line-height:1.8;margin-bottom:2rem;font-style:italic;">${p.design}</p>

        <div class="grid-2">
          <div>
            <div class="section-label"><div class="line"></div><span>Pages</span></div>
            <div class="pages-grid">${p.pages.map(pg => `<span class="page-tag">${pg}</span>`).join('')}</div>
          </div>
          <div>
            <div class="section-label"><div class="line"></div><span>Monetization</span></div>
            <div class="money-grid">${p.monetization.map(m => `<span class="money-item">${m}</span>`).join('')}</div>
          </div>
        </div>

        <div style="margin-top:2rem;">
          <div class="section-label"><div class="line"></div><span>Future Expansion</span></div>
          <div class="future-grid">${p.future.map(f => `<span class="future-tag">${f}</span>`).join('')}</div>
        </div>
      </div>
    </section>`;

  container.innerHTML += html;
});

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.project').forEach(p => observer.observe(p));

// ─── NAV SCROLL EFFECT ───
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── ACTIVE TOC DOT ───
const tocDots = document.querySelectorAll('.toc-dot');
const sections = PROJECTS.map(p => document.getElementById(p.id));

const tocObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      tocDots.forEach(d => d.classList.remove('active'));
      const dot = [...tocDots].find(d => d.dataset.target === e.target.id);
      if (dot) dot.classList.add('active');
      // Also highlight nav link
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.2 });

sections.forEach(s => { if (s) tocObserver.observe(s); });

// ─── SMOOTH NAV CLICK ───
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ─── CARD HOVER GLOW ───
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(255,255,255,0.04), var(--glass))`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

console.log('LifeOS PRD Ecosystem loaded — 9 Products rendered.');
