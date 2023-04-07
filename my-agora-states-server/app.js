const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors());

const jsonParser = express.json();

const port = 4000;
const discussionsRouter = require('./router/discussions');

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
