const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { limit, page } = req.query;
    console.log("limit", limit);
    console.log("page", page);
    console.log(req.query);
    let responseBody = discussionsData;
    if (!limit && !page) {
      return res.status(200).json(responseBody);
    }
    return res.status(404).send("Not found");
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    const list = discussionsData.filter((item) => {
      return item.id === Number(id);
    });
    // 서버에 있는 데이터의 아아디와 요청의 path parameter id가 같은지 확인합니다.
    // id => string => Number...로 변환 필요
    if (list.length > 0) {
      return res.status(200).json(list[0]);
    } else {
      return res.status(404).json(null);
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
