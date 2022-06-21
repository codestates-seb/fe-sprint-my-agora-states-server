const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let list = discussionsData
    return res.status(200).json(list);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },
  },  

  findById: (req, res) => {
    let list = discussionsData;
    if(req.params.id) {
      list = list.filter((el) => el.id === Number(req.params.id));
      if(list.length === 0) {
        return res.status(404).send('error');
      } else {
        return res.status(200).json(...list);
      }
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let list = discussionsData;
    list.push(req.body)
    return res.status(201).json({});
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let data;
    if(req.params) {
      data = discussionsData.filter((el) => Number(req.params.id) === el.id)
      let list = Object.assign(data[0], req.body);
      return res.status(200).json(list);
    }
  },

  deleteById: (req, res) => {
  },
};

module.exports = {
  discussionsController,
};
