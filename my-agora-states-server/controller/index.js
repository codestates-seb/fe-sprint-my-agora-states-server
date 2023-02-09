const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
    // return res.status(200).json('hi');
    // res.status(200).send('fe-sprint-my-agora-states-server');
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')

    const { id } = req.params;
    let idOn=false;
    // TODO:
    const filtered=discussionsData.filter((item)=>{
      if(item.id===Number(id))
      {
        idOn=true;
        return true;
    }
    });
    // res.body=filtered;

    if(idOn)
      res.send(filtered[0]);
    else
      res.status(404).send('error');
    
  }

};

module.exports = {
  discussionsController,
};
