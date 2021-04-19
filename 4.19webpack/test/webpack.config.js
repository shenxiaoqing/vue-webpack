const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        publicPath: '/dist',
        // path: path.join(__dirname, 'dist')
    },
    devServer: {
        host: '0.0.0.0',
        port: 8008,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    // options: {
                    //   // 1024 = 1kb
                    //   limit: 10240,
                    //   name: 'assets/[name].[hash:6].[ext]',
                    // }
                }
            },
        ]
    }
}