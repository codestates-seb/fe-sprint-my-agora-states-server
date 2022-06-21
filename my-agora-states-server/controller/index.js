const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = [...agoraStatesDiscussions];

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const discussionsID = discussionsData.find((item) => String(item.id) === req.params.id);

    if (discussionsID == null) {
      return res.status(404).json({ message: "존재하지 않는 id 입니다." });
    }

    return res.json(discussionsID);
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const { id, createdAt, updatedAt, title, url, author, bodyHTML, avatarUrl } = req.body;

    const discussionsID = discussionsData.find((item) => item.id === id);

    if (discussionsID != null) {
      return res.status(404).json({ message: "이미 존재하는 id 입니다." });
    }

    console.log(discussionsData.length);

    const newDiscussion = {
      id,
      createdAt,
      updatedAt,
      title,
      url,
      author,
      answer: null,
      bodyHTML,
      avatarUrl,
    };

    discussionsData.push(newDiscussion);

    return res.status(201).json(newDiscussion);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
