const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(cors({
  origin: "*",
  methods: ['POST', 'OPTIONS'],
}))

// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(express.json())

const port = 3003;
const discussionsRouter = require('./router/discussions');

app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  res.status(200).send("응답 확인");
});

app.use((err, req, res, next) => {
  const { message } = err;
 
  if (message === "페이지를 벗어났습니다.") {
    res.status(200).send([]);
  } else if (message.match(/(유효하지 않은 ID)|(숫자값)/g).length) {
    res.status(404).json("Invalid Request");
  }
})

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});
  
module.exports.app = app;
module.exports.server = server;
