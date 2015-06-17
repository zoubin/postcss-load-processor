var postcss = require("postcss")

module.exports = postcss.plugin("local-plugin", function (opts) {
    return function (styles, result) {
    }
})
