const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const id = Number(req.params.id);
    let index = 0;
    for (let data of discussionsData) {
      if (data.id === id) {
        index = id;
        break;
      }
    }
    if (index === 0) return res.status(404).end();
    const [temp] = discussionsData.filter((item) => item.id === id);
    return res.status(200).json(temp);
  },

  createOne: (req, res) => {
    return res.status(200).json(discussionsData);
    // ADVANCED: 새로운 discussion을 생성합니다.
    const { body } = req;
    const { id, createdAt, title, url, author, bodyHTML } = body;
    const newDiscussion = {
      id,
      createdAt,
      title,
      url,
      author,
      bodyHTML,
    };
    discussionsData.unshift(newDiscussion);
    res.status(200).json(body.id);
  },

  updateById: (req, res) => {
    const { body, params } = req;
    const targetIndex = discussionsData.findIndex(
      (discussion) => discussion.id === parseInt(params.id)
    );
    const editDiscussion = {
      ...discussionsData[targetIndex],
      ...body,
    };
    discussionsData.splice(targetIndex, 1, editDiscussion);
    res.status(200).json({ targetIndex, editDiscussion });
  },

  deleteById: async (req, res) => {
    const { params } = req;
    const targetIndex = discussionsData.findIndex(
      (discussion) => discussion.id === parseInt(params.id)
    );
    discussionsData.splice(targetIndex, 1);
    res.status(200).json(targetIndex);
  },
};

module.exports = {
  discussionsController,
};
