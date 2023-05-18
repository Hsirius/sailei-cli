const inquirer = require("inquirer");
const path = require("path");
const chalk = require("chalk");

const Creator = require("./Creator");
const PromptModuleAPI = require("./PromptModuleAPI");
const Generator = require("./Generator");
const FileProcess = require("./FileProcess");
const PackageManager = require("./PackageManager");
const { clearConsole, log } = require("./utils/logger");

async function create(name) {
  const targetDir = path.join(process.cwd(), name);

  // 如果目标目录已存在，询问是覆盖还是合并
  await FileProcess(targetDir);

  const creator = new Creator();

  // 获取各个模块的交互提示语
  const promptModules = getPromptModules();
  const promptAPI = new PromptModuleAPI(creator);
  promptModules.forEach((m) => m(promptAPI));

  // 清空控制台
  clearConsole();

  // 弹出交互提示语并获取用户的选择
  const answers = await inquirer.prompt(creator.getFinalPrompts());

  // package.json 文件内容
  const pkg = {
    name,
    version: "0.1.0",
    dependencies: {},
    devDependencies: {},
  };
  const generator = new Generator(pkg, targetDir);

  // 填入 react 必选项，无需用户选择
  answers.features.unshift("react");

  // 根据用户选择的选项加载相应的模块，在 package.json 写入对应的依赖项
  // 并且将对应的 template 模块渲染
  answers.features.forEach((feature) => {
    require(`./generator/${feature}`)(generator, answers);
  });
  await generator.generate();

  // 下载依赖
  const pm = new PackageManager(targetDir, answers.packageManager);
  await pm.install();

  log("\n依赖下载完成! 执行下列命令开始开发：\n");
  log(`${chalk.hex("#4096ff")(`cd ${name}`)}\n`);
  log(`${chalk.hex("#4096ff")(`${pm.bin === "npm" ? "npm run" : "yarn"} dev`)}\n`);
}

function getPromptModules() {
  return ["vite", "webpack", "antd", "ytt"].map((file) => require(`./promptModules/${file}`));
}

module.exports = create;
