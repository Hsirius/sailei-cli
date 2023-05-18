module.exports = (api) => {
  api.injectFeature({
    name: "yapi-to-typescript",
    value: "ytt",
    short: "yapi-to-typescript",
    description:
      "一个代码生成工具，其可根据 YApi 或 Swagger 的接口定义生成 TypeScript 或 JavaScript 的接口类型及其请求函数代码",
    link: "https://github.com/fjc0k/yapi-to-typescript",
    checked: false,
  });
};
