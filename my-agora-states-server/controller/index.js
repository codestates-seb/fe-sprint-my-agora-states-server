const { agoraStatesDiscussions } = require('../repository/discussions');
let discussionsData = agoraStatesDiscussions;
let filtering;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    console.log('들어오긴하니?');
    filtering = discussionsData.filter((el) => Number(req.params.id) === el.id);
    console.log(filtering.length);

    if (filtering.length === 0) {
      return res.status(404).json({});
    } else {
      return res.status(200).json(...filtering);
    }

    // TODO: path parameter id를 가진 discussion을 응답합니다.
  },

  createOne: (req, res) => {
    console.log(req.body);
    discussionsData = [req.body, ...discussionsData];
    // ADVANCED: 새로운 discussion을 생성합니다.
    return res.status(200).json(discussionsData);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    discussionsData = discussionsData.map((el) => {
      if (el.id === Number(req.params.id)) {
        el = { ...el, ...req.body };
        return res.json(discussionsData);
      }
    });
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    console.log('테스트중이에요');
    discussionsData = discussionsData.filter(
      (el) => el.id !== Number(req.params.id)
    );
    return res.json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
