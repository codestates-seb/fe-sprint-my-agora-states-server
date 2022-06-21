const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan());

const port = 3001;
const discussionsRouter = require("./router/discussions");
// TODO: /discussions 경로로 라우팅합니다.
app.use("/discussions", discussionsRouter);
app.get("/", (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  try {
    return res.status(200).send("Welcome to JiYJ's Agora-States!");
  } catch {
    throw res.status(404).send("응답 중 에러가 발생했습니다.");
  }
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
