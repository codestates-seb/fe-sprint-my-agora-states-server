const { isErrored } = require('jsdom/lib/jsdom/living/helpers/http-request');
const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // console.log(req.query);
    // console.log(req.params);
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.params.id);
    // console.log(req.query.id);
    const data = discussionsData.filter(
      (discussion) => discussion.id === Number(req.params.id)
    );

    if (data.length !== 0) {
      let list = discussionsData.filter((item)=>{
        return item.id === Number(req.params.id);
      });
      // return res.status(404).json(null);
      return res.status(200).json(...list);
    }
    else return res.status(404).json();
    // TODO: path parameter id를 가진 discussion을 응답합니다.
  },

  createOne: (req, res) => {
    return res.status(200).json(data)
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    return res.status(200).json(data)
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    return res.status(200).json(data)
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};