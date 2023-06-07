const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    return res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.filter(
      (discussion) => discussion.id === Number(id)
    );
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json(`Invalid ID: ${id}`); // 숫자형이 아닐때
    }
  },
  addCreate: (req, res) => {
    const discussionAdd = { ...req.body, id: Math.abs() };
    discussionsData.unshift(discussionAdd);
    return res.status(201).json(`${JSON.stringify(discussionAdd)}`);
  },
  update: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;

    if (id) {
      const dataById = discussionsData.filter(
        (discussion) => discussion.id === Number(id)
      );
    } else {
      dataById[0] = { ...dataById[0], ...bodyData };
      return res.status(200).json(dataById[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
