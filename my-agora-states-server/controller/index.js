const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const data = discussionsData;
    return res.status(200).json(data);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.filter((item) => +id === item.id);
    // 서버에 있는 데이터의 아이디와 요청의 path parameter id가 같은지 확인한다.
    // id => string => Number로 바꿔줘야 함
    if (data.length > 0) {
      return res.status(200).json(...data);
    } else {
      return res.status(404).send('Not found');
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const newData = req.body;
    discussionsData.push(newData);
    console.log(newData);
    const { title } = newData;
    return res.status(201).json({ title });
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const { id } = req.params;
    const data = req.body;
    const index = discussionsData.findIndex(
      (discussion) => discussion.id === id
    );
    discussionsData[index] = { ...discussionsData[index], ...data };
    return res.status(200).json(discussionsData);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;
    if (+id !== undefined) {
      const list = discussionsData.filter(
        (discussion) => discussion.id !== +id
      );
      return res.status(200).json(list);
    }
  },
};

module.exports = {
  discussionsController,
};
