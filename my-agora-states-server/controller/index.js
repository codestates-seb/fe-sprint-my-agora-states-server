const res = require("express/lib/response");
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
    if(id !== undefined){
      const filtered = discussionsData.filter((data)=>{
        return data.id === parseInt(id);
      })
      return filtered.length === 0 ? res.status(404).send('없다') : res.status(200).send(...filtered) // spread를 하는 이유 - 객체의 형태로 불러오기 위해
    }
    res.send(discussionsData)
  }
};

module.exports = {
  discussionsController,
};
