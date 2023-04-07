const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const copyData = [...discussionsData];

const discussionsController = {
    findAll: (req, res) => {
        // TODO: 모든 discussions 목록을 응답합니다.

        return res.status(200).json(copyData);
    },

    findById: (req, res) => {
        // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
        const { id } = req.params;
        const data = copyData.find((el) => el.id === Number(id));
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json("Try again!");
        }
    },

    create: (req, res) => {
        const makeId = Math.floor(Math.random() * (1000 - 45) + 45);
        const { createdAt, title, url, author, answer } = req.body;
        copyData.unshift({ makeId, createdAt, title, url, author, answer });
        res.location(`/discussions/${makeId}`);
        return res.status(201).json(copyData[0]);
    },

    update: (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const updateIdx = copyData.findIndex((el) => el.id === Number(id)); //받아오는 데이터는 문자열 타입이기 때문에 숫자로 변경해주는 작업이 반드시 필요함
        const updateId = { ...copyData[updateIdx], ...body }; //앞에 요소가 기준 요소 => 뒤에 요소를 덮어씌움
        //const updateId = Object.assign(copyData[updateIdx], body)
        copyData.splice(updateIdx, 1, updateId);
        return res.status(200).json(updateId);
    },

    deleteById: (req, res) => {
        const { id } = req.params;
        // copyData = copyData.filter((el) => el.id !== Number(id)); //copyData가 const로 선언된 경우 재할당은 불가능 => let으로 바꿔주기
        // return res.status(200).json({ id });
        const deleteIdx = copyData.findIndex((el) => el.id !== Number(id));
        copyData.splice(deleteIdx - 1, 1); //splice는 원본 배열 자체를 변경하기 때문에 const로 선언된 배열도 변경 가능
        return res.status(200).json({ id });
    },
};

module.exports = {
    discussionsController,
};
