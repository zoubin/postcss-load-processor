var test = require("tape")
var Processor = require("..")

test('plugin() local-plugin', function(t) {
    var plugins = Processor.plugin("./local-plugin", null, { basedir: __dirname + "/plugins" })
    t.equal(plugins.length, 1)
    t.equal(plugins[0].postcssPlugin, "local-plugin")
    t.end()
})

test('plugin() postcss-node-plugin', function(t) {
    var plugins = Processor.plugin("postcss-node-plugin", null, { basedir: __dirname + "/plugins" })
    t.equal(plugins.length, 1)
    t.equal(plugins[0].postcssPlugin, "postcss-node-plugin")
    t.end()
})

test('plugin() multiple', function(t) {
    var plugins = Processor.plugin(["postcss-node-plugin", "./local-plugin"], null, { basedir: __dirname + "/plugins" })
    t.equal(plugins.length, 2)
    t.equal(plugins[0].postcssPlugin, "postcss-node-plugin")
    t.equal(plugins[1].postcssPlugin, "local-plugin")
    t.end()
})
