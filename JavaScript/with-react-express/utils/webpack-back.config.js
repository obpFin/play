const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: {
        app: ['./src/server.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src/server.js'),
                    path.resolve(__dirname, './src/controllers/')
                ],
                exclude: /\.test.js$/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "play.bundle.js"
    },
    externals: [
        nodeExternals()
    ]
};