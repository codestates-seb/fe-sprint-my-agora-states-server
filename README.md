# fe-sprint-my-agora-states-server
---
Section2에서 배운 내용을 바탕으로 나만의 아고라 스테이츠 서버를 만듭니다.

fe-sprint-my-agora-states-server repository에서 자신의 Repository로 fork후 과제를 진행합니다.
Bare Minimum Requirement
이번 해커톤에서는 Section2 에서 학습한 내용을 얼마나 잘 적용 및 응용할 수 있는지 자기 자신의 개발 역량을 스스로 확인합니다. 일부 가이드 외에는 직접적인 힌트가 없습니다. 스스로 배웠던 내용을 잘 복습해보시기 바랍니다. Bare minimum requirement 완성을 목표로 진행해 주세요.

my-agora-states-server

my-agora-states-server는 기본적인 테스트가 준비되어 있습니다. 자신이 잘 작성했는지 확인하는데 도움이 됩니다. 물론, Postman이나 curl로 테스트를 해보셔도 됩니다.

my-agora-states-server/app.js
모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어를 적용합니다.
POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어를 적용합니다.
서버 상태 확인을 위해 GET / 에서 상태 코드 200으로 응답합니다.
discussionsRouter 를 이용하여 /discussions 경로로 라우팅합니다.
my-agora-states-server/router/discussions.js
GET /discussions
모든 discussion 목록을 조회하는 라우터를 작성합니다.
GET /discussions/:id
discussion 하나를 조회하는 라우터를 작성합니다.
my-agora-states-server/controller/index.js
discussionsController.findAll (모든 discussion 목록 조회)
discussionsController.findById (discussion 하나를 조회)
my-agora-states-server 과제 제출 (Pull request)

my-agora-states-server는 코드스테이츠 Repository에 Pull request로 제출합니다.
Pull request 템플릿에 맞춰 제출합니다.
my-agora-states-server 시작

package.json 을 참고하여 나만의 아고라 스테이츠 서버를 로컬 환경에서 실행합니다. Postman이나 curl로 테스트해보세요.

my-agora-states와 연동하기

my-agora-states-server가 켜져 있는지 확인합니다.
로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.
더 이상 data.js 파일을 사용하지 않고, discussions 데이터를 받아옵니다.
Fetch API를 이용합니다.
Optional
my-agora-states-in-react

Section 1에서 구현한 나만의 아고라 스테이츠를 React로 다시 개발합니다.

create-react-app으로 프로젝트 생성
기존에 만든 나만의 아고라 스테이츠를 React로 옮기기
디스커션 나열 기능
로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.
더 이상 data.js 파일을 사용하지 않고, discussions 데이터를 받아옵니다.
Fetch API를 이용합니다.
