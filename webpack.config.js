// 引入一个包，可以用来处理路径相关的问题
const path = require('path');

// 引入 html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const loader = require("ts-loader");
// webpack 中的所有配置信息都应该写在 module.exports中
module.exports = {
  mode: "development",
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname,'dist'),

    // 打包后的文件名
    filename: "bundle.js"
  },
  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
            // 配置 babel
          {
            // 指定加载器
            loader: "babel-loader",
            options: {
              // 设置预定义的环境
              presets:[
                  [
                      // 指定环境的插件
                      "@babel/preset-env",
                      // 配置信息
                      {
                        // 要兼容的目标浏览器
                        // 表示浏览器兼容到谷歌88
                        targets:{
                          "chrome":"88",
                          "ie":"11"
                        },
                        // 指定 corejs 版本
                        "corejs":"3",
                        // 使用 corejs 的方式  usage 表示按需下载
                        "useBuiltIns":"usage"
                      }
                  ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
        // less文件的处理
      {
        // less 结尾的文件都需要去处理
        test: /\.less$/,
        // 用什么处理
        use: [
            // 从下往上执行
            "style-loader",
            "css-loader",
            // 引入 postcss
            {
              loader: "postcss-loader",
              options: {
                postcssOptions:{
                  plugins: [
                      [
                          "postcss-preset-env",
                          {
                            browsers:'last 2 versions'
                          }
                      ]
                  ]
                }
              }
            },
            "less-loader"
        ]
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
  ]
}