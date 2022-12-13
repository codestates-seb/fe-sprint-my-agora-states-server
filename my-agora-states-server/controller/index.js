const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {

    const { id } = req.params;
    let result = discussionsData.filter((el) => {
      return el.id === +id; //params 은 string / number 형변환 필요
    });
    // id와 일치하는 결과는 하나뿐이니 어차피 length가 1일것. 객체 형태로 보내야하기 때문에 spread로 보내기
    return result.length > 0 ? res.status(200).json(...result) : res.status(404).send("Search Error : Null");
  },
};

module.exports = {
  discussionsController,
};
