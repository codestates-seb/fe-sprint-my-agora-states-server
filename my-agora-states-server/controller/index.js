const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if (Object.keys(req.query).length === 0) { 
      console.log("dd")
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredData = discussionsData.filter(discussion => {// 배열안에 있는 객체 형식의 데이터를 id값으로 sort
      return discussion.id === Number(id);
    }) 

    if (filteredData.length === 0) { //sort 된 데이터가 배열안에 객체형태로 없을경우, 
      return res.status(404).json('${id} is not found');
    } else { //하나의 id로 sort 된 데이터가 배열안에 객체형태로 한개 들어가 있을경우, 배열안에 첫번째 객체  return 
      return res.status(200).json(filteredData[0]);
    }
  }
};

module.exports = {
  discussionsController,
};
