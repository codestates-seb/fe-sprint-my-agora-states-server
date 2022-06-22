const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan("dev"));

const port = 3001;
const discussionsRouter = require("./router/discussions");

// TODO: /discussions 경로로 라우팅합니다.
app.use("/discussions", discussionsRouter);

app.get("/", (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send("health check");
  // throw ""; //에러를 강제 발생하게 하는 것, 빨리 test하려고 넣은 것
});

const server = app.listen(port, () => {
  console.log(`🔥 [RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
