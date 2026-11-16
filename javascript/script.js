/* ==========================================================================
   LOGICA CONDIVISA & MOTORI INTERATTIVI MULTIPAGINA
   I.T. "Carlo Alberto Dalla Chiesa" - Partinico (PA)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initBackToTop();
  initHeroTypewriter();
  initCurriculumTabs();
  initCodeDemo();
  initPasswordSimulator();
  initAITrainer();
  initLabProjects();
  initPostDiploma();
  initCyberChallenge();
});

/* --------------------------------------------------------------------------
   1. NAVBAR MOBILE & TORNA IN CIMA
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   2. HOMEPAGE: EFFETTO MACCHINA DA SCRIVERE (TYPEWRITER)
   -------------------------------------------------------------------------- */
function initHeroTypewriter() {
  const target = document.getElementById('typewriterText');
  if (!target) return;

  const phrases = [
    'Non limitarti a usare la tecnologia. Impara a crearla.',
    'Programma app, videogiochi e sistemi intelligenti.',
    'Costruisci il tuo futuro digitale a Partinico.'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      charIdx--;
    } else {
      charIdx++;
    }

    target.textContent = currentPhrase.substring(0, charIdx);

    let speed = isDeleting ? 32 : 55;

    if (!isDeleting && charIdx === currentPhrase.length) {
      speed = 2400;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(tick, speed);
  }

  tick();
}

/* --------------------------------------------------------------------------
   3. PAGINA "COSA SI STUDIA": QUADRO ORARIO MINISTERIALE (1° - 5° ANNO)
   -------------------------------------------------------------------------- */
