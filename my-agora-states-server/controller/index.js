const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const { filter } = req.query;
    const items = getFilteredItems(discussionsData, filter);
    res.status(200).json(items);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find(discussion => discussion.id === +id);
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).send('id와 일치하는 discussion이 없음');
    }
  },

};

module.exports = {
  discussionsController,
};
