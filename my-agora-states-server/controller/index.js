const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { query } = req;
    const { limit, page } = query;

    const start = (page - 1) * 10;
    const end = page * 10;
    const targetPage = discussionsData.slice(start, end);

    const regex = /^[0-9]*$/;

    const typeCheck = (query) => {
      if (!query.match(regex)) return false;
      else return true;
    };

    if (!Object.keys(query).length) {
      res.status(200).json(discussionsData);
    }

    if (Object.keys(query)) {
      Object.keys(query).forEach((key) => {
        if (!typeCheck(query[key])) res.status(400).send();
      });

      if (limit > discussionsData.length) {
        res.status(200).json([]);
      }

      if (limit && page) {
        if (limit > targetPage.length) {
          res.status(200).json([]);
        } else {
          res.status(200).json(targetPage.slice(0, limit));
        }
      }

      if (limit) {
        res.status(200).json(discussionsData.slice(0, limit));
      }

      if (page) {
        res.status(200).json(targetPage);
      }
    }
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { params } = req;
    const filteredDiscussion = discussionsData.filter(
      (discussion) => discussion.id === parseInt(params.id)
    );
    if (!filteredDiscussion.length) {
      res.status(404).send();
    } else {
      res.status(200).json(filteredDiscussion[0]);
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const { body } = req;
    const { id, createdAt, title, author, answer, avatarUrl, bodyHTML } = body;
    const newDiscussion = {
      id,
      createdAt,
      title,
      author,
      answer,
      avatarUrl,
      bodyHTML,
    };
    discussionsData.unshift(newDiscussion);
    res.status(200).json(body.id);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const { body, params } = req;
    const targetIndex = discussionsData.findIndex(
      (discussion) => discussion.id === parseInt(params.id)
    );
    const editDiscussion = {
      ...discussionsData[targetIndex],
      ...body,
    };
    discussionsData.splice(targetIndex, 1, editDiscussion);
    res.status(200).json({ targetIndex, editDiscussion });
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다
    const { params } = req;
    const targetIndex = discussionsData.findIndex(
      (discussion) => discussion.id === parseInt(params.id)
    );
    discussionsData.splice(targetIndex, 1);
    res.status(200).json(targetIndex);
  },
};

module.exports = {
  discussionsController,
};