const CURRICULUM_DATA = {
  1: {
    title: '1° Anno — Biennio Comune',
    totalHours: 33,
    labHours: 5,
    note: 'Prime basi scientifiche e prime 2 ore settimanali nel laboratorio di Tecnologie Informatiche.',
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: 4, lab: 0 },
      { name: 'Storia', hours: 2, lab: 0 },
      { name: 'Lingua inglese', hours: 3, lab: 0 },
      { name: 'Matematica', hours: 4, lab: 0 },
      { name: 'Scienze integrate - Scienze della Terra e Biologia', hours: 2, lab: 0 },
      { name: 'Scienze integrate - Fisica', hours: 3, lab: 1 },
      { name: 'Scienze integrate - Chimica', hours: 3, lab: 1 },
      { name: 'Tecnologie e tecniche di rappresentazione grafica', hours: 3, lab: 1 },
      { name: 'Tecnologie informatiche', hours: 3, lab: 2 },
      { name: 'Diritto ed economia', hours: 2, lab: 0 },
      { name: 'Geografia generale ed economica', hours: 1, lab: 0 },
      { name: 'Scienze motorie e sportive', hours: 2, lab: 0 },
      { name: 'Religione cattolica o attività alternative', hours: 1, lab: 0 }
    ]
  },
  2: {
    title: '2° Anno — Biennio Comune',
    totalHours: 32,
    labHours: 3,
    note: 'Introduzione a Scienze e Tecnologie Applicate per prepararsi al triennio informatico.',
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: 4, lab: 0 },
      { name: 'Storia', hours: 2, lab: 0 },
      { name: 'Lingua inglese', hours: 3, lab: 0 },
      { name: 'Matematica', hours: 4, lab: 0 },
      { name: 'Scienze integrate - Scienze della Terra e Biologia', hours: 2, lab: 0 },
      { name: 'Scienze integrate - Fisica', hours: 3, lab: 1 },
      { name: 'Scienze integrate - Chimica', hours: 3, lab: 1 },
      { name: 'Tecnologie e tecniche di rappresentazione grafica', hours: 3, lab: 1 },
      { name: 'Scienze e tecnologie applicate', hours: 3, lab: 0 },
      { name: 'Diritto ed economia', hours: 2, lab: 0 },
      { name: 'Scienze motorie e sportive', hours: 2, lab: 0 },
      { name: 'Religione cattolica o attività alternative', hours: 1, lab: 0 }
    ]
  },
  3: {
    title: '3° Anno — Triennio di Indirizzo',
    totalHours: 32,
    labHours: 8,
    note: 'Si entra nel vivo: 8 ore settimanali di laboratorio tra Informatica, Sistemi e Reti, Telecomunicazioni e TPSIT.',
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: 4, lab: 0 },
      { name: 'Storia', hours: 2, lab: 0 },
      { name: 'Lingua inglese', hours: 3, lab: 0 },
      { name: 'Matematica', hours: 3, lab: 0 },
      { name: 'Complementi di matematica', hours: 1, lab: 0 },
      { name: 'Telecomunicazioni', hours: 3, lab: 1 },
      { name: 'Progettazione Sistemi Informatici (TPSIT)', hours: 3, lab: 1 },
      { name: 'Sistemi e Reti', hours: 4, lab: 3 },
      { name: 'Informatica', hours: 6, lab: 3 },
      { name: 'Scienze motorie e sportive', hours: 2, lab: 0 },
      { name: 'Religione cattolica o attività alternative', hours: 1, lab: 0 }
    ]
  },
  4: {
    title: '4° Anno — Triennio di Indirizzo',
    totalHours: 32,
    labHours: 9,
    note: 'Sviluppo web, database, reti avanzate e segnali: 9 ore settimanali in laboratorio con docente ITP.',
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: 4, lab: 0 },
      { name: 'Storia', hours: 2, lab: 0 },
      { name: 'Lingua inglese', hours: 3, lab: 0 },
      { name: 'Matematica', hours: 3, lab: 0 },
      { name: 'Complementi di matematica', hours: 1, lab: 0 },
      { name: 'Telecomunicazioni', hours: 3, lab: 2 },
      { name: 'Progettazione Sistemi Informatici (TPSIT)', hours: 3, lab: 2 },
      { name: 'Sistemi e Reti', hours: 4, lab: 2 },
      { name: 'Informatica', hours: 6, lab: 3 },
      { name: 'Scienze motorie e sportive', hours: 2, lab: 0 },
      { name: 'Religione cattolica o attività alternative', hours: 1, lab: 0 }
    ]
  },
  5: {
    title: '5° Anno — Verso il Diploma e il Futuro',
    totalHours: 32,
    labHours: 10,
    note: 'Ben 10 ore settimanali in laboratorio! Progetti completi, cybersecurity, app distribuite e gestione d’impresa.',
    subjects: [
      { name: 'Lingua e letteratura italiana', hours: 4, lab: 0 },
      { name: 'Storia', hours: 2, lab: 0 },
      { name: 'Lingua inglese', hours: 3, lab: 0 },
      { name: 'Matematica', hours: 3, lab: 0 },
      { name: 'Progettazione Sistemi Informatici (TPSIT)', hours: 4, lab: 4 },
      { name: 'Sistemi e Reti', hours: 4, lab: 3 },
      { name: 'Informatica', hours: 6, lab: 3 },
      { name: 'Gestione Progetto e Organizzazione Impresa', hours: 3, lab: 0 },
      { name: 'Scienze motorie e sportive', hours: 2, lab: 0 },
      { name: 'Religione cattolica o attività alternative', hours: 1, lab: 0 }
    ]
  }
};

