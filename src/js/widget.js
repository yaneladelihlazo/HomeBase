(function () {
    'use strict';

    const langs = [
{
    title: 'PYTHON', sub: 'AI · AUTOMATION · SCRIPTING', sysname: 'PYTHON.SYS', pct: 91,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,220,255,0.85)',
    witty: [
{ t: 'c', s: '# no bugs, only features' },
{ t: 'a', s: 'while not working:' },
{ t: 'b', s: '  google_the_error()' },
{ t: 'b', s: '  pray()' },
    ],
    chips: ['ML', 'Flask', 'NumPy', 'Pandas', 'Scripting'],
    notes: 'Strongest language. ML pipelines with NumPy/Pandas, Flask REST APIs, data analysis, and automation scripting.'
},
{
    title: 'JAVA', sub: 'OBJECT-ORIENTED PROGRAMMING', sysname: 'JAVA.SYS', pct: 88,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,200,255,0.8)',
    witty: [
{ t: 'c', s: '// 500 lines to say hi' },
{ t: 'a', s: 'public static void' },
{ t: 'b', s: '  main(String[] a) {' },
{ t: 'd', s: '  // NullPointerException' },
    ],
    chips: ['OOP', 'JVM', 'Maven', 'Spring', 'Threads'],
    notes: 'Expert in object-oriented design patterns, Spring Boot REST APIs, JVM tuning, and multi-threaded application development.'
},
{
    title: 'C++', sub: 'SYSTEMS & PERFORMANCE', sysname: 'CPP.SYS', pct: 78,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,200,255,0.8)',
    witty: [
{ t: 'c', s: '// not a crash.' },
{ t: 'c', s: '// an unplanned exit.' },
{ t: 'a', s: 'free(ptr);' },
{ t: 'd', s: '// use after free :)' },
    ],
    chips: ['STL', 'Pointers', 'CMake', 'Memory', 'Templates'],
    notes: 'Comfortable with manual memory management, smart pointers, template metaprogramming, and CMake build systems.'
},
{
    title: 'HTML/CSS', sub: 'STRUCTURE · STYLE · BEAUTY', sysname: 'HTMLCSS.SYS', pct: 82,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,200,255,0.8)',
    witty: [
{ t: 'c', s: '/* why is nothing' },
{ t: 'c', s: '   centered?? */' },
{ t: 'a', s: 'display: flex;' },
{ t: 'b', s: '/* ah. always flex. */' },
    ],
    chips: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive'],
    notes: 'Semantic HTML, modern CSS layouts with Flexbox and Grid, responsive design, animations, and accessible UI patterns.'
},
{
    title: 'PostgreSQL', sub: 'RELATIONAL DATABASE', sysname: 'POSTGRES.SYS', pct: 83,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,200,255,0.8)',
    witty: [
{ t: 'a', s: 'SELECT * FROM sleep' },
{ t: 'b', s: 'WHERE hours > 6;' },
{ t: 'd', s: '-- 0 rows returned' },
{ t: 'c', s: '-- send help' },
    ],
    chips: ['SQL', 'ACID', 'Joins', 'Indexes', 'pgAdmin'],
    notes: 'Schema design, complex JOINs, index optimization, ACID transactions, and pgAdmin administration.'
},
{
    title: 'GIT', sub: 'VERSION CONTROL · SHIP IT', sysname: 'GIT.SYS', pct: 85,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,200,255,0.8)',
    witty: [
{ t: 'b', s: 'git commit -m "fix"' },
{ t: 'b', s: 'git commit -m "pls"' },
{ t: 'd', s: 'git push --force' },
{ t: 'c', s: '# yolo. shipped.' },
    ],
    chips: ['Git', 'GitHub', 'Branches', 'PRs', 'CI/CD'],
    notes: 'Branching strategies, pull requests, rebasing, conflict resolution, and GitHub Actions CI/CD pipelines.'
},
{
    title: 'LINUX', sub: 'UNIX · SHELL · KERNEL', sysname: 'LINUX.SYS', pct: 80,
    color: 'rgba(0,235,255,1)', shadow: '0 0 12px cyan', barColor: 'rgba(0,200,255,0.8)',
    witty: [
{ t: 'd', s: 'rm -rf bad_decisions/' },
{ t: 'c', s: '# if only life had this' },
{ t: 'a', s: 'sudo make me coffee' },
{ t: 'd', s: '# command not found' },
    ],
    chips: ['Bash', 'SSH', 'Cron', 'Ubuntu', 'Vim'],
    notes: 'Comfortable in the shell: deployment scripting, SSH tunneling, cron automation, log analysis, and system monitoring.'
},
{
    title: 'CYBERSECURITY', sub: 'ETHICAL HACKING · DEFENSE', sysname: 'CYBERSECURITY.SYS', pct: 75,
    color: 'rgba(255,110,110,0.95)', shadow: '0 0 12px rgba(255,60,60,0.55)', barColor: 'rgba(255,80,80,0.75)',
    witty: [
{ t: 'c', s: '> knock knock' },
{ t: 'd', s: 'PORT 8080: who\'s there' },
{ t: 'a', s: '> the one who patched' },
{ t: 'a', s: '> CVE-2024 at 2am.' },
    ],
    chips: ['Nmap', 'Kali', 'CTF', 'OWASP', 'Wireshark'],
    notes: 'Penetration testing fundamentals, CTF competitions, OWASP Top 10, network scanning, and AES-256 encryption.'
}
    ];

    function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

    const N = langs.length;
    const RADIUS = 310;
    const rig = document.getElementById('yw-rig');
    const scene = document.getElementById('yw-scene');

    langs.forEach((l, i) => {
    const angle = (360 / N) * i;
    const panel = document.createElement('div');
    panel.className = 'yw-panel';
    panel.dataset.idx = i;
    panel.style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
    const isCyber = l.title === 'CYBERSECURITY';
    const subStyle = isCyber ? ' style="color:rgba(255,100,100,0.4)"' : '';
    const labelStyle = isCyber ? ' style="color:rgba(255,100,100,0.4)"' : '';

    panel.innerHTML = `
      <div class="yw-pface">
        <div class="yw-phead">
          <div class="yw-dot yw-dr"></div>
          <div class="yw-dot yw-dy"></div>
          <div class="yw-dot yw-dg"></div>
          <span class="yw-ptitle">${l.sysname}</span>
        </div>
        <div class="yw-pbody">
          <div>
            <div class="yw-lang" style="color:${l.color};text-shadow:${l.shadow}">${l.title}</div>
            <div class="yw-sub"${subStyle}>${l.sub}</div>
          </div>
          <div class="yw-sep"></div>
          <div class="yw-witty">
            ${l.witty.map(w => `<div class="yw-wline yw-w${w.t}">${esc(w.s)}</div>`).join('')}
          </div>
          <div class="yw-chips">
            ${l.chips.map(c => `<span class="yw-chip">${c}</span>`).join('')}
          </div>
          <div class="yw-sbar-wrap">
            <div class="yw-sbar">
              <div class="yw-sfill" style="width:${l.pct}%;background:${l.barColor};box-shadow:0 0 5px ${l.barColor}"></div>
            </div>
            <div class="yw-slabel"${labelStyle}>${l.pct}%</div>
          </div>
        </div>
      </div>`;
    panel.addEventListener('click', () => openDetail(i));
    rig.appendChild(panel);
});

    // Particles
    for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'yw-pt';
    p.style.left = (Math.random() * 100) + '%';
    p.style.animationDuration = (7 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 15) + 's';
    scene.appendChild(p);
}

    // Detail panel
    const overlay = document.getElementById('yw-overlay');
    const dLang   = document.getElementById('yw-dlang');
    const dSub    = document.getElementById('yw-dsub');
    const dFill   = document.getElementById('yw-dfill');
    const dPct    = document.getElementById('yw-dpct');
    const dChips  = document.getElementById('yw-dchips');
    const dWitty  = document.getElementById('yw-dwitty');

    const colorMap = { a:'rgba(0,240,200,0.9)', b:'rgba(0,200,255,0.6)', c:'rgba(255,200,0,0.75)', d:'rgba(255,90,90,0.75)' };

    function openDetail(idx) {
    const l = langs[idx];
    dLang.textContent = l.title;
    dLang.style.color = l.color;
    dLang.style.textShadow = l.shadow;
    dSub.textContent = l.sub;
    dFill.style.width = l.pct + '%';
    dFill.style.background = l.barColor;
    dFill.style.boxShadow = `0 0 6px ${l.barColor}`;
    dPct.textContent = 'Proficiency: ' + l.pct + '%';
    dChips.innerHTML = l.chips.map(c => `<span class="yw-dchip">${c}</span>`).join('');
    dWitty.innerHTML = l.witty.map(w =>
    `<div class="yw-dwline" style="color:${colorMap[w.t]}">${esc(w.s)}</div>`
    ).join('');
    overlay.classList.add('yw-show');
    rig.classList.add('yw-paused');
    document.querySelectorAll('.yw-panel').forEach((p, j) => p.classList.toggle('yw-lit', j === idx));
}

    function closeDetail() {
    overlay.classList.remove('yw-show');
    rig.classList.remove('yw-paused');
    document.querySelectorAll('.yw-panel').forEach(p => p.classList.remove('yw-lit'));
}

    document.getElementById('yw-close').addEventListener('click', closeDetail);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });
    document.addEventListener('keydown', e => { if (e.code === 'Escape') closeDetail(); });

})();