## 📌 Vanilla JS로 구현한 원본

👉 [Repository 바로 가기](https://github.com/nalsae/my-agora-states-js)

## 🔧 기술 스택

### 🔨 Front-End

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) <img src="https://img.shields.io/badge/Framer Motion-bc4a97?style=for-the-badge&logo=Framer&logoColor=white"> ![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=for-the-badge)

### 🔨 Back-End

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## 📑 폴더 구조
```
fe-sprint-my-agora-states-server
├─ my-agora-states-client
│  ├─ public
│  │  ├─ assets
│  │  └─ index.html
│  └─ src
│     ├─ components
│     ├─ context
│     ├─ hooks
│     ├─ pages
│     ├─ styles
│     ├─ utils
│     ├─ Root.jsx
│     └─ index.js
└─ my-agora-states-server
   ├─ controller
   ├─ repository
   ├─ router
   └─ app.js
```

## 🏃‍♀️ 실행 방법
### 1. Clone Repository
```
git clone https://github.com/nalsae/fe-sprint-my-agora-states-server.git
```

### 2. Install Packages
```
// (1) 서버
// my-agora-states-server 폴더로 이동
npm install

// (2) 클라이언트
// my-agora-states-client 폴더로 이동
npm install
```

### 3. Run
```
(1) 서버
// my-agora-states-server 폴더로 이동
npm start

(2) 클라이언트
// my-agora-states-client 폴더로 이동
npm start
```

## 🖥 구현 이미지

(gif 파일 용량 때문에 로딩에 시간이 좀 걸립니다 😥)

✔ **최초 렌더링 시 애니메이션**
![animation](https://github.com/codestates-seb/fe-sprint-my-agora-states-server/assets/101828759/8cb1de11-0638-4680-8caf-8cbe4ba2dbe8)

✔ **질문 등록 & GitHub 프로필 적용**
![질문등록](https://github.com/codestates-seb/fe-sprint-my-agora-states-server/assets/101828759/7d2c9699-a6d5-43d3-bda4-363f626582ab)

✔ **페이지네이션**
![페이지네이션](https://github.com/codestates-seb/fe-sprint-my-agora-states-server/assets/101828759/9d6ca76b-7e8a-46a0-a381-6b331b733e53)

✔ **색상 모드 전환**
![색상모드](https://github.com/codestates-seb/fe-sprint-my-agora-states-server/assets/101828759/6c6c82c0-037f-4d9b-85da-e64ff094e822)

✔ **상단 이동 버튼**
![gototop](https://github.com/codestates-seb/fe-sprint-my-agora-states-server/assets/101828759/0a1d90e0-c4f5-426b-9561-15d7534a6a7b)

✔ **답변 필터 기능**
![답변필터](https://github.com/codestates-seb/fe-sprint-my-agora-states-server/assets/101828759/8917b2af-a7cd-413c-a9f1-bdedb38f9aef)

## 📌 Bare Minimum Requirement Self Checklist

**my-agora-states-server**

- [x] `my-agora-states-server/app.js`
  - [x] 모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어를 적용합니다.
  - [x] POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어를 적용합니다.
  - [x] 서버 상태 확인을 위해 `/` 에서 상태 코드 200으로 응답합니다.
  - [x] `discussionsRouter` 를 이용하여 `/discussions` 경로로 라우팅합니다.
- [x] `my-agora-states-server/router/discussions.js`
  - [x] `GET /discussions`
  - [x] `GET /discussions/:id`
- [x] `my-agora-states-server/controller/index.js`
  - [x] `discussionsController.findAll`
  - [x] `discussionsController.findById`

**my-agora-states-server 과제 제출 (Pull request)**

- [x] Pull request로 과제 제출

**my-agora-states-server 시작**

- [x] `package.json` 을 참고하여 나만의 아고라 스테이츠 서버를 로컬 환경에서 실행합니다.

**my-agora-states와 연동하기**

- [x] my-agora-states-server가 켜져있는지 확인합니다.
- [x] 로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.

## 📌 Optional Checklist

**my-agora-states-in-react**

- [x] create-react-app으로 프로젝트 생성
- [x] 기존에 만든 나만의 아고라 스테이츠를 React로 옮기기
  - [x] 디스커션 나열 기능
  - [x] 디스커션 추가 기능
    - [x] 현지 시간 적용
    - [x] GitHub 프로필 이미지 적용
    - [x] 추가한 디스커션 유지 기능
  - [x] 디스커션 등록 시 성공 메시지 출력 기능
  - [x] 답변 필터 기능
  - [x] 페이지네이션 기능
  - [x] 색상 모드 전환 기능
  - [x] Go to top 버튼 구현
  - [x] Styled-Components를 활용한 CSS 스타일링
  - [x] Framer Motion을 활용한 애니메이션
  - [x] 반응형 디자인
- [x] 로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.

