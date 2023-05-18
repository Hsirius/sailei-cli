import { defineConfig } from "yapi-to-typescript";

const config = [
  {
    // 获取方式：打开项目 -> 点开分类 -> 复制浏览器地址栏 /api/cat_ 后面的数字。
    ids: [73923, 73931],
    // 输出的ts文件存储模块文件夹名称，如本配置将输出到src/ytt-type/contentManage.ts中
    name: "contentManage",
    // 获取方式：打开项目 -> 设置 -> token 配置 -> 复制 token。
    token: "d13fd670ccf9cd2576eeae8cb866b3475e0457c4f6b605c0d03e6c4105fa43f6",
  },
];

const createCategories = function (ids: number[]) {
  return ids.map((id) => ({
    id,
    // 自定义ts中interface名称生成规则
    getRequestFunctionName(interfaceInfo: any, changeCase: any) {
      // path肯定是唯一的
      const list = interfaceInfo.path.split("/") as string[];
      // 添加method用于区分post，get，put请求可能path相同
      const firstWord = list[0].toLowerCase();
      if (!/^get|^post|^put|^delete/.test(firstWord)) {
        list.unshift(interfaceInfo.method);
      }
      return changeCase.camelCase(list.join(" "));
    },
  }));
};

export default defineConfig(
  config.map((item) => ({
    // 1. 此处配置yapi的访问地址
    serverUrl: "https://baidu.com",
    typesOnly: true,
    target: "typescript",
    reactHooks: {
      enabled: false,
    },
    prodEnvName: "production",
    outputFilePath: `src/ytt-type/${item.name}.ts`,
    dataKey: "data",
    projects: [
      {
        // 2. 此处配置yapi项目的访问token
        token: item.token,
        categories: createCategories(item.ids),
      },
    ],
  }))
);
