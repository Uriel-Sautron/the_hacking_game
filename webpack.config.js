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
        // Can be omitted unless you are using 'docker' 

        // This is where webpack-dev-server serves your bundle
        // which is created in memory.
        // To use the in-memory bundle,
        // your <script> 'src' should point to the bundle
        // prefixed with the 'publicPath', e.g.:
        //   <script src='http://localhost:9001/assets/bundle.js'>
        //   </script>
        publicPath: '/dist/',
        // The local filesystem directory where static html files
        // should be placed.
        // Put your main static html page containing the <script> tag
        // here to enjoy 'live-reloading'
        // E.g., if 'contentBase' is '../views', you can
        // put 'index.html' in '../views/main/index.html', and
        // it will be available at the url:
        //   https://localhost:9001/main/index.html
        // contentBase: path.resolve(__dirname, "../views"),
        // 'Live-reloading' happens when you make changes to code
        // dependency pointed to by 'entry' parameter explained earlier.
        // To make live-reloading happen even when changes are made
        // to the static html pages in 'contentBase', add 
        // 'watchContentBase'
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