const { agoraStatesDiscussions } = require("../repository/discussions");
// data 담은 변수통
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 1. 모든 discussions 목록을 응답합니다.
    // GET /discussions
    // res.send("TODO:");
    // 1-1. 쿼리 없을 때
    if (Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 2. 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send("TODO:");
    // filter 사용시 --------------------------------
    // filter는 해당되는 요소를 모두 찾아 배열을 만든다.
    // const { id } = req.params;
    // let filterData = discussionsData.filter((discussion) => {
    //   //req.params.id 들어옴 > string 형태로  =>  Number로 변환 ㄱㄱ
    //   return discussion.id === Number(id);
    // });
    // if (filterData.length === 0) {
    //   // 필터 걸렸는데 0이면
    //   return res.status(404).json("&{id}가 없습니다.🥹");
    // } else {
    //   // 필터 걸리면 => [0]으로 뽑아와야만 출력 됨.
    //   return res.status(200).json(filterData[0]);
    // }
    // find 사용시 ----------------------------------
    // find는 찾는 요소가 발견되면 바로 작업을 마친다.
    const { id } = req.params;
    const found = discussionsData.find((e) => e.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    } else {
      return res.status(404).send("Not found");
    }
  }
};

module.exports = {
  discussionsController
};
