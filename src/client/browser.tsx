import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { App } from "./App";

const element = document.getElementById("root");

function render() {
    const content = (
        <AppContainer>
            <App compiler="Webpack" server="Express" />
        </AppContainer>
    );

    ReactDOM.hydrate(content, element);
}

render();

if (module.hot) {
    module.hot.accept(() => {
        render();
    });
}
