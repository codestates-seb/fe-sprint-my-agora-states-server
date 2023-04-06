const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const id = parseInt(req.params.id);
    const data = discussionsData.filter((el) => el.id === id);

    if (data.length > 0) {
      return res.status(200).json(data[0]);
    } else return res.status(404).json('데이터가 존재하지 않습니다.');
  },
};

module.exports = {
  discussionsController,
};
