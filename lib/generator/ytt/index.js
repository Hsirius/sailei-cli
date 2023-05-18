module.exports = (generator) => {
  generator.extendPackage({
    scripts: {
      ytt: "npx ytt",
    },
    devDependencies: {
      "yapi-to-typescript": "^3.37.0",
    },
  });

  generator.render("./template", {});
};
