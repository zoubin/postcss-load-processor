# postcss-processor
Sugar way to create a postcss processor or get postcss plugins

## Usage

```javascript
var Processor = require("postcss-processor")

var plugins = Processor.plugin(
    ["postcss-node-plugin", "./local-plugin"],
    null,
    { basedir: __dirname + "/plugins" }
)

console.log("Plugins to be used:", plugins.map(function (p) {
    return p.postcssPlugin
}))
// Plugins to be used: [ 'postcss-node-plugin', 'local-plugin'  ]

var processor = Processor(
    ["postcss-node-plugin", "./local-plugin"],
    null,
    { basedir: __dirname + "/plugins" }
)


```

### processor = Processor(pluginNames, opts, resolveOpts)

Resolve the plugins according to `pluginNames`, and return a processor using them.

### plugins = Processor.plugin(pluginNames, opts, resolveOpts)

Resolve the plugins

#### opts

Options map for each plugin. Key is the name, and value is the option.

#### resolveOpts

Type: `Object`

Directly passed to [resolve.sync(id, opts)](https://github.com/substack/node-resolve#resolvesyncid-opts) to resolve the `pluginNames`

Type: `Function`

Used to resolve the `pluginNames`, with signature `resolve(id)`
