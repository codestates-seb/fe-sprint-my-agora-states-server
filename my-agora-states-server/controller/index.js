const { agoraStatesDiscussions } = require('../repository/discussions');
let discussionsData = [...agoraStatesDiscussions];

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredDiscussions = [...discussionsData];
    if(id) {
      filteredDiscussions = discussionsData.filter((discussion) => {
        return discussion.id === Number(id);
      });
    }
    if (filteredDiscussions.length === 0) {
      return res.status(404).json('Not found');
    } else {
      return res.status(200).json(filteredDiscussions[0]);
    }
  }
};

module.exports = {
  discussionsController,
};
