const chalk = require("chalk");

module.exports = (api) => {
  api.injectFeature({
    name: "React Redux",
    value: "reactRedux",
    description: "Official React bindings for Redux",
    link: "https://react-redux.js.org/",
  });

  api.injectPrompt({
    name: "ReduxToolkit",
    when: (answers) => answers.features.includes("reactRedux"),
    type: "confirm",
    message: `Use Redux Toolkit? ${chalk.yellow(`无需手动编写任何 action creator 或者 action type`)}`,
    description: `The official, opinionated, batteries-included toolset for efficient Redux development`,
    link: "https://redux-toolkit.js.org/",
  });
};
