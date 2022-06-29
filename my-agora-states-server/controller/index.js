const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // if (Object.keys(req.query).length === 0) {
    //   return res.status(200).json(discussionsData);
    // } //이걸로써도 되긴됨
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // console.log(req.params); //주소창에 discussions/45 치면 { id: '45' } 로 콘솔에 출력
    // console.log(req.query); // req.query는 빈객체 {}
    ///서버에있는 데이터 아이디와 요청의 path parameter id가 같은지 확인
    // if (req.params) {
    //   if (req.params.id) {
    //     const list = discussionsData.filter(
    //       (data) => Number(req.params.id) === data.id
    //     );
    //     console.log(list);
    //     return res.status(200).json(list);
    //   } else {
    //     return res.status(404).json("no such id exists");
    //   }
    // }
    const found = discussionsData.find(
      (data) => Number(req.params.id) === data.id
    ); //id일치하는 객체 정보 가져온다.
    if (found !== undefined) {
      return res.status(200).json(found);
    } else {
      return res.status(404).json("no such id exists");
    }
  },

  //POST 요청
  //이미 모든 아고라스테이츠 디스커션 데이터가 discussionsData 변수에 저장되어있으므로 기존 배열에 추가
  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    // console.log(req.body);
    const newDiscussion = req.body;
    discussionsData.unshift(newDiscussion);
    // console.log(newDiscussion); //야호 새로운 데이터 잘찍히고 post요청도 잘 보내진다!
    // {
    //   id: '1999',
    //   createdAt: '2022-05-16T01:02:17Z',
    //   updatedAt: '2022-05-16T01:02:17Z',
    //   title: 'newD넣어지는지 확인',
    //   url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45',
    //   author: 'dubipy',
    //   answer: {
    //     id: 'DC_kwDOHOApLM4AKg6M',
    //     createdAt: '2022-05-16T02:09:52Z',
    //     url: 'https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236',
    //     author: 'Kingsenal',
    //     bodyHTML: '',
    //     avatarUrl: 'https://avatars.githubusercontent.com/u/79903256?s=64&v=4'
    //   },
    //   bodyHTML: '',
    //   avatarUrl: 'https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4'
    // }
    return res.status(200).json(newDiscussion);
  },

  //PUT 요청
  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const dataTobeUpdated = req.body;
    const updatedIdx = discussionsData.findIndex(
      (discussion) => discussion.id === Number(req.params.id)
    );
    // console.log("index: " + updatedIdx);
    const updatedDiscussion = {
      ...discussionsData[updatedIdx],
      ...dataTobeUpdated,
    };
    // console.log(updatedDiscussion);
    // 이미 존재하는 0번째 디스커션인 id:45 로 실험하면, put요청 잘 되서 수정되는데.. 새로 내가 추가한 id 1999로는 수정이 안되고 인덱스 -1으로 나옴
    // {
    //   id: 45,
    //   createdAt: '2022-06-29T01:02:17Z',
    //   updatedAt: '2022-06-29T01:02:17Z',
    //   title: 'newD 이제 수정되는지 확인',
    //   url: 'https://github.com/codestates-seb/agora-states-fe/discussions',
    //   author: '아리아나', ...}
    res.status(200).json(updatedDiscussion);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const updatedIdx = discussionsData.findIndex(
      (discussion) => discussion.id === Number(req.params.id)
    );
    // console.log(updatedIdx);
    //기존 데이터 배열에서 updatedIdx 요소 삭제
    const updatedDiscussionAfterRemove = discussionsData.splice(updatedIdx, 1);
    // console.log(updatedDiscussionAfterRemove); //splice로 삭제시킨 그 요소
    res.status(200).json(discussionsData); //삭제시킨 이후 남아있는 데이터를 응답으로 보내기
  },
};

module.exports = {
  discussionsController,
};
