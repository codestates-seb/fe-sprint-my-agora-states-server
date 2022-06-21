const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    const { id } = req.params;

    if (id !== undefined) {
      const data = discussionsData.filter(
        (discussion) => discussion.id === Number(id)
      ); // :id 와 일치하는 id를 원본데이터에서 찾음.
      if (data.length === 0) {
        return res.status(404).send("Not found"); // 실패 시,
      } else return res.status(200).json(...data); // 성공 시,
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    // POST
    const data = req.body;
    discussionsData.push(data);
    console.log(data);
    const { title } = data;
    return res.status(201).json({ title });
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    // PUT
    const { id } = req.params;
    const data = req.body;
    let index;
    discussionsData.forEach((discussion, i) => {
      if (discussion.id === Number(id)) {
        index = i;
      }
    });
    discussionsData[index] = { ...discussionsData[index], ...data };
    return res.status(200).json(discussionsData[index]);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;
    if (Number(id) !== undefined) {
      const newList = discussionsData.filter(
        (discussion) => discussion.id !== Number(id)
      );
      return res.status(200).json(newList);
    }
  },
};

module.exports = {
  discussionsController,
};
