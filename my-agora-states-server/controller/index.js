const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const handleRequestBody = (req, res) => {
  if (!req.body) return res.status(400).send("no request body");
  const { title, author, bodyHTML } = req.body;
  if (!title && !author && !bodyHTML) return res.status(400).send("bad request");
  return true;
};

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // !!! req.parmas.id가 string형태로 들어오기 때문에 Number로 변환해주어야 한다.
    const data = discussionsData.find((el) => el.id === Number(req.params.id));
    if (!data) return res.status(404).send("Not found");
    return res.status(200).json(data);
  },

  updateById: (req, res) => {
    if (handleRequestBody(req, res) !== true) return;
    const idx = discussionsData.findIndex((el) => el.id === Number(req.params.id));
    const updated = {
      ...discussionsData[idx],
      ...req.body,
      updateAt: new Date().toISOString(),
    };

    if (idx !== -1) {
      discussionsData.splice(idx, 1, updated);
      return res.status(200).send("resource updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },
  
  create: (req, res) => {
    const { title, author, bodyHTML } = req.body;

    if (handleRequestBody(req, res) !== true) return;
    const id = Math.floor(Math.random() * 10000);
    const avartarId = Math.floor(Math.random() * 100);
    const url = "https://github.com/codestates-seb/agora-states-fe/discussions/" + id;
    const newDiscussion = {
      id,
      createdAt: new Date().toISOString(),
      title,
      url,
      author,
      answer: null,
      bodyHTML,
      avatarUrl: `https://randomuser.me/api/portraits/men/${avartarId}.jpg`,
    };
    discussionsData.unshift(newDiscussion);
    return res.status(201).send("resource created successfully: ID" + id);
  },

  deleteById: (req, res) => {
    const idx = discussionsData.findIndex((el) => el.id === Number(req.params.id));

    if (idx !== -1) {
      discussionsData.splice(idx, 1);
      return res.status(202).send("resource deleted successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },
};

module.exports = {
  discussionsController,
};