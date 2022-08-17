const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


// TODO: cors를 적용합니다.

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

const myLogger = function (req, res, next) {
  console.log(`http request method is ${req.method}, url is ${req.url}`);
  next();
};

// 모든 요청에 대해 url이나 메서드를 확인
app.use(myLogger);

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  throw '';
  // throw 'No problem';
  res.status(200).send('No problem');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
