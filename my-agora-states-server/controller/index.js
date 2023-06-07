const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    // discussionsData를 JSON 형식으로 반환하고 상태 코드 200을 포함하는 응답을 보냅니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    // 요청으로 받은 id를 가져옵니다.
    const params = req.params.id;

    // discussionsData에서 id가 일치하는 첫 번째 discussion을 찾습니다.
    const discussion = discussionsData.find((data) => data.id === Number(params));
    
    if (discussion) {
      // 일치하는 discussion이 있는 경우, 상태 코드 200과 해당 discussion을 JSON 형식으로 응답합니다.

      // 상태 코드 200과 일치하는 discussion을 JSON 형식으로 응답합니다.
      return res.status(200).json(discussion);
    } else {
      // 일치하는 discussion이 없는 경우, 상태 코드 404와 "Discussion not found" 메시지를 JSON 형식으로 응답합니다.

      // 상태 코드 404와 "Discussion not found" 메시지를 JSON 형식으로 응답합니다.
      return res.status(404).json('Discussion not found');
    }
  }
};

module.exports = {
  discussionsController,
};