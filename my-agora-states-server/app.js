const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

const port = 4000;
const discussionsRouter = require('./router/discussions');
// const { addHook } = require('dompurify');

app.use('/discussions', discussionsRouter);

app.get('/', (req, res) => {
  res.status(200).send('fe-sprint-my-agora-states-server');
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
