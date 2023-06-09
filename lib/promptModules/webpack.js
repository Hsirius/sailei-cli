module.exports = (api) => {
  api.injectFeature({
    name: "webpack",
    value: "webpack",
    description:
      "Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.",
    link: "https://www.webpackjs.com/",
    checked: false,
  });
};
