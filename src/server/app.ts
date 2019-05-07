import express from "express";

import { serverSideRender } from "./ssr/serverSideRender";
import { webpackDevServer } from "./webpackDevServer";

const app = express();
const port = 8888;

webpackDevServer(app);

app.get("*", serverSideRender);

app.listen(port, (err: express.Errback) => {
    if (err) {
        throw err;
    }

    console.log("===> Starting Server...");
    console.log(`===> Port: ${port}`);
    console.log(`===> Environment: ${process.env.NODE_ENV}`);
});
