module.exports = (generator) => {
  generator.extendPackage({
    scripts: {
      dev: "cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c build/webpack.dev.js",
      build: "cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.prod.js",
    },

    dependencies: {
      "@babel/core": "^7.18.2",
      "@babel/plugin-proposal-decorators": "^7.18.2",
      "@babel/plugin-transform-runtime": "^7.18.5",
      "@babel/preset-env": "^7.18.2",
      "@babel/preset-react": "^7.17.12",
      "@babel/preset-typescript": "^7.17.12",
      "@pmmmwh/react-refresh-webpack-plugin": "^0.5.7",
      "babel-loader": "^8.2.5",
      "compression-webpack-plugin": "^10.0.0",
      "copy-webpack-plugin": "^11.0.0",
      "core-js": "^3.23.0",
      "cross-env": "^7.0.3",
      "css-loader": "^6.7.1",
      "css-minimizer-webpack-plugin": "^4.0.0",
      "html-webpack-plugin": "^5.5.0",
      "mini-css-extract-plugin": "^2.6.1",
      "react-refresh": "^0.14.0",
      sass: "^1.62.1",
      "sass-loader": "^13.2.2",
      "style-loader": "^3.3.1",
      "thread-loader": "^3.0.4",
      webpack: "^5.73.0",
    },

    devDependencies: {
      "webpack-cli": "^4.9.2",
      "webpack-dev-server": "^4.9.1",
      "webpack-merge": "^5.8.0",
    },
  });

  generator.render("./template", {});
};
