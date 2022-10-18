const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // find 메소드를 쓰면 배열의 값자체를 반환받을수 있다
    const { id } = req.params;
    const data = discussionsData.find((item) => item.id === Number(id));
    
    if(data) {
      res.status(200).send(data);
    } else {
      res.status(404).send('Not found id')
    }
  }
};

   //const { id } = req.params;
  // req.params.id 그리고 el.data가 같으면 false인게 데이터에 담긴다.
  // data가 true일경우 200성공이니까 length는 !==0 0이 아니다.-> false이면 0인셈 404오류

  // const data = discussionsData.filter((el) => {
    //   return Number(id) === el.id
    // })
    //   if(data.length !== 0) {
    //     return res.status(200).json(data)
    //   } else {
    //     return res.status(404).send('Not found');
    //   }
    // }
        // res.send('TODO:')

module.exports = {
  discussionsController,
};