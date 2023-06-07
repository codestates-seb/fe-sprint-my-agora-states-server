const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // console.log(typeof id); // String 형식 2
    const parsedId = parseInt(id); // 숫자로 변환
    // console.log(typeof parsedId); // Number 형식 2
    if (parsedId) {
      const filtered = discussionsData.filter((item) => {
        return item.id === parsedId; // Number 2 === Number 2 여야 true.
        // console.log(item.id); // Number 형식 2
        // console.log(item.id === parsedId); // true
      });
      if (filtered.length === 0) {
        res.status(404).send("404 not found");
      }
      const {
        id,
        createdAt,
        updatedAt,
        title,
        url,
        author,
        answer,
        bodyHTML,
        avatarUrl,
      } = filtered[0];
      const body = {
        id: id,
        createdAt: createdAt,
        updatedAt: updatedAt,
        title: title,
        url: url,
        author: author,
        answer: answer,
        bodyHTML: bodyHTML,
        avatarUrl: avatarUrl,
      };
      console.log(body);
      res.send(body);
    }
  },
};

module.exports = {
  discussionsController,
};
