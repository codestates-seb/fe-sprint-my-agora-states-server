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
    const idData = discussionsData.filter(v => String(v.id) === String(id)); // id가 숫자이거나 문자일 수 있으므로 둘다 number타입으로 변경시킨다.
    if(idData.length>0) res.status(200).json(idData[0]);
    else res.status(404).send("Not Found!");
  },
/*
  create: (req, res) => {
    const newQuestion = {
      id: new Date().getTime(), //랜덤 숫자로 고유한 id 설정
      createdAt: new Date(),
      updatedAt: new Date(),
      url: '#',
      answer: null,
      avatarUrl: "https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=s200",
      ...req.body,
    };

    discussionsData.unshift(newQuestion); //새로운 객체를 discussiondata 배열 제일 앞에 붙인다.
    return res.status(201).json(discussionsData);
    //discussionsData.unshift(req.body);
    //res.status(301).json(req.body);
  },

  deleteById: (req, res) => {
    const {id} = req.params;
    const idx = discussionsData.findIndex((v) => {
      return v.id === Number(id)
    });
    discussionsData.splice(idx,1);
    return res.json(discussionsData);
  },
  */
};

module.exports = {
  discussionsController,
};
