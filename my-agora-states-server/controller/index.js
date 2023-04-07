const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if (id) {
      const filteredData = discussionsData.filter((data) => {
        return data.id === Number(id);
      });
      if (filteredData.length !== 0) {
        return res.status(200).json(filteredData[0]);
      } else {
        return res.status(404).send("Not found");
      }
    }
  },

  create: (req, res) => {
    const id = discussionsData[0].id + 1;
    const { title, url, author, bodyHTML, avatarUrl } = req.body;
    const data = { id, title, url, author, bodyHTML, avatarUrl };
    discussionsData.unshift(data);
    return res.status(201).json(data);
  },

  updateByIdAndAuthor: (req, res) => {
    const { id, author } = req.params;
    const bodyData = req.body;
    const beUpdatedIndex = discussionsData.findIndex((data) => {
      return data.id === Number(id) && data.author === author;
    });
    const updatedData = { ...discussionsData[beUpdatedIndex], ...bodyData };
    discussionsData.splice(beUpdatedIndex, 1, updatedData);
    return res.status(200).json(updatedData);
  },

  deleteByIdAndAuthor: (req, res) => {
    const { id, author } = req.params;
    if (id && author) {
      const beDeletedIndex = discussionsData.findIndex((data) => {
        return data.id === Number(id) && data.author === author;
      });
      discussionsData.splice(beDeletedIndex, 1);
      return res.status(204).send("No Content");
    }
  },
};

module.exports = {
  discussionsController,
};
