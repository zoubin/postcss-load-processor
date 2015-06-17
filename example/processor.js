var Processor = require("..")

var plugins = Processor.plugin(
    ["postcss-node-plugin", "./local-plugin"],
    null,
    { basedir: __dirname + "/plugins" }
)

console.log("Plugins to be used:", plugins.map(function (p) {
    return p.postcssPlugin
}))

