const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
    findAll: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.
        res.status(200).json(discussionsData);
    },

    findById: (req, res) => {
        // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
        const { id } = req.params;
        const filteredItem = discussionsData.filter(
            (item) => item.id === Number(id)
        );
        let result = Object.assign({}, filteredItem[0]);
        if (result.id) {
            res.status(200).json(result);
        } else {
            res.status(404).json("검색 결과가 없습니다.");
        }
    },
};

module.exports = {
    discussionsController,
};
