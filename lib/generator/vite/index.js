module.exports = (generator, options = {}) => {
  generator.extendPackage({
    scripts: {
      dev: "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
      build: "vite build", // 为生产环境构建产物
      preview: "vite preview", // 本地预览生产构建产物
    },
    dependencies: {
      "vite-plugin-svg-icons": "^2.0.1",
    },
    devDependencies: {
      vite: "4.3.1",
      "@vitejs/plugin-react": "^1.3.0",
      "vite-plugin-compression": "0.5.1",
      "vite-plugin-html": "^3.2.0",
    },
  });

  generator.render("./template", {
    hasAntd: options.features.includes("antd"),
  });
};
