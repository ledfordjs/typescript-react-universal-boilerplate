import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import { App } from "./../../client/App";
import { Html, DOCTYPE } from "./Html";

const serverSideRender: express.Handler = (req, res, next) => {
    const app = React.createElement(App, {
        compiler: "Client",
        framework: "Server",
    });
    const assets = res.locals.webpackStats.toJson().assetsByChunkName;

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
