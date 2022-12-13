const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require("uuid");

const discussionsController = {
  findAll: (req, res) => {
    const { offset, limit } = req.query;
    // TODO: 모든 discussions 목록을 응답합니다.
    console.log(offset, limit);

    if (offset && limit) {
      const showData = discussionsData.slice(
        (offset - 1) * limit,
        (offset - 1) * limit + Number(limit)
      );

      res.status(200).json(showData);
    } else {
      res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredDiscussions = discussionsData.filter(
      (discussion) => discussion.id === Number(id)
    );

    if (filteredDiscussions.length === 0) {
      res.status(404).send();
      return;
    }
    res.status(200).json(...filteredDiscussions);
  },

  create: (req, res) => {
    const id = uuid();
    const data = req.body;
    const newDiscussionsData = {
      id,
      ...data,
    };

    discussionsData = [newDiscussionsData, ...discussionsData];

    res.status(201).json(newDiscussionsData);
  },

  count: (req, res) => {
    res.status(200).json(discussionsData.length);
  },
};

module.exports = {
  discussionsController,
};
