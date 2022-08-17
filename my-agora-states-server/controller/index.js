const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
  
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const { id } = req.params;

    let filtered_id;

    if(id){
      filtered_id = discussionsData.filter(data => {
        return data.id === Number(id); // 주의하기 ㅠㅠ
      })  
    }

    let filter_id = filtered_id[0];

    if(filter_id){
      return res.status(200).json(filter_id);
    } else {
      return res.status(404).json('Not Found');
    }
  }

};

module.exports = {
  discussionsController,
};
