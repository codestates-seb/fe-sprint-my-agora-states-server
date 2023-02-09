const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // return res.send(discussionsData) 
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; //req.parmas 를 사용하는 이유 - req.parmas는 예약된 값 , 즉 [GET] /discussions/:findById 에 있는 id 예약 데이터를 조회 할수 있습니다
    //String 값으로 들어오기 때문에 Number로 바꿔주자
    const idData = discussionsData.find(el => el.id === Number(id));
    if(idData) {
      return res.status(200).json(idData)
    } else {
      return res.status(404).send('...error 404');
    }
    
    // var.2
    // const idData = discussionsData.filter(el => {
    //   return el.id === Number(id);  
    // })

    // if(idData.length === 0) { // discussionsData에 해당 id와 일치하는 데이터가 X , 404 에러
    //   return res.status(404).send('...error 404');
    // } else { // 일치하는 데이터가 있으면 상태 코드 200 , 응답
    //   return res.status(200).json(idData[0]);
    // }
    
    // res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
