const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if (req.query.query !== undefined) {
      const filteredData = discussionsData.filter((data) => {
        return data.code.includes(req.query.query);
      });
      return res.status(200).json(filteredData);
    }
   return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    
      const filteredData = discussionsData.filter(data =>{
        return data.id === Number(id)
      });
      if (filteredData.length !== 0){
      return res.status(200).json(filteredData[0]);
    } else{
      return res.status(404).json('Not found')
    }
  }

};

module.exports = {
  discussionsController,
};
