const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.send(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filteredData = discussionsData.filter((data) => data.id === Number(id))[0];

    if (filteredData === undefined) {
      res.status(404).send('id에 해당하는 discussion이 없습니다.');
    } else {
      res.status(200).send(filteredData);
    }
  },
};

module.exports = {
  discussionsController,
};
