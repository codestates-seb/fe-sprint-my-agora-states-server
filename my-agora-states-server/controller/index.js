const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { limit, page } = req.query;
    // console.log(isNaN(Number(limit)) && limit !== undefined);
    // console.log(isNaN(Number(page)) && page !== undefined);

    if (
      (isNaN(Number(limit)) && limit !== undefined) ||
      (isNaN(Number(page)) && page !== undefined)
    ) {
      return res.status(400).send("잘못된 쿼리 파라미터 입니다.");
    }
    let start = page ? (limit ? page * limit : page * 10) : 0; //페이지도 있고 limit도 있으면 page랑 limit 곱하고 limit 없으면 start는 page이고 page가 없으면 start는 0이다.
    let sliceData = limit
      ? discussionsData.slice(Number(start), Number(start) + Number(limit))
      : discussionsData.slice(Number(start), Number(start) + 10);

    res.status(200).json({ totalCount: discussionsData.length, sliceData });
  },
  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    let discussionIdx = discussionsData.findIndex((data) => {
      return data.id === Number(id); //params는 String 이므로 Number로 형변환 해줘야 한다.
    });

    if (discussionIdx === -1) {
      return res.status(404).send("404 NotFound");
    } else {
      res.status(200).json(discussionsData[discussionIdx]);
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    discussionsData.unshift(req.body); // 맨앞에 추가한다
    res.status(200).json(discussionsData);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const { id } = req.params;
    const bodyData = req.body;
    const beUpdatedIdx = discussionsData.findIndex(
      (data) => data.id === Number(id)
    );
    if (beUpdatedIdx === -1) {
      return res.status(404).send("404 NotFound");
    } else {
      const updatedData = { ...discussionsData[beUpdatedIdx], ...bodyData };
      discussionsData.splice(beUpdatedIdx, 1, updatedData);
      return res.status(200).json(discussionsData);
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;
    const beDeletedIdx = discussionsData.findIndex(
      (data) => data.id === Number(id)
    );
    if (beDeletedIdx === -1) {
      return res.status(404).send("404 NotFound");
    } else {
      discussionsData.splice(beDeletedIdx, 1);
      return res.status(200).json(discussionsData);
    }
  },
};

module.exports = {
  discussionsController,
};
