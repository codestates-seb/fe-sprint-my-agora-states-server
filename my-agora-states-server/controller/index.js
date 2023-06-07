const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },


  findById: (req, res) => {
    const {id} = req.params;
    const filtered = discussionsData.filter(data => {
      return data.id === Number(id);
    })
    // console.log(filtered);
    if (filtered.length ===0){
      return res.status(404).json({'message': `${id} Not found.`});ß
    } else {
      return res.status(200).json(filtered[0]);
    }


  }

};

module.exports = {
  discussionsController,
};
