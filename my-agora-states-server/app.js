const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));
app.use(cors())
app.use(express.json()) // strict를 설정 안 하는 이유 -> 어차피 필요한 형식으로 받아오기 때문

const port = 4000;
const discussionsRouter = require('./router/discussions');

app.use('/discussions', discussionsRouter)

app.get('/', (req, res) => {
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
