const { agoraStatesDiscussions } = require("../repository/discussions");
const { opentalk } = require("../repository/opentalk")
const discussionsData = agoraStatesDiscussions;
const opentalkData = opentalk;

const discussionsController = {
  findAll: (req, res) => {
    const discussionsList = agoraStatesDiscussions.map(discussion => {
      return {
        id: discussion.id,
        createdAt: discussion.createdAt,
        updatedAt: discussion.updatedAt,
        title: discussion.title,
        author: discussion.author,
        answer: discussion.answer=== null ? null : 'yes',
        avatarUrl: discussion.avatarUrl,
      };
    });
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsList)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const id = parseInt(req.params.id);
    const filteredData = discussionsData.filter(dis=>dis.id===id);
    return res.status(200).json(filteredData)
  },

  create: (req,res)=>{

    const now = new Date();

    const id = agoraStatesDiscussions.length+5;
    const createdAt = now.toISOString();
    const updatedAt = now.toISOString();
    const title = req.body.title;
    const author = req.body.author;
    const answer = null
    const bodyHTML = req.body.bodyHTML;
    const avatarUrl = 'https://avatars.githubusercontent.com/u/79903256?s=64&v=4';

    const newDiscussion = {id, createdAt, updatedAt, title, author, answer, bodyHTML, avatarUrl}


    agoraStatesDiscussions.unshift(newDiscussion)
    return res.status(200).json(newDiscussion);
  },

  submitAnswer: (req, res) => {
    const id = parseInt(req.params.id);
    const dataIndex = discussionsData.findIndex(dis => dis.id === id);
    let filteredData = {...discussionsData[dataIndex]};
    filteredData = {
      ...filteredData,
      answer:{
        id : id,
        createdAt : new Date().toISOString(),
        author : req.body.author,
        bodyHTML : req.body.bodyHTML,
        avatarUrl : 'https://avatars.githubusercontent.com/u/79903256?s=64&v=4',
      }
    }
  
    discussionsData.splice(dataIndex, 1, filteredData);
    return res.status(200).json(filteredData);
  }

};



////////////opentalk 추가

const opentalkController = {

  findAll: (req, res) => {
    console.log('opentalk findAll')
    console.log(opentalkData)
    return res.status(200).json(opentalkData);
  },
  
  create: (req, res) => {

    const now = new Date();

    const username = req.body.username
    const text = req.body.text
    const roomname = req.body.roomname
    const id = opentalkData.length + 1
    const date = now.toISOString();

    if (username && text && roomname) {

      let newTalk = { username, text, roomname, id, date }

      opentalkData.push(newTalk)

      return res.status(200).json(id);
    }
    else { return res.status(404) }


  }

};



module.exports = {
  discussionsController, opentalkController
};
