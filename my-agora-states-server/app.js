//app.js 어떤 미들웨어/라우터를 사용하여 서버가 실행되는 지 알 수 있다.

const express = require('express');
const app = express();

//미들웨어
  //1. cors 요청해주는 미들웨어 설치됨
const cors = require('cors');
const morgan = require('morgan');

// 2. morgan 미들웨어가 세팅되어 있습니다.
  // HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
  // option : 모든 요청 중 필요한 핵심 정보만 log에 찍힘
app.use(morgan('tiny'));
  //아래는 discussion에 해당하는 요청만 morgan미들웨어 작동함
  // app.use('/discussions', morgan());

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
  //서버에서 json데이터를 보내기 위해 (js형식 데이터 -> json형태)로 바꿔주는 미들웨어 (x)
  //모든 요청에 body에 들어있는 데이터를 JS데이터를 파싱해주는 미들웨어 (o)
app.use(express.json())

//discussionsRouter : discussion 관련 모든 요청들을 분기해주는 어플리케이션/함수
  //[router]폴더 - [disussions.js] express에서 router 기능 사용하고 있음 
const port = 4000;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다.
// discussions라는 Url로 요청을 보낸 것만 disucssionsRouter로 
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다. (npm start)
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
