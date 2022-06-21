const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = [...agoraStatesDiscussions]

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let list = discussionsData.filter(item => item.id === Number(req.params.id))
    // length가 0이 아닐 때와 0일 때를 구분해서 리턴합니다.
    return list.length ? res.status(200).json(...list) : res.status(404).end();
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    // 구조 분해 할당을 이용해 요청으로 받아온 key를 변수로 사용합니다.
    const { id, createdAt, title, author, answer, avatarUrl, bodyHTML } = req.body;
    
    // 새로운 데이터(객체)를 생성합니다.
    const newDiscussion = {
      id,
      createdAt,
      title,
      author,
      answer,
      avatarUrl,
      bodyHTML,
    };

    // 새로운 데이터를 맨 앞에 추가합니다.
    discussionsData.unshift(newDiscussion);
    // 생성된 데이터를 응답으로 보내줍니다. (option)
    res.status(200).json(newDiscussion);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    // 수정할 데이터를 찾습니다.
    let targetIdx = discussionsData.findIndex(
      item => item.id === Number(req.params.id)
    );

    // findIndex 메서드는 만족하는 요소가 없을 경우 -1을 반환합니다.
    if(targetIdx === -1){
      return res.status(404).json({'message': 'id를 찾을 수 없습니다.'})
    }

    // 데이터를 수정합니다. -> 수정을 구현하는 방법: spread 연산자로 값 덮어쓰기
    let editDiscussion = {
      ...discussionsData[targetIdx],
      ...req.body,
    };

    // 데이터 목록에서 수정 전 데이터를 제거하고 수정 후 데이터를 추가합니다.
    discussionsData.splice(targetIdx, 1, editDiscussion);

    // 수정된 데이터를 응답으로 보내줍니다. (option)
    res.status(200).json(editDiscussion);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.

    // 삭제할 데이터를 찾습니다.
    let targetIdx = discussionsData.findIndex(
      item => item.id === Number(req.params.id)
    );

    // findIndex 메서드는 만족하는 요소가 없을 경우 -1을 반환합니다.
    if(targetIdx === -1){
      return res.status(404).json({'message': 'id를 찾을 수 없습니다.'})
    }

    //요청된 id와 같지 않은 데이터만 배열에 담습니다 -> 삭제와 동일한 기능
    discussionsData = discussionsData.filter(item => item.id !== Number(req.params.id))

    // 어떤 데이터가 삭제되었는지 응답으로 보내주기 위해 변수에 담습니다.
    let deletedDiscussion = discussionsData.filter(item => item.id === Number(req.params.id))

    // 삭제된 데이터를 응답으로 보내줍니다. (option)
    return res.status(200).json(deletedDiscussion);
  },
};

module.exports = {
  discussionsController,
};
