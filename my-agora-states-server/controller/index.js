const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const discussion = discussionsData.find((d) => d.id === +req.params.id);
    discussion ? res.status(200).send(discussion) : res.status(404).send();
  },

  createDiscussion: (req, res) => {
    // ! 클라이언트에서 모든 항목이 required이므로 body가 빈 값인 경우는 고려하지 않음
    const isExistDiscussion = discussionsData.find((discussion) => discussion.id === req.body.id);

    if (isExistDiscussion) {
      res.status(409).send('이미 등록된 discussion입니다.');
    } else {
      discussionsData.push(req.body);
      res.status(201).send('discussion이 등록되었습니다.');
    }
  },

  updateDiscussion: (req, res) => {
    const { id } = req.params;
    const index = discussionsData.findIndex((discussion) => discussion.id === +id);

    if (index !== -1) {
      discussionsData[index] = { ...discussionsData[index], ...req.body };
      res.status(200).send(discussionsData[index]);
    } else {
      res.status(400).send('discussion이 존재하지 않습니다.');
    }
  },

  deleteDiscussion: (req, res) => {
    const { id } = req.params;
    const index = discussionsData.findIndex((discussion) => discussion.id === +id);

    if (index !== -1) {
      discussionsData.splice(index, 1);
      res.status(200).send('삭제가 완료되었습니다.');
    } else {
      res.status(400).send('discussion이 존재하지 않습니다.');
    }
  },
};

module.exports = {
  discussionsController,
};
