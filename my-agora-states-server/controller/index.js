const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
// 서버에서는 로컬스토리지 사용 불가
// if(localStorage.getItem("discussion") === null){
//   localStorage.setItem("discussion", JSON.stringify(agoraStatesDiscussions))
// };
// const discussionsData = localStorage.getItem("discussion");
let windowList = discussionsData.slice();

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(windowList);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let list = windowList.filter(item => {
      return item.id === Number(req.params.id)
    });
    if(list.length === 0){
      return res.status(404).json('Not Found!');
    } else {
      return res.status(200).json(list[0]);
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let today = new Date();
    let month = ('00'+(today.getMonth()+1)).slice(-2);
    let date = ('00'+(today.getDate())).slice(-2);
    let time = today.toLocaleString('kr-KR', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
    
    let list = {
      id: windowList.length+5,
      author: req.body.author,
      createdAt: `${today.getFullYear()}-${month}-${date} ${time}`,
      title: req.body.title
    };
    windowList.unshift(list);

    res.status(200).json(list);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    if(req.params.id !== undefined){
      let data = {};
      if(req.body.author !== undefined){
        data.author = req.body.author
      }
      if(req.body.title !== undefined){
        data.title = req.body.title
      }

      windowList.map(item => {
        if(item.id === Number(req.params.id)){
          Object.assign(item, data)
        }
      })

      return res.status(200).json(req.params.id)
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    if(req.params.id !== undefined){
      windowList = windowList.filter(data => {
        return data.id !== Number(req.params.id)
      })

    }

    return res.status(200).json(req.params.id);
  },
};

module.exports = {
  discussionsController,
};
