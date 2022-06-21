const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
const logger = require('morgan');
app.use(logger());
app.use(morgan());

app.use(cors())
app.use(express.json({strict : false}))

const port = 3001;
const discussionsRouter = require('./router/discussions');
const req = require('express/lib/request');
const res = require('express/lib/response');

// TODO: /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter)


app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send('Agora States')
});

app.get('/discussions', (req, res) => {
  res.status(200).send('Yes')
})

app.get('/:id', (res,req => {
  res.status(200).send('이거 아닌거같은데')
}))

app.post('/', (req, res) => {
  res.status(200).send('테스트 잘가나')
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).send({
    message: 'Internal Server Error',
    stacktrae: err.toString()
  })
})

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
