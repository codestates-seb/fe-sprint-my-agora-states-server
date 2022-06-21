const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    // console.log(req.params);
    // 구조 분해 할당
    const { limit, page } = req.query;
    const list = discussionsData

    if (!limit && !page){
      return res.status(200).json(list);
    }
    return res.status(404).send('Not found');
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // params에 아이디 있음
    const { id } = req.params;

    const list = discussionsData.filter((el) => el.id === Number(id));
    // const list2 = discussionsData.find((el) => el.id === Number(id));

    if (list.length !== 0){
      return res.status(200).json(...list);
    }
    
    return res.status(404).send('해당하는 ID가 없습니다.');
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    
    // const list = Object.assign(...discussionsData, req.body);
    // console.log(list);
    const { title, author, bodyHTMl, avatarUrl } = req.body;
    const id = Number(discussionsData[0].id)+1;
    const url = 'https://github.com/codestates-seb/agora-states-fe/discussions/'+id;

    const newDiscussion = {
      id,
      createAt: new Date().toISOString(),
      title,
      url,
      author,
      answer: null,
      bodyHTMl,
      avatarUrl,
    };

    discussionsData.unshift(newDiscussion);

    return res.status(201).send("ID 데이터 추가")
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    // console.log(req.body);
    let list = discussionsData.filter((el) => el.id === Number(req.body.id));

    if (list.length === 0){
      return res.status(404).send("해당하는 ID가 없습니다.");
    }

    list = Object.assign(...list, req.body);
    // console.log(list);
    return res.status(200).json(list)
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;

    let idx = discussionsData.findIndex((el) => el.id === Number(id))

    discussionsData.splice(idx, 1);

    return res.status(200).send("해당 데이터가 삭제되었습니다.")
  },
};

module.exports = {
  discussionsController,
};