function initCurriculumTabs() {
  const container = document.getElementById('curriculumOutput');
  const buttons = document.querySelectorAll('[data-year-tab]');
  if (!container || !buttons.length) return;

  function renderYear(key) {
    if (key === 'all') {
      let html = '<div class="grid-2">';
      [1, 2, 3, 4, 5].forEach(yr => {
        const d = CURRICULUM_DATA[yr];
        html += `
          <div class="timetable-card">
            <div class="timetable-summary">
              <div>
                <h3>${d.title}</h3>
                <p style="color:var(--text-secondary);font-size:0.86rem;">${d.note}</p>
              </div>
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <span class="pill">${d.totalHours}h totali</span>
                <span class="lab-badge">🔬 ${d.labHours}h lab</span>
              </div>
            </div>
            <div class="table-responsive">
              <table class="schedule-table">
                <thead><tr><th>Disciplina</th><th>Ore/Sett.</th></tr></thead>
                <tbody>
                  ${d.subjects.map(s => `
                    <tr>
                      <td>${s.name}</td>
                      <td>
                        <span class="hours-pill">${s.hours}h</span>
                        ${s.lab > 0 ? `<span class="lab-badge" style="margin-left:0.4rem;">di cui ${s.lab}h lab</span>` : ''}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>`;
      });
      html += '</div>';
      container.innerHTML = html;
      return;
    }

    const d = CURRICULUM_DATA[key];
    container.innerHTML = `
      <div class="timetable-card">
        <div class="timetable-summary">
          <div>
            <h3>${d.title}</h3>
            <p style="color:var(--text-secondary);font-size:0.92rem;margin-top:0.25rem;">${d.note}</p>
          </div>
          <div style="display:flex;gap:0.65rem;flex-wrap:wrap;">
            <span class="pill" style="font-size:0.85rem;">Totale: <strong>${d.totalHours} ore/sett.</strong></span>
            <span class="lab-badge" style="font-size:0.85rem;">🔬 Laboratorio ITP: ${d.labHours} ore/sett.</span>
          </div>
        </div>
        <div class="table-responsive">
          <table class="schedule-table">
            <thead>
              <tr>
                <th>Materia / Disciplina</th>
                <th>Ore Settimanali</th>
                <th>Attività Pratica in Laboratorio</th>
              </tr>
            </thead>
            <tbody>
              ${d.subjects.map(s => `
                <tr>
                  <td><strong>${s.name}</strong></td>
                  <td><span class="hours-pill">${s.hours} ore</span></td>
                  <td>${s.lab > 0 ? `<span class="lab-badge">di cui ${s.lab}h in compresenza lab</span>` : '<span style="color:var(--text-muted);font-size:0.85rem;">Aula / Teoria</span>'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderYear(btn.dataset.yearTab);
    });
  });

  renderYear('1');
}

/* --------------------------------------------------------------------------
   4. MINI-LAB 1: CONFIGURATORE VISUALE PROGRAMMAZIONE (RAZZO)
   -------------------------------------------------------------------------- */
function initCodeDemo() {
  const runBtn = document.getElementById('runRocketCode');
  if (!runBtn) return;

  const colorSelect = document.getElementById('rocketColor');
  const speedSelect = document.getElementById('rocketSpeed');
  const textInput = document.getElementById('rocketMessage');
  const actor = document.getElementById('rocketActor');
  const label = document.getElementById('rocketLabel');
  const svgBody = document.getElementById('rocketBodyShape');
  const codePreview = document.getElementById('liveCodePreview');

  function updateCodePreview() {
    if (!codePreview) return;
    const col = colorSelect.value;
    const spd = speedSelect.value;
    const msg = textInput.value.trim() || 'Dalla Chiesa 1';
    codePreview.innerHTML = `<span class="code-kw">const</span> razzo = {<br>  colore: <span class="code-str">"${col}"</span>,<br>  spinta: <span class="code-str">"${spd}"</span>,<br>  nome: <span class="code-str">"${msg.replace(/</g, '&lt;')}"</span><br>};<br><span class="code-fn">lanciaRazzo</span>(razzo);`;
  }

  [colorSelect, speedSelect, textInput].forEach(el => {
    el.addEventListener('input', updateCodePreview);
  });

  runBtn.addEventListener('click', () => {
    const col = colorSelect.value;
    const spd = speedSelect.value;
    const msg = textInput.value.trim() || 'Dalla Chiesa 1';

    updateCodePreview();
    svgBody.setAttribute('fill', col);
    label.textContent = msg;
    label.style.borderColor = col;

    const lift = spd === 'turbo' ? '-58px' : spd === 'media' ? '-34px' : '-16px';
    const duration = spd === 'turbo' ? '0.35s' : spd === 'media' ? '0.65s' : '1.1s';

    actor.style.transitionDuration = duration;
    actor.style.transform = `translateY(${lift}) scale(1.08)`;

    setTimeout(() => {
      actor.style.transform = 'translateY(0) scale(1)';
    }, 1100);
  });

  updateCodePreview();
}

/* --------------------------------------------------------------------------
   5. MINI-LAB 2: PASSWORD STRENGTH & HACKER SIMULATOR
   -------------------------------------------------------------------------- */
function initPasswordSimulator() {
  const input = document.getElementById('pwdSimInput');
  if (!input) return;

  const fill = document.getElementById('pwdStrengthFill');
  const timeOut = document.getElementById('pwdCrackTime');
  const tipOut = document.getElementById('pwdHackerTip');

  input.addEventListener('input', () => {
    const pwd = input.value;
    if (!pwd) {
      fill.style.width = '0%';
      timeOut.textContent = 'In attesa di input...';
      tipOut.textContent = 'Scrivi una password inventata (non usare la tua vera password!).';
      return;
    }

    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;

    const combinations = Math.pow(pool || 1, pwd.length);
    const guessesPerSec = 1e10; // 10 miliardi di tentativi/sec
    const seconds = combinations / guessesPerSec;

    if (seconds < 1) {
      fill.style.width = '20%';
      fill.style.backgroundColor = 'var(--neon-red)';
      timeOut.textContent = 'Meno di 1 secondo! ⚡';
      tipOut.textContent = 'Troppo corta o prevedibile: un bot la indovina all’istante. Aggiungi numeri e simboli!';
    } else if (seconds < 3600 * 24) {
      fill.style.width = '48%';
      fill.style.backgroundColor = 'var(--neon-amber)';
      timeOut.textContent = 'Qualche ora ⏱️';
      tipOut.textContent = 'Meglio, ma un computer potente può ancora forzarla in giornata. Prova ad allungarla a 12+ caratteri.';
    } else if (seconds < 3600 * 24 * 365 * 50) {
      fill.style.width = '78%';
      fill.style.backgroundColor = 'var(--neon-cyan)';
      timeOut.textContent = 'Diversi anni 🛡️';
      tipOut.textContent = 'Ottimo livello! Un hacker ci metterebbe anni. Aggiungi un simbolo speciale per renderla blindata.';
    } else {
      fill.style.width = '100%';
      fill.style.backgroundColor = 'var(--neon-green)';
      timeOut.textContent = 'Secoli / Millenni 🔒';
      tipOut.textContent = 'Livello Cyber-Pro! Nemmeno un supercomputer riuscirebbe a craccarla con la forza bruta.';
    }
  });
}

/* --------------------------------------------------------------------------
   6. MINI-LAB 3: ADDESTRA IL BOT IA (SPAM VS SICURO)
   -------------------------------------------------------------------------- */
function initAITrainer() {
  const trainBtns = document.querySelectorAll('[data-train-sample]');
  const testBtns = document.querySelectorAll('[data-test-sample]');
  const statusEl = document.getElementById('aiTrainStatus');
  const resultEl = document.getElementById('aiTestResult');
  if (!trainBtns.length || !statusEl) return;

  let trainedCount = 0;
  const trainedSet = new Set();

  trainBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.trainSample;
      if (!trainedSet.has(id)) {
        trainedSet.add(id);
        trainedCount++;
        btn.classList.add('active');
        btn.style.borderColor = 'var(--neon-green)';
        btn.style.color = 'var(--neon-green)';
      }

      const pct = Math.round((trainedCount / trainBtns.length) * 100);
      statusEl.innerHTML = `Addestramento modello: <strong>${trainedCount}/${trainBtns.length} esempi (${pct}%)</strong>`;

      if (trainedCount === trainBtns.length && resultEl) {
        resultEl.innerHTML = '<span style="color:var(--neon-green);">Modello pronto! Ora clicca su un messaggio di test qui sotto per vedere come lo classifica l’IA.</span>';
      }
    });
  });

  testBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!resultEl) return;
      if (trainedCount < 3) {
        resultEl.innerHTML = '<span style="color:var(--neon-amber);">⚠️ Il bot ha ancora pochi dati! Clicca almeno 3 esempi di addestramento prima di testarlo.</span>';
        return;
      }

      const label = btn.dataset.expected;
      const confidence = trainedCount === trainBtns.length ? '98%' : '76%';
      if (label === 'phishing') {
        resultEl.innerHTML = `<span style="color:var(--neon-red);">🚨 RILEVATO SPAM / PHISHING (Confidenza IA: ${confidence})</span> — Contiene parole esca ("gratis", link sospetti, urgenza).`;
      } else {
        resultEl.innerHTML = `<span style="color:var(--neon-green);">✅ MESSAGGIO SICURO (Confidenza IA: ${confidence})</span> — Linguaggio naturale e nessuna richiesta sospetta.`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. PAGINA "LABORATORI": FILTRO PROGETTI & MODALE DETTAGLI
   -------------------------------------------------------------------------- */
const STUDENT_PROJECTS = {
  proj1: {
    title: 'Cyber Space Defender',
    tag: 'Python / Pygame',
    authors: 'Studenti 3ª B Informatica — A.S. 2024/2025',
    desc: 'Videogioco arcade 2D sviluppato interamente in Python con libreria Pygame. Il giocatore pilota una navicella che deve schivare asteroidi e bloccare pacchetti malevoli prima che raggiungano il server centrale.',
    tech: 'Python 3, Pygame, gestione collisioni, sprite animati, classifica punteggi su file JSON.'
  },
  proj2: {
    title: 'RoboMaze Explorer',
    tag: 'mBot2 / Robotica',
    authors: 'Studenti 3ª A e 4ª A — A.S. 2024/2025',
    desc: 'Robot autonomo programmato con mBlock/Python su piattaforma mBot2 capace di esplorare un labirinto sconosciuto usando sensori a ultrasuoni e giroscopio integrato per calcolare la via d’uscita senza urtare le pareti.',
    tech: 'Makeblock mBot2, CyberPi, sensore ultrasuoni, algoritmo wall-follower in Python.'
  },
  proj3: {
    title: 'Pixel Escape: Dalla Chiesa Edition',
    tag: 'Python / Pygame',
    authors: 'Studenti 4ª B Informatica — A.S. 2025/2026',
    desc: 'Platform puzzle ambientato nei laboratori della scuola: per aprire ogni porta bisogna raccogliere le chiavi binarie evitando bug e glitch.',
    tech: 'Python, Pygame, tilemap custom, fisica dei salti e colonna sonora chiptune.'
  },
  proj4: {
    title: 'Smart Line & Color Sorter',
    tag: 'mBot2 / Robotica',
    authors: 'Studenti 3ª B — A.S. 2025/2026',
    desc: 'Sistema robotico ispirato alla logistica industriale: segue un tracciato grazie ai sensori quad-RGB e riconosce il colore dei blocchi per smistarli nelle aree corrette.',
    tech: 'mBot2, sensore Quad RGB, controllo PID base, logica decisionale.'
  }
};

function initLabProjects() {
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  const cards = document.querySelectorAll('[data-project-cat]');
  const modal = document.getElementById('projectModal');
  const closeModal = document.getElementById('closeProjectModal');

  if (filterBtns.length && cards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.projectFilter;

        cards.forEach(card => {
          if (filter === 'all' || card.dataset.projectCat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = STUDENT_PROJECTS[btn.dataset.openProject];
      if (!data || !modal) return;

      document.getElementById('modalProjTag').textContent = data.tag;
      document.getElementById('modalProjTitle').textContent = data.title;
      document.getElementById('modalProjAuthors').textContent = data.authors;
      document.getElementById('modalProjDesc').textContent = data.desc;
      document.getElementById('modalProjTech').textContent = data.tech;
      modal.classList.add('open');
    });
  });

  if (closeModal && modal) {
    closeModal.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}

/* --------------------------------------------------------------------------
   8. PAGINA "DOPO IL DIPLOMA": INTERESSI, BIVIO & GLOSSARIO
   -------------------------------------------------------------------------- */
const GLOSSARY_TERMS = {
  diploma: 'È il titolo di studio che ottieni dopo i 5 anni di scuola superiore superando l’Esame di Stato. Ti permette sia di lavorare subito come Perito Informatico sia di iscriverti a qualsiasi Università.',
  universita: 'È il percorso di studi successivo al diploma (Laurea Triennale di 3 anni + eventuale Magistrale di 2 anni) per diventare ingegnere, scienziato dei dati o ricercatore.',
  ingegnere: 'È un professionista che usa matematica, scienza e tecnologia per progettare soluzioni reali: software, reti, robot, aerei, satelliti o impianti.',
  programma: 'È una sequenza di istruzioni scritte in un linguaggio di programmazione (come Python, C++ o Java) che dice al computer esattamente cosa fare.',
  dati: 'Sono informazioni (numeri, testi, immagini, segnali) raccolte ed elaborate dai computer per prendere decisioni, creare app o addestrare l’Intelligenza Artificiale.',
  rete: 'È un insieme di computer, smartphone, router e server collegati tra loro (via cavo o Wi-Fi) per scambiarsi dati e accedere a Internet.',
  ia: 'L’Intelligenza Artificiale è la tecnologia che permette ai computer di riconoscere immagini, capire il linguaggio e imparare dagli esempi.'
};

function initPostDiploma() {
  // Selettore interessi
  const interestChips = document.querySelectorAll('[data-interest]');
  const matchCards = document.querySelectorAll('[data-tags]');

  if (interestChips.length && matchCards.length) {
    interestChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const alreadyActive = chip.classList.contains('active');
        interestChips.forEach(c => c.classList.remove('active'));

        if (alreadyActive) {
          matchCards.forEach(card => {
            card.classList.remove('highlighted-match', 'dimmed-match');
          });
          return;
        }

        chip.classList.add('active');
        const selected = chip.dataset.interest;

        matchCards.forEach(card => {
          const tags = card.dataset.tags.split(',');
          if (tags.includes(selected)) {
            card.classList.add('highlighted-match');
            card.classList.remove('dimmed-match');
          } else {
            card.classList.remove('highlighted-match');
            card.classList.add('dimmed-match');
          }
        });
      });
    });
  }

  // Bivio Università vs Lavoro
  const pathBtns = document.querySelectorAll('[data-pathway]');
  const uniPanel = document.getElementById('panelUniversita');
  const workPanel = document.getElementById('panelLavoro');

  if (pathBtns.length && uniPanel && workPanel) {
    pathBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        pathBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.pathway;
        uniPanel.style.display = target === 'universita' ? 'block' : 'none';
        workPanel.style.display = target === 'lavoro' ? 'block' : 'none';
      });
    });
  }

  // Glossario Interattivo
  const glossChips = document.querySelectorAll('[data-glossary]');
  const glossTitle = document.getElementById('glossaryTermTitle');
  const glossText = document.getElementById('glossaryTermDesc');

  if (glossChips.length && glossTitle && glossText) {
    glossChips.forEach(chip => {
      chip.addEventListener('click', () => {
        glossChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const key = chip.dataset.glossary;
        glossTitle.textContent = chip.textContent;
        glossText.textContent = GLOSSARY_TERMS[key] || '';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   9. PAGINA "CYBER CHALLENGE": 4 LIVELLI SEQUENZIALI + ATTESTATO
   -------------------------------------------------------------------------- */
function initCyberChallenge() {
  const progressBar = document.getElementById('challengeProgressBar');
  const progressText = document.getElementById('challengeProgressText');
  if (!progressBar || !progressText) return;

  const state = { 1: false, 2: false, 3: false, 4: false };

  function updateProgress() {
    const completed = Object.values(state).filter(Boolean).length;
    const pct = completed * 25;
    progressBar.style.width = `${pct}%`;
    progressText.textContent = `${completed}/4 — ${pct}% Completati`;

    if (completed === 4) {
      const cert = document.getElementById('finalCertificate');
      if (cert) {
        cert.classList.add('visible');
        cert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // Livello 1: Binario -> CODE (00011=3 C, 01111=15 O, 00100=4 D, 00101=5 E)
  const checkL1 = document.getElementById('checkLevel1');
  if (checkL1) {
    checkL1.addEventListener('click', () => {
      const val = document.getElementById('inputLevel1').value.trim().toUpperCase();
      const fb = document.getElementById('feedbackLevel1');
      if (val === 'CODE') {
        state[1] = true;
        document.getElementById('level1Card').classList.add('completed');
        fb.innerHTML = '<span style="color:var(--neon-green);">✅ Esatto! Hai decifrato il codice binario. Keyword Livello 1: <strong>CODE</strong> — Inseriscila qui sotto per sbloccare il Livello 2!</span>';
        updateProgress();
      } else {
        fb.innerHTML = '<span style="color:var(--neon-red);">❌ Non ancora! Controlla i pesi binari (16, 8, 4, 2, 1) e la tabella delle lettere.</span>';
      }
    });
  }

  // Sblocco Livello 2 con keyword CODE
  const unlockL2 = document.getElementById('unlockLevel2');
  if (unlockL2) {
    unlockL2.addEventListener('click', () => {
      const key = document.getElementById('keyInput2').value.trim().toUpperCase();
      if (key === 'CODE') {
        const card = document.getElementById('level2Card');
        card.classList.remove('locked');
        card.classList.add('unlocked');
        document.getElementById('lockBox2').style.display = 'none';
        document.getElementById('contentLevel2').style.display = 'block';
      } else {
        document.getElementById('lockMsg2').textContent = 'Keyword errata! Risolvi prima il Livello 1.';
      }
    });
  }

  // Livello 2: Logica Booleana -> Accendere LED (A=ON, B=OFF, C=ON => (A AND NOT B) AND C)
  const swA = document.getElementById('switchA');
  const swB = document.getElementById('switchB');
  const swC = document.getElementById('switchC');
  const led = document.getElementById('logicLed');
  const fb2 = document.getElementById('feedbackLevel2');

  if (swA && swB && swC && led) {
    [swA, swB, swC].forEach(sw => {
      sw.addEventListener('click', () => {
        sw.classList.toggle('on');
        const isOn = sw.classList.contains('on');
        sw.textContent = `${sw.dataset.label}: ${isOn ? 'ON (1)' : 'OFF (0)'}`;

        const a = swA.classList.contains('on');
        const b = swB.classList.contains('on');
        const c = swC.classList.contains('on');

        // Condizione circuito: (A AND NOT B) AND C
        if (a && !b && c) {
          led.classList.add('lit');
          led.textContent = 'LED VERDE: ACCESO (1)';
          state[2] = true;
          document.getElementById('level2Card').classList.add('completed');
          fb2.innerHTML = '<span style="color:var(--neon-green);">💡 Circuito attivo! Hai sbloccato la Keyword del Livello 2: <strong>LOGIC</strong> — Usala per aprire il Livello 3!</span>';
          updateProgress();
        } else {
          led.classList.remove('lit');
          led.textContent = 'LED VERDE: SPENTO (0)';
        }
      });
    });
  }

  // Sblocco Livello 3 con keyword LOGIC
  const unlockL3 = document.getElementById('unlockLevel3');
  if (unlockL3) {
    unlockL3.addEventListener('click', () => {
      const key = document.getElementById('keyInput3').value.trim().toUpperCase();
      if (key === 'LOGIC') {
        const card = document.getElementById('level3Card');
        card.classList.remove('locked');
        card.classList.add('unlocked');
        document.getElementById('lockBox3').style.display = 'none';
        document.getElementById('contentLevel3').style.display = 'block';
      } else {
        document.getElementById('lockMsg3').textContent = 'Keyword errata! Accendi il LED verde nel Livello 2.';
      }
    });
  }

  // Widget Disco di Cesare + Verifica Livello 3 (FBGHU con K=3 indietro -> CYBER)
  const caesarShift = document.getElementById('caesarShift');
  const caesarPreview = document.getElementById('caesarDecodedPreview');
  if (caesarShift && caesarPreview) {
    const cipher = 'FBGHU';
    const updateCaesar = () => {
      const shift = parseInt(caesarShift.value, 10);
      document.getElementById('caesarShiftVal').textContent = shift;
      const decoded = cipher.split('').map(ch => {
        const code = ch.charCodeAt(0) - 65;
        const shifted = (code - shift + 26) % 26;
        return String.fromCharCode(65 + shifted);
      }).join('');
      caesarPreview.textContent = decoded;
    };
    caesarShift.addEventListener('input', updateCaesar);
    updateCaesar();
  }

  const checkL3 = document.getElementById('checkLevel3');
  if (checkL3) {
    checkL3.addEventListener('click', () => {
      const val = document.getElementById('inputLevel3').value.trim().toUpperCase();
      const fb = document.getElementById('feedbackLevel3');
      if (val === 'CYBER') {
        state[3] = true;
        document.getElementById('level3Card').classList.add('completed');
        fb.innerHTML = '<span style="color:var(--neon-green);">🔓 Messaggio decifrato! Keyword Livello 3: <strong>CYBER</strong> — Inseriscila nel Livello 4!</span>';
        updateProgress();
      } else {
        fb.innerHTML = '<span style="color:var(--neon-red);">❌ Parola errata! Usa il cursore del Disco di Cesare impostando spostamento K = 3.</span>';
      }
    });
  }

  // Sblocco Livello 4 con keyword CYBER
  const unlockL4 = document.getElementById('unlockLevel4');
  if (unlockL4) {
    unlockL4.addEventListener('click', () => {
      const key = document.getElementById('keyInput4').value.trim().toUpperCase();
      if (key === 'CYBER') {
        const card = document.getElementById('level4Card');
        card.classList.remove('locked');
        card.classList.add('unlocked');
        document.getElementById('lockBox4').style.display = 'none';
        document.getElementById('contentLevel4').style.display = 'block';
      } else {
        document.getElementById('lockMsg4').textContent = 'Keyword errata! Decifra il messaggio del Livello 3.';
      }
    });
  }

  // Livello 4: Router WAN vs LAN -> HACKER2026
  const checkL4 = document.getElementById('checkLevel4');
  if (checkL4) {
    checkL4.addEventListener('click', () => {
      const choice = document.getElementById('routerPortSelect').value;
      const fb = document.getElementById('feedbackLevel4');
      if (choice === 'WAN') {
        state[4] = true;
        document.getElementById('level4Card').classList.add('completed');
        fb.innerHTML = '<span style="color:var(--neon-green);">🏆 Connessione riuscita! La porta WAN collega il router a Internet. Keyword finale: <strong>HACKER2026</strong>!</span>';
        updateProgress();
      } else {
        fb.innerHTML = '<span style="color:var(--neon-red);">❌ Connessione fallita! La porta LAN collega i PC interni; serve la porta verso la rete esterna.</span>';
      }
    });
  }

  // Personalizzazione nome sull'attestato finale
  const nameInput = document.getElementById('certNameInput');
  const nameDisplay = document.getElementById('certNameDisplay');
  if (nameInput && nameDisplay) {
    nameInput.addEventListener('input', () => {
      nameDisplay.textContent = nameInput.value.trim() || 'IL TUO NOME E COGNOME';
    });
  }
}
