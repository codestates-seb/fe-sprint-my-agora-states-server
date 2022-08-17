const express = require('express');
const app = express();
const router = express.Router();

const cors = require('cors');
const morgan = require('morgan'); 

// TODO: cors를 적용합니다.
app.use(cors())
app.use(express.json({strict: false}))

// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.

const port = 3001;
const discussionsRouter = require('./router/discussions');

// TODO: /discussions 경로로 라우팅합니다.
// app.use('/' ,(req,res,next)=>{
//   console.log('서버성공')
//   res.status(200).json('server succesFull')
//   next()
// }) 
app.use("/discussions",discussionsRouter)
app.get('/', (req,res)=>{
  res.status(200).send('server succes')
})


const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});


module.exports.app = app;
module.exports.server = server;
