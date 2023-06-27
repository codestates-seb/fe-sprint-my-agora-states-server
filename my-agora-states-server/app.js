const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: cors를 적용합니다.
app.use(cors());

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json())

const port = 4000;
const discussionsRouter = require('./router/discussions');

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;

// 서버
// 쿼리 파라미터(e.g. author)에 따른 필터링 데이터 조회 (Read)
// 디스커션 데이터 추가 (Create)
// 특정 디스커션 데이터 수정 (Update)
// 특정 디스커션 데이터 삭제 (Delete)
// 클라이언트
// 특정 author의 질문만 볼 수 있는 기능 (e.g. 작성자 검색창)
// 제목 클릭 시 질문 내용과 답변 내용 볼 수 있도록 (e.g. accordion UI)
// 답변이 달렸는 지 여부에 따라 렌더링이 달라지도록 (e.g. 체크 이모지)
// 데이터를 추가할 수 있는 인터페이스 구현 (e.g. input, textarea)
// 특정 데이터를 수정할 수 있는 인터페이스 구현 (e.g. 제목 옆 연필 이모지 누르면 제목 수정)
// 특정 데이터를 삭제할 수 있는 인터페이스 구현 (e.g. 디스커션 옆 휴지통 이모지)
