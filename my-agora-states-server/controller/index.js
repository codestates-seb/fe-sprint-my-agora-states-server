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

    createDiscussion: (req, res) => {
        const { title, author, avatarUrl } = req.body;
        console.log(req.body, req.url);
        const id = parseInt(Math.random() * 10000);
        const url =
            "https://github.com/codestates-seb/agora-states-fe/discussions/" +
            id;
        const newDiscussion = {
            id,
            createdAt: new Date().toISOString(),
            title,
            url,
            author,
            answer: null,
            avatarUrl,
        };
        discussionsData.unshift(newDiscussion);
        return res.status(201).json(newDiscussion);
    },

    updateById: (req, res) => {
        const { id } = req.params;
        const bodyData = req.body;
        const filtered = discussionsData.filter((item) => {
            return item.id === Number(id);
        });
        let result = Object.assign(filtered[0], bodyData);
        return res.status(200).json(result);
    },

    deleteById: (req, res) => {
        const idx = discussionsData.findIndex(
            (item) => item.id === Number(req.params.id)
        );
        if (idx !== -1) {
            discussionsData.splice(idx, 1);
            return res.status(202).send("Resource deleted successfully");
        } else {
            return res.status(404).send("Not found");
        }
    },
};

module.exports = {
    discussionsController,
};
