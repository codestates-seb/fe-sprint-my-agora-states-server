const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다. / Express 내장 미들웨어인 express.json()을 적용합니다. / OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.v


app.use(cors()); app.use(express.json({strict:false})); app.use(morgan());

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: /discussions 경로로 라우팅합니다. -> app.use(‘경로’, 실행모듈) : 이미 app에서 경로지정 완료 v
app.use('/discussions', discussionsRouter);

// TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다. // 서버 끄면 체크됨: 내용물은 맞음 v
app.get('/', (req, res) => {
  res.status(200).json('서버 체크 OK')
  throw '';
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;