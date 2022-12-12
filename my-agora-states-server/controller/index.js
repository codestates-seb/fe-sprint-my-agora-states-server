const { namedSetExisting } = require("jsdom/lib/jsdom/living/generated/utils");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
    findAll: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.
        return res.status(200).json(discussionsData);
    },

    findById: (req, res, next) => {
        // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
        const { id } = req.params;
        const resBody = discussionsData.filter((x) => x.id === Number(id));
        if (resBody.length === 0) {
            return next();
        }
        return res.status(200).json(resBody[0]);
    },
};

module.exports = {
    discussionsController,
};
