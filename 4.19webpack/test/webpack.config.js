const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');

console.log('__dirname', __dirname)

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        publicPath: '/dist'
    },
    resolve:{
        extensions:[".js", ".jsx", ".json"], //表示文件的后缀名，可以省略不写。
        alias:{
            '@':path.resolve(__dirname, 'src'),
            'css':path.resolve(__dirname, 'src/css'),
            'module':path.resolve(__dirname, 'src/module'),
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8009,
        // open: true,
        hot: true,
        before: (app) => {
            app.use(bodyParser.json())
            app.post('/user/login', (req, res) => {
                if (req.body.name == '111' && req.body.pwd == '222') {
                    res.json({
                        code: 0,
                        msg: '登录成功'
                    })
                } else {
                    res.json({
                        code: -1,
                        msg: '账号或密码错误'
                    })
                }

            })
        }
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
                    options: {
                        // 1024 = 1kb
                        limit: 10240,
                        name: 'assets/[name].[hash:6].[ext]',
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff2?)$/,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                include: '/src',
                exclude: '/node_modules',
                use: ['babel-loader'], // 省略js后缀名
            }, 
        ]
    },
}
