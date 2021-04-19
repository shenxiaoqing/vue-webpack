module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        publicPath: '/dist'
    },
    devServer: {
        host: '0.0.0.0',
        port: 8009,
        // open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(less|sass|scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    // options: {
                    //     // 1024 = 1kb
                    //     limit: 10240,
                    //     name: 'assets/[name].[hash:6].[ext]',
                    // }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff2?)$/,
                use: ['url-loader']
            }
        ]
    },
}