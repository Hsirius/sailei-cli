const chalk = require("chalk");
const execa = require("execa");
const { hasYarn } = require("./env");
const inquirer = require("inquirer");
const registries = require("./registries");
const { log } = require("./logger");

module.exports = async function shouldUseTaobao(command) {
  if (!command) {
    command = hasYarn() ? "yarn" : "npm";
  }

  // ask and save preference
  const { useTaobaoRegistry } = await inquirer.prompt([
    {
      name: "useTaobaoRegistry",
      type: "confirm",
      message: chalk.yellow(`Use ${chalk.cyan(registries.taobao)} for faster installation?`),
    },
  ]);

  // 注册淘宝源
  if (useTaobaoRegistry) {
    await execa(command, ["config", "set", "registry", registries.taobao]);
    log(`${chalk.yellow(`config ${registries.taobao} complete!`)}\n`);
  }

  return useTaobaoRegistry;
};
