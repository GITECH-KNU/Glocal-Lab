(() => {
  'use strict';

  const D = window.SITE_DATA;
  const WEB = (window.MEMBERS_DATA && window.MEMBERS_DATA.profs) || {};
  const app = document.getElementById('app');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const INST = Object.fromEntries(D.institutes.map((i) => [i.id, i]));
  const INST_SHORT = { knu: '공주대', hanbat: '한밭대', kaist: 'KAIST' };
  const FORM = Object.fromEntries(D.forms.map((f) => [f.id, f]));
  const PROF = Object.fromEntries(D.professors.map((p) => [p.id, { ...(WEB[p.id] || {}), ...p, web: WEB[p.id] || {} }]));
  const ROLE = { postdoc: '박사후연구원', phd: '박사과정', integrated: '석박통합과정', ms: '석사과정', ug: '학부연구생', intern: '인턴', staff: '연구원·직원' };
  const ROLE_ORDER = ['postdoc', 'phd', 'integrated', 'ms', 'ug', 'intern', 'staff'];
  const ROUTES = ['home', 'about', 'research', 'people', 'achievements', 'gallery', 'contact'];
  const TABS = {
    about: [['overview', '사업 개요'], ['consortium', '컨소시엄'], ['governance', '조직 구성'], ['network', '협력 기관']],
    research: [['areas', '연구 분야'], ['infra', '연구 인프라']],
    people: [['faculty', '참여 교수'], ['labs', '연구실 구성원']],
    achievements: [['performance', '운영 성과'], ['recent', '최근 성과'], ['papers', '대표 논문'], ['publications', '논문·학회']]
  };
  const PUB_DATA = window.PUBLICATIONS_DATA || { items: [] };
  const PUB_TYPES = [['ij', '국제 학술지'], ['ic', '국제 학술대회'], ['dj', '국내 학술지'], ['dc', '국내 학술대회']];
  const PUB_TYPE = Object.fromEntries(PUB_TYPES);
  const PUB_ORDER = Object.fromEntries(PUB_TYPES.map(([id], i) => [id, i]));
  const PUB_ALL = { type: 'all', field: 'all', year: 'all', prof: 'all', q: '' };
  const PUB_PAGE = 30; // 논문·학회 목록을 처음에 보여 줄 건수 (‘더 보기’마다 2배씩 추가)
  const REP_PAGE = 8; // 대표 연구실적을 처음에 보여 줄 편수 (‘더 보기’마다 같은 수만큼 추가)
  const PUBS = PUB_DATA.items
    .map((x, i) => {
      const profs = (x.profs || []).filter((id) => PROF[id]);
      return { ...x, i, profs, fields: D.forms.map((f) => f.id).filter((f) => profs.some((id) => PROF[id].team === f)), hay: `${x.title} ${x.authors} ${x.venue}`.toLowerCase() };
    })
    .sort((a, b) => b.year - a.year || PUB_ORDER[a.type] - PUB_ORDER[b.type] || a.i - b.i);
  const HERO = {
    about: ['About', '컨소시엄 소개'],
    research: ['Research', '연구 분야', '소재부품 · 생산설계 · 지능제어 3개 분야의 융합 연구로 친환경 모빌리티의 주행거리 극대화 기술을 개발합니다.'],
    people: ['People', '구성원', '참여교수와 각 연구실의 박사후연구원·대학원생·학부연구생을 소개합니다.'],
    achievements: ['Achievements', '연구 성과'],
    gallery: ['Gallery', '활동 갤러리', 'MOU, 워크샵, 세미나, 협약식 등 컨소시엄 참여 연구소의 주요 활동입니다.'],
    contact: ['Contact', '연락처', '공동연구, 산학협력, 대학원 진학 및 박사후연구원 지원에 관한 문의를 환영합니다.']
  };

  let current = { route: null, tab: null };
  const ui = { profFilter: 'all', labFilter: 'all', labQuery: '', equipFilter: 'all', pubFilter: 'all', galleryFilter: 'all', partnerFilter: 'all', pub: { ...PUB_ALL }, pubLimit: PUB_PAGE, repLimit: REP_PAGE };
  let particleStop = null;

  /* ───────── helpers ───────── */
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n) => Number(n).toLocaleString('ko-KR');
  const photo = (id) => `assets/people/${id}.jpg`;
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const ICON = {
    ext: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></svg>',
    award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.5 14.5-1.5 7 5-3 5 3-1.5-7"/></svg>',
    arrow: '<span class="arrow" aria-hidden="true">→</span>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17.5 9 4.5 9-4.5"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/><circle cx="12" cy="12" r="6.5"/></svg>',
    chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9.5 9.5h5v5h-5z"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/></svg>'
  };
  const FORM_ICON = { M: ICON.layers, P: ICON.gear, I: ICON.chip };
  const instChip = (id) => `<span class="chip ${id}"><span class="dot ${id}"></span>${esc(INST_SHORT[id])}</span>`;
  const profName = (id) => (PROF[id] ? PROF[id].name : '');
  const linkBtn = (l, cls = '') => `<a class="ext-link ${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${ICON.ext}</a>`;
  const primaryLink = (p) => (p.links || []).find((l) => l.type === 'lab') || (p.links || [])[0];

  function sectionHead(kicker, title, lead) {
    return `<div class="section-head reveal"><div><p class="section-kicker">${esc(kicker)}</p>${title ? `<h2 class="section-title small-title">${title}</h2>` : ''}</div>${lead ? `<p class="section-lead">${lead}</p>` : ''}</div>`;
  }
  // 서브페이지 상단 오른쪽 사진 모자이크 – 섹션마다 다른 사진을 원본에 가까운 크기로 보여 줌
  const HERO_ART = {
    about: () => ['tiles', [...D.institutes.map((i) => i.building), ...D.gallery.map((g) => g.img)]],
    research: () => ['tiles', [...D.equipment.map((e) => e.img), ...D.labs.map((l) => l.img)]],
    people: () => ['faces', D.professors.map((p) => photo(p.id))],
    achievements: () => ['covers', D.coverPapers.map((c) => c.img)],
    gallery: () => ['tiles', D.gallery.map((g) => g.img).reverse()],
    contact: () => ['tiles', [...D.institutes.map((i) => i.building), ...D.labs.map((l) => l.img), ...D.gallery.map((g) => g.img)]]
  };
  const ART_COUNT = { tiles: 16, faces: 24, covers: 4 };
  function heroArt(route) {
    const [kind, imgs] = HERO_ART[route]();
    const list = imgs.length ? Array.from({ length: ART_COUNT[kind] }, (_, i) => imgs[i % imgs.length]) : [];
    return `<div class="sub-hero-art art-${kind}" aria-hidden="true">${list.map((src, i) => `<img src="${esc(src)}" alt="" style="--i:${i}" />`).join('')}</div>`;
  }
  function subHero(route) {
    const [kicker, title, lead] = HERO[route];
    return `<section class="sub-hero sub-hero-${route}">${heroArt(route)}<div class="container"><p class="section-kicker">${esc(kicker)}</p><h1>${esc(title)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ''}</div></section>`;
  }
  function tabBar(route, active) {
    if (!TABS[route]) return '';
    return `<nav class="sub-tabs" aria-label="하위 메뉴">${TABS[route].map(([id, label]) => `<a class="sub-tab ${id === active ? 'is-active' : ''}" href="#${route}/${id}" ${id === active ? 'aria-current="page"' : ''}>${esc(label)}</a>`).join('')}</nav>`;
  }

  /* ───────── routing ───────── */
  function parseHash() {
    const [r, t] = (location.hash || '#home').slice(1).split('/');
    const route = ROUTES.includes(r) ? r : 'home';
    const tabs = TABS[route];
    const tab = tabs ? (tabs.some(([id]) => id === t) ? t : tabs[0][0]) : null;
    return { route, tab };
  }

  function render() {
    const next = parseHash();
    const sameRoute = next.route === current.route;
    if (sameRoute && next.tab === current.tab) return;
    const first = current.route === null;
    current = next;
    const update = sameRoute && TABS[next.route] ? () => swapTab(next) : () => swapPage(next);
    // 페이지·탭 전환은 View Transitions API로 크로스페이드 (미지원 브라우저·모션 줄이기 설정은 즉시 교체)
    if (!first && document.startViewTransition && !reducedMotion.matches) document.startViewTransition(update);
    else update();
  }
  function swapTab(next) {
    const nav = app.querySelector('.sub-tabs');
    if (nav) nav.outerHTML = tabBar(next.route, next.tab);
    const panel = app.querySelector('[data-panel]');
    panel.innerHTML = renderPanel(next.route, next.tab);
    afterRender(panel);
  }
  function swapPage(next) {
    if (particleStop) { particleStop(); particleStop = null; }
    let html;
    if (next.route === 'home') html = renderHome();
    else html = subHero(next.route) + tabBar(next.route, next.tab) + `<div data-panel>${renderPanel(next.route, next.tab)}</div>`;
    app.innerHTML = html;
    document.querySelectorAll('[data-nav] a').forEach((a) => a.classList.toggle('is-active', a.dataset.route === next.route));
    document.title = next.route === 'home' ? 'GITECH | 국립공주대학교 글로벌생산제조기술연구소' : `${HERO[next.route][1]} | GITECH`;
    window.scrollTo({ top: 0, behavior: 'auto' });
    afterRender(app);
    if (next.route === 'home') initParticles();
    window.dispatchEvent(new Event('scroll'));
  }

  function renderPanel(route, tab) {
    switch (route) {
      case 'about': return { overview: aboutOverview, consortium: aboutConsortium, governance: aboutGovernance, network: aboutNetwork }[tab]();
      case 'research': return { areas: researchAreas, infra: researchInfra }[tab]();
      case 'people': return { faculty: peopleFaculty, labs: peopleLabs }[tab]();
      case 'achievements': return { performance: achPerformance, recent: achRecent, papers: achPapers, publications: achPublications }[tab]();
      case 'gallery': return renderGallery();
      case 'contact': return renderContact();
      default: return '';
    }
  }

  /* ───────── HOME ───────── */
  function renderHome() {
    const stats = D.stats.map((s) => `<div class="stat"><div class="stat-value"><span data-count="${s.value}">0</span><small>${esc(s.unit)}</small></div><div class="stat-label">${esc(s.label)}</div></div>`).join('');
    const insts = D.institutes.map((i) => `
      <article class="inst-card reveal">
        <div class="inst-card-media" style="background-image:url('${esc(i.building)}')">
          <span class="inst-letter">${esc(i.letter)}</span>
          <img class="inst-logo" src="${esc(i.logo)}" alt="${esc(i.univ)}" />
        </div>
        <div class="inst-card-stripe bg-${i.id}"></div>
        <div class="inst-card-body">
          <span class="univ">${esc(i.univ)} · ${esc(i.role)}</span>
          <h3>${esc(i.name)}</h3>
          <div><span class="chip ${i.id}">${esc(i.spec)} · ${esc(i.specEn)}</span></div>
          <p>${esc(i.vision)}</p>
          <div class="inst-mini-stats">
            <div><b>${i.papers}</b><span>SCI(E) 논문</span></div>
            <div><b>${i.patents}</b><span>특허</span></div>
            <div><b>${i.faculty}<small>명</small></b><span>전임교원</span></div>
          </div>
        </div>
      </article>`).join('');
    const news = D.news.slice(0, 4).map((n) => `<a class="news-item" href="#achievements/recent"><span class="tag">${esc(n.type)}</span><span><b>${esc(n.title)}</b><span class="meta">${esc(n.date)}</span></span></a>`).join('');
    const papersHome = D.recentPapers.slice().sort((a, b) => b.if - a.if).slice(0, 4).map((p) => `<a class="news-item" href="#achievements/recent"><span class="tag">IF ${p.if}</span><span><b>${esc(p.title || p.journal)}</b><span class="meta">${p.title ? `${esc(p.journal)} · ` : ''}${esc(p.date)} · ${esc(profName(p.who))} 교수 연구팀</span></span></a>`).join('');
    const faces = D.professors.map((p) => `<a class="face" href="#people/faculty" data-prof="${p.id}"><img src="${photo(p.id)}" alt="${esc(p.name)} 교수" loading="lazy" /><b>${esc(p.name)}</b><span><span class="dot ${p.inst}"></span>${esc(INST_SHORT[p.inst])}</span></a>`).join('');
    const ia = D.institutes;
    return `
      <section class="hero" id="home">
        <canvas class="hero-particles" data-particles aria-hidden="true"></canvas>
        <div class="hero-content">
          <p class="hero-label"><span class="pill">국립공주대학교</span> Global Institute of Manufacturing Technology</p>
          <h1 class="hero-title"><span>GITECH</span></h1>
          <p class="hero-subtitle">글로벌생산제조기술연구소</p>
          <p class="hero-copy">모빌리티 분야 첨단 생산제조 기술 연구를 선도하는 국립공주대학교 연구소입니다. <span class="nowrap-line">국립한밭대학교 · KAIST와 함께 글로컬랩 ‘주행거리 극대화 친환경 모빌리티 컨소시엄’을 주관합니다.</span></p>
          <div class="hero-actions">
            <a class="btn primary" href="#research">연구 분야 보기 ${ICON.arrow}</a>
            <a class="btn ghost" href="#achievements">연구 성과</a>
          </div>
          <div class="hero-insts">${ia.map((i) => `<span class="hero-inst"><img src="${esc(i.logo)}" alt="" />${esc(i.univ)}<small>${esc(i.name)} · ${esc(i.spec)}</small></span>`).join('')}</div>
        </div>
        <div class="scroll-indicator" aria-hidden="true"><span></span>Scroll</div>
      </section>

      <section class="stats-band"><div class="container">
        <div class="stats-grid reveal">${stats}</div>
        <p class="stats-note">컨소시엄 3개 연구소 합계 · 2026년 기준</p>
      </div></section>

      <section class="section"><div class="container">
        <div class="inst-grid">${insts}</div>
      </div></section>

      <section class="section tint"><div class="container">
        ${convergence()}
      </div></section>

      <section class="section highlight-band"><div class="container">
        <div class="home-split">
          <div class="panel reveal">
            <p class="section-kicker">Latest</p>
            <h3>최근 성과</h3>
            <div class="news-list">${news}</div>
            <a class="btn ghost" href="#achievements/recent">성과 전체 보기 ${ICON.arrow}</a>
          </div>
          <div class="panel reveal">
            <p class="section-kicker">Publications</p>
            <h3>2026년 SCI(E) 게재 논문</h3>
            <div class="news-list">${papersHome}</div>
            <a class="btn ghost" href="#achievements/papers">대표 논문 보기 ${ICON.arrow}</a>
          </div>
        </div>
      </div></section>

      <section class="section"><div class="container">
        ${sectionHead('People', `참여교수 ${D.professors.length}인`)}
        <div class="face-strip reveal">${faces}</div>
        <div class="btn-row reveal">
          <a class="btn secondary" href="#people/faculty">참여 교수 ${ICON.arrow}</a>
          <a class="btn secondary" href="#people/labs">연구실 구성원 ${ICON.arrow}</a>
        </div>
      </div></section>

      <section class="partner-band" aria-label="협력 기관">
        <p class="partner-label">Partners · 국내외 협력 기관 ${D.partners.length}곳</p>
        <div class="partner-marquee"><div class="partner-track">${[0, 1].map((k) => `<div class="partner-set"${k ? ' aria-hidden="true"' : ''}>${D.partners.map((p) => `<span class="partner-plate">${partnerLogo(p)}</span>`).join('')}</div>`).join('')}</div></div>
        <p class="partner-more"><a href="#about/network">협력 기관 전체 보기 ${ICON.arrow}</a></p>
      </section>`;
  }

  /* 홈 – 3대 연구 분야 융합 다이어그램: 세 원이 겹치는 중심에 공동 목표 */
  const VENN = { x: 300, y: 290, d: 112, r: 158, deg: { P: -90, M: 150, I: 30 } };
  function vennPt(deg, dist) {
    const a = (deg * Math.PI) / 180;
    return [VENN.x + dist * Math.cos(a), VENN.y + dist * Math.sin(a)].map((v) => Math.round(v * 10) / 10);
  }
  function convergence() {
    const { x, y } = VENN;
    // 원 → 중심 광채 → 라벨 순으로 그려야 겹침 영역이 밝게 보임. 같은 data-f끼리 강조/흐림 처리
    const layer = (draw) => D.forms.map((f) => `<g class="venn-f" data-f="${f.id}" style="--c: var(--${f.inst}); --ci: var(--${f.inst}-ink)">${draw(f, VENN.deg[f.id])}</g>`).join('');
    const circles = layer((f, deg) => { const [cx, cy] = vennPt(deg, VENN.d); return `<circle class="venn-c" cx="${cx}" cy="${cy}" r="${VENN.r}" />`; });
    const labels = layer((f, deg) => {
      const [lx, ly] = vennPt(deg, 178);
      const [sx, sy] = vennPt(deg, 104);
      const [ex, ey] = vennPt(deg, 72);
      return `<line class="venn-spoke" x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" /><circle class="venn-dot" cx="${sx}" cy="${sy}" r="3.5" />
        <g class="venn-label"><circle class="venn-badge" cx="${lx}" cy="${ly - 46}" r="21" />${FORM_ICON[f.id].replace('<svg ', `<svg x="${lx - 12}" y="${ly - 58}" width="24" height="24" `)}
          <text class="venn-name" x="${lx}" y="${ly + 8}">${esc(f.name)}</text>
          <text class="venn-en" x="${lx}" y="${ly + 30}">${esc(f.en.toUpperCase())}</text>
          <text class="venn-inst" x="${lx}" y="${ly + 50}">${esc(INST_SHORT[f.inst])} 특화</text></g>`;
    });
    const svg = `<svg class="venn" viewBox="30 10 540 510" role="img" aria-label="소재부품 · 생산설계 · 지능제어 세 분야가 겹치는 중심에 공동 목표 ‘주행거리 극대화’가 있는 융합 구조도">
      <defs><radialGradient id="venn-glow"><stop offset="0" stop-color="#fff" stop-opacity=".95" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></radialGradient></defs>
      ${circles}
      <circle cx="${x}" cy="${y}" r="122" fill="url(#venn-glow)" />
      ${labels}
      <circle class="venn-ring" cx="${x}" cy="${y}" r="78" />
      <circle class="venn-hub" cx="${x}" cy="${y}" r="64" />
      <text class="venn-hub-k" x="${x}" y="${y - 22}">GOAL</text>
      <text class="venn-hub-t" x="${x}" y="${y + 4}">주행거리</text>
      <text class="venn-hub-t" x="${x}" y="${y + 27}">극대화</text>
    </svg>`;
    const rows = D.forms.map((f) => {
      const team = D.professors.filter((p) => p.team === f.id);
      const shown = team.slice(0, 5);
      return `<a class="conv-row" href="#research/areas" data-f="${f.id}" style="--c: var(--${f.inst})">
        <span class="conv-icon">${FORM_ICON[f.id]}</span>
        <span class="conv-body">
          <span class="conv-head"><b>${esc(f.name)}</b><small>${esc(f.en)}</small></span>
          <span class="conv-tags">${INST[f.inst].focus.map((k) => `<span>${esc(k)}</span>`).join('')}</span>
          <span class="conv-team"><span class="avatars">${shown.map((p) => `<img src="${photo(p.id)}" alt="" loading="lazy" />`).join('')}${team.length > shown.length ? `<i>+${team.length - shown.length}</i>` : ''}</span>참여교수 ${team.length}인 · ${esc(INST[f.inst].univ)}</span>
        </span>
        <span class="conv-arrow" aria-hidden="true">→</span>
      </a>`;
    }).join('');
    return `<div class="conv reveal">
      <figure class="conv-figure">${svg}</figure>
      <div class="conv-list">${rows}<a class="btn secondary conv-cta" href="#research/areas">연구 분야 자세히 ${ICON.arrow}</a></div>
    </div>`;
  }

  /* ───────── ABOUT ───────── */
  // 사업 단계 일정 – 'YYYY.MM'을 월 번호로 바꿔 전체 기간 대비 위치(%)를 계산
  const monthNo = (ym) => { const [y, m] = ym.split('.').map(Number); return y * 12 + m - 1; };
  function phaseTimeline() {
    const ph = D.meta.phases || [];
    if (!ph.length) return '';
    const start = monthNo(ph[0].start);
    const end = monthNo(ph[ph.length - 1].end) + 1;
    const pct = (n) => Math.round(((n - start) / (end - start)) * 1000) / 10;
    const now = new Date();
    const nowNo = now.getFullYear() * 12 + now.getMonth() + (now.getDate() - 1) / 31;
    const years = [];
    for (let y = Math.floor(start / 12) + 1; y * 12 < end; y += 1) years.push(y);
    const at = pct(nowNo);
    const nowMark = nowNo >= start && nowNo < end
      ? `<span class="phase-now${at > 80 ? ' at-end' : at < 20 ? ' at-start' : ''}" style="--at:${at}%"><em>현재 · ${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}</em></span>` : '';
    return `<div class="reveal">
      <h3 class="block-title">추진 일정</h3>
      <p class="block-sub">${esc(D.meta.period)}</p>
      <div class="phase-chart">
        <div class="phase-track">${ph.map((x) => {
          const a = monthNo(x.start); const b = monthNo(x.end) + 1;
          const live = nowNo >= a && nowNo < b;
          return `<div class="phase${live ? ' is-current' : ''}" style="--from:${pct(a)}%;--to:${pct(b)}%"><b>${esc(x.name)}${live ? ' <i>진행 중</i>' : ''}</b><span>${esc(x.start)} – ${esc(x.end)}</span><small>${Math.round(((b - a) / 12) * 10) / 10}년</small></div>`;
        }).join('')}${nowMark}</div>
        <div class="phase-years" aria-hidden="true">${years.map((y) => `<span style="--at:${pct(y * 12)}%">${y}</span>`).join('')}</div>
      </div>
    </div>`;
  }
  function aboutOverview() {
    const m = D.meta;
    return `<section class="section"><div class="container stack-lg">
      <div class="statement-box reveal">
        <p class="section-kicker">연구개발과제 · ${esc(m.projectName)}</p>
        <h2>“${esc(m.mission)}”</h2>
        <p>국립공주대학교(생산설계) · 국립한밭대학교(소재부품) · KAIST(지능제어)가 컨소시엄을 구성하여 지역 제조산업과 첨단 R&D를 결합한 전주기 통합형 ‘글로컬 모빌리티 연구개발 플랫폼’을 구축합니다.</p>
      </div>
      ${phaseTimeline()}
      <div class="reveal">
        <h3 class="block-title">사업 정보</h3>
        <table class="info-table">
          <tr><th>사업명</th><td>${esc(m.program)}</td></tr>
          <tr><th>학문분야</th><td>${esc(m.field)}</td></tr>
          <tr><th>연구개발과제명</th><td>${esc(m.projectName)}</td></tr>
          <tr><th>연구책임자</th><td>${esc(m.pi)}</td></tr>
          <tr><th>컨소시엄</th><td>${D.institutes.map((i) => `${instChip(i.id)} ${esc(i.name)} (${esc(i.spec)})`).join('<br>')}</td></tr>
          <tr><th>사업기간</th><td>${esc(m.period)}</td></tr>
        </table>
      </div>
    </div></section>`;
  }

  function aboutConsortium() {
    // 연구소 바로가기 – 하나를 고르면 해당 연구소로 이동하고 나머지는 흐리게
    const nav = D.institutes.map((i) => `<button type="button" class="inst-link" style="--c: var(--${i.id})" data-inst-pick="${i.id}" aria-pressed="false"><img src="${esc(i.logo)}" alt="" /><span><b>${esc(i.name)}</b><small>${esc(i.univ)} · ${esc(i.spec)}</small></span></button>`).join('');
    const blocks = D.institutes.map((i) => `
      <article class="inst-detail reveal" style="--c: var(--${i.id})" data-inst-block="${i.id}">
        <div class="inst-detail-side">
          <img class="building" src="${esc(i.building)}" alt="${esc(i.spaceWhere)}" loading="lazy" />
          <div class="side-head"><img src="${esc(i.logo)}" alt="" /><div><h3>${esc(i.name)}</h3><div class="en">${esc(i.univ)} · ${esc(i.nameEn)}</div></div></div>
          <span class="chip ${i.id}">${esc(i.spec)} (${esc(i.specEn)}) · ${esc(i.role)}</span>
          <div class="kv-grid">
            <div class="kv"><b>${i.faculty}명</b><span>전임교원</span></div>
            <div class="kv"><b>${i.researchers}명</b><span>연구인력</span></div>
            <div class="kv"><b>${fmt(i.space)}㎡</b><span>연구공간 (${i.spacePy}평)</span></div>
            <div class="kv"><b>${i.equipment}종</b><span>연구장비</span></div>
          </div>
        </div>
        <div class="inst-detail-main">
          <h4>Vision</h4>
          <p class="vision">${esc(i.vision)}</p>
          <div class="detail-cols">
            <div><h4>설립 목적 및 비전</h4><ul>${i.purposes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
            <div><h4>연구 특화 분야</h4><ul>${i.focus.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
            <div><h4>대학/연구소 국책과제 수행실적</h4><ul>${i.projects.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
            <div><h4>지역기반 성과창출 및 산학협력</h4><ul>${i.regional.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
            <div><h4>주요성과 및 강점</h4><ul><li>${esc(i.strengths)}</li><li>${esc(i.region)}</li></ul></div>
          </div>
        </div>
      </article>`).join('');
    return `<section class="section"><div class="container" data-inst-root>
      ${sectionHead('Consortium', '참여 연구소')}
      <div class="inst-nav reveal" role="group" aria-label="참여 연구소 바로가기">${nav}</div>
      ${blocks}
    </div></section>`;
  }

  function aboutGovernance() {
    const head = (inst) => D.professors.find((p) => p.inst === inst && /소장/.test(p.role || ''));
    // 기술연구그룹(행)이 연구소(열)를 가로지르는 구조라 트리 대신 매트릭스로 표시
    const cell = (f, i) => {
      const ps = D.professors.filter((p) => p.team === f.id && p.inst === i.id);
      return `<div class="om-cell" data-inst="${esc(INST_SHORT[i.id])}">${ps.length ? ps.map((p) => `<button type="button" class="om-prof" data-prof="${p.id}"><img src="${photo(p.id)}" alt="" loading="lazy" /><span>${esc(p.name)}</span></button>`).join('') : '<span class="om-empty">—</span>'}</div>`;
    };
    return `<section class="section"><div class="container">
      ${sectionHead('Organization', '조직 구성')}
      <div class="org reveal">
        <div class="org-node top"><b>총괄 · 연구책임자</b><span>이동경 교수 (국립공주대학교)</span></div>
        <div class="org-vline"></div>
        <div class="org-matrix">
          <div class="om-corner">기술연구그룹 <span>×</span> 참여 연구소</div>
          ${D.institutes.map((i) => { const h = head(i.id); return `<div class="om-col" style="--c: var(--${i.id})"><b>${esc(i.name)}</b><span>${esc(i.univ)} · ${esc(i.spec)}</span>${h ? `<span>소장 ${esc(h.name)} 교수</span>` : ''}</div>`; }).join('')}
          ${D.forms.map((f) => `<div class="om-row" style="--c: var(--${f.inst})"><span class="om-icon">${FORM_ICON[f.id]}</span><span><b>${esc(f.name)}</b><small>기술연구그룹 · ${D.professors.filter((p) => p.team === f.id).length}인</small></span></div>${D.institutes.map((i) => cell(f, i)).join('')}`).join('')}
        </div>
      </div>
    </div></section>`;
  }

  /* 협력 기관 (data/site-data.js partners) – 지역별 묶음, 로고가 없으면 이니셜 배지 */
  const PARTNER_GROUPS = [['na', 'North America', '북미'], ['eu', 'Europe', '유럽'], ['asia', 'Asia', '아시아'], ['kr', 'Korea · Academia & Research', '국내 대학·연구기관'], ['corp', 'Korea · Industry', '국내 기업']];
  const isIntl = (p) => !['kr', 'corp'].includes(p.group);
  const hasDeal = (p, t) => p.deals.some(([x]) => x === t);
  function partnerMono(p) {
    const words = (p.en || p.name).replace(/[().,·]/g, ' ').split(/[\s–-]+/).filter((w) => w && !/^(of|and|the|at|주식회사)$/i.test(w));
    if (p.abbr) return p.abbr;
    const caps = words.find((w) => /^[A-Z]{2,8}$/.test(w));
    if (caps) return caps;
    if (!/[A-Za-z]/.test(words.join(''))) return words[0].slice(0, 3);
    return words.map((w) => w[0]).join('').toUpperCase().slice(0, 4);
  }
  // logo가 배열이면 여러 로고를 나란히 (예: LBNL · UC Berkeley 공동 LOI)
  const partnerLogo = (p) => (p.logo ? [].concat(p.logo).map((src, i) => `<img src="${esc(src)}" alt="${i ? '' : esc(p.name)}" loading="lazy" />`).join('') : `<span class="partner-mono" role="img" aria-label="${esc(p.name)}">${esc(partnerMono(p))}</span>`);
  function partnerCard(p) {
    const sub = [p.ko || p.en, p.country].filter(Boolean).join(' · ');
    const deals = p.deals.map(([t, y, note]) => `<li><span class="deal ${t.toLowerCase()}">${t}</span>${y ? `<span class="deal-year">${y}</span>` : ''}${note ? `<span class="deal-note">${esc(note)}</span>` : ''}</li>`).join('');
    const [tag, attrs] = p.url ? ['a', ` href="${esc(p.url)}" target="_blank" rel="noopener" title="${esc(p.name)} 홈페이지"`] : ['div', ''];
    return `<${tag} class="partner-card reveal"${attrs}>
      <div class="partner-logo">${partnerLogo(p)}</div>
      <div class="partner-info"><h4>${esc(p.name)}</h4>${sub ? `<p>${esc(sub)}</p>` : ''}<ul class="deal-list">${deals}</ul>${p.note ? `<p class="partner-note">${esc(p.note)}</p>` : ''}</div>
      ${p.url ? `<span class="partner-ext">${ICON.ext}</span>` : ''}
    </${tag}>`;
  }
  function aboutNetwork() {
    const P = D.partners;
    const f = ui.partnerFilter;
    const intl = P.filter(isIntl);
    const byCountry = [...new Set(intl.map((p) => p.country))].map((c) => [c, intl.filter((p) => p.country === c).length]).sort((a, b) => b[1] - a[1]);
    const nDeals = (t) => sum(P.map((p) => p.deals.filter(([x]) => x === t).length));
    const tiles = [['협력 기관', `${P.length}곳`], ['해외 기관', `${intl.length}곳 · ${byCountry.length}개 국가·지역`], ['국내 기관·기업', `${P.length - intl.length}곳`], ['MOU 체결', `${nDeals('MOU')}건`], ['LOI 체결', `${nDeals('LOI')}건`]];
    const filters = [['all', '전체', P.length], ['MOU', 'MOU', P.filter((p) => hasDeal(p, 'MOU')).length], ['LOI', 'LOI', P.filter((p) => hasDeal(p, 'LOI')).length]];
    const list = P.filter((p) => f === 'all' || hasDeal(p, f));
    const groups = PARTNER_GROUPS.map(([id, en, ko]) => [en, ko, list.filter((p) => p.group === id)]).filter(([, , a]) => a.length);
    return `<section class="section"><div class="container">
      ${sectionHead('Partners', '협력 기관')}
      <div class="kpi-sum kpi-5 reveal">${tiles.map(([l, v]) => `<div><b>${v}</b><span>${l}</span></div>`).join('')}</div>
      <p class="partner-countries reveal">${byCountry.map(([c, n]) => `<span>${esc(c)} <b>${n}</b></span>`).join('')}</p>
      <div class="filter-row" data-filter-group="partner">${filters.map(([id, l, n]) => `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${f === id}">${l} <span class="count">${n}</span></button>`).join('')}</div>
      <div class="partner-groups">${groups.map(([en, ko, a]) => `<section class="partner-group"><h3 class="partner-group-title reveal"><small>${esc(en)}</small>${esc(ko)} <span class="title-count">${a.length}</span></h3><div class="partner-grid">${a.map(partnerCard).join('')}</div></section>`).join('')}</div>
    </div></section>`;
  }

  /* ───────── RESEARCH ───────── */
  function areaCard(f) {
    const i = INST[f.inst];
    const profs = D.professors.filter((p) => p.team === f.id);
    return `<article class="area-card reveal" style="--c: var(--${f.inst})">
      <div class="area-icon">${FORM_ICON[f.id]}</div>
      <span class="en">[${f.id}] ${esc(f.en)}</span>
      <h3>${esc(f.name)}</h3>
      <span class="chip ${f.inst}">${esc(INST_SHORT[f.inst])} 특화</span>
      <p>${esc(i.vision)}</p>
      <ul class="check-list">${i.focus.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="area-people">${profs.map((p) => `<button type="button" class="area-person" data-prof="${p.id}"><img src="${photo(p.id)}" alt="" loading="lazy" /><span>${esc(p.name)}<small>${esc(INST_SHORT[p.inst])}</small></span></button>`).join('')}</div>
    </article>`;
  }
  function researchAreas() {
    return `<section class="section"><div class="container">
      ${sectionHead('Research fields', '3대 연구 분야', '세 분야의 전문성을 융합하여 친환경 모빌리티의 주행거리를 극대화하는 핵심기술을 연구합니다. 교수 사진을 누르면 상세 정보를 볼 수 있습니다.')}
      <div class="area-grid">${D.forms.map(areaCard).join('')}</div>
    </div></section>`;
  }

  function researchInfra() {
    const eq = D.equipment.filter((e) => ui.equipFilter === 'all' || e.inst === ui.equipFilter);
    const counts = { all: D.equipment.length, knu: D.equipment.filter((e) => e.inst === 'knu').length, kaist: D.equipment.filter((e) => e.inst === 'kaist').length };
    return `<section class="section"><div class="container stack-lg">
      <div>
        ${sectionHead('Infrastructure', '연구공간 2,808㎡ · 연구장비 136종', '3개 연구소가 보유한 공간과 장비를 하나의 플랫폼으로 통합하여 주행거리 극대화를 위한 전주기 연구를 수행합니다 — 공동 예약 · 공동 분석 · 공동 활용 · 공동 교육.')}
        <div class="space-grid">${D.institutes.map((i) => `<div class="space-card reveal"><img src="${esc(i.building)}" alt="${esc(i.spaceWhere)}" loading="lazy" /><div class="body">${instChip(i.id)}<h4>${esc(i.spaceWhere)}</h4><div class="nums"><div><b>${fmt(i.space)}㎡</b><span>연구/행정공간 (${i.spacePy}평)</span></div><div><b>${i.equipment}종</b><span>연구장비</span></div></div></div></div>`).join('')}</div>
      </div>
      <div>
        <h3 class="block-title reveal">분야별 대표 장비</h3>
        <div class="filter-row" data-filter-group="equip">
          ${[['all', '전체'], ['knu', '국립공주대'], ['kaist', 'KAIST']].map(([id, l]) => `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${ui.equipFilter === id}">${l} <span class="count">${counts[id]}</span></button>`).join('')}
        </div>
        <div class="equip-grid">${eq.map((e) => `<figure class="equip"><img src="${esc(e.img)}" alt="${esc(e.name)}" loading="lazy" /><div><b>${esc(e.name)}</b><span><span class="dot ${e.inst}"></span>${esc(INST_SHORT[e.inst])} · ${esc(e.cat)}</span></div></figure>`).join('')}</div>
        <p class="note-box">${esc(D.equipmentNote)}</p>
      </div>
      <div>
        <h3 class="block-title reveal">전용 실험실</h3>
        <div class="equip-grid">${D.labs.map((l) => `<figure class="equip"><img src="${esc(l.img)}" alt="${esc(l.title)}" loading="lazy" /><div><b>${esc(l.title)}</b><span><span class="dot ${l.inst}"></span>${esc(INST_SHORT[l.inst])}</span></div></figure>`).join('')}</div>
      </div>
    </div></section>`;
  }

  /* ───────── PEOPLE ───────── */
  function profCard(p) {
    const lab = primaryLink(p);
    const n = (p.members || []).length;
    return `<article class="prof-card reveal" data-inst="${p.inst}" data-team="${p.team}">
      <button type="button" class="photo-btn" data-prof="${p.id}" aria-label="${esc(p.name)} 교수 상세 보기">
        <img src="${photo(p.id)}" alt="${esc(p.name)} 교수" loading="lazy" />
        <span class="task-tag">${p.director ? '<span>연구책임자</span>' : ''}<span>${esc(FORM[p.team].name)}</span></span>
        <span class="inst-band bg-${p.inst}"></span>
      </button>
      <div class="body">
        <h3>${esc(p.name)} <small>${esc(p.nameEn || '')}</small></h3>
        <div class="aff">${esc(INST[p.inst].univ)} ${esc(p.dept || '')} ${esc(p.position || '')}</div>
        ${p.lab || p.labEn ? `<div class="lab-name">${esc(p.lab || p.labEn)}</div>` : ''}
        <p class="field">${esc(p.field)}</p>
        <div class="actions">
          ${lab ? `<a class="primary" href="${esc(lab.url)}" target="_blank" rel="noopener">${lab.type === 'lab' ? '연구실 홈페이지' : esc(lab.label)} ${ICON.ext}</a>` : ''}
          <button type="button" data-prof="${p.id}">상세${n ? ` · 구성원 ${n}` : ''}</button>
        </div>
      </div>
    </article>`;
  }
  function peopleFaculty() {
    const dir = PROF['lee-dongkyoung'];
    const list = D.professors.map((p) => PROF[p.id]).filter((p) => {
      const f = ui.profFilter;
      return f === 'all' || p.inst === f || p.team === f;
    });
    const filters = [['all', '전체'], ['knu', '국립공주대'], ['hanbat', '국립한밭대'], ['kaist', 'KAIST'], ['M', '소재부품팀'], ['P', '생산설계팀'], ['I', '지능제어팀']];
    const countOf = (f) => D.professors.filter((p) => f === 'all' || p.inst === f || p.team === f).length;
    return `<section class="section"><div class="container stack-lg">
      <article class="director reveal">
        <img class="director-photo" src="${photo(dir.id)}" alt="이동경 교수" />
        <div>
          <p class="role">${esc(dir.role)}</p>
          <h2>${esc(dir.name)}<small>${esc(dir.nameEn || '')}</small></h2>
          <p class="dept">국립공주대학교 ${esc(dir.dept || '')} ${esc(dir.position || '')} · ${esc(dir.lab || '')} (${esc(dir.labEn || '')})</p>
          <div class="pill-row">${dir.field.split(', ').map((x) => `<span class="info-pill">${esc(x)}</span>`).join('')}</div>
          <div class="link-row">${(dir.links || []).map((l, i) => linkBtn(l, i ? 'alt' : '')).join('')}${dir.email ? `<a class="ext-link alt" href="mailto:${esc(dir.email)}">${ICON.mail} ${esc(dir.email)}</a>` : ''}</div>
        </div>
      </article>
      <div>
        ${sectionHead('Faculty', `참여교수 ${D.professors.length}인`, '사진 또는 ‘상세’를 누르면 연구분야, 홈페이지 링크, 연구실 구성원을 볼 수 있습니다.')}
        <div class="filter-row" data-filter-group="prof">${filters.map(([id, l]) => `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${ui.profFilter === id}">${l} <span class="count">${countOf(id)}</span></button>`).join('')}</div>
        <div class="prof-grid">${list.map(profCard).join('')}</div>
      </div>
    </div></section>`;
  }

  function memberCard(m) {
    return `<div class="member"><b>${esc(m.name)}${m.en ? `<small>${esc(m.en)}</small>` : ''}</b></div>`;
  }
  function labBlock(p, q) {
    const ms = (p.members || []).filter((m) => !q || `${m.name} ${m.en || ''}`.toLowerCase().includes(q));
    const groups = ROLE_ORDER.map((r) => [r, ms.filter((m) => m.role === r)]).filter(([, a]) => a.length);
    const lab = primaryLink(p);
    return `<article class="lab-block reveal">
      <div class="lab-head">
        <img src="${photo(p.id)}" alt="" loading="lazy" />
        <div><h3>${esc(p.lab || p.labEn || `${p.name} 교수 연구실`)}</h3>
          <div class="meta">${instChip(p.inst)}<span>${esc(p.name)} 교수 · ${esc(p.dept || '')}</span>${p.lab && p.labEn ? `<span>${esc(p.labEn)}</span>` : ''}<span class="member-count">구성원 ${(p.members || []).length}명</span></div></div>
        ${lab ? linkBtn({ ...lab, label: lab.type === 'lab' ? '연구실 홈페이지' : lab.label }) : ''}
      </div>
      <div class="lab-body">
        ${groups.length ? groups.map(([r, a]) => `<div class="role-group"><h4>${ROLE[r]} <b>${a.length}</b></h4><div class="member-list">${a.map(memberCard).join('')}</div></div>`).join('')
          : `<p class="lab-empty">${q ? '검색 결과가 없습니다.' : '연구실 홈페이지에 공개된 구성원 정보가 없습니다.'}</p>`}
        ${lab ? `<p class="lab-source">출처: <a href="${esc(lab.url)}" target="_blank" rel="noopener">${esc(lab.url)}</a></p>` : ''}
      </div>
    </article>`;
  }
  function peopleLabs() {
    const q = ui.labQuery.trim().toLowerCase();
    const profs = D.professors.map((p) => PROF[p.id]).filter((p) => ui.labFilter === 'all' || p.inst === ui.labFilter);
    const visible = q ? profs.filter((p) => (p.members || []).some((m) => `${m.name} ${m.en || ''}`.toLowerCase().includes(q)) || p.name.includes(q) || `${p.lab} ${p.labEn}`.toLowerCase().includes(q)) : profs;
    const all = D.professors.flatMap((p) => PROF[p.id].members || []);
    const byRole = (r) => all.filter((m) => m.role === r).length;
    const tiles = [['전체 구성원', all.length], ['박사후연구원', byRole('postdoc')], ['박사·석박통합', byRole('phd') + byRole('integrated')], ['석사과정', byRole('ms')], ['학부연구생·인턴', byRole('ug') + byRole('intern')]];
    return `<section class="section"><div class="container">
      ${sectionHead('Lab members', '연구실 구성원')}
      <div class="kpi-sum kpi-5 reveal">${tiles.map(([l, v]) => `<div><b>${v}명</b><span>${l}</span></div>`).join('')}</div>
      <div class="filter-row" data-filter-group="lab">
        ${[['all', '전체'], ['knu', '국립공주대'], ['hanbat', '국립한밭대'], ['kaist', 'KAIST']].map(([id, l]) => `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${ui.labFilter === id}">${l}</button>`).join('')}
        <input class="search-input" type="search" placeholder="이름 검색" value="${esc(ui.labQuery)}" data-lab-search aria-label="구성원 검색" />
      </div>
      <div data-lab-list>${visible.map((p) => labBlock(p, q)).join('') || '<p class="lab-empty">검색 결과가 없습니다.</p>'}</div>
    </div></section>`;
  }

  /* ───────── ACHIEVEMENTS ───────── */
  function hbarChart(rows, opt = {}) {
    const max = Math.max(...rows.map((r) => r.value));
    return `<div class="hbar-chart">${rows.map((r) => `<div class="hbar-row" data-tip="${esc(`<b>${r.label}</b>${fmt(r.value)}${opt.unit || ''}${r.note ? `<br>${r.note}` : ''}`)}" tabindex="0">
      <span class="lbl">${r.inst ? `<span class="dot ${r.inst}"></span>` : ''}${esc(r.label)}</span>
      <span class="hbar-track"><span class="hbar" style="background:${r.color}" data-w="${(r.value / max) * (opt.scale || 74)}"></span><span class="hbar-val">${fmt(r.value)}${opt.unit && opt.unit.length <= 2 ? esc(opt.unit) : ''}${r.sub ? `<small>${esc(r.sub)}</small>` : ''}</span></span>
    </div>`).join('')}</div>`;
  }
  function chartTable(head, rows) {
    return `<table class="chart-table" hidden data-chart-table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }
  function achPerformance() {
    const I = D.institutes;
    const row = (label, f) => `<tr><th>${label}</th>${I.map((i) => `<td>${f(i)}</td>`).join('')}`;
    const legend = `<div class="legend">${I.map((i) => `<span><i class="bg-${i.id}"></i>${esc(i.univ)}</span>`).join('')}</div>`;
    const metric = (title, sub, key, unit, subF) => `<div class="chart-card reveal"><h4>${title}</h4><p class="chart-sub">${sub}</p>
      ${hbarChart(I.map((i) => ({ label: INST_SHORT[i.id], inst: i.id, value: i[key], color: `var(--${i.id})`, sub: subF ? subF(i) : '' })), { unit })}
      <div class="chart-foot"><span>합계 ${fmt(Math.round(sum(I.map((i) => i[key])) * 10) / 10)}${unit}</span><button type="button" data-toggle-table>표로 보기</button></div>
      ${chartTable(['연구소', title], I.map((i) => [i.univ, `${i[key]}${unit}`]))}</div>`;
    return `<section class="section"><div class="container stack-lg">
      <div>
        ${sectionHead('Track record', '연구소 운영 성과 (최근 4년)')}
        <div class="table-scroll reveal"><table class="compare-table">
          <thead><tr><th>구분</th>${I.map((i) => `<th class="${i.id}">[${esc(i.spec)}] ${esc(i.univ)}<br>${esc(i.name)}</th>`).join('')}<th class="total">컨소시엄</th></tr></thead>
          <tbody>
            ${row('비전', (i) => `<span class="cell-text">${esc(i.vision)}</span>`)}<td class="total">—</td></tr>
            ${row('논문실적', (i) => `<b>${i.papers}</b>편<small>JCR 상위 10% ${i.papersTop}편</small>`)}<td class="total"><b>180</b>편<small>JCR 상위 10% 103편</small></td></tr>
            ${row('특허실적', (i) => `<b>${i.patents}</b>건<small>등록 ${i.patentsReg} / 출원 ${i.patentsApp}</small>`)}<td class="total"><b>276</b>건<small>등록 117 / 출원 159</small></td></tr>
            ${row('참여교원 / 연구인력', (i) => `<b>${i.faculty}</b>명 / <b>${i.researchers}</b>명`)}<td class="total"><b>65</b>명 / <b>219</b>명</td></tr>
            ${row('주요성과 및 강점', (i) => `<span class="cell-text">${esc(i.strengths)}</span>`)}<td class="total">—</td></tr>
            ${row('산학·지역 연계', (i) => `<span class="cell-text">${esc(i.region)}</span>`)}<td class="total">—</td></tr>
          </tbody></table></div>
      </div>
      <div>
        <h3 class="block-title reveal">연구소별 성과 비교</h3>
        ${legend}
        <div class="card-grid c2">
          ${metric('SCI(E) 논문', '최근 4년 · 편 (괄호: JCR 상위 10%)', 'papers', '편', (i) => `상위10% ${i.papersTop}`)}
          ${metric('특허 등록·출원', '건 (괄호: 등록)', 'patents', '건', (i) => `등록 ${i.patentsReg}`)}
        </div>
      </div>
    </div></section>`;
  }

  function achRecent() {
    const news = D.news.map((n) => {
      const [y, mo] = n.date.split('.');
      return `<article class="news-card reveal"><div class="date-badge${mo ? '' : ' year-only'}">${mo ? `<small>${esc(y)}</small>${esc(mo)}월` : esc(y)}</div><div><span class="type">${esc(n.type)}</span><h4>${esc(n.title)}</h4><p>${esc(n.body)}</p></div></article>`;
    }).join('');
    const papers = D.recentPapers.map((p) => `<article class="pub-card reveal"><div class="year-badge"><small>${esc(p.date.split('.')[1] || '')}월</small>${esc(p.date.split('.')[0])}</div><div><h4>${esc(p.title || p.journal)}</h4><p>${p.title ? `<i>${esc(p.journal)}</i> · ` : ''}${esc(profName(p.who))} 교수 연구팀</p></div><div class="metric"><b>IF ${p.if}</b><span class="${/Top/.test(p.jcr) && parseFloat(p.jcr.replace(/[^0-9.]/g, '')) <= 10 ? 'top' : ''}">${esc(p.jcr)}</span></div></article>`).join('');
    return `<section class="section"><div class="container stack-lg">
      <div>
        ${sectionHead('2026 updates', '최근 성과')}
        <div class="news-grid">${news}</div>
      </div>
      <div>
        ${sectionHead('New publications', '2026년 SCI(E) 게재 논문')}
        <div class="pub-list">${papers}</div>
      </div>
    </div></section>`;
  }

  function achPapers() {
    const filters = [['all', '전체'], ['M', '소재부품팀'], ['P', '생산설계팀'], ['I', '지능제어팀']];
    const rows = D.professors.filter((p) => ui.pubFilter === 'all' || p.team === ui.pubFilter).flatMap((p) => (p.pubs || []).map((x) => ({ ...x, p })));
    rows.sort((a, b) => b.year - a.year || (b.if || 0) - (a.if || 0));
    const jcrRank = (jcr) => { const n = parseFloat(String(jcr || '').replace(/[^0-9.]/g, '')); return Number.isFinite(n) ? n : NaN; };
    const shown = rows.slice(0, ui.repLimit);
    const list = shown.map((r) => {
      const top = jcrRank(r.jcr);
      const metric = (r.if != null || r.jcr)
        ? `<div class="metric">${r.if != null ? `<b>IF ${Number(r.if).toFixed(1)}</b>` : ''}${r.jcr ? `<span class="${top <= 10 ? 'top' : ''}">JCR ${esc(r.jcr)}</span>` : ''}</div>`
        : '';
      return `<article class="pub-card reveal"><div class="year-badge"><small>YEAR</small>${r.year}</div><div><h4>${esc(r.journal)}</h4><p>${esc(r.p.name)} 교수 · ${esc(INST_SHORT[r.p.inst])} · ${esc(FORM[r.p.team].name)}</p></div>${metric}</article>`;
    }).join('');
    return `<section class="section"><div class="container stack-lg">
      <div>
        ${sectionHead('Representative papers', '참여교수 SCI(E) 대표 연구실적')}
        <div class="filter-row" data-filter-group="pub">${filters.map(([id, l]) => `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${ui.pubFilter === id}">${l}</button>`).join('')}</div>
        <div class="pub-list">${list}</div>
        ${rows.length > shown.length ? `<div class="pub-more"><button type="button" class="btn secondary" data-rep-more>더 보기 <span>${shown.length} / ${rows.length}편</span></button></div>` : ''}
      </div>
      <div>
        ${sectionHead('Highlights', '생산·설계 분야 주요 게재 학술지')}
        <div class="cover-grid">${D.coverPapers.map((c) => `<figure class="cover reveal"><img src="${esc(c.img)}" alt="${esc(c.journal)} 표지" loading="lazy" /><div><b>${esc(c.journal)}</b><span>IF ${c.if}</span></div></figure>`).join('')}</div>
      </div>
    </div></section>`;
  }

  /* 논문·학회: data/publications-data.js – 유형·분야·연도·교수 필터 */
  const PUB_TEST = {
    type: (x, v) => x.type === v,
    field: (x, v) => x.fields.includes(v),
    year: (x, v) => String(x.year) === v,
    prof: (x, v) => x.profs.includes(v)
  };
  // skip: 해당 필터를 뺀 결과 – 각 버튼의 건수를 다른 필터 기준으로 계산
  function pubSelect(skip) {
    const f = ui.pub;
    const q = f.q.trim().toLowerCase();
    return PUBS.filter((x) => Object.keys(PUB_TEST).every((k) => k === skip || f[k] === 'all' || PUB_TEST[k](x, f[k])) && (!q || x.hay.includes(q)));
  }
  const nameRes = {};
  function profNameRe(id) {
    if (nameRes[id] !== undefined) return nameRes[id];
    const parts = (PROF[id].nameEn || '').replace(/-/g, ' ').trim().split(/\s+/);
    if (parts.length < 2) return (nameRes[id] = null);
    const family = parts.pop();
    const given = parts.join('').split('').join('[-\\s]?');
    // 음절이 구분된 이름(Ki-Bum, Seong Yeon)은 이니셜 표기(K.-B. Park, KB Park)도 강조
    const initials = parts.length > 1 ? `|${parts.map((g) => `${g[0]}\\.?`).join('\\s?-?\\s?')}\\s+${family}` : '';
    return (nameRes[id] = new RegExp(`\\b(?:${given}\\s+${family}|${family},?\\s+${given}${initials})\\b|${PROF[id].name}`, 'gi'));
  }
  // 저자가 많으면 앞 10명 + 뒤쪽 참여교수만 보이고 나머지는 ‘외 N명’
  function pubAuthors(x) {
    const MAX = 10;
    const isProf = (n) => x.profs.some((id) => { const re = profNameRe(id); return re && n.search(re) >= 0; });
    const names = x.authors.split(/,\s*/);
    let text = x.authors;
    if (names.length > MAX + 2) {
      const more = names.slice(MAX).filter(isProf);
      text = `${[...names.slice(0, MAX), ...(more.length ? ['…', ...more] : [])].join(', ')} 외 ${names.length - MAX - more.length}명`;
    }
    return x.profs.reduce((s, id) => { const re = profNameRe(id); return re ? s.replace(re, '<b>$&</b>') : s; }, esc(text));
  }
  function pubItem(x) {
    const link = x.doi ? `https://doi.org/${x.doi}` : x.url;
    return `<article class="pub-entry">
      <div class="pub-tags"><span class="pub-type ${x.type}">${PUB_TYPE[x.type]}</span>${x.fields.map((id) => `<span class="pub-field">${esc(FORM[id].name)}</span>`).join('')}<span class="pub-profs">${x.profs.map((id) => `<button type="button" data-pub-set="prof:${id}" title="${esc(PROF[id].name)} 교수 논문만 보기"><span class="dot ${PROF[id].inst}"></span>${esc(PROF[id].name)} 교수</button>`).join('')}</span></div>
      <h4>${esc(x.title)}</h4>
      ${x.authors ? `<p class="pub-authors">${pubAuthors(x)}</p>` : ''}
      <p class="pub-venue"><i>${esc(x.venue)}</i>, ${x.year}${x.note ? ` · ${esc(x.note)}` : ''}${link ? ` · <a href="${esc(link)}" target="_blank" rel="noopener">${x.doi ? 'DOI' : '링크'} ${ICON.ext}</a>` : ''}</p>
    </article>`;
  }
  function pubFacets() {
    const f = ui.pub;
    const row = (key, label, opts) => {
      const base = pubSelect(key);
      return `<div class="pub-facet"><span class="pub-facet-label">${label}</span><div class="filter-row">${[['all', '전체'], ...opts].map(([id, l]) => {
        const n = id === 'all' ? base.length : base.filter((x) => PUB_TEST[key](x, id)).length;
        const on = f[key] === id;
        return `<button type="button" class="filter-btn" data-pub-set="${key}:${id}" aria-pressed="${on}"${n || on ? '' : ' disabled'}>${esc(l)} <span class="count">${n}</span></button>`;
      }).join('')}</div></div>`;
    };
    const years = [...new Set(PUBS.map((x) => String(x.year)))];
    const pb = pubSelect('prof');
    const profOpts = D.forms.map((fm) => `<optgroup label="${esc(fm.name)}">${D.professors.filter((p) => p.team === fm.id).map((p) => {
      const n = pb.filter((x) => x.profs.includes(p.id)).length;
      return `<option value="${p.id}"${f.prof === p.id ? ' selected' : ''}${n || f.prof === p.id ? '' : ' disabled'}>${esc(p.name)} (${esc(INST_SHORT[p.inst])}) · ${n}</option>`;
    }).join('')}</optgroup>`).join('');
    return row('type', '유형', PUB_TYPES)
      + row('field', '분야', D.forms.map((fm) => [fm.id, fm.name]))
      + row('year', '연도', years.map((y) => [y, y]))
      + `<div class="pub-facet"><span class="pub-facet-label">교수</span><div class="filter-row"><select class="pub-select" data-pub-prof aria-label="참여교수 선택"><option value="all">전체 교수 · ${pb.length}</option>${profOpts}</select></div></div>`;
  }
  function pubSummary(list) {
    const f = ui.pub;
    const active = Object.keys(PUB_ALL).some((k) => f[k] !== PUB_ALL[k]);
    const counts = PUB_TYPES.map(([id, l]) => [l, list.filter((x) => x.type === id).length]).filter(([, n]) => n);
    return `<span><b>${fmt(list.length)}</b>건${active ? ` / 전체 ${fmt(PUBS.length)}건` : ''}</span>${counts.length ? `<span>${counts.map(([l, n]) => `${l} ${n}`).join(' · ')}</span>` : ''}${active ? '<button type="button" class="pub-reset" data-pub-reset>필터 초기화</button>' : ''}<button type="button" class="pub-to-filter" data-pub-top>필터 변경 ↑</button>`;
  }
  function pubList(list) {
    if (!list.length) return '<p class="lab-empty">조건에 맞는 논문이 없습니다.</p>';
    const shown = list.slice(0, ui.pubLimit);
    const years = [...new Set(shown.map((x) => x.year))].map((y) => `<section class="pub-year"><h3>${y}<small>${list.filter((x) => x.year === y).length}건</small></h3>${shown.filter((x) => x.year === y).map(pubItem).join('')}</section>`).join('');
    return years + (list.length > shown.length ? `<div class="pub-more"><button type="button" class="btn secondary" data-pub-more>더 보기 <span>${fmt(shown.length)} / ${fmt(list.length)}건</span></button></div>` : '');
  }
  function achPublications() {
    ui.pubLimit = PUB_PAGE;
    const list = pubSelect();
    const tiles = [['전체', PUBS.length], ...PUB_TYPES.map(([id, l]) => [l, PUBS.filter((x) => x.type === id).length])];
    return `<section class="section"><div class="container" data-pub-root>
      ${sectionHead('Publications', '논문 · 학술대회 실적', '최근 4년')}
      <div class="kpi-sum kpi-5 reveal">${tiles.map(([l, v]) => `<div><b>${fmt(v)}건</b><span>${l}</span></div>`).join('')}</div>
      <div class="pub-filters reveal">
        <div class="pub-facets" data-pub-facets>${pubFacets()}</div>
        <div class="pub-facet"><span class="pub-facet-label">검색</span><div class="filter-row"><input class="search-input" type="search" placeholder="제목 · 저자 · 학술지/학회명" value="${esc(ui.pub.q)}" data-pub-search aria-label="논문 검색" /></div></div>
      </div>
      <p class="pub-summary" data-pub-summary aria-live="polite">${pubSummary(list)}</p>
      <div data-pub-list>${pubList(list)}</div>
      <p class="pub-source">출처: 각 연구실 홈페이지 · OpenAlex · Google Scholar (${esc(PUB_DATA.asOf || '')} 조사). 2023년 이후 게재·발표분이며, 참여교수가 공저한 논문은 한 번만 표시합니다.</p>
    </div></section>`;
  }
  function pubRefresh() {
    const root = app.querySelector('[data-pub-root]');
    if (!root) return;
    ui.pubLimit = PUB_PAGE;
    const list = pubSelect();
    root.querySelector('[data-pub-facets]').innerHTML = pubFacets();
    root.querySelector('[data-pub-summary]').innerHTML = pubSummary(list);
    root.querySelector('[data-pub-list]').innerHTML = pubList(list);
  }
  function showProfPubs(id) {
    ui.pub = { ...PUB_ALL, prof: id };
    if (current.route === 'achievements' && current.tab === 'publications') {
      pubRefresh();
      const s = app.querySelector('[data-pub-search]');
      if (s) s.value = '';
      app.querySelector('[data-pub-root]').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    } else location.hash = '#achievements/publications';
  }

  /* ───────── GALLERY ───────── */
  function renderGallery() {
    const items = D.gallery.map((g, i) => ({ ...g, i })).filter((g) => ui.galleryFilter === 'all' || g.inst === ui.galleryFilter);
    const cnt = (f) => D.gallery.filter((g) => f === 'all' || g.inst === f).length;
    return `<section class="section"><div class="container">
      <div class="filter-row" data-filter-group="gallery">${[['all', '전체'], ['knu', '국립공주대'], ['hanbat', '국립한밭대'], ['kaist', 'KAIST']].map(([id, l]) => `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${ui.galleryFilter === id}">${l} <span class="count">${cnt(id)}</span></button>`).join('')}</div>
      <div class="gallery-grid">${items.map((g) => `<button type="button" class="gallery-card reveal" data-gallery="${g.i}"><img src="${esc(g.img)}" alt="${esc(g.title)}" loading="lazy" /><div class="g-body"><div class="g-meta">${instChip(g.inst)}${g.date ? `<span>${esc(g.date)}</span>` : ''}</div><h3>${esc(g.title)}</h3><p>${esc(g.body)}</p></div></button>`).join('')}</div>
    </div></section>`;
  }

  /* ───────── CONTACT ───────── */
  function renderContact() {
    const c = D.contact;
    return `<section class="section"><div class="container stack-lg">
      <div class="contact-grid">
        <div class="contact-card reveal">
          <p class="section-kicker">Get in touch</p>
          <h2>GITECH</h2>
          <div class="contact-row"><strong>Address</strong><span>${esc(c.address)}</span></div>
          <div class="contact-row"><strong>Office</strong><span>${esc(c.office)}</span></div>
          <div class="contact-row"><strong>E-mail</strong><span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a> (${esc(c.emailLabel)})</span></div>
          <div class="contact-row"><strong>Join us</strong><span>박사후연구원(미니PI) · 대학원생(석·박사) · 학부연구생을 모집합니다. 각 참여 연구실로 문의해 주세요.</span></div>
        </div>
        <div class="map-card reveal"><iframe title="국립공주대학교 천안캠퍼스 지도" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&z=16&output=embed"></iframe></div>
      </div>
      <div>
        ${sectionHead('Institutes', '참여 연구소 연락처', '각 연구소 및 참여 연구실 홈페이지에서 더 자세한 정보를 확인할 수 있습니다.')}
        <div class="card-grid c3">${D.institutes.map((i) => {
          const head = D.professors.find((p) => p.inst === i.id && PROF[p.id].role && /소장/.test(PROF[p.id].role));
          const hp = head ? PROF[head.id] : null;
          return `<div class="card inst-contact reveal" style="--c: var(--${i.id})"><h3>${esc(i.univ)}<br>${esc(i.name)}</h3><p>${esc(i.spaceWhere)}</p>${hp ? `<p class="head"><b>${esc(hp.name)} 교수</b> (${esc(hp.role)})<br>${hp.email ? `<a href="mailto:${esc(hp.email)}">${esc(hp.email)}</a>` : ''}</p>` : ''}</div>`;
        }).join('')}</div>
      </div>
    </div></section>`;
  }

  /* ───────── modal: professor / task ───────── */
  function profModal(id) {
    const p = PROF[id];
    const groups = ROLE_ORDER.map((r) => [r, (p.members || []).filter((m) => m.role === r)]).filter(([, a]) => a.length);
    const nPubs = PUBS.filter((x) => x.profs.includes(id)).length;
    return `<div class="modal-prof">
      <div><img class="photo" src="${photo(p.id)}" alt="${esc(p.name)} 교수" />
        <div class="modal-chips">${instChip(p.inst)}<span class="chip outline">${esc(FORM[p.team].name)}</span></div></div>
      <div>
        ${p.role ? `<p class="modal-role">${esc(p.role)}</p>` : ''}
        <h2>${esc(p.name)}<small>${esc(p.nameEn || '')}</small></h2>
        <p class="modal-aff">${esc(INST[p.inst].univ)} ${esc(p.dept || '')} ${esc(p.position || '')}</p>
        ${p.lab || p.labEn ? `<p class="modal-lab">${esc(p.lab || '')} ${p.lab && p.labEn ? '· ' : ''}${esc(p.labEn || '')}</p>` : ''}
        <div class="link-row">${(p.links || []).map((l, i) => linkBtn(l, i ? 'alt' : '')).join('')}${p.email ? `<a class="ext-link alt" href="mailto:${esc(p.email)}">${ICON.mail} ${esc(p.email)}</a>` : ''}</div>
        <div class="modal-section"><h4>연구분야</h4><p class="modal-field">${esc(p.field)}</p>${(p.keywords || []).length ? `<div class="tag-cloud small">${p.keywords.map((k) => `<span>${esc(k)}</span>`).join('')}</div>` : ''}</div>
        ${(p.pubs || []).length ? `<div class="modal-section"><h4>SCI(E) 대표 연구실적</h4>${p.pubs.map((x) => { const bits = [x.year]; if (x.if != null) bits.push(`IF ${x.if}`); if (x.jcr) bits.push(`JCR ${esc(x.jcr)}`); return `<div class="mini-pub"><b>${esc(x.journal)}</b><span>${bits.join(' · ')}</span></div>`; }).join('')}</div>` : ''}
        ${nPubs ? `<div class="modal-section"><h4>논문·학회 실적</h4><button type="button" class="ext-link" data-pub-prof-link="${p.id}">최근 4년 논문·학회 ${nPubs}건 보기 ${ICON.arrow}</button></div>` : ''}
        <div class="modal-section"><h4>연구실 구성원 (${(p.members || []).length}명)</h4>
          ${groups.length ? groups.map(([r, a]) => `<p class="modal-role-label">${ROLE[r]} ${a.length}</p><div class="member-list">${a.map(memberCard).join('')}</div>`).join('') : '<p class="lab-empty">연구실 홈페이지에 공개된 구성원 정보가 없습니다.</p>'}
        </div>
      </div>
    </div>`;
  }
  /* ───────── overlays ───────── */
  const modal = document.querySelector('[data-modal]');
  const modalContent = modal.querySelector('[data-modal-content]');
  let lastFocus = null;
  function openModal(html) {
    lastFocus = document.activeElement;
    modalContent.innerHTML = html;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    const panel = modal.querySelector('.modal-panel');
    panel.scrollTop = 0;
    panel.focus({ preventScroll: true });
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (!lightbox.classList.contains('is-open')) document.body.classList.remove('no-scroll');
    if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
  }
  const lightbox = document.querySelector('[data-lightbox]');
  const lb = { item: 0, img: 0 };
  const lbImages = (g) => g.images || [g.img];
  function updateLightbox() {
    const g = D.gallery[lb.item];
    const imgs = lbImages(g);
    const el = lightbox.querySelector('[data-lightbox-image]');
    el.src = imgs[lb.img];
    el.alt = g.title;
    lightbox.querySelector('[data-lightbox-count]').textContent = `${INST[g.inst].univ}${g.date ? ' · ' + g.date : ''}${imgs.length > 1 ? ` · ${lb.img + 1}/${imgs.length}` : ''}`;
    lightbox.querySelector('[data-lightbox-title]').textContent = g.title;
    lightbox.querySelector('[data-lightbox-body]').textContent = g.body;
  }
  function openLightbox(i) {
    lastFocus = document.activeElement;
    lb.item = i; lb.img = 0;
    updateLightbox();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    lightbox.querySelector('.lightbox-dialog').focus({ preventScroll: true });
  }
  function stepLightbox(d) {
    const imgs = lbImages(D.gallery[lb.item]);
    if (lb.img + d >= 0 && lb.img + d < imgs.length) { lb.img += d; }
    else { lb.item = (lb.item + d + D.gallery.length) % D.gallery.length; lb.img = d > 0 ? 0 : lbImages(D.gallery[lb.item]).length - 1; }
    updateLightbox();
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
  }

  /* ───────── tooltip ───────── */
  const tooltip = document.querySelector('[data-tooltip]');
  function showTip(el, x, y) {
    tooltip.innerHTML = el.dataset.tip;
    tooltip.classList.add('show');
    const r = tooltip.getBoundingClientRect();
    const left = Math.min(window.innerWidth - r.width - 12, Math.max(12, x + 14));
    const top = y - r.height - 14 < 8 ? y + 18 : y - r.height - 14;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }
  function hideTip() { tooltip.classList.remove('show'); }

  /* ───────── after render: animations & bindings ───────── */
  function afterRender(root) {
    initReveal(root);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      root.querySelectorAll('[data-w]').forEach((el) => { el.style.width = `${el.dataset.w}%`; });
      root.querySelectorAll('[data-h]').forEach((el) => { el.style.height = `${el.dataset.h}%`; });
      root.querySelectorAll('[data-ring]').forEach((el) => { el.style.strokeDashoffset = el.dataset.ring; });
    }));
    root.querySelectorAll('[data-count]').forEach(countUp);
  }
  function countUp(el) {
    const target = Number(el.dataset.count);
    if (reducedMotion.matches) { el.textContent = fmt(target); return; }
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  function initReveal(root) {
    const els = root.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window) || reducedMotion.matches) { els.forEach((e) => e.classList.add('in')); return; }
    // 같은 순간 화면에 들어온 요소끼리 순서대로 70ms씩 늦게 등장 (카드 그리드가 차례로 나타남)
    const io = new IntersectionObserver((entries) => entries.filter((en) => en.isIntersecting).forEach((en, k) => {
      const el = en.target;
      if (k) {
        el.style.transitionDelay = `${Math.min(k, 8) * 70}ms`;
        el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
      }
      el.classList.add('in');
      io.unobserve(el);
    }), { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach((e) => io.observe(e));
  }

  function rerenderPanel() {
    const panel = app.querySelector('[data-panel]');
    if (!panel) return;
    panel.innerHTML = renderPanel(current.route, current.tab);
    panel.querySelectorAll('.reveal').forEach((e) => e.classList.add('in'));
    afterRender(panel);
  }

  document.addEventListener('click', (e) => {
    const t = e.target;
    const prof = t.closest('[data-prof]');
    if (prof && !(prof.tagName === 'A' && prof.classList.contains('face'))) { e.preventDefault(); openModal(profModal(prof.dataset.prof)); return; }
    const face = t.closest('a.face[data-prof]');
    if (face) { e.preventDefault(); openModal(profModal(face.dataset.prof)); return; }
    const gal = t.closest('[data-gallery]');
    if (gal) { openLightbox(Number(gal.dataset.gallery)); return; }
    if (t.closest('[data-modal-close]')) { closeModal(); return; }
    if (t.closest('[data-lightbox-close]')) { closeLightbox(); return; }
    if (t.closest('[data-lightbox-prev]')) { stepLightbox(-1); return; }
    if (t.closest('[data-lightbox-next]')) { stepLightbox(1); return; }
    const ps = t.closest('[data-pub-set]');
    if (ps) {
      const key = ps.dataset.pubSet;
      const [k, v] = key.split(':');
      ui.pub[k] = v;
      pubRefresh();
      if (ps.closest('.pub-profs')) app.querySelector('[data-pub-root]').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      else app.querySelector(`[data-pub-facets] [data-pub-set="${key}"]`)?.focus({ preventScroll: true });
      return;
    }
    if (t.closest('[data-pub-more]')) {
      const shown = ui.pubLimit;
      ui.pubLimit *= 2;
      app.querySelector('[data-pub-list]').innerHTML = pubList(pubSelect());
      const first = app.querySelectorAll('.pub-entry')[shown];
      if (first) { first.tabIndex = -1; first.focus({ preventScroll: true }); }
      return;
    }
    if (t.closest('[data-rep-more]')) {
      const shown = ui.repLimit;
      ui.repLimit += REP_PAGE;
      rerenderPanel();
      const first = app.querySelectorAll('.pub-list .pub-card')[shown];
      if (first) { first.tabIndex = -1; first.focus({ preventScroll: true }); }
      return;
    }
    if (t.closest('[data-pub-top]')) { app.querySelector('.pub-filters').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' }); return; }
    if (t.closest('[data-pub-reset]')) {
      ui.pub = { ...PUB_ALL };
      const s = app.querySelector('[data-pub-search]');
      if (s) s.value = '';
      pubRefresh();
      return;
    }
    const ip = t.closest('[data-inst-pick]');
    if (ip) {
      const root = ip.closest('[data-inst-root]');
      // 이미 선택된 연구소를 다시 누르면 선택 해제
      const id = ip.getAttribute('aria-pressed') === 'true' ? null : ip.dataset.instPick;
      root.classList.toggle('has-pick', !!id);
      root.querySelectorAll('[data-inst-pick]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.instPick === id)));
      root.querySelectorAll('[data-inst-block]').forEach((a) => a.classList.toggle('is-picked', a.dataset.instBlock === id));
      if (id) root.querySelector(`[data-inst-block="${id}"]`).scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      return;
    }
    const pl = t.closest('[data-pub-prof-link]');
    if (pl) { closeModal(); showProfPubs(pl.dataset.pubProfLink); return; }
    const fb = t.closest('[data-filter]');
    if (fb) {
      const group = fb.closest('[data-filter-group]').dataset.filterGroup;
      const key = { prof: 'profFilter', lab: 'labFilter', equip: 'equipFilter', pub: 'pubFilter', gallery: 'galleryFilter', partner: 'partnerFilter' }[group];
      ui[key] = fb.dataset.filter;
      if (group === 'pub') ui.repLimit = REP_PAGE;
      if (current.route === 'gallery') { const panel = app.querySelector('[data-panel]'); panel.innerHTML = renderGallery(); panel.querySelectorAll('.reveal').forEach((x) => x.classList.add('in')); afterRender(panel); }
      else rerenderPanel();
      return;
    }
    const tt = t.closest('[data-toggle-table]');
    if (tt) {
      const tbl = tt.closest('.chart-card').querySelector('[data-chart-table]');
      tbl.hidden = !tbl.hidden;
      tt.textContent = tbl.hidden ? '표로 보기' : '표 닫기';
    }
  });
  let searchTimer = null;
  document.addEventListener('change', (e) => {
    if (!e.target.matches('[data-pub-prof]')) return;
    ui.pub.prof = e.target.value;
    pubRefresh();
    app.querySelector('[data-pub-prof]')?.focus({ preventScroll: true });
  });
  document.addEventListener('input', (e) => {
    if (e.target.matches('[data-pub-search]')) {
      ui.pub.q = e.target.value;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(pubRefresh, 160);
      return;
    }
    if (!e.target.matches('[data-lab-search]')) return;
    ui.labQuery = e.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const q = ui.labQuery.trim().toLowerCase();
      const list = app.querySelector('[data-lab-list]');
      const profs = D.professors.map((p) => PROF[p.id]).filter((p) => ui.labFilter === 'all' || p.inst === ui.labFilter);
      const visible = q ? profs.filter((p) => (p.members || []).some((m) => `${m.name} ${m.en || ''}`.toLowerCase().includes(q)) || p.name.includes(q) || `${p.lab} ${p.labEn}`.toLowerCase().includes(q)) : profs;
      list.innerHTML = visible.map((p) => labBlock(p, q && !p.name.includes(q) && !`${p.lab} ${p.labEn}`.toLowerCase().includes(q) ? q : '')).join('') || '<p class="lab-empty">검색 결과가 없습니다.</p>';
      list.querySelectorAll('.reveal').forEach((x) => x.classList.add('in'));
    }, 160);
  });
  document.addEventListener('pointerover', (e) => { const el = e.target.closest('[data-tip]'); if (el) showTip(el, e.clientX, e.clientY); });
  document.addEventListener('pointermove', (e) => { const el = e.target.closest('[data-tip]'); if (el) showTip(el, e.clientX, e.clientY); else hideTip(); });
  document.addEventListener('pointerout', (e) => { if (e.target.closest('[data-tip]') && !e.relatedTarget?.closest?.('[data-tip]')) hideTip(); });
  document.addEventListener('focusin', (e) => { const el = e.target.closest?.('[data-tip]'); if (el) { const r = el.getBoundingClientRect(); showTip(el, r.left + r.width / 2, r.top); } });
  document.addEventListener('focusout', hideTip);
  window.addEventListener('scroll', hideTip, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { if (lightbox.classList.contains('is-open')) closeLightbox(); else if (modal.classList.contains('is-open')) closeModal(); }
    if (lightbox.classList.contains('is-open')) { if (e.key === 'ArrowRight') stepLightbox(1); if (e.key === 'ArrowLeft') stepLightbox(-1); }
  });

  /* ───────── header ───────── */
  function initHeader() {
    const header = document.querySelector('[data-header]');
    const nav = document.querySelector('[data-nav]');
    const btn = document.querySelector('[data-menu-toggle]');
    const setOpen = (open) => { nav.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기'); };
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40 || current.route !== 'home' && window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    btn.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', (e) => { if (nav.classList.contains('is-open') && !header.contains(e.target)) setOpen(false); });
  }

  /* ───────── theme (light / dark) ───────── */
  // 첫 테마는 index.html 머리말 스크립트가 지정. 직접 고르기 전까지는 시스템 설정을 따라감
  function initTheme() {
    const root = document.documentElement;
    const btn = document.querySelector('[data-theme-toggle]');
    const saved = () => { try { return localStorage.getItem('theme'); } catch (e) { return null; } };
    const apply = (theme) => {
      root.setAttribute('data-theme', theme);
      const label = theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환';
      btn.setAttribute('aria-label', label); btn.title = label;
    };
    apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', next); } catch (e) { /* 저장 불가(사생활 보호 모드 등) – 이번 방문에만 적용 */ }
      apply(next);
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => { if (!saved()) apply(e.matches ? 'dark' : 'light'); });
  }

  /* ───────── hero particles ───────── */
  function initParticles() {
    const canvas = document.querySelector('[data-particles]');
    if (!canvas || reducedMotion.matches) return;
    const ctx = canvas.getContext('2d');
    const hero = canvas.closest('.hero');
    let w = 1; let h = 1; let raf = 0;
    const ps = [];
    const resize = () => {
      const b = hero.getBoundingClientRect();
      const pr = Math.min(2, window.devicePixelRatio || 1);
      w = b.width; h = b.height;
      canvas.width = Math.round(w * pr); canvas.height = Math.round(h * pr);
      ctx.setTransform(pr, 0, 0, pr, 0, 0);
    };
    const reset = (p, init) => {
      p.x = init ? Math.random() * w : -20;
      p.y = h * (0.15 + Math.random() * 0.8);
      p.r = Math.random() * 2.2 + 0.6;
      p.vx = Math.random() * 0.7 + 0.25;
      p.vy = (Math.random() - 0.5) * 0.3;
      p.a = Math.random() * 0.5 + 0.18;
    };
    resize();
    for (let i = 0; i < 90; i += 1) { const p = {}; reset(p, true); ps.push(p); }
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      const tm = Date.now() / 900;
      ps.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy + Math.sin(tm + i) * 0.12;
        if (p.x > w + 20 || p.y < -20 || p.y > h + 20) reset(p, false);
        const gr = p.r * 8;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gr);
        g.addColorStop(0, `rgba(167, 219, 255, ${p.a})`);
        g.addColorStop(1, 'rgba(95, 145, 191, 0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, gr, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize, { passive: true });
    draw();
    particleStop = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }

  /* ───────── boot ───────── */
  document.querySelector('[data-footer-address]').textContent = D.contact.address;
  const fe = document.querySelector('[data-footer-email]');
  fe.textContent = D.contact.email; fe.href = `mailto:${D.contact.email}`;
  document.querySelector('[data-footer-copyright]').textContent = D.meta.copyright;
  initHeader();
  initTheme();
  window.addEventListener('hashchange', render);
  render();
})();
