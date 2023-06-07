const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // query param : author 추가해보기
    const {author} = req.query;
    if (author) {
      res.status(200).json(discussionsData.filter((item) => item.author === author));
    } else {
      res.json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const filteredDiscussion = discussionsData.filter( (item) => item.id === Number(id));
    if(filteredDiscussion.length !== 0){
      res.status(200).json(filteredDiscussion[0]);
    } else{
      res.status(404).send('404 Error : Not found');
    }
  }

};

module.exports = {
  discussionsController,
};
