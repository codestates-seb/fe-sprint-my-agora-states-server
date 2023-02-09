const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
    findAll: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.
        // res.send('TODO:')
        return res.status(200).json(discussionsData);
    },

    findById: (req, res) => {
        const { id } = req.params;
        const data = discussionsData.filter((v) => v.id === +id);

        if (data.length > 0) return res.status(200).json(data[0]);
        else return res.status(404).json();
    },
};

module.exports = {
    discussionsController,
};
