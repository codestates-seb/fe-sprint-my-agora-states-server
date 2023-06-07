const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //query paramiter추가해서 return에 대해 확인해보기
    const{ author } = req.query;
    if (author) {
      res.status(200).json(discussionsData.filter((item) => {return item.author === author}));
    }else{
      res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    let filteredDiscussion = discussionsData.filter((item) => {return item.id === Number(id)});
    if(filteredDiscussion.length !== 0){
      res.status(200).json(filteredDiscussion[0]);
    } else{
      res.status(404).send('unexpected');
    }
  }

};

module.exports = {
  discussionsController,
};
