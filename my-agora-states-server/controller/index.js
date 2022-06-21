const e = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    // id, title, url, author, bodyHTML, avatarUrl
    let list = discussionsData;
    return res.status(200).json(list);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let list = discussionsData;
    list = list.filter((el) => {
      return Number(req.params.id) === el.id;
    });
    if (list.length === 0) {
      return res.status(404).send("not");
    }
    return res.status(200).json(list[0]);
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let list = discussionsData;
    list.push(req.body);
    return res.status(201).json({});
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let list = discussionsData;
    if (req.params.id) {
      list = list.filter((el) => Number(req.params.id) === el.id);
      return res.status(200).json(list);
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    let list = discussionsData;
    list = list.filter((el) => {
      return Number(req.params.id) === el.id;
    });
    return res.status(200).json(list);
  },
};

module.exports = {
  discussionsController,
};
