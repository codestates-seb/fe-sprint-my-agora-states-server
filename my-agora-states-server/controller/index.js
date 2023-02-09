const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const compareByKey = (target, key) => (a) => a[key]?.toString() === target[key];

const calculatePages = (item) => Math.ceil(item.length / 10) || 0;

const filterItem = (item) => (f) => {
  const discussion = item.filter((a) => f(a));
  return discussion;
}; // 무조건 O(n);

const filterDiscussions = filterItem(discussionsData);

const findById = (req, res) => {
  // discussionsData.find(a => a.id === +req.params); // 최악일 때 O(n)

  const discussion = filterDiscussions(compareByKey(req.params, "id"));

  return discussion.length
    ? res.json(discussion[0])
    : res.status(404).json(discussion);
};

const findByTag = (target) => filterDiscussions(compareByKey(target, "tag"));

const findByPage = (res, page, data) => {
  const start = (page - 1) * 10;
  const discussion = data.slice(start, start + 10);
  const pages = calculatePages(data);
  return res.json({ discussion, pages });
};

const findUnanswered = (data) => {
  return filterItem(data)((a) => !Boolean(a.answer));
};

const appendData = (req, res) => {
  discussionsData.unshift(req.body);
  return res.status(201).send("ok");
};
const patchData = (req, res) => {
  discussionsData.find(compareByKey(req.params, "id")).answer = {
    ...req.body,
  };
  return res.send("ok");
};
const deleteData = (req, res) => {
  discussionsData = discussionsData.filter(
    (a) => !compareByKey(req.params, "id")(a)
  );
  return res.send("deleted");
};

const discussionsController = {
  findAll: (req, res) => {
    if (!Object.keys(req.query).length) {
      res.json(discussionsData);
      return;
    }

    const tagData = req.query.tag ? findByTag(req.query) : discussionsData;

    const unansweredData = req.query.unanswered
      ? findUnanswered(tagData)
      : tagData;

    req.query.page
      ? findByPage(res, req.query.page, unansweredData)
      : findByPage(res, 1, unansweredData);
  },
  findById,
  appendData,
  patchData,
  deleteData,
};

module.exports = {
  discussionsController,
};
