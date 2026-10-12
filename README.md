# GITECH 홈페이지

국립공주대학교 글로벌생산제조기술연구소(GITECH) 홈페이지입니다. 글로컬랩 ‘주행거리 극대화 친환경 모빌리티 컨소시엄’(국립공주대 · 국립한밭대 · KAIST) 내용을 담고 있습니다.
빌드 과정이 없는 정적 사이트라서 `index.html`을 브라우저로 열면 바로 볼 수 있고, 어떤 웹호스팅(GitHub Pages, 학교 서버 등)에도 폴더째 올리면 됩니다.

## 구성

| 파일 | 내용 |
|---|---|
| `index.html` | 페이지 뼈대 (헤더·푸터·모달) |
| `styles.css` | 디자인 |
| `app.js` | 화면 렌더링 (해시 라우팅: `#about`, `#people/labs`, `#achievements/recent` …) |
| `data/site-data.js` | **사업 내용 데이터** (사업 개요·과제·목표·성과) |
| `data/members-data.js` | **교수 홈페이지 링크·연구실 구성원** – 각 연구실 홈페이지 조사 결과 (2026.10) |
| `data/publications-data.js` | **논문·학술대회 실적** – 참여교수 최근 4년(2023–2026) 국제·국내 학술지/학술대회 목록 |
| `assets/` | 사진·로고 |

## 자주 하는 수정

- **새 성과 추가**: `data/site-data.js` → `news`(최근 성과), `recentPapers`(논문) 배열에 항목을 추가합니다.
- **논문·학회 실적 추가**: `data/publications-data.js` → `items`에 한 줄을 추가합니다.
  `type`은 `ij`(국제 학술지), `ic`(국제 학술대회), `dj`(국내 학술지), `dc`(국내 학술대회) 중 하나이고,
  `profs`에 저자로 참여한 교수 id를 넣으면 분야(소재부품·생산설계·지능제어) 필터에 자동으로 분류됩니다.
- **연구실 구성원 변경**: `data/members-data.js` → 해당 교수의 `members` 배열을 수정합니다.
  `role` 값은 `postdoc`, `phd`, `integrated`, `ms`, `ug`, `intern`, `staff` 중 하나입니다.
- **갤러리 사진 추가**: `assets/gallery/`에 사진을 넣고 `data/site-data.js` → `gallery`에 항목을 추가합니다.
- **사진 권장 크기** (작은 사진은 고해상도 화면에서 흐리게 보입니다): 교수 프로필 600×750px 이상(배경 통일 권장),
  갤러리·건물 사진 가로 1200px 이상, 장비 사진 가로 800px 이상, 메인 배경(`hero-cover.jpg`) 가로 2400px 이상.
  같은 파일 이름으로 바꿔 넣으면 그대로 반영됩니다.
- **사업 단계 일정**: `data/site-data.js` → `meta.phases` (사업 개요의 추진 일정 그래프와 ‘현재’ 표시에 사용).
- **협력 기관**: `data/site-data.js` → `partners` – `type`(연구기관·대학·기업), 해외 기관은 `country`,
  로고가 있으면 `logo: 'assets/logos/파일명.png'`을 넣으면 아이콘 대신 로고가 나옵니다.
- **공유 미리보기 이미지**: `assets/og-image.jpg` (1200×630). 사이트 주소가 바뀌면 `index.html`의 `og:url`·`og:image` 주소도 바꿉니다.

## 페이지

Home · About(사업 개요/컨소시엄/조직 구성/협력 기관) · Research(연구 분야/연구 인프라) ·
People(참여 교수/연구실 구성원) · Achievements(운영 성과/최근 성과/대표 논문/논문·학회) ·
Gallery · Contact
