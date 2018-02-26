const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    entry: [
        // poll for changes (hot module replacement)
        'webpack/hot/poll?1000',
        // entry point of server
        './src/boot/server/index'
    ],
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".jsx"
        ] 
    },
    watch: true,
    target: 'node',
    externals: [
        nodeExternals({
            whitelist: [
                'webpack/hot/poll?1000'
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, 'src')
                ]
            }
        ]
    },
    plugins: [
        new StartServerPlugin('server.bundle.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    output: {
        path: path.join(__dirname, '.build'),
        filename: 'server.bundle.js'
    }
}
