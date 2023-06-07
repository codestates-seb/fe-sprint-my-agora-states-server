const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const idNumber = Number(id);
    if (!isNaN(idNumber)) {
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber);
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`There is no posting by ID`);
      }
      return res.status(200).json(...filteredDiscussionsById);
    } else {
      return res.status(400).json(`Invalid ID`);
    }
  },
  create: (req, res) => {
    const discussionInfo = { ...req.body, id: Math.random() };
    discussionsData.unshift(discussionInfo);
    return res.status(201).json(discussionInfo);
  },
  update: (req, res) => {
    const { id } = req.params;
    const idNumber = Number(id);
    const bodyData = req.body;

    if (id) {
      const filterdDiscusstionsById = discussionsData.filter((discussion) => discussion.id === idNumber);
      if (filterdDiscusstionsById.length === 0) {
        return res.status(404).json('there is no positing');
      }
      filterdDiscusstionsById[0] = { ...filterdDiscusstionsById[0], ...bodyData };
      return res.status(200).json(filterdDiscusstionsById[0]);
    }
  },
  deleteByPostingId: (req, res) => {
    const { id } = req.params;
    const idNumber = Number(id);
    if (id) {
      const filterdDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber);
      if (filterdDiscussionsById.length === 0) {
        return res.status(404).json('there is no posing');
      }
      discussionsData = discussionsData.filter((discussion) => discussion.id !== idNumber);
      return res.status(200).json(filterdDiscussionsById[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
