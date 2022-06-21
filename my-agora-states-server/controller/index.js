const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { limit, page } = req.query;
    const curPage = Number(page) || 1;
    const limitSize = Number(limit) || 10;
    const skipPage = (curPage - 1) * limitSize;
    const resultPage = discussionsData.slice(skipPage, curPage * limitSize);

    if (limit && page) {
      if (limit > discussionsData.length) {
        return res.status(200).json([]);
      }
    }

    if (limit) {
      if (isNaN(Number(limit)) === true) {
        return res.status(400).json("wrong request");
      }
      return res.status(200).json(resultPage);
    }

    if (page) {
      return res.status(200).json(resultPage);
    }

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    const result = discussionsData.filter((obj) => obj.id === Number(id));
    if (result.length) return res.status(200).json(...result);
    throw res.status(404).json("ID가 존재하지 않습니다.");
  },

  findByName: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { author } = req.params;
    const result = discussionsData.filter((obj) => obj.author === author);
    if (result.length) return res.status(200).json(result);
    throw res.status(404).json("ID가 존재하지 않습니다.");
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
