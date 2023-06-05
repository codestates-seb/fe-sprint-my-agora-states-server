const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    let filtered = discussionsData.filter((obj) => {
      return obj.id === Number(id);
    });

    // let maped = filtered.map((obj) => {
    //   let changedBody = {
    //     id: obj.id,
    //     title: obj.title,
    //     url: obj.url,
    //     author: obj.author,
    //     bodyHTML: obj.bodyHTML,
    //     avatarUrl: obj.avatarUrl
    //   }
    //   return changedBody
    // });

    if (filtered.length) {
      return res.status(200).json(filtered[0])
    } else {
      return res.status(404).json("해당 id는 없습니다.")
    }

  }

};

module.exports = {
  discussionsController,
};