const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    //return res.state(200).json(agoraStatesDiscussions);
    res.send(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send('TODO:')
    const { id } = req.params;
    if(id) {
      let date = discussionsData.filter((el)=> {
        return Number(id) === el.id;
      });
      if(date.length===0) {
      return res.statu(200).josn({state: false});
      }else {
        return res.statu.josn(...date)
      }
    }
  },
};

module.exports = {
  discussionsController,
};
