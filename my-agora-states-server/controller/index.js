const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; 
    const filtered = discussionsData.filter(el => el.id === parseInt(id))
    if(filtered.length > 0){ 
      return res.status(200).json(filtered[0])
    }else {
      return res.status(404).json('존재하지 않는 데이터')
    }
  }
};

module.exports = {
  discussionsController,
};

/*
404통과 X
  findById: (req, res) => {
    const { id } = req.params;
    if (req.params !== undefined) {
      const filtered = agoraStatesDiscussions.filter((discussion) => {
        return discussion.id === id;
      })
      return res.status(200).json(filtered);
    } else {
    return res.status(404).json('존재하지 않는 데이터');
    }
  }

200통과 X
  findById: (req, res) => {
  const { id } = req.params;
  if (id !== undefined) {
    const discussion = agoraStatesDiscussions.find((discussion) => {
      return discussion.id === id;
    })
    if (discussion) {
      return res.status(200).json(discussion);
    } else {
    return res.status(404).json('존재하지 않는 데이터');
  }
}

*/