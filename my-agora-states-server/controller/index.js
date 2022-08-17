const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // 파람스로 들어오는 데이터는 str 타입이므로 num 타입으로 바꿔줘야 한다
    const list = discussionsData.find((item) => item.id === Number(id))
    if(list){
      return res.status(200).send(list);
    } else {
      return res.status(404).send('Not Found');
    }
  }
};

module.exports = {
  discussionsController,
};
