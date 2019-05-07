import express from "express";
import webpack from "webpack";

function webpackDevServer(app: express.Application) {
    const webpackConfig = require("./../../webpack.config");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");

    const compiler = webpack(webpackConfig);

    app.use(
        webpackDevMiddleware(compiler, {
            hot: true,
            noInfo: true,
            serverSideRender: true,
            publicPath: webpackConfig.output.publicPath,
            watchOptions: {
                poll: true,
            },
        })
    );

    app.use(webpackHotMiddleware(compiler));
}

export { webpackDevServer };
