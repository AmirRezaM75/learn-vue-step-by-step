let webpack = require('webpack');
let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './resources/js/app.js',
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: './public',
        /*
        Some tools and plugins will use this,
        it can be useful in situations where for example in production your public path is different than development
        maybe in production you store all of your images on CDN.
        */
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    optimization: {
        splitChunks: {
            name: 'vendor'
        }
    },
    plugins: []
};

if (process.env.NODE_ENV === 'production') {
    module.exports.optimization = {
        minimizer: [new UglifyJsPlugin()]
    }

    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV: 'production'
                // It will disable all of the warnings and stuff like that in VueJs
            }
        })
    )
}
