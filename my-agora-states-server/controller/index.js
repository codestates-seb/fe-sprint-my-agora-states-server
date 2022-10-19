const {agoraStatesDiscussions} = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const handleRequestBody = (req, res) => {
    if (!req.body) return res.status(400).send('no request body!');

    const {author, title, discussion} = req.body;
    if (!author && !title && !discussion) {
        return res.status(400).send('bad request!');
    }
    return true;
}

const discussionsController = {
    findAll: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.
        return res.status(200).json(discussionsData);
    },

    findById: (req, res) => {
        // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
        const {id} = req.params;
        const id_filter = discussionsData.find((el) => el.id === Number(id));
        console.log(id_filter);
        if (id_filter === undefined) return res.status(404).json('No discussion found!');
        return res.status(200).json(id_filter);
    },

    createDiscussion: (req, res) => {
        const {author, title, bodyHTML} = req.body;

        if (!handleRequestBody(req, res)) return;
        const id = parseInt(Math.random() * 10000);
        const avatarId = parseInt(Math.random() * 100);
        const url = "https://github.com/codestates-seb/agora-states-fe/discussions/" + id;

        const newDiscussion = {
            id,
            createdAt: new Date().toLocaleDateString('ko-kr'),
            author,
            title,
            url,
            answer: null,
            bodyHTML,
            avatarUrl: `https://randomuser.me/api/portraits/men/${avatarId}.jpg`,
        };

        discussionsData.unshift(newDiscussion);
        return res.status(201).send('created successfully! : ID=>' + id);
    }

};

module.exports = {
    discussionsController,
};
