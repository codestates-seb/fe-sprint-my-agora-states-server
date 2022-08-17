const express = require('express');
const app = express();
const jsonParser = express.json({strict: false});
const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(jsonParser);

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});


const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;


// my-agora-states-server/app.js
// 모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어를 적용합니다.
// POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어를 적용합니다.
// 서버 상태 확인을 위해 / 에서 상태 코드 200으로 응답합니다.
// discussionsRouter 를 이용하여 /discussions 경로로 라우팅합니다.
