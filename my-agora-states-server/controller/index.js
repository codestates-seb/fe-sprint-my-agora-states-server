const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    console.log("findAll")
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    console.log("findById")
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let filteredDiscussion = discussionsData.filter((discussion) =>{
        return discussion.id === Number(req.params.id);
    })

    if(filteredDiscussion.length > 0)
      return res.status(200).json(...filteredDiscussion);
    else
      return res.status(404).send('존재하지 않습니다.');
  }

};

module.exports = {
  discussionsController,
};
