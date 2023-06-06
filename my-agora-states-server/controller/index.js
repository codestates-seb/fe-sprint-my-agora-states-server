const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
     return res.status(200).json(discussionsData);
    // res.send('TODO:')
   },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // id와 일치하는지 체크하여 404
    // id가 있으면 id, title, url, author, bodyHTML, avartarURL
    let { id } = req.params
    let newData = discussionsData.filter(el => el.id === Number(id));
    if(!id || newData.length === 0){
      return res.sendStatus(404)
    } else {
      // let {id, title, url, author, bodyHTML, avatarUrl} = newData[0]
      // const result = {id, title, url, author, bodyHTML, avatarUrl}
      // return res.status(200).json(result);
      return res.status(200).json(newData[0]);

      }
    }
  }

    // res.send('TODO:')




module.exports = {
  discussionsController,
};
