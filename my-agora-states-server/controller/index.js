const { agoraStatesDiscussions } = require('../repository/discussions');

let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => res.status(200).send(discussionsData),

  findById: (req, res) => {
    const { id } = req.params;

    const targetDiscussion = discussionsData.find(
      (discussion) => +discussion.id === +id
    );

    return targetDiscussion
      ? res.status(200).send(targetDiscussion)
      : res.status(404).send('해당 ID의 discussion이 존재하지 않습니다!');
  },

  addDiscussion: (req, res) => {
    if (!req.body) return res.status(404).send('질문 등록에 실패했습니다.');

    const { id, title, story } = req.body;

    const newDiscussion = {
      id,
      createdAt: new Date().toLocaleString(),
      title,
      url: '#',
      author: id,
      answer: null,
      avatarUrl: `https://github.com/${id}.png`,
      bodyHTML: story,
    };

    discussionsData = [newDiscussion, ...discussionsData];

    return res.status(201).send(newDiscussion);
  },
};

module.exports = {
  discussionsController,
};
