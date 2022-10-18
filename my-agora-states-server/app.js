const express = require('express'); // express 불러오기
const app = express(); // 서버 생성

const cors = require('cors'); // cors 불러오기
const morgan = require('morgan'); // morgan 불러오기

// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
// 로그의 포맷 선택하거나 - combined, tiny, dev, common
// 직접 지정하기 - :url, :status, :req[header], res[header], :response-time, method
app.use(morgan('tiny')); // morgan 사용하기

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());

const port = 4000;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => { // 서버 실행
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
