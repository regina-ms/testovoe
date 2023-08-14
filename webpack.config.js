const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { access } = require("fs");
let mode;



module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
        open: true,
        historyApiFallback: true,
    },
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index_[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style_[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png)?(jp(e)?g)?$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options:  {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')]
                    },
                },
            },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff)?(2)?(ttf)?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }

            },
        ],
    },

}