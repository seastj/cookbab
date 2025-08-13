# 1차 Team Mini Project

---

## 프로젝트 기간

📅 2025.07.10 ~ 2025.08.14

---

## 프로젝트 소개

### 쿡밥

쿡밥은 나만의 요리 레시피를 저장할 수 있는 웹 다이어리입니다.
홀로서기를 시작한 자취생이나, 가족들을 위해 요리하는 주부를 주요 타겟으로 하여
언제 어디서나 레시피를 저장하고, 다시 확인하며,
분석 및 통계까지 한 번에 제공받을 수 있도록 기획되었습니다.

<img width="320" height="179" alt="Image" src="https://github.com/user-attachments/assets/e742d7d6-70ab-42c5-82ec-889dc782bd86" />

---

### 💻 사용 기술 스택

#### 사용 언어 및 라이브러리

VSCode, React, Ant Design, nivo, react-icons, react-calendar, kakao developers

#### 협업 도구

GitHub, notion, slack

---

### ⭐주요기능

### 팀장: 여채현

- 밥상차리기
  - 게시글 등록, 수정, 삭제 및 상세보기 지원
  - 이미지등록 및 미리보기 확인 가능
  - 재료 해시태그 등록 지원
  - 뒤로가기 클릭 시 메인홈페이지로 이동
  - 입력 필드의 유효성 검증 기능 제공
- 한끼모음(글목록)
  - 이름이나 재료 검색 기능 지원
  - 전체, 최신순, 조리시간순에 따라 정렬 지원
- 회원가입
  - 입력 필드의 유효성 검증 기능 제공
  - 카카오계정 연동
    - 로그인 후 회원가입창에서 추가정보 입력

### 팀원: 신동재

- 메인
  - 최근한끼모음집
    - 최신글 3개 확인 가능
    - 글상세보기 및 글목록 화면으로 이동 가능
  - 일주일 요리여정
    - 일주일 글등록을 통한 출석체크
    - 랜덤 대화창 등록
  - 통계 및 업적(훈장)
    - 월별 요리기록, 사용한 식재료 통계 및 통계페이지 이동
    - 글등록에 따른 훈장 부여 및 마이페이지 이동
- 밥상여정(통계)
  - 레벨 및 분석
  - 캘린더
  - 그래프
- 마이페이지
  - 로그인
    - 입력 필드의 유효성 검증 포함
  - 프로필수정
  - 고객센터
  - 로그아웃

### 🚀 기대 효과

- 레시피를 쉽게 관리할 수 있다.
- 요리 실력 향상에 대한 기대를 높일 수 있다.
- 데이터 기반의 요리 습관을 분석할 수 있다.

### 📅 프로젝트 일정

