const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filterId = discussionsData.filter((x) => x.id === Number(id));

    if (filterId.length > 0) {
      return res.status(200).send(filterId[0]);
    } else res.status(404).send("Incorrect Request");
  },

  create: (req, res) => {
    const date = new Date();
    const { id, title, author } = req.body;
    console.log(id, title, author);
    if (id && title && author) {
      let addList = Object.assign(discussionsData[0], {
        id: Number(id),
        createdAt: `${date}`,
        title: `${title}`,
        author: `${author}`,
      });
      discussionsData.unshift(addList);
      return res.status(200).send(addList);
    } else return res.status(404).send("Incorrect Request");
  },

  deleteId: (req, res) => {
    const { id } = req.params;
    const index = discussionsData.findIndex((x) => x.id === Number(id));
    if (index >= 0) {
      discussionsData.splice(index, 1);
      return res.status(200).send(`Successfully deleted ${id}`);
    } else return res.status(404).send("Incorrect Request");
  },

  update: (req, res) => {
    const { id } = req.params;
    const { updateID } = req.body;
    const index = discussionsData.findIndex((x) => x.id === Number(id));

    if (index >= 0) {
      const updateItem = Object.assign({}, discussionsData[index], {
        id: Number(updateID),
      });
      discussionsData[index] = updateItem;
      console.log(discussionsData[index]);
      return res.status(200).send(`Successfully update ${id}`);
    } else return res.status(404).send("Incorrect Request");
  },
};

module.exports = {
  discussionsController,
};
