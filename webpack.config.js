const path = require('path')
const webpack = require('webpack')
const nodeRefillsPaths = require("node-refills").includePaths;
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release')

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, './public/assets'),
        publicPath: '/assets/',
        sourcePrefix: '  ',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            debug: isDebug,
            minimize: !isDebug,
            options: {
                sassLoader: {
                    includePaths: [...nodeRefillsPaths],
                },
                context: path.resolve(__dirname, 'src'),
                output: {
                    path: path.resolve(__dirname, './public/assets'),
                },
            }
        })
    ],
    devtool: isDebug ? 'source-map' : false,
    target: "web",
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src'),
                ],
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // {
            //     test: /\.(scss)$/i,
            //     // using "loader" instead of newer "use"
            //     loader: ExtractTextPlugin.extract({
            //         loader: [
            //             {
            //                 loader: 'css-loader',
            //                 // current extract-text-plugin supports query not never options format
            //                 query: {
            //                     importLoaders: 3,
            //                     minimize: true,
            //                     // Even if disabled sourceMaps gets generated
            //                     sourceMap: false
            //                 }
            //             },
            //             {loader: 'resolve-url-loader'},
            //             {
            //                 loader: 'sass-loader',
            //                 query: {
            //                     // Enable sourcemaps for resolve-url-loader to work properly
            //                     sourceMap: true
            //                 }
            //             },
            //             // {
            //             //     loader: 'sass-resources-loader',
            //             // },
            //         ],
            //     }),
            //     // options: {
            //     //     resources: ['./src/assets/styles/theme.scss']
            //     // },
            // },
            {
                test: /\.md$/,
                loader: path.resolve(__dirname, './utils/webpack-loaders/markdown-loader.js'),
            },
            {
                test: /\.(png|jpg|jpeg|svg|woff|woff2|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 100,
                    name: "[path][name].[ext]",
                    context: './src/assets/',
                }
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        modules: [
            'node_modules',
        ],
    }
}