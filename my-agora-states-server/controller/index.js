const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; //배열

const discussionsController = {

  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    let filteredDiscussions = discussionsData.filter( (el) => el.id === Number(id) )
    
    if (filteredDiscussions.length === 0) {
      return res.status(404).send('Not Found');
    } else {
      return res.status(200).json(filteredDiscussions[0]);
    }
}

};

module.exports = {
  discussionsController,
};
