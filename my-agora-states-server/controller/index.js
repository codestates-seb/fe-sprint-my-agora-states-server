const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    if (Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData);
    }
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
  },

  findById: (req, res) => {
    const { id } = req.params;
    let filteredData = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    })
    if (filteredData.length === 0) {
      return res.status(404).json(`${id} is not found`)
    } else {
      return res.status(200).json(filteredData[0]);
    }
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    // res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
