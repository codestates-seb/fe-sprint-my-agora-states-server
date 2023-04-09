const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');


// const jsonParser = express.json({strict: false}); // 원래 객체로만 받는 데 false로하면 배열 같은 걸로 받을 수 있게 됨
// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny')); // 로그(log)를 관리하기 위한 별도의 서드파티 라이브러리 -> tiny (로그의 포맷)

// TODO: cors를 적용합니다.
app.use(cors(
  // {origin: '*', // 출처 허용 옵션
  // credential: 'true' // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근}
));

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());

const port = 4000;
const discussionsRouter = require('./router/discussions');
// const discussions = require('./repository/discussions');
// Bare Minimum Requirement

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);
// app.use('/discussions', discussions);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;


