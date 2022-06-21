const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    console.log('req.query :', req.query);

    let list = agoraStatesDiscussions;
    if (req.query.createdAt) {
      list = list.filter((item) => {
        return req.query.createdAt === item.createdAt;
      });
    }
    if (req.query.updatedAt) {
      list = list.filter((item) => {
        return req.query.updatedAt === item.updatedAt;
      });
    }
    if (req.query.title) {
      list = list.filter((item) => {
        return req.query.title === item.title;
      });
    }
    if (req.query.url) {
      list = list.filter((item) => {
        return req.query.url === item.url;
      });
    }
    if (req.query.author) {
      list = list.filter((item) => {
        return req.query.author === item.author;
      });
    }
    if (req.query.answer) {
      list = list.filter((item) => {
        return req.query.answer === item.answer;
      });
    }
    return res.status(200).json(list);
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    let list = agoraStatesDiscussions;
    
      list = list.filter((item) => {
        return Number(req.params.id) === item.id;
      });
      if(list.length !==0){
      return res.status(200).json(list[0]);
    } else {
      return res.status(404).send(list);
    }
    // TODO: path parameter id를 가진 discussion을 응답합니다.
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
