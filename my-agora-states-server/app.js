const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.

const port = 4000;
const discussionsRouter = require("./router/discussions");

// app.js -> 라우터로 라우팅 -> 라우터에서 컨트롤러로 라우팅 ->  컨트롤러 내부에서 로직에 따른 response 값 전달

app.use("/", discussionsRouter);

app.get("/", (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send("fe-sprint-my-agora-states-server");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
