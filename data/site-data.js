/*
 * GITECH (국립공주대학교 글로벌생산제조기술연구소) 사이트 데이터
 * 홈페이지 내용을 수정할 때는 이 파일의 값만 바꾸면 됩니다.
 * 교수 홈페이지 링크·연구실 구성원은 data/members-data.js 에 있습니다.
 * 영어 모드: 같은 이름 뒤에 En을 붙인 값(예: vision → visionEn)을 보여 줍니다.
 *           한글을 고치면 옆의 En 값도 함께 고쳐 주세요. En 값이 없으면 한글 그대로 나옵니다.
 */
window.SITE_DATA = {
  meta: {
    shortName: 'GITECH',
    title: '주행거리 극대화 친환경 모빌리티 컨소시엄',
    titleEn: 'Eco-friendly Mobility Consortium for Maximizing Driving Range',
    program: '2026년 이공분야 학술연구지원사업 – 글로컬랩',
    programEn: '2026 Science & Engineering Academic Research Support Program – Glocal Lab',
    field: '학문분야 – 공학단',
    fieldEn: 'Engineering',
    projectName: '글로벌생산제조기술연구소',
    projectNameEn: 'Global Institute of Manufacturing Technology',
    mission: '고급인재양성을 통한 친환경 모빌리티 주행거리 극대화 융합 핵심기술 개발 및 글로벌 R&D 플랫폼 구축',
    missionEn: 'Developing core convergence technologies that maximize the driving range of eco-friendly mobility, and building a global R&D platform through advanced talent development',
    pi: '이동경 (국립공주대학교)',
    piEn: 'Prof. Dongkyoung Lee (Kongju National University)',
    period: '2026.09 – 2035.08 (3단계, 9년)',
    periodEn: '2026.09 – 2035.08 (3 phases, 9 years)',
    /* 단계별 일정 (사업 개요의 추진 일정 그래프) – start/end는 'YYYY.MM' */
    phases: [
      { name: '1단계', nameEn: 'Phase 1', start: '2026.09', end: '2029.08' },
      { name: '2단계', nameEn: 'Phase 2', start: '2029.09', end: '2032.08' },
      { name: '3단계', nameEn: 'Phase 3', start: '2032.09', end: '2035.08' }
    ],
    host: '국립공주대학교 글로벌생산제조기술연구소',
    hostEn: 'Global Institute of Manufacturing Technology, Kongju National University',
    copyright: '© 2026 GITECH · 국립공주대학교 글로벌생산제조기술연구소. All rights reserved.',
    copyrightEn: '© 2026 GITECH · Global Institute of Manufacturing Technology, Kongju National University. All rights reserved.'
  },

  contact: {
    address: '(31080) 충청남도 천안시 서북구 천안대로 1223-24 국립공주대학교 천안공과대학',
    addressEn: 'Cheonan College of Engineering, Kongju National University, 1223-24 Cheonan-daero, Seobuk-gu, Cheonan-si, Chungcheongnam-do 31080, Republic of Korea',
    office: '국립공주대학교 글로벌생산제조기술연구소 (주관기관)',
    officeEn: 'Global Institute of Manufacturing Technology, Kongju National University (lead institution)',
    email: 'ldkkinka@kongju.ac.kr',
    emailLabel: '연구책임자 이동경 교수',
    emailLabelEn: 'Principal Investigator Prof. Dongkyoung Lee',
    mapQuery: '국립공주대학교 천안캠퍼스'
  },

  /* 사사 문구 – 논문·학회 페이지 맨 아래 ‘사사 문구’를 누르면 국문·영문 표기가 함께 나옵니다 */
  acknowledgments: [
    {
      ko: '본 연구성과는 2026년도 정부(교육부)의 재원으로 한국연구재단의 지원을 받아 수행된 기초연구사업임(No. RS-2026-25576586)',
      en: 'This research was supported by Basic Science Research Program through the National Research Foundation of Korea (NRF) funded by the Ministry of Education (No. RS-2026-25576586)'
    }
  ],

  /* 컨소시엄 총괄 지표 */
  stats: [
    { value: 65, unit: '명', unitEn: '', label: '참여 교원', labelEn: 'Faculty members' },
    { value: 219, unit: '명', unitEn: '', label: '연구 인력', labelEn: 'Researchers' },
    { value: 180, unit: '편', unitEn: '', label: 'SCI(E) 논문 (최근 4년)', labelEn: 'SCI(E) papers (last 4 years)' },
    { value: 276, unit: '건', unitEn: '', label: '특허 등록·출원', labelEn: 'Patents granted & filed' },
    { value: 2808, unit: '㎡', label: '연구 공간', labelEn: 'Research space' },
    { value: 136, unit: '종', unitEn: '', label: '연구 장비', labelEn: 'Types of equipment' }
  ],

  institutes: [
    {
      id: 'knu',
      univ: '국립공주대학교',
      univEn: 'Kongju National University',
      name: '글로벌생산제조기술연구소',
      nameEn: 'Global Institute of Manufacturing Technology (GITECH)',
      spec: '생산설계 특화',
      specEn: 'Production & Design',
      letter: 'P',
      role: '주관기관',
      roleEn: 'Lead institution',
      logo: 'assets/logos/knu.png',
      building: 'assets/campus/b_knu.jpg',
      color: '#2a78d6',
      vision: '첨단 생산설계 및 공정혁신을 통한 모빌리티 제조기술 선도',
      visionEn: 'Leading mobility manufacturing technology through advanced production design and process innovation',
      purposes: [
        '산업체와의 협력을 통한 실질적인 솔루션 제공',
        '국제 연구 네트워크를 활용한 글로벌 경쟁력 강화',
        '차세대 생산·설계 혁신을 주도할 기술 인재 양성'
      ],
      purposesEn: [
        'Delivering practical solutions through collaboration with industry',
        'Strengthening global competitiveness through international research networks',
        'Training engineers to lead next-generation innovation in production and design'
      ],
      focus: ['구조설계 최적화', '스마트 제조·공정설계', '생산성 및 품질향상 설계'],
      focusEn: ['Structural design optimization', 'Smart manufacturing & process design', 'Design for productivity & quality'],
      papers: 79, papersTop: 32,
      patents: 91, patentsReg: 35, patentsApp: 56,
      faculty: 19, researchers: 70,
      space: 888, spacePy: 269, space23: 353, equipment: 105,
      spaceWhere: '국립공주대학교 1·4·11공학관',
      spaceWhereEn: 'Engineering Buildings 1, 4 & 11, Kongju National University',
      strengths: '설계–해석–생산제조 전주기 연계 연구성과 다수 보유',
      strengthsEn: 'Extensive research output linking the full cycle of design, analysis and manufacturing',
      region: '충남 제조기업 기술지원 및 공동연구, 모빌리티연구소 및 글로벌 대학과 협력 네트워크 구축',
      regionEn: 'Technical support and joint research with Chungnam manufacturers; collaboration network with mobility research institutes and global universities',
      projects: ['글로컬대학30 (미래모빌리티 분야 포함)', 'RISE 사업 (미래모빌리티)', 'BK21 (친환경 미래자동차 소재·부품·공정)', '모빌리티 관련 과기부/산자부/교육부 사업'],
      projectsEn: ['Glocal University 30 (including future mobility)', 'RISE program (future mobility)', 'BK21 (materials, parts & processes for eco-friendly future vehicles)', 'Mobility projects funded by MSIT, MOTIE and MOE'],
      regional: ['DSC 공유대학 구축 및 운영 (모빌리티 소부장 개발) – 학생 191명 · 9개 기업 매칭'],
      regionalEn: ['Built and operates the DSC Shared University (mobility materials, parts & equipment) – 191 students matched with 9 companies'],
    },
    {
      id: 'hanbat',
      univ: '국립한밭대학교',
      univEn: 'Hanbat National University',
      name: '생산융합기술연구소',
      nameEn: 'Production Convergence Technology Institute',
      spec: '소재부품 특화',
      specEn: 'Materials & Parts',
      letter: 'M',
      role: '참여기관',
      roleEn: 'Participating institution',
      logo: 'assets/logos/hanbat.png',
      building: 'assets/campus/b_hanbat.jpg',
      color: '#1baf7a',
      vision: '고성능 소재·부품 개발로 모빌리티 핵심기술 경쟁력 확보',
      visionEn: 'Securing competitiveness in core mobility technologies through high-performance materials and parts',
      purposes: [
        '자율로봇, 초정밀가공 융합형 제조기술 연구소 특성화',
        '출연연구소 및 지역산업 협력을 통한 공동연구 및 전문성 심화',
        '로봇 제조 생태계 조성을 위한 지역·글로벌 협력 중심 거점 역할'
      ],
      purposesEn: [
        'Specializing in convergent manufacturing technology for autonomous robots and ultra-precision machining',
        'Deepening expertise through joint research with government-funded institutes and regional industry',
        'Serving as a regional and global hub for building a robot manufacturing ecosystem'
      ],
      focus: ['고성능 소재 개발', '핵심부품 제조기술', '초정밀 가공 및 구조분석'],
      focusEn: ['High-performance materials', 'Core component manufacturing', 'Ultra-precision machining & structural analysis'],
      papers: 58, papersTop: 49,
      patents: 55, patentsReg: 22, patentsApp: 33,
      faculty: 29, researchers: 87,
      space: 1058, spacePy: 320, space23: 512, equipment: 20,
      spaceWhere: '국립한밭대학교 N7동 기계관',
      spaceWhereEn: 'Mechanical Engineering Building (N7), Hanbat National University',
      strengths: '핵심소재·부품 원천기술 보유, 초정밀 가공기술',
      strengthsEn: 'Original technologies for core materials and parts; ultra-precision machining',
      region: '소재·부품 기업 협력 플랫폼 운영, 대전 특구 출연연과 연계한 모듈 부품 공동연구',
      regionEn: 'Runs a collaboration platform for materials and parts companies; joint research on modular parts with government-funded institutes in Daedeok Innopolis',
      projects: ['ICT 혁신인재 4.0 스마트자동차 교육연구사업', 'DSC 공유대학사업 (자동차 전장제어)', '스마트제조 고급인력양성사업'],
      projectsEn: ['ICT Innovation Talent 4.0 – Smart Vehicle Education & Research Program', 'DSC Shared University (automotive electronics & control)', 'Advanced Smart Manufacturing Workforce Program'],
      regional: ['대전산단 부품기업 대상 3D 프린팅 및 제조 공정 지원', '스마트광학 혁신사업 (광학부품 제조 지원)'],
      regionalEn: ['3D printing and manufacturing process support for parts makers in Daejeon industrial complexes', 'Smart Optics Innovation Program (support for optical parts manufacturing)'],
    },
    {
      id: 'kaist',
      univ: 'KAIST',
      univEn: 'KAIST',
      name: '친환경스마트자동차연구센터',
      nameEn: 'Eco-friendly Smart Vehicle Research Center',
      spec: '지능제어 특화',
      specEn: 'Intelligent Control',
      letter: 'I',
      role: '참여기관',
      roleEn: 'Participating institution',
      logo: 'assets/logos/kaist.png',
      building: 'assets/campus/b_kaist.jpg',
      color: '#eb6834',
      vision: 'AI 기반 지능제어 기술로 친환경 모빌리티 미래가치 창출',
      visionEn: 'Creating future value for eco-friendly mobility with AI-based intelligent control',
      purposes: [
        '친환경·지능형 모빌리티 제어 핵심기술 개발',
        '제주도를 테스트베드로 한 실증연구 거점',
        '기업 인큐베이팅을 통한 지역경제 활성화 기여'
      ],
      purposesEn: [
        'Developing core control technologies for eco-friendly, intelligent mobility',
        'A hub for field demonstration research using Jeju Island as a testbed',
        'Contributing to the regional economy by incubating companies'
      ],
      focus: ['배터리 시스템 제어', '디지털트윈 기반 모빌리티 시스템 최적화', '실차 데이터 기반 지능제어 알고리즘 개발'],
      focusEn: ['Battery system control', 'Digital-twin-based mobility system optimization', 'Intelligent control algorithms from real-vehicle data'],
      papers: 43, papersTop: 22,
      patents: 130, patentsReg: 60, patentsApp: 70,
      faculty: 17, researchers: 62,
      space: 862, spacePy: 261, space23: 0, equipment: 11,
      spaceWhere: 'KAIST 모빌리티홀',
      spaceWhereEn: 'KAIST Mobility Hall',
      strengths: 'AI 기반 제어 알고리즘 및 실차 검증 인프라, 국제 공동연구 및 기술이전 실적 다수',
      strengthsEn: 'AI-based control algorithms and real-vehicle validation infrastructure; extensive international joint research and technology transfer',
      region: '모빌리티 기업 및 연구기관 협력, 제주도 지원 모빌리티 실증 연구수행',
      regionEn: 'Collaboration with mobility companies and research institutes; mobility demonstration research supported by Jeju Province',
      projects: ['국토부(친환경 모빌리티) · 산자부(모빌리티 지능제어) · 중기부(모빌리티 서비스) 국책과제 수행', '제주도 지원 모빌리티 실증연구 수행'],
      projectsEn: ['National projects for MOLIT (eco-friendly mobility), MOTIE (intelligent mobility control) and MSS (mobility services)', 'Mobility demonstration research supported by Jeju Province'],
      regional: ['누적 44개 기업 유치·지원'],
      regionalEn: ['Attracted and supported 44 companies to date'],
    }
  ],

  /* 참여교수 (분야별: M 소재부품 · P 생산설계 · I 지능제어). 홈페이지·연구실 구성원은 members-data.js */
  professors: [
    {
      id: 'lee-dongkyoung', name: '이동경', inst: 'knu', team: 'M', director: true,
      role: '연구책임자 · 글로벌생산제조기술연구소 소장',
      roleEn: 'Principal Investigator · Director, Global Institute of Manufacturing Technology',
      field: '기계공학, 레이저 응용 제조공학, 첨단소재공정, 에너지소자 및 반도체 패키징, 스마트 생산시스템',
      fieldEn: 'Mechanical engineering, Laser-aided manufacturing, Advanced materials processing, Energy devices & semiconductor packaging, Smart production systems',
      pubs: [
        { journal: 'Energy Storage Materials', year: 2026, if: 19.3, jcr: 'Top 3.37%' },
        { journal: 'Materials Science and Engineering: A', year: 2026, if: 7.9, jcr: 'Top 9.28%' }
      ]
    },
    { id: 'yoon-hongseok', name: '윤홍석', inst: 'hanbat', team: 'M', role: '생산융합기술연구소 소장', roleEn: 'Director, Production Convergence Technology Institute',
      field: '첨단 고효율 소자/소재/부품 및 양산공정 · 모빌리티 나노소재 기반 부품가공, 스마트 소재부품 시스템',
      fieldEn: 'Advanced high-efficiency devices, materials, parts & mass-production processes · Nanomaterial-based parts processing for mobility, smart material & part systems',
      pubs: [{ journal: 'Small', year: 2026, if: 12.1, jcr: 'Top 7.2%' }, { journal: 'Composites Part B: Engineering', year: 2026, if: 14.2, jcr: 'Top 0.3%' }] },
    { id: 'yoo-sanghoon', name: '유상훈', inst: 'knu', team: 'M',
      field: '수소에너지 및 전기화학 전극 소재',
      fieldEn: 'Hydrogen energy and electrochemical electrode materials',
      pubs: [{ journal: 'Energy & Environmental Science', year: 2026, if: 31.0, jcr: 'Top 0.4%' }, { journal: 'Applied Catalysis B: Environment and Energy', year: 2024, if: 21.1, jcr: 'Top 0.6%' }] },
    { id: 'noh-jinsung', name: '노진성', inst: 'hanbat', team: 'M',
      field: '나노 구조 정밀 제어 및 전주기적 공정 기술',
      fieldEn: 'Precise nanostructure control and full-cycle process technology',
      pubs: [{ journal: 'ACS Applied Nano Materials', year: 2024, if: 5.6, jcr: 'Top 28.7%' }, { journal: 'ACS Applied Energy Materials', year: 2025, if: 5.5, jcr: 'Top 29.4%' }] },
    { id: 'ha-jihwan', name: '하지환', inst: 'hanbat', team: 'M',
      field: '마이크로/나노 가공 및 생산, 복합소재',
      fieldEn: 'Micro/nano fabrication and manufacturing, composite materials',
      pubs: [{ journal: 'Advanced Functional Materials', year: 2024, if: 18.5, jcr: 'Top 4.1%' }, { journal: 'Advanced Functional Materials', year: 2026, if: 19.0, jcr: 'Top 4.5%' }] },
    { id: 'lee-hocheol', name: '이호철', inst: 'hanbat', team: 'M', field: '초정밀 가공 및 광기계 설계', fieldEn: 'Ultra-precision machining and optomechanical design',
      pubs: [{ journal: 'International Journal of Precision Engineering and Manufacturing', year: 2025 }, { journal: 'Current Optics and Photonics', year: 2024 }] },
    { id: 'park-seongyeon', name: '박성연', inst: 'hanbat', team: 'M', field: '첨단 복합재료 응용 설계 및 반도체 패키징', fieldEn: 'Design of advanced composite applications and semiconductor packaging',
      pubs: [{ journal: 'Advanced Functional Materials', year: 2026 }, { journal: 'Composite Structures', year: 2026 }] },
    { id: 'oh-seungtae', name: '오승태', inst: 'knu', team: 'M', field: '마이크로/나노 표면 개질 기반 차세대 열관리 및 상변화 열전달', fieldEn: 'Next-generation thermal management and phase-change heat transfer based on micro/nano surface modification',
      pubs: [{ journal: 'Nano Energy', year: 2024 }, { journal: 'Advanced Science', year: 2022 }] },
    { id: 'pyo-jaebum', name: '표재범', inst: 'knu', team: 'M', field: '박막 재료의 기계적 거동·신뢰성 평가 및 생산기술', fieldEn: 'Mechanical behavior and reliability of thin-film materials, and manufacturing technology',
      pubs: [{ journal: 'Carbon Energy', year: 2025 }, { journal: 'Scientific Reports', year: 2026 }] },
    { id: 'kim-beomju', name: '김범주', inst: 'knu', team: 'P',
      field: '이온교환막 및 유체역학',
      fieldEn: 'Ion-exchange membranes and fluid mechanics',
      pubs: [{ journal: 'Journal of Membrane Science', year: 2025, if: 9.0, jcr: 'Top 4.9%' }, { journal: 'Journal of Membrane Science', year: 2024, if: 9.0, jcr: 'Top 4.9%' }] },
    { id: 'lee-yoongu', name: '이윤구', inst: 'kaist', team: 'P',
      field: '멀티스케일 관점 배터리 퇴화 현상 및 예측',
      fieldEn: 'Multiscale analysis and prediction of battery degradation',
      pubs: [{ journal: 'IEEE Transactions on Transportation Electrification', year: 2025, if: 8.3, jcr: 'Top 7.2%' }, { journal: 'Small Structures', year: 2025, if: 11.3, jcr: 'Top 10.3%' }] },
    { id: 'shin-joonghan', name: '신중한', inst: 'knu', team: 'P',
      field: '레이저 재료가공',
      fieldEn: 'Laser materials processing',
      pubs: [{ journal: 'Engineering Applications of Artificial Intelligence', year: 2025, if: 8.0, jcr: 'Top 2.5%' }, { journal: 'Measurement', year: 2024, if: 5.6, jcr: 'Top 10.3%' }] },
    { id: 'kim-joongbae', name: '김중배', inst: 'knu', team: 'P',
      field: '열물성 예측·측정, 열관리 시스템 설계',
      fieldEn: 'Thermophysical property prediction & measurement, thermal management system design',
      pubs: [{ journal: 'Energy Conversion and Management', year: 2026, if: 10.9, jcr: 'Top 1.9%' }, { journal: 'International Journal of Heat and Mass Transfer', year: 2024, if: 5.8, jcr: 'Top 7.9%' }] },
    { id: 'park-kibeom', name: '박기범', inst: 'kaist', team: 'P',
      field: '전기추진 모빌리티 전력변환 및 에너지 시스템',
      fieldEn: 'Power conversion and energy systems for electric-propulsion mobility',
      pubs: [{ journal: 'IEEE/ASME Transactions on Mechatronics', year: 2025, if: 7.3, jcr: 'Top 4.1%' }, { journal: 'IEEE Transactions on Power Electronics', year: 2025, if: 6.5, jcr: 'Top 11.8%' }] },
    { id: 'jeong-gileon', name: '정길언', inst: 'hanbat', team: 'P', field: '인공지능 기반 구조해석 및 최적설계', fieldEn: 'AI-based structural analysis and optimal design',
      pubs: [{ journal: 'Nuclear Engineering and Technology', year: 2026 }, { journal: 'Journal of Electronic Packaging', year: 2026 }] },
    { id: 'kim-jiseok', name: '김지석', inst: 'hanbat', team: 'P', field: '에너지 하베스팅 및 동적 에너지 변환 시스템', fieldEn: 'Energy harvesting and dynamic energy conversion systems',
      pubs: [{ journal: 'Advanced Science', year: 2026 }, { journal: 'Advanced Functional Materials', year: 2026 }] },
    { id: 'seo-junyong', name: '서준용', inst: 'knu', team: 'P', field: '컴퓨팅 기반 열전달 해석 및 열관리 시스템 최적설계', fieldEn: 'Computational heat transfer analysis and optimal design of thermal management systems',
      pubs: [{ journal: 'Advanced Materials', year: 2025 }, { journal: 'International Journal of Heat and Mass Transfer', year: 2026 }] },
    { id: 'choi-kyunghwan', name: '최경환', inst: 'kaist', team: 'I', role: '친환경스마트자동차연구센터 소장', roleEn: 'Director, Eco-friendly Smart Vehicle Research Center',
      field: '모빌리티 통합 제어 · 부품–차량–편대 수준의 지능제어',
      fieldEn: 'Integrated mobility control · Intelligent control at the component, vehicle and fleet levels',
      pubs: [{ journal: 'IEEE/ASME Transactions on Mechatronics', year: 2025, if: 7.3, jcr: 'Top 4.1%' }, { journal: 'IEEE Transactions on Intelligent Transportation Systems', year: 2024, if: 8.4, jcr: 'Top 2.4%' }] },
    { id: 'kum-dongsuk', name: '금동석', inst: 'kaist', team: 'I',
      field: '전동화 파워트레인 및 통합 열관리 시스템 제어',
      fieldEn: 'Control of electrified powertrains and integrated thermal management systems',
      pubs: [{ journal: 'IEEE Transactions on Intelligent Transportation Systems', year: 2024, if: 8.4, jcr: 'Top 2.4%' }, { journal: 'Applied Energy', year: 2025, if: 11.0, jcr: 'Top 6.5%' }, { journal: 'Energy Conversion and Management', year: 2026, if: 11.8, jcr: 'Top 1.9%' }] },
    { id: 'kim-youngsik', name: '김영식', inst: 'hanbat', team: 'I',
      field: '생체영감 스마트 다중 액추에이터 및 인공 근육 번들 시스템',
      fieldEn: 'Bio-inspired smart multi-actuators and artificial muscle bundle systems',
      pubs: [{ journal: 'Sensors and Actuators A: Physical', year: 2026, if: 4.9, jcr: 'Top 17.1%' }, { journal: 'IEEE Sensors Journal', year: 2024, if: 4.5, jcr: 'Top 19.6%' }] },
    { id: 'lee-haemin', name: '이해민', inst: 'knu', team: 'I',
      field: '영상레이다(SAR) 신호처리 및 항법',
      fieldEn: 'Synthetic aperture radar (SAR) signal processing and navigation',
      pubs: [{ journal: 'IEEE J. Selected Topics in Applied Earth Observations and Remote Sensing', year: 2023, if: 5.3, jcr: 'Top 9.7%' }, { journal: 'Journal of the Franklin Institute', year: 2024, if: 4.2, jcr: 'Top 8.5%' }] },
    { id: 'shin-buhyun', name: '신부현', inst: 'hanbat', team: 'I',
      field: '선형 전자기 구동기, 리니어 모션 시스템, 험지 극복 모바일 로봇',
      fieldEn: 'Linear electromagnetic actuators, linear motion systems, rough-terrain mobile robots',
      pubs: [{ journal: 'IEEE Access', year: 2024, if: 3.6, jcr: 'Top 35.2%' }, { journal: 'Microsystem Technologies', year: 2024, if: 1.8, jcr: 'Top 65.1%' }] },
    { id: 'jang-inkwon', name: '장인권', inst: 'kaist', team: 'I',
      field: '전산해석 및 인공지능에 기반한 모빌리티 시스템 설계',
      fieldEn: 'Mobility system design based on computational analysis and AI',
      pubs: [{ journal: 'Expert Systems with Applications', year: 2025, if: 7.5, jcr: 'Top 6.1%' }, { journal: 'IEEE Transactions on Intelligent Transportation Systems', year: 2023, if: 8.4, jcr: 'Top 2.4%' }] },
    { id: 'lee-changyu', name: '이찬규', inst: 'knu', team: 'I', field: '자율이동체의 안전 보장 최적화·학습 기반 경로계획 및 제어', fieldEn: 'Safety-guaranteed optimization and learning-based path planning & control for autonomous vehicles',
      pubs: [{ journal: 'IEEE Transactions on Control Systems Technology', year: 2026 }, { journal: 'Mechatronics', year: 2026 }] }
  ],

  /* 3대 연구 분야 */
  forms: [
    { id: 'M', name: '소재부품', en: 'Materials & Parts', inst: 'hanbat' },
    { id: 'P', name: '생산설계', en: 'Production & Design', inst: 'knu' },
    { id: 'I', name: '지능제어', en: 'Intelligent Control', inst: 'kaist' }
  ],

  /* 협력 기관 – MOU·LOI 체결 기관
   * group : na 북미 · eu 유럽 · asia 아시아 · kr 국내 대학·연구기관 · corp 국내 기업
   * deals : [협약 종류(MOU·LOI), 연도, 비고, 비고(영어)] – 한 기관과 여러 건이면 여러 줄
   * logo  : assets/partners/ 로고 파일 (없으면 abbr 또는 이니셜 배지로 표시) · url: 공식 홈페이지
   * 국가명은 영어 모드에서 app.js의 TERM_EN으로 바뀝니다 (새 국가는 그곳에 추가) */
  partners: [
    { id: 'unl', name: 'University of Nebraska–Lincoln', ko: '네브래스카 링컨 대학교', country: '미국', group: 'na', deals: [['MOU', 2025, '공동박사학위 (Joint Ph.D.)', 'Joint Ph.D. program'], ['LOI', 2026, 'Global Joint Research Lab'], ['LOI', 2026]], logo: 'assets/partners/unl.svg', url: 'https://www.unl.edu/' },
    { id: 'bu', name: 'Boston University', ko: '보스턴 대학교', country: '미국', group: 'na', deals: [['MOU', 2025]], logo: 'assets/partners/bu.svg', url: 'https://www.bu.edu/' },
    { id: 'ucf', name: 'University of Central Florida', ko: '센트럴플로리다 대학교', country: '미국', group: 'na', deals: [['MOU', 2024]], url: 'https://www.ucf.edu/' },
    { id: 'ncsu', name: 'North Carolina State University', ko: '노스캐롤라이나 주립대학교', country: '미국', group: 'na', deals: [['MOU', 2025]], logo: 'assets/partners/ncsu.png', url: 'https://www.ncsu.edu/' },
    { id: 'umdearborn', abbr: 'UM-D', name: 'University of Michigan–Dearborn', ko: '미시간 대학교 디어본', country: '미국', group: 'na', deals: [['LOI', 2026]], logo: 'assets/partners/umdearborn.svg', url: 'https://umdearborn.edu/' },
    { id: 'lbnl', abbr: 'LBNL', name: 'Lawrence Berkeley National Lab. · UC Berkeley', ko: '로렌스 버클리 국립연구소 · UC 버클리', country: '미국', group: 'na', deals: [['LOI', 2025]], logo: ['assets/partners/lbnl.svg', 'assets/partners/ucberkeley.svg'], url: 'https://www.lbl.gov/' },
    { id: 'unibo', abbr: 'UNIBO', name: 'University of Bologna', ko: '볼로냐 대학교', country: '이탈리아', group: 'eu', deals: [['MOU', 2024]], note: '외국인 연구생 교류 (2024)', noteEn: 'International student researcher exchange (2024)', logo: 'assets/partners/unibo.svg', url: 'https://www.unibo.it/' },
    { id: 'tu-berlin', abbr: 'TU Berlin', name: 'Technische Universität Berlin', ko: '베를린 공과대학교', country: '독일', group: 'eu', deals: [['MOU', 2011]], logo: 'assets/partners/tu-berlin.svg', url: 'https://www.tu.berlin/' },
    { id: 'cranfield', name: 'Cranfield University', ko: '크랜필드 대학교', country: '영국', group: 'eu', deals: [['MOU', 2025]], logo: 'assets/partners/cranfield.png', url: 'https://www.cranfield.ac.uk/' },
    { id: 'uwl', name: 'University of West London', ko: '웨스트런던 대학교', country: '영국', group: 'eu', deals: [['LOI', 2026]], logo: 'assets/partners/uwl.svg', url: 'https://www.uwl.ac.uk/' },
    { id: 'cityu', abbr: 'CityU', name: 'City University of Hong Kong', ko: '홍콩시립대학교', country: '홍콩', group: 'asia', deals: [['MOU', 2026]], logo: 'assets/partners/cityu.svg', url: 'https://www.cityu.edu.hk/' },
    { id: 'hit', name: 'Harbin Institute of Technology', ko: '하얼빈공업대학', country: '중국', group: 'asia', deals: [['MOU', 2026], ['LOI', 2026]], logo: 'assets/partners/hit.png', url: 'https://www.hit.edu.cn/' },
    { id: 'swjtu', abbr: 'SWJTU', name: 'Southwest Jiaotong University', ko: '서남교통대학', country: '중국', group: 'asia', deals: [['LOI', 2026]], logo: 'assets/partners/swjtu.svg', url: 'https://www.swjtu.edu.cn/' },
    { id: 'hust', name: 'Hanoi University of Science and Technology', ko: '하노이 과학기술대학교', country: '베트남', group: 'asia', deals: [['LOI', 2026]], logo: 'assets/partners/hust.png', url: 'https://hust.edu.vn/' },
    { id: 'manit', abbr: 'MANIT', name: 'Maulana Azad National Institute of Technology', ko: '마울라나 아자드 국립공과대학', country: '인도', group: 'asia', deals: [['LOI', 2026]], logo: 'assets/partners/manit.svg', url: 'https://www.manit.ac.in/' },
    { id: 'nits', name: 'National Institute of Technology Silchar', ko: '실차르 국립공과대학', country: '인도', group: 'asia', deals: [['LOI', 2026]], logo: 'assets/partners/nits.png', url: 'https://www.nits.ac.in/' },
    { id: 'amity-punjab', name: 'Amity University Punjab', ko: '아미티 대학교 펀자브', country: '인도', group: 'asia', deals: [['LOI', 2026]], logo: 'assets/partners/amity-punjab.png', url: 'https://mohali.amity.edu/' },
    { id: 'kaist-mobility', name: 'KAIST 모빌리티연구소', nameEn: 'KAIST Mobility Research Institute', en: 'KAIST Mobility Research Institute', group: 'kr', deals: [['MOU', 2025]], logo: 'assets/logos/kaist.png' },
    { id: 'kimm', name: '한국기계연구원', nameEn: 'Korea Institute of Machinery & Materials', en: 'KIMM', group: 'kr', deals: [['MOU', 2026, '광응용장비연구실', 'Photonics Application Equipment Lab']], logo: 'assets/partners/kimm.svg', url: 'https://www.kimm.re.kr/' },
    { id: 'katech', name: '한국자동차연구원', nameEn: 'Korea Automotive Technology Institute', en: 'KATECH', group: 'kr', deals: [['MOU', 2026, '첨단구조소재연구센터', 'Advanced Structural Materials Research Center']], logo: 'assets/partners/katech.svg', url: 'https://www.katech.re.kr/' },
    { id: 'kitech', name: '한국생산기술연구원', nameEn: 'Korea Institute of Industrial Technology', en: 'KITECH', group: 'kr', deals: [['LOI', 2026]], logo: 'assets/partners/kitech.svg', url: 'https://www.kitech.re.kr/' },
    { id: 'koreatech', name: '한국기술교육대학교', nameEn: 'Korea University of Technology and Education', en: 'KOREATECH', group: 'kr', deals: [['MOU']], logo: 'assets/partners/koreatech.svg', url: 'https://www.koreatech.ac.kr/' },
    { id: 'kakao-mobility', name: '카카오모빌리티', nameEn: 'Kakao Mobility', en: 'Kakao Mobility', group: 'corp', deals: [['MOU', 2024]], logo: 'assets/partners/kakao-mobility.svg', url: 'https://www.kakaomobility.com/' },
    { id: 'ls-electric', name: 'LS일렉트릭', nameEn: 'LS ELECTRIC', en: 'LS ELECTRIC', group: 'corp', deals: [['MOU', 2025]], logo: 'assets/partners/ls-electric.svg', url: 'https://www.ls-electric.com/' },
    { id: 'tmoney-mobility', name: '티머니 모빌리티', nameEn: 'T-money Mobility', en: 'T-money Mobility', group: 'corp', deals: [['MOU', 2025]], logo: 'assets/partners/tmoney-mobility.svg', url: 'https://www.tmoneymobility.com/' },
    { id: 'labs', name: '랩스 주식회사', nameEn: 'Labs Co., Ltd.', group: 'corp', deals: [['MOU', 2026]] },
    { id: 'ipg-korea', name: '아이피지포토닉스코리아', nameEn: 'IPG Photonics Korea', en: 'IPG Photonics Korea', group: 'corp', deals: [['MOU', 2026]], logo: 'assets/partners/ipg-korea.svg', url: 'https://www.ipgphotonics.com/ko' }
  ],

  /* 최근 성과 – type(과제수주 등)은 영어 모드에서 app.js의 TERM_EN으로 바뀝니다 */
  news: [
    { date: '2026.07', type: '과제수주', title: '이동경 교수, 산업통상자원부 첨단제조 AX(M.AX) 인재양성사업 선정', titleEn: 'Prof. Dongkyoung Lee selected for the MOTIE Advanced Manufacturing AX (M.AX) Talent Program', body: '국립공주대 기계자동차공학부 이동경 교수(연구책임자)가 산업통상자원부 첨단제조 AX(M.AX) 인재양성사업에 선정되었습니다.', bodyEn: 'Prof. Dongkyoung Lee (Principal Investigator), School of Mechanical & Automotive Engineering, Kongju National University, was selected for the Ministry of Trade, Industry and Energy’s Advanced Manufacturing AX (M.AX) Talent Development Program.', who: ['lee-dongkyoung'] },
    { date: '2026.04', type: '과제수주', title: "국립공주대, 'AI 기반 수소 모빌리티 부품 지역에너지혁신연구센터' 구축·운영", titleEn: 'Kongju National University to build and operate the “AI-based Hydrogen Mobility Parts Regional Energy Innovation Research Center”', body: '기계자동차공학부 표재범·김중배·오승태 교수 연구팀이 지역에너지혁신연구센터 사업을 수주했습니다.', bodyEn: 'A team led by Profs. Jae-Bum Pyo, Joong Bae Kim and Seungtae Oh (School of Mechanical & Automotive Engineering) won the Regional Energy Innovation Research Center program.', who: ['kim-joongbae'] },
    { date: '2026', type: '과제수주', title: '이윤구 교수 연구실, 정부 과제 4건 선정', titleEn: 'Prof. Yoon Koo Lee’s lab selected for four government projects', body: 'KAIST 배터리 시스템 연구실(BSL)이 배터리 관련 정부 과제 4건에 선정되었습니다.', bodyEn: 'The KAIST Battery Systems Lab (BSL) was selected for four government-funded battery projects.', who: ['lee-yoongu'] },
    { date: '2026.06', type: 'MOU', title: '공주대–네브라스카대(UNL) 공동학위 MOU 체결 완료', titleEn: 'Joint-degree MOU signed with the University of Nebraska–Lincoln (UNL)', body: 'University of Nebraska–Lincoln과 공동박사학위(Joint Ph.D.) 프로그램 협약을 체결했습니다.', bodyEn: 'Kongju National University signed a Joint Ph.D. program agreement with the University of Nebraska–Lincoln.', who: ['lee-dongkyoung'] },
    { date: '2026.07', type: '편집위원', title: '이동경 교수, Journal of Laser Applications Senior Editor', titleEn: 'Prof. Dongkyoung Lee named Senior Editor of the Journal of Laser Applications', body: 'Laser Institute of America(LIA) 발행 국제학술지 Journal of Laser Applications Senior Editor.', bodyEn: 'Senior Editor of the Journal of Laser Applications, an international journal published by the Laser Institute of America (LIA).', who: ['lee-dongkyoung'] },
    { date: '2026', type: '편집위원', title: '이동경 교수, Int. J. Precision Engineering and Manufacturing Editorial Board', titleEn: 'Prof. Dongkyoung Lee joins the Editorial Board of the Int. J. Precision Engineering and Manufacturing', body: '한국정밀공학회 국제학술지 IJPEM Editorial Board로 위촉되었습니다.', bodyEn: 'Appointed to the Editorial Board of IJPEM, the international journal of the Korean Society for Precision Engineering.', who: ['lee-dongkyoung'] },
    { date: '2026.07', type: '국제공동연구', title: 'UC Berkeley · LBNL과 펨토초 레이저 가공 국제 공동연구 논문 게재', titleEn: 'Joint paper with UC Berkeley and LBNL on femtosecond laser processing published', body: 'Enhancing Aluminum Cutting Quality Through XGBoost-Assisted Optimization of Ultrafast Femtosecond Laser Processing (Micromachines, 2026)', who: ['lee-dongkyoung'] }
  ],

  /* 대표 논문 – 참여교수 SCI(E) 대표 연구실적 + 2026 최근 게재 */
  recentPapers: [
    { journal: 'Energy Storage Materials', date: '2026.08', if: 19.3, jcr: 'JCR Top 3.37%', who: 'lee-dongkyoung' },
    { journal: 'International Journal of Energy Research', date: '2026.07', if: 4.2, jcr: 'JCR Top 4.8%', who: 'lee-dongkyoung' },
    { journal: 'International Journal of Energy Research', date: '2026.07', if: 4.2, jcr: 'JCR Top 4.8%', who: 'lee-dongkyoung' },
    { journal: 'Micromachines', date: '2026.07', if: 3.5, jcr: 'Q2', who: 'lee-dongkyoung', title: 'Enhancing Aluminum Cutting Quality Through XGBoost-Assisted Optimization of Ultrafast Femtosecond Laser Processing' },
    { journal: 'Energy Conversion and Management', date: '2026.06', if: 11.8, jcr: 'JCR Top 1.9%', who: 'kum-dongsuk', title: 'High-fidelity modeling of the Toyota Mirai FCEV thermal management system: A step toward real-vehicle thermal behavior' },
    { journal: 'Materials Science and Engineering: A', date: '2026.05', if: 7.9, jcr: 'JCR Top 9.28%', who: 'lee-dongkyoung' }
  ],
  coverPapers: [
    { journal: 'Energy & Environmental Science', if: 30.8, img: 'assets/gallery/pub_ees.jpg' },
    { journal: 'Advanced Materials', if: 29.1, img: 'assets/gallery/pub_am.jpg' },
    { journal: 'Advanced Science', if: 14.1, img: 'assets/gallery/pub_as.jpg' },
    { journal: 'Science Advances', if: 12.5, img: 'assets/gallery/pub_sa.jpg' }
  ],

  /* 연구장비 – cat(분류)은 영어 모드에서 app.js의 TERM_EN으로 바뀝니다 */
  equipment: [
    { inst: 'knu', name: 'PECVD', cat: '소재/공정', img: 'assets/equipment/pecvd.jpg' },
    { inst: 'knu', name: 'Laser Source', cat: '소재/공정', img: 'assets/equipment/laser.jpg' },
    { inst: 'knu', name: '3D Printer', cat: '소재/공정', img: 'assets/equipment/3dp.jpg' },
    { inst: 'knu', name: 'ICP-OES', cat: '측정/분석', img: 'assets/equipment/icp.jpg' },
    { inst: 'knu', name: 'Confocal Microscope', cat: '측정/분석', img: 'assets/equipment/confocal.jpg' },
    { inst: 'knu', name: '박막두께측정기', nameEn: 'Thin-film Thickness Gauge', cat: '측정/분석', img: 'assets/equipment/thinfilm.jpg' },
    { inst: 'knu', name: '재료물성시험기', nameEn: 'Material Property Tester', cat: '시험평가', img: 'assets/equipment/mattest.jpg' },
    { inst: 'knu', name: '전기/전자/전력 시험장비', nameEn: 'Electrical / Electronic / Power Test Equipment', cat: '전기/전자', img: 'assets/equipment/power.jpg' },
    { inst: 'knu', name: 'GPU 워크스테이션', nameEn: 'GPU Workstation', cat: '설계/해석', img: 'assets/equipment/gpu.jpg' },
    { inst: 'knu', name: '자율주행 플랫폼 1', nameEn: 'Autonomous Driving Platform 1', cat: '실차/시스템', img: 'assets/equipment/auto1.jpg' },
    { inst: 'knu', name: '자율주행 플랫폼 2', nameEn: 'Autonomous Driving Platform 2', cat: '실차/시스템', img: 'assets/equipment/auto2.jpg' },
    { inst: 'knu', name: '자율주행 플랫폼 3', nameEn: 'Autonomous Driving Platform 3', cat: '실차/시스템', img: 'assets/equipment/auto3.jpg' },
    { inst: 'knu', name: '자동차 반무향실', nameEn: 'Automotive Semi-anechoic Chamber', cat: '시험평가', img: 'assets/equipment/anechoic.jpg' },
    { inst: 'knu', name: '환경소음진동 실험실', nameEn: 'Environmental Noise & Vibration Lab', cat: '시험평가', img: 'assets/equipment/noise_lab.jpg' },
    { inst: 'knu', name: '다축 무소음 BSR 가진기', nameEn: 'Multi-axis Silent BSR Shaker', cat: '시험평가', img: 'assets/equipment/bsr.jpg' },
    { inst: 'knu', name: '진동소음 계측분석 시스템', nameEn: 'NVH Measurement & Analysis System', cat: '측정/분석', img: 'assets/equipment/nvh.jpg' },
    { inst: 'knu', name: '음원 평가 시스템', nameEn: 'Sound Source Evaluation System', cat: '측정/분석', img: 'assets/equipment/sound_eval.jpg' },
    { inst: 'knu', name: '음원 가시화 시스템', nameEn: 'Sound Source Visualization System', cat: '측정/분석', img: 'assets/equipment/sound_vis.jpg' },
    { inst: 'knu', name: '복합환경 진동시험기', nameEn: 'Combined-environment Vibration Tester', cat: '시험평가', img: 'assets/equipment/vib.jpg' },
    { inst: 'knu', name: '복합환경 챔버', nameEn: 'Combined-environment Chamber', cat: '시험평가', img: 'assets/equipment/chamber.jpg' },
    { inst: 'kaist', name: 'Chassis Dynamometer', cat: '실차/시스템', img: 'assets/equipment/chassis.jpg' },
    { inst: 'kaist', name: 'Motor Dynamometer', cat: '실차/시스템', img: 'assets/equipment/motor_dyno.jpg' },
    { inst: 'kaist', name: 'Motor Emulator', cat: '전기/전자', img: 'assets/equipment/motor_emul.jpg' },
    { inst: 'kaist', name: 'Battery Cycler (Pack)', cat: '전기/전자', img: 'assets/equipment/battery_pack.jpg' },
    { inst: 'kaist', name: 'Battery Cycler (Cell)', cat: '전기/전자', img: 'assets/equipment/battery_cell.jpg' },
    { inst: 'kaist', name: '2/4 Post Lift', cat: '실차/시스템', img: 'assets/equipment/lift.jpg' },
    { inst: 'kaist', name: '차량 개조/정비', nameEn: 'Vehicle Conversion & Maintenance', cat: '실차/시스템', img: 'assets/equipment/vehicle.jpg' },
    { inst: 'kaist', name: '측정 장비', nameEn: 'Measurement Equipment', cat: '측정/분석', img: 'assets/equipment/measure.jpg' },
    { inst: 'kaist', name: '3D Scanner', cat: '측정/분석', img: 'assets/equipment/3dscan.jpg' },
    { inst: 'kaist', name: '중량물 운반 차량', nameEn: 'Heavy-load Transport Vehicle', cat: '실차/시스템', img: 'assets/equipment/heavy.jpg' },
    { inst: 'kaist', name: '1T Lift Truck / Fork Lift', cat: '실차/시스템', img: 'assets/equipment/forklift.jpg' }
  ],
  equipmentNote: '한밭대 생산융합기술연구소: Optical profiler, SEM, TEM, Dry Etcher, CVD, 원자층증착기, 비구면형상측정기, Probe station, Spin-coater, Mask aligner, PCB 기판제조, MTF 측정기 등 20종',
  equipmentNoteEn: 'Hanbat Production Convergence Technology Institute: 20 types including an optical profiler, SEM, TEM, dry etcher, CVD, atomic layer deposition system, aspheric profiler, probe station, spin coater, mask aligner, PCB fabrication and MTF tester',
  labs: [
    { inst: 'hanbat', title: '생산융합기술연구소 전용 실험실', titleEn: 'Production Convergence Technology Institute Lab', img: 'assets/campus/hb_lab1.jpg' },
    { inst: 'hanbat', title: '초정밀 가공 실습실', titleEn: 'Ultra-precision Machining Lab', img: 'assets/campus/hb_lab2.jpg' },
    { inst: 'hanbat', title: '측정/평가 실습실', titleEn: 'Measurement & Evaluation Lab', img: 'assets/campus/hb_lab3.jpg' },
    { inst: 'kaist', title: '파워트레인 실험실', titleEn: 'Powertrain Lab', img: 'assets/campus/k_pt.jpg' },
    { inst: 'kaist', title: '배터리 실험실', titleEn: 'Battery Lab', img: 'assets/campus/k_bat.jpg' }
  ],

  /* 갤러리 */
  gallery: [
    { inst: 'knu', date: '2023.10', title: '산학 워크샵', titleEn: 'Industry–Academia Workshop', img: 'assets/gallery/iuworkshop.jpg', images: ['assets/gallery/iuworkshop.jpg', 'assets/gallery/iuws2.jpg'], body: '지역 기업과 함께한 산학 워크샵', bodyEn: 'Industry–academia workshop with regional companies' },
    { inst: 'knu', date: '2023.08', title: '공주대–난양공대 공동연구', titleEn: 'KNU–NTU Joint Research', img: 'assets/gallery/nanyang.jpg', body: 'Nanyang Technological University와의 국제 공동연구', bodyEn: 'International joint research with Nanyang Technological University' },
    { inst: 'knu', date: '2023.08', title: '산업체 전문가 초청 세미나', titleEn: 'Industry Expert Seminar', img: 'assets/gallery/expert.jpg', body: '산업체 전문가를 초청한 기술 세미나', bodyEn: 'Technical seminar with invited industry experts' },
    { inst: 'knu', date: '', title: 'UNL 현장 워크샵', titleEn: 'On-site Workshop at UNL', img: 'assets/gallery/unl_ws.jpg', body: '네브라스카대학교 현지 워크샵', bodyEn: 'Workshop at the University of Nebraska–Lincoln' },
    { inst: 'knu', date: '', title: 'DSC 소부장 성과공유회', titleEn: 'DSC Materials, Parts & Equipment Showcase', img: 'assets/gallery/dsc.jpg', body: '대전·세종·충남 지역혁신플랫폼 모빌리티 소부장 사업본부 성과공유회', bodyEn: 'Results-sharing event of the mobility materials, parts & equipment division, Daejeon·Sejong·Chungnam Regional Innovation Platform' },
    { inst: 'knu', date: '', title: 'RISE 업무협약식', titleEn: 'RISE Agreement Ceremony', img: 'assets/gallery/rise_knu.jpg', body: '충청남도 RISE 상호 협력에 관한 업무 협약식', bodyEn: 'Agreement ceremony on mutual cooperation for the Chungcheongnam-do RISE program' },
    { inst: 'hanbat', date: '', title: '스마트자동차 교육연구사업', titleEn: 'Smart Vehicle Education & Research Program', img: 'assets/gallery/hb_smartcar.jpg', body: 'ICT 혁신인재 4.0 스마트자동차 교육연구사업', bodyEn: 'ICT Innovation Talent 4.0 – Smart Vehicle Education & Research Program' },
    { inst: 'hanbat', date: '', title: '우주 핵심부품 3D 프린팅 업무협약', titleEn: 'Agreement on 3D Printing of Space Components', img: 'assets/gallery/hb_3dp.jpg', body: '우주 핵심부품 개발 및 3D 프린팅 기술 경쟁력 강화를 위한 업무협약', bodyEn: 'Agreement to develop core space components and strengthen 3D printing competitiveness' },
    { inst: 'hanbat', date: '', title: 'RISE 업무협약식', titleEn: 'RISE Agreement Ceremony', img: 'assets/gallery/hb_rise.jpg', body: '한밭대 RISE 업무협약', bodyEn: 'Hanbat National University RISE agreement' },
    { inst: 'hanbat', date: '', title: '미시간대 연구협약', titleEn: 'Research Agreement with the University of Michigan', img: 'assets/gallery/hb_michigan.jpg', body: 'University of Michigan과 자동차 경량화/복합소재 연구협약', bodyEn: 'Research agreement with the University of Michigan on vehicle lightweighting and composite materials' },
    { inst: 'hanbat', date: '', title: '몽골과기대 공동교육과정', titleEn: 'Joint Curriculum with MUST', img: 'assets/gallery/hb_mongol.jpg', body: '몽골과학기술대학교와 공동교육과정 운영', bodyEn: 'Joint curriculum with the Mongolian University of Science and Technology' },
    { inst: 'hanbat', date: '2024', title: 'Global Design Camp 2024', img: 'assets/gallery/hb_design.jpg', body: '글로벌 디자인 캠프', bodyEn: 'Global design camp' },
    { inst: 'kaist', date: '', title: '국토부 트럭 HEV 개조사업', titleEn: 'MOLIT Truck HEV Conversion Project', img: 'assets/gallery/k_truck.jpg', body: '국토교통부 친환경 모빌리티 – 트럭 HEV 개조사업', bodyEn: 'MOLIT eco-friendly mobility program – truck HEV conversion project' },
    { inst: 'kaist', date: '', title: '제주도 지원 실증연구 협약', titleEn: 'Jeju Demonstration Research Agreement', img: 'assets/gallery/k_jeju.jpg', body: '제주 자율주행 서비스 실증 플랫폼 구축 업무협약', bodyEn: 'Agreement to build a demonstration platform for autonomous-driving services in Jeju' },
    { inst: 'kaist', date: '', title: '보육기업 주최 산업행사', titleEn: 'Industry Event Hosted by an Incubated Company', img: 'assets/gallery/k_incub.jpg', body: '센터 보육기업이 주최한 산업 행사', bodyEn: 'Industry event hosted by a company incubated at the center' },
    { inst: 'kaist', date: '', title: 'TU Berlin과 MOU 체결', titleEn: 'MOU with TU Berlin', img: 'assets/gallery/k_tub.jpg', body: 'Technische Universität Berlin과 MOU 체결', bodyEn: 'MOU signed with Technische Universität Berlin' }
  ]
};
