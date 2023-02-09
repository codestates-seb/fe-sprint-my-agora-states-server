const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const { filter } = req.query;
    const items = getFilteredItems(discussionsData, filter);
    res.status(200).json(items);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
