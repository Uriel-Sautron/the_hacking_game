const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: './src/js/index.js',
    output: {

        path: path.resolve(__dirname, 'dist'),

        filename: 'bundle.js',

        publicPath: '',
    },

    devServer: {

        publicPath: '/dist/',
        watchContentBase: true,
        compress: true,
        port: 8080
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            {

                test: /\.(sa|sc|c)ss$/,
                use: [

                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {

                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        // On le met en tout premier, afin qu'il soit exécuté en dernier,
                        // une fois que tous les changements souhaités sont appliqués à notre CSS.
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                }, ],
            },

            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                    },
                }, ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
    ],

    mode: 'development',
};