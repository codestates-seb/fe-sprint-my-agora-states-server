const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const port = 4000;
const discussionsRouter = require('./router/discussions');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: 모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어 적용
app.use(cors());

// TODO: POST 요청 등에 포함된 body(payload)를 구조화하기 위한 Express 내장 미들웨어 express.json()을 적용
app.use(express.json());

// TODO: discussionsRouter를 이용하여 /discussions 경로로 라우팅
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  res.status(200).send('Server is operational!');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
