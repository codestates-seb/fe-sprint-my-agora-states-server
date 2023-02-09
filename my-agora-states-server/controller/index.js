const { v4: uuid } = require('uuid');
const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const { filter } = req.query;
    const items = getFilteredItems(discussionsData, filter);
    res.status(200).json(items);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find(discussion => discussion.id === +id);
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).send('id와 일치하는 discussion이 없음');
    }
  },

  create: (req, res) => {
    const { author, title, content } = req.body;
    const createdId = uuid();
    const createdDate = new Date().toJSON();

    const newItem = {
      author,
      title,
      content,
      id: uuid(),
      createdAt: createdDate,
      updatedAt: createdDate,
      url: '/',
      answer: null,
      avatarUrl:
        'https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4',
    };
    discussionsData.unshift(newItem);
    res.status(200).json(createdId);
  },
};

const filterFunc = {
  All: () => true,
  Answered: item => !!item.answer,
  Unanswered: item => !item.answer,
};

const getFilteredItems = (items, filter) => {
  return items.filter(filterFunc[filter]);
};

module.exports = {
  discussionsController,
};
