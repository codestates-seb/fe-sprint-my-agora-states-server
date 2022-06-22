const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { limit, page } = req.query;
    let result = discussionsData;

    // let limits = limit ? Number(limit) : 10;
    // let pages = page ? Number(page) : 0;

    // // console.log(!Number(limit)); // true
    // if (limit) {
    //   // limit가 숫자가 아니면 404에러
    //   if (!Number(limit)) {
    //     return res.status(400).json("Incorrect Request");
    //   }
    //   // limit가 숫자면 출력
    //   else {
    //     if (page) result = discussionsData.slice(0, limits * pages);
    //     else result = discussionsData.slice(0, limits);
    //   }

    //   if (limit > discussionsData.length) result = [];
    // } else {
    //   result = discussionsData.slice(0, limits);
    // }
    return res.status(200).json(result);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params; // string
    // existId - 객체에 해당id가 있는 것만 필터링
    let existId = discussionsData.filter((el) => el.id === Number(id));
    if (existId.length !== 0) {
      return res.status(200).json(...existId); // existId가 [{ }] 이어서 ...로 펼치기
    } else {
      return res.status(404).json("Incorect Request.");
    }
  },

  createOne: (req, res) => {
    // console.log(req.body);
    const { title, author, bodyHTML, avatarUrl, createdAt } = req.body;
    const id = String(Date.now());
    const url =
      "https://github.com/codestates-seb/agora-states-fe/discussions/" + id;
    const newDiscussion = {
      id,
      createdAt,
      title,
      url,
      author,
      answer: null,
      bodyHTML,
      avatarUrl,
    };
    discussionsData.unshift(newDiscussion);

    return res.status(201).json("resource created successfully: ID " + id);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    console.log(req.params);
    // if (req.params.id) {
    //   result = discussionsData.map((el) => {
    //     if (el.id === Number(req.parmas.id)) el = req.body;
    //   });
    // }
    return res.status(200).json(Number(req.parmas.id));
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;
    discussionsData = discussionsData.filter((el) => el.id !== id);
    return res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
