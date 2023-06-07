const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const discussion = discussionsData.find(
      (discussion) => discussion.id === parseInt(id)
    );

    if (discussion) {
      res.status(200).json(discussion);
    } else {
      res.status(404).json({ error: "discussion not found" });
    }
  },

  create: (req, res) => {
    const { title, author, url, bodyHTML, avatarUrl } = req.body;

    // 새로운 discussion 객체 생성
    const newDiscussion = {
      id: discussionsData.length + 1, // 새로운 id를 할당해야 함
      createdAt: new Date().toISOString(),
      title,
      author,
      url,
      bodyHTML,
      avatarUrl,
    };

    // discussionsData에 새로운 discussion 추가
    discussionsData.unshift(newDiscussion);

    // 저장 완료 메시지 응답
    res.status(201).json(newDiscussion);
  },
};

module.exports = {
  discussionsController,
};
