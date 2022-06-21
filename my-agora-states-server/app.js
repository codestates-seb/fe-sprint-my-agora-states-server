const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan('tiny'))

const port = 3001;
const discussionsRouter = require('./router/discussions');
// TODO: /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);
// app.use('/A경로표지판', discussionsRouter);

// 주소값 // www.urclass.com/playlist/140
  // www.urclass.com/ => 루트 경로
    //www.urclass.com/playlist => playlist 경로 => 다른 코드에서 실행시키는 것

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send('health check')
  // throw '';
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
