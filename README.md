# Scatch

- Scatch 스캐치! 캐릭터를 스케치! 디자인을 캐치!

- 캐릭터 제작자가 캐릭터를 제작한 후 판매하는 사이트.

- 마치 캐릭터를 기성품 팔듯이 판매하는 사이트를 만드는게 목적.

- https://scatch.netlify.app/

### 인원구성

- 웹 개발 1인.(프론트엔드)

- 웹 디자인 1인

- 캐릭터, 마스코트 디자인 1인


### 페이지 소개

- index.html - 메인 페이지 / index-afterLogin.html - (로그인 되었을 때)

- login.html - 로그인 페이지

- join.html - 회원가입 페이지 / join-finish - 회원가입 완료 페이지

- intro.html - 사이트 소개 페이지 / intro-afterLogin.html - (로그인 되었을 때)

- market.html - 판매 캐릭터 페이지 / market-afterLogin.html - (로그인 되었을 때)

- kategorie1.html - 판매캐릭터-카테고리1 페이지 / kategorie1-afterLogin.html - (로그인 되었을 때)

- notice.html - 공지사항 페이지 / notice-afterLogin.html - (로그인 되었을 때)

- noticePost.html - 공지사항 게시물 페이지. / noticePost-afterLogin.html - (로그인 되었을 때)

- noticeWrite-afterLogin.html - 공지사항 작성(로그인 되었을 때)

- noticeWriteEdit-afterLogin.html - 공지사항 수정(로그인 되었을 때)

- kategorie2.html - 판매캐릭터-카테고리2 페이지 / kategorie2-afterLogin.html - (로그인 되었을 때)

- kategorie1Post.html/kategorie2Post.html - 판매캐릭터 -카테고리1의 게시물 페이지, 카테고리2 게시물 페이지 
  / kategorie1Post-afterLogin.html, kategorie2Post-afterLogin.html - (로그인 되었을 때)

- kategorie1PostWrite-afterLogin/kategorie2PostWrite-afterLogin - 판매캐릭터 작성 페이지 (로그인 되었을 때)

- kategorie1WriteEdit-afterLogin/kategorie2WriteEdit-afterLogin - 판매캐릭터 수정 페이지 (로그인 되었을 때)

- idpwSearch.html - 아이디 비밀번호 찾기 페이지

- idSearchFinish.html - 아이디 찾기 완료 페이지

- pwSearchFinish.html - 비밀번호 찾기 완료 페이지

- myPage-afterLogin - 내 정보 페이지

### 개발 과정
- 23년 1월 20일 첫 아이디어 회의

- 23년 1월 30일 두번째 회의 scatch 탄생. 1차 마스코트 및 로고 디자인. 사이트 컨셉 및 기능 회의

- 23년 2월 2일 사이트 와이어 프레임

- 23년 2월 6일 와이어 프레임 기반의 사이트 제작 시작. (메인 페이지, 로그인 페이지)

- 23년 2월 7일 회원가입 페이지

- 파이어베이스 연동. 넷트리파이에는 오류가 안생길지? 넷트리파이 링크에서 파이어 베이스가 작동할지가 젤 궁금.

- 넷리파이 연동해제.

- scatch 와 scatch1로 나눠 우선 scatch1에서 프론트 개발 후 이를 scatch로 클론하여 파이어베이스 기반 기능 연결을 시도해볼 예정.

- scatch1에 넷리파이 연결

- 23년 2월 13일 scatch 로고 및 마스코트 변경
  
- 회원가입 완료 페이지 추가

- 23년 2월 15일 회원가입 유효성 검사 이름 부분 추가 성공

- test 페이지 하나 만듦. 기능 테스트 용 페이지로 홈페이지 진행에는 문제 없음. 추후 삭제 예정.

- netlify 에서 action이 작동 안하는 오류 발견 
   - 수정 완료. form 태그에 data-netlify="true"를 추가하니 정상 작동 하기 시작

- 회원가입 페이지 유효성 검사 전부 적용 완료.

- index-afterLogin.html 은 로그인 한 것처럼 효과를 냈다. 
  실 로그인 구현을 하기엔 백도 봐야해서 우선 프론트에 집중하였다.

- 로그인 페이지에 값을 입력해야 로그인 되게 하였고, 아이디에 정규식을 걸어, 규칙에 맞지 않은 아이디로는 로그인이 불가능 하게 만들었다.

- test용 js 추가. 다양한 기능 실험하고 지우고 할 공간을 위해 만들어 두었다.

- 로그인창만 우선 alert값을 하단 빨간줄 쳐지게 만듦

- 23년 2월 20일 test.css 파일 생성. classList기능을 적용하려함.

- 23년 2월 21일 회원가입 기능 최종 완성.(월에 따른 일자 구현은 추후)

- netlify form submit 속성 수정

- frame.css 로 frame에 해당하는 속성 분리

- 사이트 소개 페이지 1차 완료

- 23년 2월 22일 사이트 width 설정.

- 23년 2월 27일 사이트 공지사항 추가.

- 게시글 에디터 기능 추가. (네이버 스마트 에디터 2.0 이용.) 스마트 에디터의 경우 그냥 하라는대로 갖다 붙여두었음. 스스로 에디터를 만들 수 있을 때 수정...

- 23년 2월 28일 사이트 공지사항 구현 완료

- 로그인 후 창 폴더 구분.

- 로그인 후 게시글 폼 오류 수정.

- kategorie1 완성. - 카테고리1 페이지 완성.

- 공지사항 삭제 버튼 구현 및 비 로그인 시 수정/작성 버튼 및 페이지 삭제

- kategorie2 완성. - 카테고리2 페이지 완성.

- .gitignore 추가. test파일들 업로드 제외(페이지 기능 구현 실험용 페이지)

- 23년 3월 6일 사이트 전체적인 디자인 수정.

- 메인페이지 슬라이드 페이지 만들기 중

- 메인페이지 자동 슬라이드 완성.

- 23년 3월 7일 header를 스크롤에 따라 노출/비노출 되게 설정함.

- 프레임 디자인 수정.

- 메인페이지 완성 / afterLogin 화면도 완성.

- 3월 8일 상단 프레임 마진 설정

- 판매캐릭터 게시물 페이지 완성 / afterLogin도 완성

- 3월 9일 CSS 정리. CSS 분리로 overflow 되는 부분을 줄임.

- JavaScript 조정. 불필요한 중복 제거

- 판매캐릭터 게시물 작성, 수정 페이지 완성

- 23년 3월 14일 아이디 비밀번호 찾기 페이지 완성.

- 아이디/비밀번호 찾기 완료 페이지 완성

- 내정보 페이지 완성. (사이트 최종 완성. 약간의 수정 있을 수 있음.)

- 23년 3월 16일. 내정보 페이지 명함 뒤집기 및 내 사이트 추가 기능 추가