# Description

Section2에서 배운 내용을 총 동원하여 나만의 아고라 스테이츠 서버를 만듭니다.

- [코드스테이츠 fe-sprint-my-agora-states-server 리포지토리](https://github.com/codestates-seb/fe-sprint-my-agora-states-server)에서 자신의 리포지토리로 fork후 과제 진행합니다.

## 배포 링크

Github Page 배포 링크를 아래 작성합니다.

## Bare Minimum Requirement Self Checklist

스스로 구현 완료한 부분까지 체크하여 제출합니다.

**my-agora-states-server**
- [ ] `my-agora-states-server/app.js`
    - [ ] 모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어를 적용합니다.
    - [ ] POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어를 적용합니다.
    - [ ] 서버 상태 확인을 위해 `/` 에서 상태 코드 200으로 응답합니다.
    - [ ] `discussionsRouter` 를 이용하여 `/discussions` 경로로 라우팅합니다.
- [ ] `my-agora-states-server/router/discussions.js`
    - [ ] `GET /discussions`
    - [ ] `GET /discussions/:id`
- [ ] `my-agora-states-server/controller/index.js`
    - [ ] `discussionsController.findAll`
    - [ ] `discussionsController.findById`

**my-agora-states-server 과제 제출 (Pull request)**
- [ ] Pull request로 과제 제출

**my-agora-states-server 시작**
- [ ] `package.json` 을 참고하여 나만의 아고라 스테이츠 서버를 로컬 환경에서 실행합니다.

**my-agora-states**
- [ ] my-agora-states-server가 켜져있는지 확인합니다.
- [ ] 로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.
- [ ] Github Page로 재배포해서, 동기들도 확인할 수 있게 제작합니다.

## Advanced Challenge Self Checklist

스스로 구현 완료한 부분까지 체크하여 제출합니다.

1. **my-agora-states-in-react**
    - [ ] create-react-app으로 프로젝트 생성
    - [ ] 기존에 만든 나만의 아고라 스테이츠를 React로 옮기기
        - [ ] 디스커션 나열 기능
        - [ ] 디스커션 추가 기능
    - [ ] 로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.
    - [ ] Github Page 배포 ([가이드](https://github.com/gitname/react-gh-pages), [공식문서](https://create-react-app.dev/docs/deployment/#github-pages))
2. **my-agora-states-server 페이지네이션**
    - [ ] 쿼리 파라미터 limit 값에 따라 한 번에 볼 수 있는 discussion 개수를 정할 수 있어야 합니다.
    - [ ] 쿼리 파라미터 limit가 없는 요청은 discussions 목록 10개를 응답합니다.
    - [ ] 쿼리 파라미터 page가 없는 요청은 쿼리 파라미터 limit값 만큼의 discussion 목록을 응답합니다.
    - [ ] 잘못된 쿼리 파라미터 값을 요청받은 경우, 상태 코드 400을 응답합니다.
    - [ ] 범위를 벗어난 파라미터 값을 요청받은 경우, 빈 배열을 응답해야 합니다.
    - [ ] 위를 벗어난 파라미터 값을 요청받은 경우, 상태 코드 200을 응답합니다.
3. **my-agora-states-server 생성/변경/삭제**
    - [ ] `my-agora-states-server/router/discussions.js`
        - [ ] `POST /discussions`
        - [ ] `PUT /discussions/:id`
        - [ ] `DELETE /discussions/:id`
    - [ ] `my-agora-states-server/controller/index.js`
        - [ ] `discussionsController.createOne` (discussion 하나를 생성)
        - [ ] `discussionsController.updateById` (discussion 하나를 변경)
        - [ ] `discussionsController.deleteById` (discussion 하나를 삭제)
4. **my-agora-states-server 생성/변경/삭제 테스트 작성하기**
    - [ ] 테스트 작성
      - [ ] 테스트1 
      - [ ] 테스트2 
      - [ ] 테스트3 
      ...

### My Own Self Checklist

자신이 추가로 더 구현한 기능이 있으면 아래 적어주세요.

- []
- []
- []
