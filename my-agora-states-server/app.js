// // express,cors 라이브러리 불러온다
// const express = require('express');
// // 모든 것에 대한 cors 처리
// const cors = require('cors');
// //들어온 요청을 콘솔에 찍어준다.
// const morgan = require('morgan');
// const discussionsRouter = require('./router/discussions') //해당 파일에서 router 파일을 가져올것
// const port = 4000;

// const app = express(); // 서버 개설

// app.use(morgan('tiny')); 
// app.use(express.json({strict : false}));// json 요청 데이터 정제
// app.use(cors()); // 모든 요청에 대한 cors 처리

// app.use('/discussions', discussionsRouter)

// app.get('/',(req,res)=>{
//   res.status(200).send('fe-sprint-my-agora-states-server');
// })

// const server = app.listen(port,()=>{
//   console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
// })


const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny'));

// TODO: cors를 적용합니다.
app.use(cors())
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({strict : false}));

const port = 4000;
const discussionsRouter = require('./router/discussions'); // 객체 안에 함수가 들어감.

// TODO: app.use()를 활용하여 /discussions 경로로 라우팅합니다. 
app.use('/discussions',discussionsRouter)

app.get('/', (req, res) => {
  // 서버 상태 확인을 위해 상태 코드 200과 함께 응답을 보냅니다.
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
