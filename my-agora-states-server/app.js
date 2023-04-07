const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: cors를 적용합니다.
// task 1. 모든 origin, 경로에 CORS 요청
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// task 2. POST 요청 등에 포함된 body(payload)를 구조화한다. HTTP 요청 body를 받는 과정이다. Express 내장 미들웨어인 express.json()를 사용. Content-Type: application/json
// stric: false 어떤 의미인지 찾아야 한다.
app.use(express.json({strict: false}));

const port = 4000;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
// /discussions URI에 들어가면, discussionsRouter로 라우트된다.
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('Welcome, My Agora States!');
});
// 데이터가 없을 때,
// 데이터가 있을 때,

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
