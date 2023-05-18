module.exports = (generator, options = {}) => {
  generator.extendPackage({
    dependencies: {
      antd: "^5.5.0",
      dayjs: "^1.11.7",
      "@ant-design/icons": "^5.0.1",
    },
  });

  generator.render("./template", {
    hasAntd: options.features.includes("antd"),
  });
};