[프로젝트 일정 (Notion)](https://fair-mimosa-69b.notion.site/2419f76bdabf8077b15cfe0c74d5c1c5)

2025년 7월 10일: 아이디어 도출
2025년 7월 16일: UI 디자인 기획
2025년 7월 17일 ~ 7월 22일: 디자인 작업
2025년 7월 24일 ~ 8월 5일: 페이지 및 기능 개발
2025년 8월 8일 ~ 8월 11일: 데이터 연동
2025년 8월 12일: ppt 제작
2025년 8월 14일: 발표 및 회고

---

### 🎯 향후 개선사항

- 디자인 개선(전체적인 비율 축소)
- 오류 개선 및 최적화 작업

---

#### git tree

cookbab
├─ .env (ignored)
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├─ node_modules/ (ignored)
├── package-lock.json
├── package.json
├── public/
│ ├── apple-touch-icon.png
│ ├── CategoryData.json
│ ├── CookTimeData.json
│ ├── favicon-96x96.png
│ ├── favicon.ico
│ ├── favicon.svg
│ ├── index.html
│ ├── manifest.json
│ ├── MonthCookData.json
│ ├── MonthLevelCookData.json
│ ├── ParamsData.json
│ ├── robots.txt
│ ├── site.webmanifest
│ ├── TierData.json
│ ├── web-app-manifest-192x192.png
│ └── web-app-manifest-512x512.png
├── README.md
└── src/
├── apis/
│ └── LoginApi.js
├── App.js
├── assets/
├── atoms/
│ └── kkologinAton.js
├── components/
│ ├── buttons/
│ │ ├── ButtonCancle.jsx
│ │ ├── ButtonSubmit.jsx
│ │ ├── canclebutton.css
│ │ └── submitbutton.css
│ ├── CategoryGraph.jsx
│ ├── CookTimeGraph.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── HomeBanner.jsx
│ ├── HomeMealTotal.jsx
│ ├── HomeOneMeal.jsx
│ ├── HomeWeekCook.jsx
│ ├── LevelCookGraph.jsx
│ ├── MealsetBase.jsx
│ ├── modal/
│ │ ├── customerservicemodal/
│ │ │ ├── customerservicemodal.css
│ │ │ └── CustomerServiceModal.jsx
│ │ ├── loginmodal/
│ │ │ ├── loginmodal.css
│ │ │ └── LoginModal.jsx
│ │ └── usereditmodal/
│ │ └── UserEditModal.jsx
│ ├── MonthCookGraph.jsx
│ ├── ParamsGraph.jsx
│ ├── TierGraph.jsx
│ ├── ui/
│ │ ├── LoginState.jsx
│ │ └── ProtectedRoute.jsx
│ └── UserSummaryInfo.jsx
├── contexts/
│ ├── cook/
│ │ ├── CookInfoContext.jsx
│ │ └── CookInfoProvider.jsx
│ ├── LoginContext.jsx
│ └── LoginProvider.jsx
├── css/
├── google/
│ └── googleapi.js
├── hooks/
├── images/
│ ├── arrow-filled.svg
│ ├── arrow.svg
│ ├── backbanner.jpg
│ ├── camera-pink.svg
│ ├── camera-plus.svg
│ ├── chefhat.svg
│ ├── clock.svg
│ ├── cookbab_logo.png
│ ├── cooklv1.svg
│ ├── exit-light.svg
│ ├── fail_icon.svg
│ ├── foodicon.svg
│ ├── google_logo.svg
│ ├── kakao_logo.svg
│ ├── kko_ficture.jpg
│ ├── mainimg.jpg
│ ├── mdisearch.svg
│ ├── megaphone.svg
│ ├── megaphone_gray.svg
│ ├── minus.svg
│ ├── more_bt.svg
│ ├── oneitem1.jpg
│ ├── pavicon.png
│ ├── question-mark-circled.svg
│ ├── question.svg
│ ├── success_white.svg
│ └── topimgp.png
├── index.css
├── index.js
├── kko/
│ └── kkoapi.js
├── modules/
│ └── customerervice/
├── pages/
│ ├── calendar.css
│ ├── Index.jsx
│ ├── mealset/
│ │ ├── Mealset.jsx
│ │ ├── Mealset.styles.js
│ │ ├── MealsetEdit.jsx
│ │ └── MealsetEdit.styles.js
│ ├── mealtotal/
│ │ └── Mealtotal.jsx
│ ├── member/
│ │ ├── AfterGoogle.jsx
│ │ └── AfterKko.jsx
│ ├── onemeal/
│ │ ├── Onemeal.jsx
│ │ ├── Onemeal.styles.js
│ │ ├── OnemealView.jsx
│ │ └── OnemealView.styles.js
│ └── user/
│ ├── User.jsx
│ ├── UserGuest.jsx
│ ├── UserJoin.jsx
│ └── UserJoin.styles.js
└── scss/

---

### 프로젝트 발표

[프로젝트 발표(Canva)](https://www.canva.com/design/DAGv1pu-s0w/6W6Vn8xGj39v5QtGNU76Qg/edit?utm_content=DAGv1pu-s0w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
