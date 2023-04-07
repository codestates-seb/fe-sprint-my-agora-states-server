const { v4: uuid } = require("uuid");
const generateImg = require("random-image-creator");

const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filteredData = discussionsData.filter(
      (discussion) => discussion.id === Number(id)
    );
    filteredData.length !== 0
      ? res.status(200).json(filteredData[0])
      : res.status(404).json(`Can't Found Discussion`);
  },

  create: (req, res) => {
    const makeDiscussion_uuid = uuid();
    const { title, author, bodyHTML } = req.body;
    const newDiscussion = {
      id: makeDiscussion_uuid,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title,
      author,
      answer: null,
      bodyHTML,
      avatarUrl: generateImg(100, 100),
    };
    res.status(201).json([newDiscussion, ...discussionsData]);
  },
};

module.exports = {
  discussionsController,
};
