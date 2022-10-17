// comm set -------------------
const express = require("express");
const app = express();
const cors = require("cors"); //cors 세팅: npm i cors 한 후 가져옴.
const morgan = require("morgan");
// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan("tiny"));

// TODO: 1. cors를 적용합니다.
app.use(cors());
// TODO: 2. Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({ strict: false }));

const port = 4000;
const discussionsRouter = require("./router/discussions");

// TODO: 3. app.use()를 활용하여 /discussions 경로로 라우팅합니다.
app.use("/discussions", discussionsRouter);

app.get("/", (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send("health check");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
