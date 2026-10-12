/*
 * 참여교수 홈페이지 링크 및 연구실 구성원
 * 출처: 각 연구실 홈페이지·학과 교수소개 페이지 (2026.10 웹 조사)
 * 구성원이 바뀌면 members 배열만 수정하면 됩니다.
 * role: postdoc(박사후연구원) · phd(박사과정) · integrated(석박통합) · ms(석사과정) · ug(학부연구생) · intern(인턴) · staff(연구원·직원)
 */
window.MEMBERS_DATA = {
  asOf: '2026.10',
  profs: {
    "lee-dongkyoung": {
      "nameEn": "Dongkyoung Lee",
      "position": "교수",
      "dept": "기계자동차공학부",
      "email": "ldkkinka@kongju.ac.kr",
      "lab": "레이저가공디자인연구실",
      "labEn": "ADLAM Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/site/adlamlab2016"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/3948/subview.do"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=PMKKZ7UAAAAJ"
        }
      ],
      "keywords": [
        "레이저 응용 제조(Laser-aided manufacturing)",
        "이차전지 전극 레이저 가공·이종금속 용접",
        "연료전지 GDL·분리판 레이저 미세가공",
        "반도체 TGV/TSV/TCV 레이저 드릴링",
        "원전해체 레이저 절단·제염"
      ],
      "members": [
        {
          "name": "박준규",
          "en": "Jun Gyu PARK",
          "role": "postdoc"
        },
        {
          "name": "손승익",
          "en": "Seungik SON",
          "role": "phd"
        },
        {
          "name": "백승은",
          "en": "Seungeun BAEK",
          "role": "phd"
        },
        {
          "name": "박명호",
          "en": "Myeongho PARK",
          "role": "phd"
        },
        {
          "name": "응우옌 호앙 자",
          "role": "phd",
          "en": "Hoang Gia NGUYEN"
        },
        {
          "name": "새뮤얼 크랭크슨",
          "role": "ms",
          "en": "Samuel CRANKSON"
        },
        {
          "name": "김동규",
          "en": "Dongkyu KIM",
          "role": "ms"
        },
        {
          "name": "장민규",
          "en": "Mingyu JANG",
          "role": "ms"
        },
        {
          "name": "한세영",
          "en": "Seyoung HAN",
          "role": "ms"
        },
        {
          "name": "손정민",
          "en": "Jeongmin SON",
          "role": "ms"
        },
        {
          "name": "양희혁",
          "en": "Heehyuk YANG",
          "role": "ug"
        },
        {
          "name": "범준형",
          "en": "Junhyeong BEOM",
          "role": "ug"
        }
      ]
    },
    "kim-beomju": {
      "nameEn": "Bumjoo Kim",
      "position": "부교수",
      "dept": "기계자동차공학부",
      "email": "bumjoo@kongju.ac.kr",
      "lab": "미세유체실험실",
      "labEn": "Micro/Nano Fluidics Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://www.bumjoolab.com/"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/15936/subview.do"
        },
        {
          "label": "ORCID",
          "type": "other",
          "url": "https://orcid.org/0000-0002-0725-7947"
        }
      ],
      "keywords": [
        "나노/마이크로 유체역학",
        "이온교환막(IEM)",
        "전기투석·탈염/담수화",
        "이온농도분극·전기대류",
        "리튬 분리·농축(배터리 재활용)",
        "염분차 발전"
      ],
      "members": [
        {
          "name": "한석희",
          "en": "Seokhee Han",
          "role": "ms"
        },
        {
          "name": "최현우",
          "role": "ms",
          "en": "Hyunwoo Choi"
        },
        {
          "name": "이어진",
          "role": "ms",
          "en": "Eojin Lee"
        },
        {
          "name": "박홍욱",
          "role": "ug",
          "en": "Hongwook Park"
        },
        {
          "name": "이다은",
          "role": "ug",
          "en": "Daeun Lee"
        },
        {
          "name": "이동욱",
          "role": "ug",
          "en": "Dongwook Lee"
        },
        {
          "name": "허태교",
          "role": "ug",
          "en": "Taegyo Huh"
        }
      ]
    },
    "yoo-sanghoon": {
      "nameEn": "Sang-Hoon You",
      "position": "조교수",
      "dept": "기계자동차공학부",
      "email": "sh.eden.you@kongju.ac.kr",
      "lab": "",
      "labEn": "",
      "links": [
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/3971/subview.do"
        },
        {
          "label": "연구자 DB",
          "type": "other",
          "url": "https://researcherdb.kongju.ac.kr/main/contents/researcher.action?no=18&stf_no=211211"
        },
        {
          "label": "ORCID",
          "type": "other",
          "url": "https://orcid.org/0000-0002-8834-8436"
        }
      ],
      "keywords": [
        "수소에너지",
        "연료전지(PEMFC) 전극촉매",
        "수전해",
        "전기화학 기반 에너지시스템",
        "CO2 전기환원"
      ],
      "members": []
    },
    "shin-joonghan": {
      "nameEn": "Joonghan Shin",
      "position": "교수",
      "dept": "기계자동차공학부",
      "email": "jhshin@kongju.ac.kr",
      "lab": "레이저 응용가공 연구실",
      "labEn": "ALTP Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/altplab/home"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/15701/subview.do"
        }
      ],
      "keywords": [
        "레이저 용접",
        "레이저 미세가공(웨이퍼 스텔스 다이싱, 유리/세라믹 홀 가공)",
        "이차전지 전극 레이저 절단·패터닝",
        "레이저 어닐링",
        "딥러닝 기반 레이저 공정 모니터링",
        "레이저 공정 시뮬레이션"
      ],
      "members": [
        {
          "name": "손영일",
          "en": "Yeongil Son",
          "role": "phd"
        },
        {
          "name": "정승원",
          "en": "SeungWon Jeong",
          "role": "phd"
        },
        {
          "name": "샤헤르야르 아메드",
          "role": "ms",
          "en": "Shaheryar Ahmed"
        },
        {
          "name": "전상무",
          "en": "SangMoo Jeon",
          "role": "ms"
        },
        {
          "name": "류기환",
          "en": "Gihwan Ryu",
          "role": "ms"
        },
        {
          "name": "윤성재",
          "en": "Sungjae Yoon",
          "role": "ms"
        },
        {
          "name": "김지원",
          "en": "Jiwon Kim",
          "role": "ms"
        },
        {
          "name": "윤강현",
          "en": "Kanghyeon Yoon",
          "role": "ug"
        },
        {
          "name": "홍진오",
          "en": "Jin O Hong",
          "role": "ug"
        },
        {
          "name": "한동희",
          "en": "Donghui Han",
          "role": "ug"
        },
        {
          "name": "최세윤",
          "en": "Seyun Choi",
          "role": "ug"
        },
        {
          "name": "김건우",
          "en": "Geonwoo Kim",
          "role": "ug"
        }
      ]
    },
    "kim-joongbae": {
      "nameEn": "Joong Bae Kim",
      "position": "부교수",
      "dept": "기계자동차공학부",
      "email": "joongbae.kim@kongju.ac.kr",
      "lab": "열에너지솔루션연구실",
      "labEn": "TES Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/tes-lab/home"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/15700/subview.do"
        },
        {
          "label": "ORCID",
          "type": "other",
          "url": "https://orcid.org/0000-0003-1769-7361"
        }
      ],
      "keywords": [
        "적외선 열화상 기반 반도체 결함 검사·계측",
        "복사냉각(radiative cooling)",
        "열전달·열물성 측정",
        "다중물리 해석 기반 스마트 제조 설계",
        "신재생 에너지 생산·저장",
        "배터리 열관리(BTMS)"
      ],
      "members": [
        {
          "name": "임재현",
          "en": "Jaehyun Lim",
          "role": "phd"
        },
        {
          "name": "함용식",
          "en": "Yongsik Ham",
          "role": "phd"
        },
        {
          "name": "오환희",
          "en": "Hwanhui Oh",
          "role": "integrated"
        },
        {
          "name": "김대희",
          "role": "ms",
          "en": "Daehee Kim"
        },
        {
          "name": "민규홍",
          "role": "ms",
          "en": "Gyuhong Min"
        },
        {
          "name": "김준서",
          "role": "ms",
          "en": "Junseo Kim"
        },
        {
          "name": "이상욱",
          "role": "ms",
          "en": "Sanguk Lee"
        },
        {
          "name": "김범수",
          "role": "ug",
          "en": "Bumsu Kim"
        },
        {
          "name": "강주성",
          "role": "ug",
          "en": "Juseong Kang"
        },
        {
          "name": "김정후",
          "role": "ug",
          "en": "Junghu Kim"
        }
      ]
    },
    "lee-haemin": {
      "nameEn": "Haemin Lee",
      "position": "교수",
      "dept": "기계자동차공학부",
      "email": "leehm@kongju.ac.kr",
      "lab": "신호처리 및 응용제어 연구실",
      "labEn": "Signal Processing & Applied Control Lab",
      "links": [
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/18187/subview.do"
        },
        {
          "label": "연구자 DB",
          "type": "other",
          "url": "https://researcherdb.kongju.ac.kr/main/contents/researcher.action?no=18&stf_no=209800"
        }
      ],
      "keywords": [
        "최적제어",
        "통합항법(GNSS/INS)",
        "영상레이다(SAR) 신호처리",
        "동역학",
        "가제어성(controllability) 기반 제어 설계",
        "소음·진동 능동제어"
      ],
      "members": []
    },
    "yoon-hongseok": {
      "nameEn": "Hongseok Youn",
      "position": "교수",
      "dept": "기계공학과",
      "email": "hsyoun@hanbat.ac.kr",
      "lab": "스마트 시스템 연구실",
      "labEn": "Smart System Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://lab.hanbat.ac.kr/smart"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=PABb6ukAAAAJ"
        }
      ],
      "keywords": [
        "유연전자소자(OLED/OPV) 제조공정·시스템",
        "Micro/Nano-scale Fabrication System",
        "Precision Measurement System",
        "Transparent/Flexible Displays (OLED/QD)",
        "Nanoscale/Quantum Devices",
        "Plasmonic Energy Transfer"
      ],
      "members": [
        {
          "name": "레 티 뚜옛 늉",
          "role": "phd",
          "en": "Le Thi Tuyet Nhung"
        },
        {
          "name": "고평삼",
          "role": "phd",
          "en": "Pyeongsam Ko"
        },
        {
          "name": "또 티 뚜 린",
          "role": "phd",
          "en": "To Thi Tu Linh"
        },
        {
          "name": "김재명",
          "role": "ms",
          "en": "Jaemyeong Kim"
        },
        {
          "name": "보 도 민 짱",
          "role": "ms",
          "en": "Vo Do Minh Trang"
        },
        {
          "name": "하 투 후옌",
          "role": "ms",
          "en": "HA THU HUYEN"
        }
      ]
    },
    "noh-jinsung": {
      "nameEn": "Jinsung Rho",
      "position": "부교수",
      "dept": "기계공학과",
      "email": "jinsung.rho@hanbat.ac.kr",
      "lab": "초정밀 생산 계측 연구실",
      "labEn": "MNM Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/mnmlab/"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        }
      ],
      "keywords": [
        "반도체 구조·물성 검사/계측 (Semiconductor metrology & inspection)",
        "Thermography 비파괴 검사",
        "CNT/CNF Ultra-Black Coating (우주용)",
        "위성 열·구조 해석",
        "Deep learning 반도체 이미지 처리",
        "에너지 저장 소재 합성"
      ],
      "members": [
        {
          "name": "당 타인 쯔엉",
          "role": "postdoc",
          "en": "Dang, Thanh Truong"
        },
        {
          "name": "후인 닥 홍 응옥",
          "role": "phd",
          "en": "Huynh, Dac Hong Ngoc"
        },
        {
          "name": "쭈 득 타인",
          "role": "ms",
          "en": "Thanh, Chu Duc"
        },
        {
          "name": "김도윤",
          "role": "ms",
          "en": "Kim, Do Yun"
        },
        {
          "name": "김택균",
          "role": "ms",
          "en": "Kim, Taek Kyun"
        },
        {
          "name": "꾸옌 딘 꾸옛",
          "role": "ms",
          "en": "Quyen Dinh Quyet"
        },
        {
          "name": "팜 레 응옥 짬",
          "role": "ms",
          "en": "Pham Le Ngoc Tram"
        },
        {
          "name": "까오 꽌 아인",
          "role": "ms",
          "en": "Cao, Quan Anh"
        },
        {
          "name": "이동규",
          "role": "ug",
          "en": "Lee, Dong-Gyu"
        },
        {
          "name": "박준우",
          "role": "ug",
          "en": "Park, Jun-Woo"
        }
      ]
    },
    "ha-jihwan": {
      "nameEn": "Ji-Hwan Ha",
      "position": "조교수",
      "dept": "기계공학과",
      "email": "jhha@hanbat.ac.kr",
      "lab": "나노 첨단제조·공학소자 연구실",
      "labEn": "NAMED LAB (Nano Advanced Manufacturing & Engineering Devices Lab)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://www.namedlab.com/"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=2qTNl5wAAAAJ"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        }
      ],
      "keywords": [
        "Micro/nano structuring",
        "Electrospinning",
        "Nanotransfer printing",
        "Laser processing",
        "Composite fabrication",
        "Wearable healthcare sensors"
      ],
      "members": [
        {
          "name": "이예규",
          "en": "Yegyu Lee",
          "role": "ms"
        },
        {
          "name": "이민규",
          "en": "Minkyu Lee",
          "role": "ug"
        },
        {
          "name": "정진호",
          "en": "Jinho Jeong",
          "role": "ug"
        },
        {
          "name": "이철희",
          "en": "Cheolhee Lee",
          "role": "ug"
        },
        {
          "name": "이우진",
          "en": "Woojin Lee",
          "role": "ug"
        },
        {
          "name": "정예림",
          "en": "Yerim Jung",
          "role": "ug"
        },
        {
          "name": "신우빈",
          "role": "intern",
          "en": "Woovin Shin"
        },
        {
          "name": "김훈조",
          "en": "Hunjo Kim",
          "role": "intern"
        },
        {
          "name": "금상교",
          "role": "intern",
          "en": "Geum Sangkyo"
        }
      ]
    },
    "kim-youngsik": {
      "nameEn": "Youngshik Kim",
      "position": "교수",
      "dept": "기계공학과",
      "email": "youngshik@hanbat.ac.kr",
      "lab": "제어 로봇 시스템 실험실",
      "labEn": "ICRS Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "http://robot.hanbat.ac.kr/"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        }
      ],
      "keywords": [
        "SMA actuators",
        "Bio-inspired robots",
        "Soft robots",
        "Motion control",
        "Sensor fusion",
        "Wheel-leg mobile robots"
      ],
      "members": [
        {
          "name": "벤카테산 벨라이얀",
          "role": "postdoc",
          "en": "Venkatesan Vellaiyan"
        },
        {
          "name": "임유락",
          "en": "Yurak Lim",
          "role": "ms"
        },
        {
          "name": "최은혜",
          "en": "Eun Hye Choi",
          "role": "ug"
        },
        {
          "name": "진아현",
          "en": "Ahyeon Jin",
          "role": "ug"
        },
        {
          "name": "전하연",
          "en": "Hayeon Jeon",
          "role": "ug"
        },
        {
          "name": "허림",
          "en": "Rim Hur",
          "role": "ug"
        }
      ]
    },
    "shin-buhyun": {
      "nameEn": "Bu-Hyun Shin",
      "position": "교수",
      "dept": "기계공학과",
      "email": "jedidiah@hanbat.ac.kr",
      "lab": "제어 로봇 시스템 연구실",
      "labEn": "ARM LAB",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://lab.hanbat.ac.kr/mechatronics"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        },
        {
          "label": "대표 논문 (DOI)",
          "type": "other",
          "url": "https://doi.org/10.1109/ACCESS.2024.3375887"
        }
      ],
      "keywords": [
        "Electromagnetic linear actuator",
        "Linear motion mechanism",
        "Dynamics & control",
        "Robotics",
        "Mechatronics",
        "Legged micro mobile robots"
      ],
      "members": [
        {
          "name": "슈아이비 모하메드",
          "role": "postdoc",
          "en": "Shuaiby Mohamed"
        },
        {
          "name": "김강민",
          "role": "ms"
        },
        {
          "name": "신현상",
          "role": "ms"
        },
        {
          "name": "임영우",
          "role": "ms"
        },
        {
          "name": "황규진",
          "role": "ug"
        },
        {
          "name": "진성호",
          "role": "ug"
        },
        {
          "name": "김기중",
          "role": "ug"
        }
      ]
    },
    "choi-kyunghwan": {
      "nameEn": "Kyunghwan Choi",
      "position": "조교수",
      "dept": "조천식모빌리티대학원",
      "email": "kh.choi@kaist.ac.kr",
      "lab": "모빌리티 지능화 및 제어 연구실",
      "labEn": "MIC Lab (Mobility Intelligence & Control Lab)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://kaist-mic-lab.github.io/"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mo.kaist.ac.kr/professor/%ec%b5%9c%ea%b2%bd%ed%99%98/"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=bvOhAiMAAAAJ"
        }
      ],
      "keywords": [
        "Multi-level optimal control of connected/automated/electrified vehicles (CAEVs)",
        "Model predictive control (MPC)",
        "Neuro-adaptive control",
        "Reinforcement learning-based control",
        "Electric motor & drive control",
        "Predictive energy & thermal management"
      ],
      "members": [
        {
          "name": "아흐마드 모우리 자데 카키",
          "en": "Ahmad Mouri Zadeh Khaki",
          "role": "postdoc"
        },
        {
          "name": "박근영",
          "en": "Geunyoung Park",
          "role": "postdoc"
        },
        {
          "name": "장승훈",
          "en": "Seunghun Jang",
          "role": "phd"
        },
        {
          "name": "유명석",
          "en": "Myeongseok Ryu",
          "role": "phd"
        },
        {
          "name": "이효찬",
          "en": "Hyochan Lee",
          "role": "phd"
        },
        {
          "name": "박창은",
          "en": "Changeun Park",
          "role": "integrated"
        },
        {
          "name": "황수빈",
          "en": "Soobin Hwang",
          "role": "integrated"
        },
        {
          "name": "김민서",
          "en": "Minsoh Kim",
          "role": "integrated"
        },
        {
          "name": "나올 사무엘 에레가",
          "en": "Naol Samuel Erega",
          "role": "ms"
        },
        {
          "name": "장예진",
          "en": "Yejin Jang",
          "role": "ms"
        },
        {
          "name": "사이뭄 호싸인",
          "en": "Md Symum Hossain",
          "role": "ms"
        },
        {
          "name": "홍동화",
          "en": "Donghwa Hong",
          "role": "staff"
        },
        {
          "name": "김지윤",
          "en": "Jiyun Kim",
          "role": "staff"
        },
        {
          "name": "테오도르 펜체프",
          "en": "Teodor Penchev",
          "role": "ug"
        },
        {
          "name": "하비불러 아델레케",
          "en": "Habeebullah Adeleke",
          "role": "ug"
        }
      ]
    },
    "kum-dongsuk": {
      "nameEn": "Dongsuk Kum",
      "position": "부교수",
      "dept": "조천식모빌리티대학원",
      "email": "dskum@kaist.ac.kr",
      "lab": "자동차 지능 및 전동화 연구실",
      "labEn": "AXE Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "http://axelab.kaist.ac.kr/"
        },
        {
          "label": "연구실 구성원",
          "type": "lab",
          "url": "http://axelab.kaist.ac.kr/bbs/board.php?bo_table=sub1_2"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mo.kaist.ac.kr/professor/%ea%b8%88%eb%8f%99%ec%84%9d/"
        }
      ],
      "keywords": [
        "Electrified propulsion systems / electric powertrain",
        "Vehicle thermal management systems (VTMS)",
        "(Hybrid) electric vehicle energy management & optimal control",
        "Autonomous vehicles",
        "Battery & energy storage systems",
        "Autonomous mobile robots"
      ],
      "members": [
        {
          "name": "투마",
          "en": "Toumadher Barhoumi",
          "role": "postdoc"
        },
        {
          "name": "강상묵",
          "en": "Sangmuk Kang",
          "role": "phd"
        },
        {
          "name": "한상준",
          "en": "Sangjun Han",
          "role": "ms"
        },
        {
          "name": "아비",
          "en": "Abi Rahman Syamil",
          "role": "phd"
        },
        {
          "name": "황시환",
          "en": "Sihwan Hwang",
          "role": "phd"
        },
        {
          "name": "정현준",
          "en": "Hyeonjun Jeong",
          "role": "phd"
        },
        {
          "name": "신주엽",
          "en": "Juyeb Shin",
          "role": "phd"
        },
        {
          "name": "임준희",
          "en": "Joonhee Lim",
          "role": "phd"
        },
        {
          "name": "장한빈",
          "en": "Hanbin Jang",
          "role": "phd"
        },
        {
          "name": "이선명",
          "en": "Seonmyeong Lee",
          "role": "phd"
        },
        {
          "name": "김현서",
          "en": "Hyeonseo Kim",
          "role": "phd"
        },
        {
          "name": "신희원",
          "en": "Hiwon Shin",
          "role": "ms"
        },
        {
          "name": "이용재",
          "en": "Yongjae Lee",
          "role": "integrated"
        },
        {
          "name": "김형준",
          "en": "Hyeongjun Kim",
          "role": "phd"
        },
        {
          "name": "조혜린",
          "en": "Hyelin Jo",
          "role": "phd"
        },
        {
          "name": "사파",
          "en": "Saparkhan Kassymbekov",
          "role": "ms"
        },
        {
          "name": "미카엘",
          "en": "Hailemichael Molla Gashaw",
          "role": "ms"
        },
        {
          "name": "이예나",
          "en": "Yeina Lee",
          "role": "ms"
        },
        {
          "name": "사티얌",
          "en": "Satyam",
          "role": "ms"
        },
        {
          "name": "박무근",
          "en": "Moogeun Park",
          "role": "ms"
        },
        {
          "name": "김도건",
          "en": "Dogun Kim",
          "role": "ms"
        },
        {
          "name": "김민규",
          "en": "Mingyu Kim",
          "role": "ms"
        },
        {
          "name": "곽준성",
          "en": "JunSeong Kwak",
          "role": "ms"
        },
        {
          "name": "김의성",
          "en": "Uisung Kim",
          "role": "ms"
        },
        {
          "name": "박준혁",
          "en": "Junhyeok Park",
          "role": "ms"
        }
      ]
    },
    "lee-yoongu": {
      "nameEn": "Yoon Koo Lee",
      "position": "부교수",
      "dept": "조천식모빌리티대학원",
      "email": "yoonklee@kaist.ac.kr",
      "lab": "배터리 시스템 연구실",
      "labEn": "BSL",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://bsl.kaist.ac.kr/"
        },
        {
          "label": "연구실 구성원",
          "type": "lab",
          "url": "https://bsl.kaist.ac.kr/researchers"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mo.kaist.ac.kr/professor/%ec%9d%b4%ec%9c%a4%ea%b5%ac/"
        }
      ],
      "keywords": [
        "Multi-scale, multi-physics battery modeling",
        "Battery degradation mechanisms & lifetime (RUL) prediction",
        "Thermal runaway & battery safety",
        "BMS: SOC/SOH estimation, AI-based control",
        "Battery pack design optimization & thermal management",
        "EV conversion of ICE vehicles"
      ],
      "members": [
        {
          "name": "김동민",
          "role": "postdoc",
          "en": "Dongmin Kim"
        },
        {
          "name": "하진호",
          "role": "postdoc",
          "en": "Jinho Ha"
        },
        {
          "name": "장영환",
          "role": "phd",
          "en": "Yeonghwan Jang"
        },
        {
          "name": "김동욱",
          "role": "phd",
          "en": "Dongwook Kim"
        },
        {
          "name": "김다인",
          "role": "ms",
          "en": "Dain Kim"
        },
        {
          "name": "김동해",
          "role": "ms",
          "en": "Donghae Kim"
        },
        {
          "name": "서형빈",
          "role": "ms",
          "en": "Hyoungbin Seo"
        },
        {
          "name": "신철진",
          "role": "ms",
          "en": "Cheoljin Shin"
        },
        {
          "name": "레타즈 이프티카르",
          "role": "ms",
          "en": "Retaj Iftikhar"
        },
        {
          "name": "임준엽",
          "role": "intern",
          "en": "Junyeob Lim"
        }
      ]
    },
    "park-kibeom": {
      "nameEn": "Ki-Bum Park",
      "position": "부교수",
      "dept": "조천식모빌리티대학원",
      "email": "ki-bum.park@kaist.ac.kr",
      "lab": "교통전기화 및 신재생에너지 연구실",
      "labEn": "TETRIS Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/site/kibumpark99"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mo.kaist.ac.kr/professor/%eb%b0%95%ea%b8%b0%eb%b2%94/"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.co.kr/citations?user=08ShgXkAAAAJ"
        }
      ],
      "keywords": [
        "Power electronics for transportation electrification",
        "EV charging (OBC / V2G / wireless power transfer)",
        "Motor control & inverter design",
        "Grid integration of renewables (PCS, ESS, SST)",
        "System-level optimization of power electronics",
        "Electric propulsion ships"
      ],
      "members": [
        {
          "name": "추창엽",
          "role": "phd",
          "en": "Chang-Yeob Chu"
        },
        {
          "name": "김종석",
          "role": "phd",
          "en": "Jongseok Kim"
        },
        {
          "name": "이영석",
          "role": "phd",
          "en": "YoungSeok Lee"
        },
        {
          "name": "송지호",
          "role": "phd",
          "en": "Jiho Song"
        },
        {
          "name": "함자 아마드",
          "role": "phd",
          "en": "Hamza Ahmad"
        },
        {
          "name": "현동우",
          "role": "phd",
          "en": "Dongwoo Hyun"
        },
        {
          "name": "곽지호",
          "role": "phd",
          "en": "Jiho Kwak"
        },
        {
          "name": "왕쿤",
          "role": "phd",
          "en": "Kun Wang"
        },
        {
          "name": "주훙청",
          "role": "phd",
          "en": "Hongcheng Zhu"
        },
        {
          "name": "유원혁",
          "role": "ms",
          "en": "Wonhyeok You"
        },
        {
          "name": "이성민",
          "role": "ms",
          "en": "Seongmin Lee"
        },
        {
          "name": "정의찬",
          "role": "ms",
          "en": "Euichan Jeong"
        },
        {
          "name": "김예림",
          "role": "ms",
          "en": "Yerim Kim"
        },
        {
          "name": "손성우",
          "role": "ms",
          "en": "Seong Woo Son"
        }
      ]
    },
    "jang-inkwon": {
      "nameEn": "In Gwun Jang",
      "position": "교수",
      "dept": "조천식모빌리티대학원",
      "email": "jangin0407@kaist.ac.kr",
      "lab": "모빌리티 시스템 혁신설계 연구실",
      "labEn": "ID LAB (Innovative Design for Mobility Systems Lab)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://idlab.kaist.ac.kr/"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mo.kaist.ac.kr/professor/%ec%9e%a5%ec%9d%b8%ea%b6%8c/"
        }
      ],
      "keywords": [
        "Design optimization of mobility systems",
        "Vehicle routing & shortest-path optimization",
        "Wireless power transfer system optimization",
        "Topology optimization & multiphysics simulation",
        "Deep learning-integrated design",
        "Patient-specific bone health assessment (biomechanics)"
      ],
      "members": [
        {
          "name": "강민석",
          "en": "Minseok Kang",
          "role": "phd"
        },
        {
          "name": "고혁진",
          "en": "Hyukjin Koh",
          "role": "phd"
        },
        {
          "name": "김정훈",
          "en": "Jeonghun Kim",
          "role": "phd"
        },
        {
          "name": "김창영",
          "en": "Changyeong Kim",
          "role": "phd"
        },
        {
          "name": "박상훈",
          "en": "Sanghoon Park",
          "role": "phd"
        },
        {
          "name": "권순열",
          "en": "Sunyeol Gwon",
          "role": "phd"
        },
        {
          "name": "이은결",
          "en": "Eungyeol Lee",
          "role": "ms"
        },
        {
          "name": "이한빈",
          "en": "Hanbeen Lee",
          "role": "ms"
        },
        {
          "name": "정지희",
          "en": "Jihee Jung",
          "role": "ms"
        },
        {
          "name": "이순용",
          "en": "Soonyong Lee",
          "role": "ms"
        }
      ]
    },
    "seo-junyong": {
      "nameEn": "Junyong Seo",
      "position": "조교수",
      "dept": "기계자동차공학부",
      "email": "junyong.seo@kongju.ac.kr",
      "lab": "전산 열공학 연구실",
      "labEn": "Computational Thermal Engineering Lab. (CTEL)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://ctel.kongju.ac.kr"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/3962/subview.do"
        },
        {
          "label": "학과 연구실 소개",
          "type": "other",
          "url": "https://mech.kongju.ac.kr/ZD0800/3951/subview.do"
        }
      ],
      "keywords": [
        "복사열전달 제어",
        "광학 메타물질",
        "복사냉각",
        "열관리 시스템 최적설계",
        "열물성 예측·역설계",
        "학습 기반 모델링·최적화"
      ],
      "members": [
        {
          "name": "고인환",
          "en": "Inhwan Go",
          "role": "ug"
        },
        {
          "name": "유용석",
          "en": "Yong Seok Yoo",
          "role": "ug"
        },
        {
          "name": "이수형",
          "en": "Suhyung Lee",
          "role": "ug"
        },
        {
          "name": "조현수",
          "en": "Hyunsu Cho",
          "role": "ug"
        },
        {
          "name": "최병진",
          "en": "Byeong Jin Choi",
          "role": "ug"
        },
        {
          "name": "송인욱",
          "en": "Inwook Song",
          "role": "ug"
        },
        {
          "name": "정광식",
          "en": "Kwangsik Jung",
          "role": "ug"
        },
        {
          "name": "홍찬의",
          "en": "Chanui Hong",
          "role": "ug"
        },
        {
          "name": "이정준",
          "en": "Jung Joon Lee",
          "role": "ug"
        }
      ]
    },
    "oh-seungtae": {
      "nameEn": "Seungtae Oh",
      "position": "조교수",
      "dept": "기계자동차공학부",
      "email": "stoh@kongju.ac.kr",
      "lab": "첨단 열에너지 연구실",
      "labEn": "Advanced Thermal Energy Laboratory (ATEL)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/drseungtaeoh/main"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/3971/subview.do"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.co.kr/citations?user=6Q8PDdgAAAAJ&hl=ko"
        }
      ],
      "keywords": [
        "열관리",
        "상변화 열전달",
        "마이크로/나노 표면 엔지니어링",
        "특수 젖음성 표면",
        "액체금속 반도체 냉각",
        "PCM 배터리 냉각"
      ],
      "members": [
        {
          "name": "이성중",
          "role": "ms",
          "en": "Sungjoong Lee"
        },
        {
          "name": "송지원",
          "role": "ms",
          "en": "Jiwon Song"
        },
        {
          "name": "이정환",
          "role": "ug",
          "en": "Jeonghwan Lee"
        },
        {
          "name": "진승현",
          "role": "ug",
          "en": "Seunghyun Jin"
        },
        {
          "name": "노상호",
          "role": "ug",
          "en": "Sangho Noh"
        },
        {
          "name": "김유천",
          "role": "ug",
          "en": "Yucheon Kim"
        },
        {
          "name": "노동지",
          "role": "ug",
          "en": "Dongji Noh"
        }
      ]
    },
    "lee-changyu": {
      "nameEn": "Changyu Lee",
      "position": "조교수",
      "dept": "기계자동차공학부",
      "email": "leeck@kongju.ac.kr",
      "lab": "안전 자율·지능연구실",
      "labEn": "Safe Autonomy & Intelligence Laboratory (SAIL)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sail-knu.github.io/Home"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/3962/subview.do"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=-skvKp4AAAAJ"
        }
      ],
      "keywords": [
        "안전 제어(제어장벽함수)",
        "모델예측제어(MPC)",
        "도달가능성 해석",
        "학습 기반 경로계획·제어",
        "자율운항 선박",
        "모바일 로봇"
      ],
      "members": [
        {
          "name": "곽정미",
          "en": "Jeongmi Kwak",
          "role": "ms"
        },
        {
          "name": "임재민",
          "en": "Jaemin Im",
          "role": "ug"
        },
        {
          "name": "유재민",
          "en": "Jaemin Yu",
          "role": "ug"
        },
        {
          "name": "우민지",
          "en": "Minji Woo",
          "role": "ug"
        }
      ]
    },
    "pyo-jaebum": {
      "nameEn": "Jae-Bum Pyo",
      "position": "부교수",
      "dept": "기계자동차공학부",
      "email": "jbpyo@kongju.ac.kr",
      "lab": "차세대 박막재료 및 생산기술 연구실",
      "labEn": "Advanced Thin Film & Manufacturing Technology Lab",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/kongju.ac.kr/pyolab"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://mech.kongju.ac.kr/ZD0800/3969/subview.do"
        },
        {
          "label": "학과 연구실 소개",
          "type": "other",
          "url": "https://mech.kongju.ac.kr/ZD0800/15706/subview.do"
        }
      ],
      "keywords": [
        "박막 재료 기계적 신뢰성",
        "마이크로/나노 인장시험",
        "반도체 패키지 신뢰성(Warpage)",
        "수소에너지 박막 전극 내구성",
        "유연 플라스틱 액츄에이터",
        "유한요소해석(FEM)"
      ],
      "members": [
        {
          "name": "강태준",
          "en": "Taejun Kang",
          "role": "ms"
        },
        {
          "name": "정원용",
          "en": "Wonyong Jeong",
          "role": "ms"
        },
        {
          "name": "김세진",
          "en": "Sejin Kim",
          "role": "ms"
        },
        {
          "name": "허나단",
          "en": "Nathan Heo",
          "role": "ms"
        },
        {
          "name": "윤호영",
          "en": "Hoyoung Yoon",
          "role": "ug"
        },
        {
          "name": "강현준",
          "en": "Hyunjoon Kang",
          "role": "ug"
        },
        {
          "name": "모민정",
          "en": "Minjeong Mo",
          "role": "ug"
        },
        {
          "name": "정재윤",
          "en": "Jaeyoon Chung",
          "role": "ug"
        },
        {
          "name": "한규민",
          "en": "Gyumin Han",
          "role": "ug"
        },
        {
          "name": "고영선",
          "en": "Youngseon Ko",
          "role": "ug"
        },
        {
          "name": "김영진",
          "en": "Youngjin Kim",
          "role": "ug"
        },
        {
          "name": "이송함",
          "en": "Songham Lee",
          "role": "ug"
        },
        {
          "name": "박병현",
          "en": "Byunghyun Park",
          "role": "ug"
        },
        {
          "name": "배윤상",
          "en": "Yoonsang Bae",
          "role": "ug"
        },
        {
          "name": "김영운",
          "en": "Youngun Kim",
          "role": "ug"
        },
        {
          "name": "임호연",
          "en": "Hoyeon Im",
          "role": "ug"
        }
      ]
    },
    "lee-hocheol": {
      "nameEn": "Hocheol Lee",
      "position": "교수",
      "dept": "기계공학과",
      "email": "hclee@hanbat.ac.kr",
      "lab": "광기계공학 연구실",
      "labEn": "Optomechanical Engineering Laboratory",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/labmosis/"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=1"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=Y_NEoZEAAAAJ&hl=en"
        }
      ],
      "keywords": [
        "초정밀 가공",
        "미세가공",
        "광기계공학",
        "광학부품 설계",
        "광학 제조",
        "공작기계 설계"
      ],
      "members": []
    },
    "jeong-gileon": {
      "nameEn": "Gil-Eon Jeong",
      "position": "부교수",
      "dept": "기계공학과",
      "email": "gejeong@hanbat.ac.kr",
      "lab": "인공지능 기반 설계 연구실",
      "labEn": "Artificial Intelligence based Design Lab (AIDL)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/gejeong/home"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        },
        {
          "label": "교수 프로필",
          "type": "other",
          "url": "https://sites.google.com/view/gejeong/people/professor"
        }
      ],
      "keywords": [
        "구조해석",
        "최적설계",
        "위상최적화",
        "인공지능(머신러닝)",
        "대리모델",
        "사용후핵연료 처분용기"
      ],
      "members": [
        {
          "name": "구기태",
          "role": "ms"
        },
        {
          "name": "송현근",
          "en": "Hyeon-Guen Song",
          "role": "ms"
        },
        {
          "name": "임득균",
          "en": "Deuk Gyun Lim",
          "role": "ms"
        },
        {
          "name": "이진훈",
          "role": "ug"
        },
        {
          "name": "여태헌",
          "role": "ug"
        },
        {
          "name": "정우상",
          "role": "ug"
        }
      ]
    },
    "kim-jiseok": {
      "nameEn": "Ji-Seok Kim",
      "position": "조교수",
      "dept": "기계공학과",
      "email": "jskim@hanbat.ac.kr",
      "lab": "첨단 동적 에너지 시스템 연구실",
      "labEn": "Advanced Dynamic Energy Systems Lab. (ADES Lab.)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/adeslab"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=2"
        },
        {
          "label": "Google Scholar",
          "type": "scholar",
          "url": "https://scholar.google.com/citations?user=A_nSHlEAAAAJ&hl=en"
        }
      ],
      "keywords": [
        "에너지 하베스팅",
        "마찰전기 나노발전기",
        "액적 에너지 발전",
        "주파수 조절 시스템",
        "다물체 동역학",
        "오그제틱 다공성 소재"
      ],
      "members": []
    },
    "park-seongyeon": {
      "nameEn": "Seong Yeon Park",
      "position": "조교수",
      "dept": "기계공학과",
      "email": "seongyeon@hanbat.ac.kr",
      "lab": "첨단 소재 통합 설계 연구실",
      "labEn": "Integrated Design & Materials Laboratory (IDM Lab.)",
      "links": [
        {
          "label": "연구실 홈페이지",
          "type": "lab",
          "url": "https://sites.google.com/view/syparklab"
        },
        {
          "label": "교수 소개",
          "type": "faculty",
          "url": "https://www.hanbat.ac.kr/prog/majorPerson/me/sub02_01/me/P/kor/list.do?pageIndex=3"
        },
        {
          "label": "교수 프로필",
          "type": "other",
          "url": "https://sites.google.com/view/syparklab/member/professor"
        }
      ],
      "keywords": [
        "첨단 복합재료",
        "반도체 패키징",
        "극저온 탱크 부품 설계",
        "압력용기 CAE 해석",
        "신뢰성 해석",
        "구조 설계"
      ],
      "members": []
    }
  }
};
