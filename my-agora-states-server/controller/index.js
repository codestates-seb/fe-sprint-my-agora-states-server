const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredList = discussionsData.filter((data) => {
      // data.id인 discussions.js의 id는 숫자, req.params.id는 문자열이므로 맞춰줘야 함
      return data.id === Number(id);
    });

    // 일치하는 id가 없으면 filteredList의 length가 0이고, 있으면 0이 아님
    if (filteredList.length === 0) {
      return res
        .status(404)
        .json(`${id}와 일치하는 데이터가 존재하지 않습니다.`);
    } else {
      // console.log(filteredList); -> [{}]이고 원하는 형태는 {}
      return res.status(200).json(filteredList[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
