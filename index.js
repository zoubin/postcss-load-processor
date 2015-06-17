var postcss = require("postcss")
var requireArr = require("require-array")

module.exports = Processor
module.exports.plugin = plugin

function Processor(plugins, opts, resolveOpts) {
    return postcss(
        plugin(plugins, opts, resolveOpts)
    )
}

function plugin(plugins, opts, resolveOpts) {
    if (!plugins) {
        return []
    }
    if (typeof plugins === "string") {
        plugins = [plugins]
    }
    if (!Array.isArray(plugins) && typeof plugins === "object") {
        opts = plugins
        plugins = Object.keys(plugins)
    }
    if (!Array.isArray(plugins)) {
        return []
    }
    opts = opts || {}
    return requireArr(plugins, resolveOpts)
        .map(function (p, i) {
            var options = opts[plugins[i]]
            return p(options)
        })
}
