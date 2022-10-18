const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // 성공 상태코드 200과 모든 목록을 담은 repository폴더 내 discussions 목록을 담은 discussionsData를 그대로 return 
    // res.status(200).send(discussionsData) // send도 가능하고 json도 가능
    return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // id를 기준으로 데이터를 찾아야 하니 요청의 파라미터를 지정해 준다
    // 새로운 변수data를 선언하여 모든 데이터가 있는 discussionsData 안에서 같은 id를 find로 찾는다.
    // 이때 id는 숫자 형태로 변환해주어야 찾기가 가능
    // if문으로 data가 true 일때 성공 상태코드와 해당하는 자료를 리턴 / 그렇지 않을 시에는 실패상태코드+ 실패 상메 Not found 리턴

    const {id} = req.params
    const data = discussionsData.find(discussion => discussion.id === Number(id))
    return data ? res.status(200).json(data) : res.status(404).send('Not found')
  }

};

module.exports = {
  discussionsController,
};
