var webpack = require('webpack');
var path = require('path');
var BabelPluginImport = require('babel-plugin-import');

module.exports = {
    entry: "./src/js/root.js",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','es2015'],
                        plugins: [
                            ['import', {'libraryName': 'antd', 'style': 'css'}],
                        ],//此处 只加载用到的antd组件,babel-plugin-import 会帮助你加载 JS 和 CSS
                    }
                },

            },
            //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname + '/src'),
        historyApiFallback: true,
        port: 3001,
    },

};