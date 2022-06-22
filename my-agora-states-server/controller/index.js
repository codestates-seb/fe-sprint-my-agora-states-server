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
    // TODO: 모든 discussions 목록을 응답합니다.
    // return res.status(200).json(discussionsData);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { limit, page } = req.query;

    let responseBody = discussionsData;
    if (!limit && !page) {
      return res.status(200).send(responseBody);
    }

    if (limit && page) {
      if (!Number(limit) || !Number(page)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(limit, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (limit) {
      if (!Number(limit)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(limit, 1);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (page) {
      if (!Number(page)) return res.status(400).send();
      const { pageStart, pageEnd } = getPageStartEnd(10, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }
    return res.status(404).send("Not found");
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id: paramsId } = req.params;

    const filteredDiscussion = discussionsData.find(
      (item) => item.id === Number(id)
    );
    if (filteredDiscussion) {
      res.status(200).json(filteredDiscussion);
    } else {
      res.status(404).send("Not Exist");
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const { title, author, bodyHTML, avatarUrl } = req.body;
    if (handleRequestBody(req, res) !== true) return;
    const id = parseInt(Math.random() * 10000);
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
      avatarUrl,
    };
    discussionsData.unshift(newDiscussion);
    return res.status(201).send("resource created successfully: ID " + id);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    if (handleRequestBody(req, res) !== true) return;
    const idx = discussionsData.findIndex(
      (item) => item.id === Number(req.params.id)
    );
    const updated = {
      ...discussionsData[idx],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    if (idx === -1) {
      discussionsData.splice(idx, i, updated);
      return res.status(200).send("resource updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
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
