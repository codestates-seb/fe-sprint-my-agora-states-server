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
    console.log(typeof(id)); // params로 불러와서 id 의 타입이 string으로 들어온다.
    console.log(typeof(discussionsData[0].id)); // 실제 데이터속에서의 id의 타입은 넘버임

    const filtered = discussionsData.filter((item) => {
        return item.id === Number(id);
    })
    console.log(filtered);
    if (filtered.length > 0) return res.status(200).json(filtered[0]); 
    // id는 딱 하나뿐이기 떄문에 filtered 에 올라간 객체는 하나뿐이므로 0번째 index로 해줘야한다
    else return res.status(404).end()
  }
};

module.exports = {
  discussionsController,
};
