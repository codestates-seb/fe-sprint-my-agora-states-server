const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const isParams = Object.keys(req.query).length > 0;
    console.log(JSON.stringify(req.query));

    if (isParams) {
      // true -> 페이징
      const { page, limit } = req.query;
      console.log(`${page} / ${limit}`);
      const array = [];
      const start = page === 0 ? page : page * limit + 1; // 10개 씩이면 1 * 10
      const end = page === 0 ? start + limit : start - 1 + limit;

      for (let i = start; i <= end; i++) {
        array.push(discussionsData[i]);
      }

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
};

module.exports = {
  discussionsController,
};
