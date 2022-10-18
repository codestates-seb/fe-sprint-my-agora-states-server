const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;

    const filteredId = discussionsData.filter((data) => {
      return data.id === Number(id);
    });

     // 일치하는 id가 있는지 확인하기위해서는 length를 사용해야 한다. filter는 빈 배열을 반환하므로 undefined는 사용하지 못한다.
    if (filteredId.length !== 0) {
      res.status(200).json(filteredId[0]); // console.log(filteredList); -> [{}]이므로 원하는 형태로 구함 {}
    } else {
      res.status(404).json('Wrong Request');
    }
  }

};

module.exports = {
  discussionsController,
};
