const express = require('express');//express 라이브러리를 불러와, express 변수에 할당하고
const app = express();  //express 어플리케이션을 생성하고, app변수에 할당
const cors = require('cors'); //cors를 활성화하기위해 cors라이브러리를 불러옴
const morgan = require('morgan'); //morgan 라이브러리를 불러옴

// morgan 미들웨어가 세팅되어 있습니다.HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));
// 'morgan'은 http 요청에 대한 로그(컴퓨터 기록)를 생성하는 라이브러리로, 'tiny'는 로그의 출력방식을 지정하는 인자
// tiny는 매우 간단한 형태의 로그를 생성
// 로그: GET /users 304 2.582 ms - -

// 각각 cors()와 express.json()이라는 미들웨어 등록(중간다리)
app.use(cors());
// cors 라는 미들웨어를 등록함, 이 cors 미들웨어는 다른 라우터들보다 먼저 실행
// 모든 라우터들이 cors처리(다른 출처의 리소스 받아오기 가능)

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({strict: false}));
//express.json()미들웨어를 사용하면 클라이언트가 보낸 JSON 데이터를 파싱하는 역할
//이때, {strict: false}옵션으로 전달하면 엄격한 모드를 해제
//JSON 데이터를 보내는 클라이언트가 엄격한 JSON 형식을 따르지 않더라도 서버에서 파싱할 수 0

const port = 4000;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions',discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
