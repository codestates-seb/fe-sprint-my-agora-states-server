const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { page, limit } = req.query;
    const pageNum = Number(page) || 1;
    const contentSize = Number(limit) || 10;
    const skipSize = (pageNum - 1) * contentSize;
    const resultPage = discussionsData.slice(skipSize, pageNum * contentSize);

    if (limit && page) {
      if (limit > discussionsData.length) {
        return res.status(200).json([]);
      }
    }

    if (limit) {
      if (isNaN(Number(limit)) === true) {
        return res.status(400).json("wrong request");
      }
      return res.status(200).json(resultPage);
    }

    if (page) {
      return res.status(200).json(resultPage);
    }

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    if (id) {
      const data = discussionsData.filter((discussion) => {
        return discussion.id === Number(id);
      });
      if (data.length === 0) {
        return res.status(404).json("Not Found!");
      }
      return res.status(200).json(...data);
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    //id, title, url, author, bodyHTML, avatarUrl
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const { id } = req.params;
    const bodyData = req.body;
    const beUpdatedIdx = discussionsData.findIndex(
      (discussion) => discussion.id === id
    );
    const updatedDiscussion = { ...discussionsData[beUpdatedIdx], ...bodyData };
    discussionsData.splice(beUpdatedIdx, 1, updatedDiscussion);
    console.log(discussionsData);

    return res.status(200).json(updatedDiscussion);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;
    if (id) {
      discussionsData = discussionsData.filter(
        (discussion) => discussion.id !== id
      );
    }
    return res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
