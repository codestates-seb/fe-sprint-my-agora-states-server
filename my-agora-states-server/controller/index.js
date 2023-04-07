const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const findById = discussionsData.filter((discussion) => {
      const { id } = req.params;
      return discussion.id === parseInt(id);
    });
    if (findById.length === 0) {
      return res.status(404).json({ error: "Discussion not found" });
    }
    res.status(200).json(findById[0]);
  },

  // [POST] 요청으로 들어온 데이터를 discussions의 첫번째요소로 저장

  create: (req, res) => {
    const newId = discussionsData[0].id + 1;
    const newObj = { id: newId, ...req.body };
    discussionsData.unshift(newObj);
    res.status(201).json(newObj);
  },

  // [DELETE] 요청 된 Id 값과 동일한 post를 제거

  deleteById: (req, res) => {
    const { id } = req.params;

    for (let i = 0; i < discussionsData.length; i++) {
      if (discussionsData[i].id === parseInt(id)) {
        discussionsData.splice(i, 1);
        return res
          .status(200)
          .json({ message: "Discussion deleted successfully" });
      }
    }
    return res.status(404).json({ message: "Discussion not found" });
  },
};

module.exports = {
  discussionsController,
};
