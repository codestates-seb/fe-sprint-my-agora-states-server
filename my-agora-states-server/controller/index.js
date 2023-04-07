const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const fs = require('fs');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // 이 문제를 해결하면, 2개는 해결된다.
    const { id } = req.params;
    const data = discussionsData.filter((discussion) => Number(discussion.id) === Number(id))
  
    if (data.length === 0) {
      res.status(404).json(...data)
    } else {
      res.status(200).json(...data) 
    } // get으로 받아온 요청은 json이기 때문에, data가 무조건 문자열이다.
  } // 가장 바깥에 있는 괄호를 제거해준다.

  // 
  // create: (req, res) => {
  //   const 
  // }
};
module.exports = {
  discussionsController,
};
