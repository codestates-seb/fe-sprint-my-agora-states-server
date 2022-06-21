const { query } = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if (!Object.keys(req.query).length) {
      return res.status(200).json(discussionsData);
    }
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    let limit = Number(req.query.limit??10)
    let page = Number(req.query.page??0)

    if (Number.isNaN(limit) || Number.isNaN(page)) {
      return res.status(400).json([])
    }
    const filtered = discussionsData.slice(page*limit, (page+1)*limit)
    return res.status(200).json(filtered)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const id = Number(req.params.id);
    const idx = discussionsData.findIndex(val => val.id === id)
    console.log(idx)

    return idx !== -1
      ? res.status(200).json(discussionsData[idx])
      : res.status(404).send('error')

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
