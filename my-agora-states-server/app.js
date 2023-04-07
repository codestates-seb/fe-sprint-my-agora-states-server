const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const discussionRoutes = require("./router/discussions");

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan("tiny"));

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 4000;
const discussionsRouter = require("./router/discussions");

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다.
// 이렇게 하는거 맞나? 위에서 require로 불러오는것도 맞지?
app.use("/discussions", discussionRoutes);

app.get("/", (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send("fe-sprint-my-agora-states-server");
});

// app.listen 은 제일 밑에 있나 위에 있나 상관없는건가?? 맨위에 있어야하는거 아닌가?
const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
