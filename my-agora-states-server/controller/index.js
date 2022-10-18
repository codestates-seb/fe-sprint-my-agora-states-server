const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let resBody = discussionsData;
    // const { limit, pages } = req.query;
    // if (!limit && !pages) {
    //   return res.status(200).json(resBody);
    // }
    return res.status(200).send(resBody);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const found = discussionsData.find((d) => d.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    }
    return res.status(404).send('Not Found!');
  },
};

module.exports = {
  discussionsController,
};
