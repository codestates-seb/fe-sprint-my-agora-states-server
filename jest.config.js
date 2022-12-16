module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {},
  modulePathIgnorePatterns: ["<rootDir>/my-agora-states-in-react/src"],
  // transformIgnorePatterns: ["/!node_modules\\/lodash-es/*"],
  // moduleNameMapper: {
  //   "^lodash-es$": "lodash",
  //   "^lodash-es/cloneDeep$": "lodash/cloneDeep",
  //   "^lodash-es/anyOtherLodashModule$": "lodash/anyOtherLodashModule",
  // },
};
