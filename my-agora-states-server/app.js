const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 4000;


// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// which middleware apply to global
app.use(cors())
app.use(express.json())

// routing
const discussionsRouter = require('./router/discussions');
app.use('/discussions', discussionsRouter)

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});


// run server
const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
