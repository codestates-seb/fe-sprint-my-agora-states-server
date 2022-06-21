const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    let result = discussionsData;
    res.json(result);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    let newId = Number(req.params.id);
    let list = discussionsData.filter((x) => {
      return x.id === newId;
    });
    if (list.length === 0) {
      return res.status(404).json();
    }
    return res.status(200).json(list[0]);
  },
  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let discussion = [];
    console.log(req.body);
    discussion.push(req.body);
    return res.status(201).json({ discussion });
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let body = req.body;
    let filtered = discussionsData.filter((x) => {
      return req.params.id === x.id;
    });
    console, log(body);
    //data(배열) = req.body(객체)를 넣으면 되는데
    // req.body에 객체가 들어오는데  <- 수정해달라고 보낸거죠
    // req.body를 data로 보내면 되는거 아닌가요?
    // data를 돌면서 map 그 객체(item) => req.body로 바꾸기
    const data = filtered.map((x) => {
      x.departure = body.departure;
      x.destination = body.destination;
      x.departure_times = body.departure_times;
      x.arrival_times = body.arrival_times;
      return x;
    });
    return res.status(200).json(data[0]);
  },
  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    discussion = discussion.filter((x) => {
      return x.phone !== req.query.phone;
    });
    return res.status(200).json(booking);
  },
};

module.exports = {
  discussionsController,
};
