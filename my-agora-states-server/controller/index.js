const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

// 배열안에 객체 형식으로 담을거임
let newDiscussion = [];

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // 작성자 기준 필터링도 가능하도록 구현
    const { author } = req.query;

    if (author) {
      const newData = discussionsData.filter((data) => {
        // 대소문자 구분X
        return data.author.toLowerCase() === author.toLowerCase();
      });

      if (newData.length) {
        return res.json(newData);
      }
    }

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const newData = discussionsData.filter((data) => {
      // id(req.params.id가 string로 들어옴)
      return data.id === Number(id);
    });

    if (newData.length === 0 || !id) {
      return res.sendStatus(404);
    } else {
      // newData는 배열안에 객체 형태
      return res.status(200).json(newData[0]);
    }
  },

  create: (req, res) => {
    // 디스커션 데이터 추가
    discussionsData.unshift({
      id: Number(req.body.id),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      title: req.body.title,
      author: req.body.author,
      answer: null,
      bodyHTML: req.body.bodyHTML,
    });

    res.status(201).json(discussionsData[0]);
  },

  deleteById: (req, res) => {
    // 특정 id 디스커션 데이터 삭제
    const { id } = req.params;

    for (let i = 0; i < discussionsData.length; i++) {
      if (discussionsData[i].id === Number(id)) {
        discussionsData.splice(i, 1);
        break;
      }
    }

    return res.json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
