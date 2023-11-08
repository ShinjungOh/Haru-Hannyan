# 리드미

## 프로젝트 소개

고양이 스티커로 하루를 기록하는 감정일기 프로젝트입니다.

- 📅 개발 기간 : 2023. 06 ~ 2023. 11
- [🐱 배포 링크](http://haru-hannyan.com/)
- [🔗 Blog](https://shinjungoh.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%95%98%EB%A3%A8%ED%95%9C%EB%83%A5)
- [🔗 Figma](https://www.figma.com/file/S88IviCMlCb4xS7rzNI5UK/%ED%95%98%EB%A3%A8%ED%95%9C%EB%83%A5?type=design&node-id=0%3A1&mode=design&t=r4R09lYfU7Jvpk4K-1)  
- [🔗 Github Wiki](https://github.com/ShinjungOh/Haru-Hannyan/wiki)

<br/>

## 기술스택

- bundler: vite
- package manager: npm
- library: React v18
- fetch: axios
- store: zustand
- css: emotion
- test: jest, react-testing-library
- CICD: husky, github actions
- linter, formatter: eslint, prettier

<br/>

## 프로젝트 실행 방법

### 설치 및 실행

```
git clone https://github.com/ShinjungOh/Haru-Hannyan

npm install
npm run dev
```

<br/>

## 프로젝트 구조

```
src
├── api
│   ├── diary
│   ├── report
│   ├── setting
│   └── user
├── assets
├── lib
│   ├── const
│   ├── hooks
│   ├── store
│   ├── types
│   └── utils
├── pages
└── ui
    ├── components
    │   ├── calendar
    │   ├── common
    │   ├── diary
    │   ├── layout
    │   ├── menu
    │   ├── modal
    │   ├── overlay
    │   ├── report
    │   └── setting
    └── styles
```

<br/>

## 기능 설명

### 회원 인증/인가

- 로그인/회원가입
- 카카오 로그인

### 감정일기 CRUD

- 월별 캘린더 조회
- 월별 타임라인 조회
- 캘린더 날짜 클릭 시 감정일기 작성 페이지로 이동
- 기분, 감정, 한줄일기 작성하기
- 감정일기 수정하기
- 감정일기 삭제하기

### 스트레스 자가 테스트

- 7일 간격으로 스트레스 테스트 가능
- 검사 완료 후 결과와 점수표 확인 가능
- 검사 기록 삭제 시 재검사 가능
- 검사 미완료 상태에서 페이지 이동 시 경고 팝업
- 테스트 기록 타임라인으로 조회 가능

### 설정

- 사용자의 닉네임, 이메일 ID 조회
- 닉네임, 비밀번호 변경하기
- 총 일기, 스트레스 검사 갯수 조회
- 개인정보처리방침 조회
- 개발 과정 블로그 새창으로 열기 가능
- 로그아웃 버튼 클릭 시 로컬스토리지에 저장된 사용자 정보 삭제 및 홈 화면으로 전환

<br/>
