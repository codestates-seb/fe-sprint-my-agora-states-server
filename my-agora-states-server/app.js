const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({ strict: false }));
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan('combined')); //tiny

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: /discussions 경로로 라우팅합니다.
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다. health check
  res.status(200).send('Welcome agora states server!');
  throw ''; //send가 잘 전달되면 throw는 넘어감...?
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString(),
  });
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
