const path = require('path')
const webpack = require('webpack')

const src = path.resolve(__dirname, '..', 'src')

module.exports = function getDevelopmentConfig() {
    return {
        mode: 'development',
        entry: {
            app: [
                path.resolve(__dirname, '../src/client/browser.tsx'),
                'webpack-hot-middleware/client',
            ],
        },
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.scss'],
            alias: {
                '@': path.resolve(__dirname, '../src/client'),
            },
        },
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            filename: '[name].js',
            chunkFilename: '[name].js',
            publicPath: '/static/',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    include: path.resolve(__dirname, '../src/client'),
                    exclude: path.resolve(__dirname, '../node_modules'),
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.NamedModulesPlugin(),
        ],
    }
}
