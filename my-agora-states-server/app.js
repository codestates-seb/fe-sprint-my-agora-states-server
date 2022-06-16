const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: 로그 기록을 위한 로거를 설치하고 미들웨어로 적용합니다.
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// 모든 서버는 요청을 받을수 있는 포트 번호를 필요로 합니다.

// HTTP server의 표준 포트는 보통 80 번 이지만, 보통 다른 서버에서 사용중이기 때문에 접근할 수 없습니다.
// 따라서 우리는 보통 테스트 서버 포트로 3000, 8080, 1337 등을 활용합니다.

// PORT는 아파트의 호수와도 같습니다. 서버로 요청을 받기 위해서는 다음과 같이 포트 번호를 설정 합니다.
// (* 때에 따라 다른 포트번호를 열고 싶다면, 환경 변수를 활용 하기도 합니다.)

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome, States Airline!');
});

// TODO: 상태 코드 404, 500 응답을 
app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
