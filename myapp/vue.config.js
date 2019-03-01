const path = require("path");
module.exports = {
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@root": path.join(__dirname)
      }
    }
  }
};
