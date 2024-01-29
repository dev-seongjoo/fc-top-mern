# ⚽ FC TOP 축구팀 관리 웹 애플리케이션

<a href = "http://13.209.142.132/">FC TOP 바로가기

<a href = "https://github.com/dev-seongjoo/fc-top-client">FC TOP 프론트엔드 Github

<a href = "https://github.com/dev-seongjoo/fc-top-server">FC TOP 백엔드 Github

## 📣 프로젝트 소개
FC TOP라는 제가 속해있는 축구팀을 관리하기 위해 직접 만들어본 웹 애플리케이션입니다.

1️⃣ 팀원들을 가입시켜 명단을 관리할 수 있습니다.

2️⃣ 경기 일정을 등록하고 참여 여부를 투표할 수 있습니다.

3️⃣ 경기 시간이 되면 GPS를 이용하여 출석을 할 수 있습니다.

4️⃣ 참석 명단을 이용하여 선발 명단을 작성할 수 있습니다. 

5️⃣ 경기 내용을 실시간으로 기록하여 득점, 도움 등의 순위를 확인할 수 있습니다.

## 🗓️ 프로젝트 기간
> 23.06 - 23.08 (2달)

## 🙋 개발 인원
FE - 김성주

BE - 김성주

## 🔀 ERD(Entity Relationship Diagram)
![스크린샷 2024-01-28 오후 3 38 27](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/d21914c2-caf1-4cd6-b9ad-bdb99ee12d55)

<a href = "https://www.erdcloud.com/d/6qkQoHXk8voBvjd5X"> ERD 바로 가기

## 🏹 SKILLS
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"><img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"><img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">

## 🛰️ FEATURES
> 1. 회원가입/로그인
- 회원가입 시 아이디 중복 확인/ 휴대폰 메세지 인증/ 우편번호 찾기 로직 구현
- 로그인 시 JWT 인증 로직 구현

![회원가입](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/7f066ce7-098f-45ac-913e-13e6fa2af3e6)
![로그인](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/e664a798-2023-4ba0-b870-4d6efee267e9)

> 2. 경기 일정 등록 / 투표
- 경기 시간 및 장소 지정
- 카카오맵 마커를 이용한 모임 위치 지정
- 참석/불참석 투표, 한눈에 참석/불참석/미투표 확인

![모임위치 지정](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/a83c79a8-ac3d-4fff-945a-cc8cabdce604)
![일정 디테일](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/532bd76c-9f66-4d4d-b500-d6660b15ba34)
![투표 현황](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/b0811173-4cc2-437f-8001-054c55721933)



> 3. 경기 GPS 출석
- 경기 시간 1시간 전부터 모임 지정 위치 반경 30m 내에서 GPS를 이용한 출석

![출석](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/6e4efb4c-a1c1-438a-9149-c4033e88939b)


> 4. 선발 명단 작성
- 투표 결과 중 참석 명단을 대상으로 선발 명단 작성
- 선발 명단 작성시 가입시 선택한 선호포지션 반영 가능

![선발 명단 리스트](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/712d0c89-086a-49b1-98b4-ae981ca59fda)
![선발 명단 작성 완료](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/c6db3ec4-07f0-4e3d-a9f6-2f022d50806d)


> 5. 경기 내용 실시간 기록
- 득점/도움/교체/실점 등의 경기 내용 실시간 기록
- 추후 개별 순위 확인

![기록1](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/5952e503-e4ba-4a46-9ea6-bf3d846c1bc5)
![실점 기록 완료](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/70169927-a483-4009-84f3-e5c39f33bb0a)
![기록 종료](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/96f6d5d6-32ea-4590-933f-2209d2f085d6)
![득점 순위](https://github.com/dev-seongjoo/fc-top-mern/assets/109133448/25542eaf-dd08-43e6-bdfb-2aed74198533)


## 🚨 어려웠던 점

### 1️⃣ Https 및 DNS 등록시 서버 api를 받아오지 못하는 문제가 발생

**문제**

프론트에서 환경변수를 통한 백엔드 API 사용을 함에 있어 계속 통신 오류가 발생

**원인**

IP를 이용했을 경우는 통신 오류가 발생하지 않으나 DNS를 이용했을 때 통신 오류가 발생한 것을 보면 DNS에 매칭된 IP가 올바르지 않아서 라고 추측

**해결방안**

DNS 재등록 및 EC2 탄력적 IP 재매칭을 하여 해결해볼 생각
