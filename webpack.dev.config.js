const { Config } = require("webpack-config");

module.exports = new Config().extend("./webpack.base.config.js").merge({
    mode: "development",
    watch: true
});
