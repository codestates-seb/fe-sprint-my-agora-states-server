const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 4000;
const discussionsRouter = require('./router/discussions');

// morgan 미들웨어가 세팅되어 있습니다. -> 콘솔로그 찍어주는 미들웨어
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: cors를 적용합니다.
app.use(cors())

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// JSON으로 들어오는 요청을 구문분석하며, body-parser을 기반으로 한다.
// POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어를 적용합니다.
app.use(express.json({strict: false}))

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter)

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('이거 되고 있니?');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;

