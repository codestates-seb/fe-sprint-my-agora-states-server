const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const {id} = req.params;
    const sameDiscussion = discussionsData.filter((discussion) => discussion.id === Number(id));
    console.log(sameDiscussion);
    // if (sameDiscussion) {
    //   return res.status(200).send(...sameDiscussion);
    // } else {
    //   return res.status(404).send("해당 아이디가 조회되지 않습니다.")
    // }
    if (sameDiscussion.length === 0) {
      res.status(404).send("해당 아이디는 없는 아이디입니다.");
      return;
    }
    res.status(200).send(...sameDiscussion); 
    // send를 쓴다면 위에처럼 쓰고 json을 쓴다면 알아서 변환해주기 때문에 ...을 붙이지 않아도 된다
    // ...을 붙이지 않으면 []안에 들어가기 때문에 JSON형식이 아니기 때문에 권장되지 않는다
    // 위에 식 X인 이유 : filter 메서드는 조건에 맞는 값이 없어도 빈 배열을 리턴하기 때문에 truthy값 취급 ㅡ> if문 
  } 
};

module.exports = {
  discussionsController,
};
