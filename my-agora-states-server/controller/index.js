const e = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params

    const filtered = discussionsData.filter((el) => el.id === Number(id))

    console.log(`filtered length : ${filtered.length}`)

    if(!filtered.length){  // filtered 가 빈 배열(filtered.length===0)이라면 status(404) 출력
      return res.status(404).send({
        message: 'Data Not Found!'
      })
    }
    // filtered = [{id : id, cratedAt: ...}] 형태로 나와서 ...로 전개해줬음
    return res.status(200).json(...filtered);
  }

};

module.exports = {
  discussionsController,
};
