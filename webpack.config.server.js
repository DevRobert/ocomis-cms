const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    entry: [
        // poll for changes (hot module replacement)
        'webpack/hot/poll?1000',
        // entry point of server
        './server/index'
    ],
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
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
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
