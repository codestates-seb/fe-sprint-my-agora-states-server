const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let data = discussionsData.filter((discussion) => `${discussion.id}` === id);

    if (data.length !== 0) res.status(200).json(...data);
    else res.status(404).json("데이터가 존재하지 않습니다.");
  },

  // 새 질문 추가
  create: (req, res) => {
    const id = discussionsData.length + 5;
    const bodyData = req.body;

    discussionsData.unshift({
      id: id,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...bodyData,
    });

    return res.status(201).json(discussionsData[0]);
  },

  update: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;
    const index = discussionsData.findIndex((discussion) => `${discussion.id}` === id);

    const discussion = { ...discussionsData[index], ...bodyData };

    discussionsData.splice(index, 1, discussion);

    res.status(200).json(discussion);
  },

  deleteById: (req, res) => {
    const { id } = req.params;
    const index = discussionsData.findIndex((discussion) => `${discussion.id}` === id);

    discussionsData.splice(index, 1);

    res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
