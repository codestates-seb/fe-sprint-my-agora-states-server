const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
      return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.filter((e) => 
    e.id === Number(id));
    return data.length ? 
    res.status(200).json(...data) : res.status(404).send();



  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    discussionsData.push(req.body)

    return res.status(201).json({});
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    let data = discussionsData;
  
    data = discussionsData.filter((el) => {
      return req.query.id !== el.id;
    })
    return res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};
