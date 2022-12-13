const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filtered = discussionsData.filter(ele => ele.id === Number(id));

    return filtered.length
      ? res.status(200).json(filtered[0])
      : res.status(404).send();
  },

  createDiscussion: (req, res) => {
    const { author, title, url, createdAt, answer, avatarUrl } = req.body;

    const newDiscussion = {
      id: discussionsData.length + 1,
      author,
      title,
      url,
      createdAt,
      answer,
      avatarUrl,
    };

    discussionsData.unshift(newDiscussion);

    return res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
