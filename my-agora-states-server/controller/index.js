const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    let data = agoraStatesDiscussions;
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    if (req.query.limit || req.query.page) {
      if(req.query.limit) {
        if(Number(req.query.limit)>=0) {
          let start=0;
          let end=req.query.limit;
          data_limit = data.slice(start,end)
          if(req.query.page >=2) {
            start = req.query.limit*req.query.page;
            end = start + Number(req.query.limit);
            data_limit = data.slice(start,end)
          }
          return res.status(200).json(data_limit);
        }
        else {
          return res.status(400).send('Not found');
        }
      }
      else {
        data = data.slice(0,10);
        return res.status(200).json(data);
      }
    }
    else {
      return res.status(200).json(data);
    }
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let data = agoraStatesDiscussions;
    if(req.params.id) {
      data = data.filter( el => el.id === Number(req.params.id) )
      if(data.length === 0) {
        return res.status(404).send('Not Found!')
      }
      else {
        return res.status(200).json(...data)
      }
    }
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
