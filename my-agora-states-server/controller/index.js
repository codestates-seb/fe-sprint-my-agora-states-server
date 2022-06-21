const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // let list = discussionsData;
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    let data = discussionsData.filter(ele => ele.id === Number(req.params.id));
    //console.log(data)
    // 테스트 케이스를 살펴보니 [] 빈 배열이 존재한다! 이걸 제외시켜주어야겠다
    // 빈 배열을 제외하기 위해 구해 온 data의 배열의 길이가 0인 경우를 제외시킨다
    if(data.length !== 0) {
      // 다음으로 path parameter id를 가진 discussion을 필터링 후 가져온다
      let list = discussionsData.filter((item) => {
        return item.id === Number(req.params.id);
      });
      // 해당 형태는 배열안에 객체로 감싸져 있기 때문에 spread를 사용해 값을 나타내준다
      return res.status(200).json(...list);
    }
    // 이후 path parameter id 가 존재하지 않을 경우 에러 코드를 발생시킨다
    else return res.status(404).json();
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    // 아고라스테이츠 만들 때 submit 해서 새로운 디스커션을 작성한 것처럼 
    // 빈 객체를 새로 만들어 주어 push해준다 (unshift로 맨 앞에 추가해줘도 좋음)
    const newDiscussion = {
      id : req.body.id,
      createdAt : req.body.createdAt,
      title : req.body.title,
      author : req.body.author,
      answer: req.body.answer,
      avatarUrl: req.body.avatarUrl,
      bodyHTML: req.body. bodyHTML
    };
    discussionsData.unshift(newDiscussion);
    return console.log(discussionsData)
    // return res.status(200).json(body.id);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const { id } = req.params;
    const bodyData = req.body;
    const UnupdatedIdx = discussionsData.findIndex(el => el.id === id);
    const updatedData = {...discussionsData[UnupdatedIdx], ...bodyData};
    discussionsData.splice(UnupdatedIdx, 1, updatedData);
    return res.status(200).json(updatedData);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
