const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (context) => {
    const { webpack } = context;
    return {
        resolve: { alias: { mobx: __dirname + "/node_modules/mobx/lib/mobx.es6.js" }},
        module: {
            rules: [
                {
                    test: /\.less/,
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                        sourceMap: true,
                    }
                },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                                [
                                    // babel-plugin-import for antd
                                    "import",
                                    {
                                        "libraryName": "antd",
                                        "libraryDirectory": "es",
                                        "style": true // `style: true` 会加载 less 文件
                                    }
                                ],
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new MomentLocalesPlugin({
                localesToKeep: [
                    'zh-cn'
                ]
            }),
            new webpack.DefinePlugin({
                // 此处不能省略JSON.stringify，否则构建过程会出现语法问题
                ASSETS_VERSION: JSON.stringify('0.0.1'),
            })
        ],
    };
};
