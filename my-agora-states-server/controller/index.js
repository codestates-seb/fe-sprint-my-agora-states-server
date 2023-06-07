const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {

    // author로 검색
    const { author } = req.query;

    if (author) {
      let authorFilter = discussionsData.filter((obj) => {
        return obj.author === author;
      })
      return res.status(200).json(authorFilter)
    }

    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    let filtered = discussionsData.filter((obj) => {
      return obj.id === Number(id);
    });

    if (filtered.length) {
      return res.status(200).json(filtered[0])
    } else {
      return res.status(404).json("해당 id는 없습니다.")
    }

  },

  createDate: (req, res) => {
    // 요청으로 들어온 body 데이터를 discussions 목록에 추가한다.
    const { title, url, author, bodyHTML, avatarUrl } = req.body;

    let newData = {
      id: discussionsData[0].id + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: title,
      url: url,
      author: author,
      answer: null,
      bodyHTML: bodyHTML,
      avatarUrl: avatarUrl
    };

    discussionsData.unshift(newData);

    res.status(201).json(discussionsData);

  },

  updateList: (req, res) => {
    const { id } = req.params;
    const { title, url, author, bodyHTML, avatarUrl } = req.body;

    let updateData = {
      updatedAt: new Date(),
      title: title,
      url: url,
      author: author,
      bodyHTML: bodyHTML,
      avatarUrl: avatarUrl
    }

    if (id) {
      let filterd = discussionsData.filter((obj) => { return obj.id === Number(id) })
      let obj = Object.assign(filterd[0], updateData)
      res.status(200).json(obj);
    } else {
      res.status(404).json("해당 내용을 찾을 수 없습니다.")
    }

  },

  deleteList: (req, res) => {
    const { id } = req.params;

    if (id) {
      let num = discussionsData.map((obj) => { return obj.id }).indexOf(id);
      discussionsData.splice(num, 1);
      res.status(200).json(discussionsData);
    } else {
      res.status(404).json("이미 삭제된 내용이거나 찾을 수 없습니다.")
    }

  }

};

module.exports = {
  discussionsController,
};