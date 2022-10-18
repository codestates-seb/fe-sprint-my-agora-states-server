const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if(id){
      let filteredData = discussionsData.find(discussion => discussion.id===Number(id));
      filteredData ? res.status(200).send(filteredData) : res.status(404).send('Not Found!');
    }
    res.status(404).send('Required params');
    // res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
