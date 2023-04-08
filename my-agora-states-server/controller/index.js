const { agoraStatesDiscussions } = require('../repository/discussions');

const { v4: uuidv4 } = require('uuid');
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const isParams = Object.keys(req.query).length > 0;
    console.log(JSON.stringify(req.query));

    if (isParams) {
      // true -> 페이징
      const { page, limit } = req.query;
      console.log(`${page} / ${limit}`);
      const array = [];
      const start = +page * +limit; // 10개 씩이면 1 * 10
      const end = start + +limit;

      for (let i = start; i < end; i++) {
        array.push(discussionsData[i]);
      }
      console.log(`${start} - ${end}`);
      console.log(array);
      // console.log(array.map((item) => item.id || null));
      res.json(array);
    } else {
      // TODO: 모든 discussions 목록을 응답합니다.
      res.json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filtered = discussionsData.filter((item) => item.id === Number(id));

    if (filtered.length === 0) {
      res.status(404).send('Not Found....!');
    } else {
      res.status(200).send(filtered[0]);
    }
  },

  createDiscussion: (req, res) => {
    const { author, title, bodyHtml } = req.body;
    const id = uuidv4();
    const avatarUrl = `https://randomuser.me/api/portraits/men/${parseInt(
      Math.random() * 100
    )}.jpg`;

    const newDiscussion = {
      id,
      createdAt: new Date().toLocaleString(),
      title,
      url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45',
      author,
      answer: null,
      bodyHtml,
      avatarUrl,
    };

    discussionsData.unshift(newDiscussion);
    res.status(201).send('Sucessfully added discussion...!');
  },

  deleteDiscussion: (req, res) => {
    const { id } = req.params;

    discussionsData = discussionsData.filter((item) => {
      // item.id !== Number(id)

      if (Number.isNaN(Number(id))) {
        return item.id !== id;
      }
      return item.id !== Number(id);
    });
    res.status(204).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
