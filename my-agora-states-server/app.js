const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan("tiny"));

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({ strict: false })); // fetch할때 body에 데이터넣는데 json은 문자열로만들어진형태 , 객체랑 데이터는 따옴표안넣는데 json이 // 배열이나 객체형태로 보내면 언제나 파싱되는데, 문자열형태로 보내면 json파일인데 스트릭트가 true가 되어있으면 body데이터가 아니라고 하는것.

const port = 4000;
const discussionsRouter = require("./router/discussions");

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다.
app.use("/discussions", discussionsRouter);

app.get("/", (req, res) => {
	// 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
	res.status(200).send("fe-sprint-my-agora-states-server");
});

const server = app.listen(port, () => {
	console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
