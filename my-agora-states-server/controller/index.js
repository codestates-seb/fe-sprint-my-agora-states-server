const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { author } = req.query; // 쓴 사람 확인하는 query string 확인
    // 작성자 쿼리스트링 있으면 그에 해당하는 데이터만 보내도록 해보자
    //데이터 전송 확인 console.log({ author, query: req.query});
    if (author) {
      res.json(discussionsData.filter((item) => item.author === author ))
    } else {
      res.json(discussionsData);
    }
    
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // const { id } = req.query;
    // if (id) {
    //   res.json(discussionsData.filter((item) => item.id === id))
    // }
    const { id } = req.params;
    const list = discussionsData.find((item) => item.id === Number(id) )
    if(list) {
      return res.status(200).json(list);
    }
    else{
      return res.status(404).json('Incorrect request');
    }
  }

};

module.exports = {
  discussionsController,
};
