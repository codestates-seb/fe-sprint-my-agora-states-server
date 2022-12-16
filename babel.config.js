module.exports = {
  presets: [
    ["@babel/preset-react", { runtime: "automatic" }],
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-runtime",
      ],
    },
  },
};
