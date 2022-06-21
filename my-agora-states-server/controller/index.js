const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.

  // findById: (req, res) => {
  //   // TODO: path parameter id를 가진 discussion을 응답합니다.
  //   for (let el of discussionsData) {
  //     if (String(el.id) === req.params.id) {
  //       res.status(200).json(el);
  //     }
  //   }
  //   res.status(404).send("ID does not exist.");
  // },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    let data = discussionsData;
    //req.params는 객체. 빈객체는 true로 판단이 된다.Object.keys로 req.params의 키를 뽑아서 배열로 만들었을때 배열의 길이 판별
    if (Object.keys(req.params).length !== 0) {
      data = data.filter((path) => Number(req.params.id) === path.id);
    }
    console.log(req.params);
    if (data.length) {
      res.status(200).json(data[0]);
    }
    res.status(404).end();
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
