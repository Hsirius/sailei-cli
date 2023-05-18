module.exports = (generator, options = {}) => {
  // 注入依赖
  generator.extendPackage({
    dependencies: {
      react: "^18.0.0",
      "react-redux": "^8.0.2",
      "react-dom": "^18.0.0",
      "react-router-dom": "^6",
      "@reduxjs/toolkit": "^1.8.2",
      classnames: "^2.3.2",
      "lodash-es": "^4.17.21",
      "react-use": "17.4.0",
    },
    devDependencies: {
      "@trivago/prettier-plugin-sort-imports": "^4.1.1",
      "@types/lodash-es": "^4.17.7",
      "@types/react": "^18.0.0",
      "@types/react-dom": "^18.0.0",
      "@types/react-redux": "^7.1.25",
      autoprefixer: "^10.4.7",
      postcss: "^8.4.14",
      "postcss-loader": "^7.0.0",
      prettier: "^2.7.0",
      "prettier-plugin-css-order": "^1.3.0",
      eslint: "^8.18.0",
      "eslint-plugin-react": "^7.30.1",
      "eslint-plugin-react-hooks": "^4.6.0",
      sass: "^1.51.0",
      stylelint: "^14.9.1",
      "stylelint-config-prettier": "^9.0.3",
      "stylelint-config-prettier-scss": "^0.0.1",
      "stylelint-config-recess-order": "^3.0.0",
      "stylelint-config-standard": "^26.0.0",
      "stylelint-config-standard-scss": "^4.0.0",
      "stylelint-order": "^5.0.0",
      "stylelint-scss": "^4.2.0",
      "typescript-plugin-css-modules": "^5.0.1",
    },
  });

  // 渲染模板
  generator.render("./template", {
    hasVite: options.features.includes("vite"),
    hasAntd: options.features.includes("antd"),
  });
};
