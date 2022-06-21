const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    if(req.query){
      return res.status(200).json(discussionsData);
    } 
   
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // console.log(req.params);
    // console.log(req.params.id);
    const { id, title, url, author, bodyHTML, avatarUrl} = req.params;

    const data = discussionsData.filter(
      (item) => Number(item.id) === Number(id)
    );
    if (data.length === 0) {
      return res.status(404).send("Error");
    }
    return res.json(data[0]);
    
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    return res.status(200).json(discussionsData);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    return res.status(200).json(discussionsData);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    return res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
