const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const port = 4000;

app.use(morgan("tiny")); // HTTP call logger 미들웨어
app.use(cors()); // cors 적용
app.use(express.json()); // express.json() 적용

const discussionsRouter = require("./router/discussions");
app.use("/discussions", discussionsRouter); // /discussions 라우팅

app.get("/", (req, res) => {
  res.status(200).send("server");
}); // 서버 상태 확인

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
