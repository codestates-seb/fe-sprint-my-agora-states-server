const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 3001;

const discussionsRouter = require('./router/discussions');

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({ strict: false }));
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan('dev'));

// TODO: /discussions 경로로 라우팅합니다.
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).json('Welcome everyone😃');
  throw '';
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
