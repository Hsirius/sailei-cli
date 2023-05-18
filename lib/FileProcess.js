const fs = require("fs-extra");
const inquirer = require("inquirer");
const chalk = require("chalk");
const { clearConsole } = require("./utils/logger");

module.exports = async function (targetDir) {
  if (fs.existsSync(targetDir)) {
    // 清空控制台
    clearConsole();
    const { action } = await inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: `Target directory ${chalk.cyan(
          targetDir
        )} already exists. Pick an action:`,
        choices: [
          { name: "Overwrite", value: "overwrite" },
          { name: "Merge", value: "merge" },
        ],
      },
    ]);
    if (action === "overwrite") {
      console.log(`\nRemoving ${chalk.cyan(targetDir)}...`);
      await fs.remove(targetDir);
    }
  }
};
