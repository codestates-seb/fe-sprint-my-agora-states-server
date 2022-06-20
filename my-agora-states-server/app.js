const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(express.json());

// @see: https://seohyun0120.tistory.com/entry/Log-morgan으로-http-request-로그를-남겨보자
// morgan은 포맷과 객체를 인자로 받는 함수
// stream은 객체
// write는 log 함수의 키
app.use(
  morgan("dev", {
    stream: {
      write: (message) => console.log(message),
    },
  })
);

const port = 3001;
const discussionsRouter = require("./router/discussions");

// TODO: /discussions 경로로 라우팅합니다.

app.get("/", (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  throw "";
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
