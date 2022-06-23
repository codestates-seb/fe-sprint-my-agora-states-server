const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan('dev')); // tiny 등 옵션이 있음.

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);

// 주소값: www.urclass.com/ -> 루트 경로
//        www.urclass.com/playlist -> playlist 경로SEB_FE_39_조은영 과제 제출합니다. 

// health check라고 함!
app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send('server status is Coooool');
  throw ''; // throw 없어도 작동은 하지만, 테스트가 한참 돈다.
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
