const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const commonConfig = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.ts/, loader: 'ts-loader'},
            {test: /\.node/, loader: 'node-loader'},
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}

const mainConf = Object.assign(
    {
        target: 'electron-main',
        entry: {main: './src/main.ts'},
        plugins: []
    },
    commonConfig
);

const rendererConf = Object.assign(
    {
        target: 'electron-renderer',
        entry: {gui: './src/gui.ts'},
        plugins: [
            new CopyPlugin(
                {
                    patterns: [{
                        from: path.resolve(__dirname, 'src/index.html'),
                        to: path.resolve(__dirname, 'dist')
                    }]
                }
            )    
        ]
    },
    commonConfig
);

if (process.platform === 'darwin') {
    // mainConf.plugins.push(
    //     new CopyPlugin(
    //         {
    //             patterns: [{
    //                 from: path.resolve(__dirname, 'node_modules/path/to/binary'),
    //                 to: path.resolve(__dirname, 'node_modules/binary/destination/')
    //             }]
    //         }
    //     )
    // );
} else if (process.platform === 'win32') {
    // TODO copy for Windows
}

module.exports = [
    mainConf,
    rendererConf
]