const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// router
const discussionsRouter = require('./router/discussionsRouter');


// morgan 미들웨어는 HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어이다.
app.use(morgan('tiny')); // tiny: 최소화된 로그를 출력
app.use(cors()); // cors 헤더를 모든 응답에 넣어준다.
app.use(express.json()); // 모든 응답은 json으로 한다. Content-Type: application/json

app.set('port', process.env.PORT || 4000);


app.use('/discussions', discussionsRouter);


// health check: 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보낸다.
app.get('/', (req, res) => {
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(app.get('port'), () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${app.get('port')}`);
});

module.exports.app = app;
module.exports.server = server;
