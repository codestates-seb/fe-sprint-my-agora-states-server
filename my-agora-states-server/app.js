const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: cors를 적용합니다.
//? cors가 필요한 이유 => 서버가 허용한 클라이언트의 요청에만 응답하기 위해서
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
//? express.json 속성 중 strict 디폴트 값이 true로 설정돼 있기 때문에
//? Object만 허용돼 있는 상태이다. Object 형태가 아닌 String 형태도 받을 수 있게 하려면
//? strict를 false로 해 주면 된다.
app.use(express.json({ strict: false }));

const port = 4000;
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
