const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: cors를 적용합니다.
app.use(cors())
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
const jsonParser = express.json({strict : false});
const port = 4000;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter)  // 여기는 미들웨어 마운트 -> app 표준  // 마운트 : 물리적인 장치를 특정한 위치(대개는 디렉토리)에 연결시켜 주는 과정
console.dir('test-메인 첫 경로')  // use는 오직 경로사용까지만 path 사용 안함, 전체 하위 경로 루트 동작함,   
// path 경로가 지정값이 동일해야 연결가능함.

app.get('/', jsonParser, (req, res) => {  // 눈에 보이는 첫 페이지
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  // res.send('fe-sprint-my-agora-states-server');
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
