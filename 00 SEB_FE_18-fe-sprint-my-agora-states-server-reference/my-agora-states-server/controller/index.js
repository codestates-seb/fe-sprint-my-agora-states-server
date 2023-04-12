const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const getPageStartEnd = (limit, page) => {
  const pageStart = Number(page - 1) * Number(limit);
  const pageEnd = Number(pageStart) + Number(limit);
  return { pageStart, pageEnd };
};

const handleRequestBody = (req, res) => {
  if (!req.body) return res.status(400).send("no request body");
  const { title, author, bodyHTML } = req.body;
  if (!title && !author && !bodyHTML)
    return res.status(400).send("bad request");
  return true;
};

const discussionsController = {
  findAll: (req, res) => {
    const { limit, page } = req.query;

    let responseBody = discussionsData;
    if (!limit && !page) {
      return res.status(200).json(responseBody);
    }

    if (limit && page) {
      if (!Number(limit) || !Number(page)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(limit, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (limit) {
      // page가 없는 경우는 첫 페이지로 간주
      if (!Number(limit)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(limit, 1);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (page) {
      // limit가 없는 경우 한 페이지 당 10개로 간주
      if (!Number(page)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(10, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    return res.status(404).send("Not found");
  },

  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find((d) => d.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    } else {
      return res.status(404).send("Not found");
    }
  },

  createOne: (req, res) => {
    const { title, author, bodyHTML } = req.body;

    if (handleRequestBody(req, res) !== true) return;
    const id = parseInt(Math.random() * 10000);
    const avartarId = parseInt(Math.random() * 100);
    const url =
      "https://github.com/codestates-seb/agora-states-fe/discussions/" + id;
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
    return res.status(201).send("resource created successfully: ID " + id);
  },

  updateById: (req, res) => {
    if (handleRequestBody(req, res) !== true) return;
    const idx = discussionsData.findIndex(
      (d) => d.id === Number(req.params.id)
    );
    const updated = {
      ...discussionsData[idx],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    if (idx !== -1) {
      discussionsData.splice(idx, 1, updated);
      return res.status(200).send("resource updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },

  deleteById: (req, res) => {
    const idx = discussionsData.findIndex(
      (d) => d.id === Number(req.params.id)
    );
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
