const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const discussionsRouter = require("./router/discussions");
const errorRouter = require("./router/error");
const port = 4000;
const app = express();

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({ strict: false }));

app.use("/discussions", discussionsRouter);
app.use(errorRouter);

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports = {
  app,
  server,
};
