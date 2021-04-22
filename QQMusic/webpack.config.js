// 清空dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 处理html
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const bodyParser = require('body-parser');
const fs = require('fs');

// const data = fs.readFileSync('./src/mock/data.json');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'], // 补丁
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    devtool: 'cheap-source-map',
    devServer: {
        host: '127.0.0.1', //10.0.5.36
        port: 10000,
        open: true,
        hot: true,
        before: function (app, server, compiler) {
            app.use(bodyParser.json());
            app.post('/user/login', function (req, res) {
                console.log('req.body...', req.body);
                if (req.body.userName === 'zhaoyuchao' && req.body.password === '123456' && req.body.password === '123456'){
                    res.json({
                        code: 0,
                        msg: '登录成功'
                    });
                }else{
                    res.json({
                        code: -1,
                        msg: '用户名或者密码错误'
                    })
                }
            });
            app.get('/shop/list', function(req, res){
                res.json({
                    code: 0,
                    // data: JSON.parse(data).list,
                    msg: '获取商品列表成功'
                })
            })
        },
        proxy: {
            '/api': {
                target: 'https://c.y.qq.com/', // 目标域名
                changeOrigin: true, // 切换域名
                pathRewrite: { // 重写部分url
                    '/api': ''
                }
            },
            '/zhihu': {
                target: 'https://www.zhihu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '/zhihu': ''
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.js|ts$/,
            use: ['babel-loader'],// 识别解析es6
        },{
            test: /\.css|sass|scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },{
            test: /\.(jpg|jpeg|png|gif|webp)$/,
            use: [{
                loader: 'url-loader', // 图片小的时候
                options: {
                    limit: 10 * 1024
                }
            }]
        }, {
            test: /\.(svg|eot|ttf|woff|woff2)/,
            use: ['file-loader'] // 图片过大使用
        }]
    },
    plugins: [
        // 清除上一次的打包结果
        new CleanWebpackPlugin(),
        // 自动注入
        new HtmlWebPackPlugin({
            template: './index.html',   // 源文件
            filename: 'index.html',         // 目标文件名
            inject: true // inject   inject有四个值： true body head false
            // true 默认值，script标签位于html文件的 body 底部
            // body script标签位于html文件的 body 底部
            // head script标签位于html文件的 head中
            // false 不插入生成的js文件，这个几乎不会用到的
        }),
        // 抽离css
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}