const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if(Object.keys(req.query).length >= 1) {
      console.log('inner query', req.query)
      const limiData = discussionsData.slice(0, Number(req.query.limit));
      return res.status(200).json(limiData);
    }else {
      return res.status(200).json(discussionsData);
    }
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const getDataById = discussionsData.filter(v => v.id === Number(req.params.id));
    if(getDataById.length >= 1) {
        return res.json(...getDataById);
    }else {
        return res.status(404).send({error: 'error!!!'});
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const postBody = req.body;
    discussionsData.unshift(postBody);
    res.location(`/discussion/${postBody.id}`);
    return res.status(201).json(discussionsData);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const updateBody = req.body;
    let getDataById = discussionsData.filter(v => v.id === Number(req.params.id));
    if(getDataById.length >= 1) {
        getDataById = {...getDataById[0], ...updateBody};
        return res.status(200).json(getDataById);
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const deleteId = req.params.id;
    discussionsData.forEach((v, i) => v.id === Number(deleteId) ? discussionsData.splice(i, 1) : null);
    return res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
