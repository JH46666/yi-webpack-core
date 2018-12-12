const path = require("path");
const ConsoleLogOnBuildWebpackPlugin = require("./plugin/firstPlugin.js")
module.exports ={
    module:{
        rules: [
            {
              test: /\.m?js$/,
              loader:path.resolve("./loader/index.js")
            }
          ]
    },
    plugins:[
        new ConsoleLogOnBuildWebpackPlugin()
    ]
}