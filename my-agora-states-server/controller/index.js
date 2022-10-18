const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: (O) 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: (O) 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filteredById = discussionsData.filter((item) => {
      if (item.id === Number(id)) {
        return true;
      }
      return false;
    });
    if (filteredById.length === 0) {
      res.status(404).send("해당 id를 찾을 수 없습니다.");
    } else {
      const {
        id,
        title,
        url,
        author,
        bodyHTML,
        avatarUrl,
        answer,
        createdAt,
        updatedAt,
      } = filteredById[0];
      const body = {
        id,
        title,
        url,
        author,
        bodyHTML,
        avatarUrl,
        answer,
        createdAt,
        updatedAt,
      };
      console.log(body);
      res.status(200).json(body);
    }
  },
};

module.exports = {
  discussionsController,
};
