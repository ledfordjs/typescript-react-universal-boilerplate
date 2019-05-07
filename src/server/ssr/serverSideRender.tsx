import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import { App } from "./../../client/App";
import { Html, DOCTYPE } from "./Html";

const serverSideRender: express.Handler = (req, res, next) => {
    const assets = res.locals.webpackStats.toJson().assetsByChunkName;
    const app = React.createElement(App, {
        compiler: "Webpack",
        server: "Server",
    });

    res.send(
        DOCTYPE +
            "\n" +
            renderToString(
                React.createElement(Html, {
                    assets,
                    app,
                })
            )
    );
};

export { serverSideRender };
