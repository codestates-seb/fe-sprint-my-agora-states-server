const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
import { uuid } from 'uuidv4';

const discussionsController = {
  findAll: (req, res) => {
    // GET, '/'
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // GET, '/:id'
    const { id } = req.params;
    if (id !== undefined) {
      const discussion = discussionsData.find((discussion) => {
        return discussion.id === Number(id);
      })
      if (discussion !== undefined) {
        return res.status(200).json(discussion);
      } else {
        return res.status(404).send("입력한 id와 일치하는 데이터가 존재하지 않습니다")
      }
    }
  }

};

module.exports = {
  discussionsController,
};
