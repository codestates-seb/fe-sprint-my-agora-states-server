const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // 구조분해할당
    const { id } = req.params;
    // discussionsData가 가지고 있는 id가 45, 즉 문자열 '45'이 아니라 number라서 변환해줘야 정상적으로 실행된다..
    let filtered = discussionsData.filter((el)=> el.id === Number(id));

    // 데이터가 없으면
    if(filtered.length === 0){
      return res.status(404).json("Not found");
    }
    else {
      // discussionsController.findById (discussion 하나를 조회)
      // 특정 값을 지정해주지 않으면 배열에 감싸인 상태라서 그 값이 어떤 속성을 가지고 있는지, id가 일치하는지 확인할 수 없음.
      return res.status(200).json(filtered[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
