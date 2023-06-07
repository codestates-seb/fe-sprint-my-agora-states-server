const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));//모든 요청에 대해서 동작
// TODO: cors를 적용합니다.
//모든 요청에 cors 적용
app.use(cors())
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
//모든 요청에 대해 적용가능, body를 보내는 요청에 대해 구분할 수 있음
app.use(express.json({strict:false}));

const port = 4000;
const discussionsRouter = require('./router/discussions');// 분기를 담당

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
//특정url로 요청이 왓을때 discussion 라우터로 연결
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {//4000번에서 작동
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
