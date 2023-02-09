const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const discussionsRouter = require('./router/discussions');
const port = 4000;

// 미들웨어 세팅
app.use(morgan('tiny'));
app.use(cors())
app.use(express.json())

// 정적 파일 연결 
// app.use(express.static('public'));

app.use('/discussions', discussionsRouter)

app.get('/', (req, res) => {
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
