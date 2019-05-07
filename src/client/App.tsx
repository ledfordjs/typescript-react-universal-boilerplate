import React from "react";

export interface Props {
    compiler: string;
    server: string;
}

const App: React.FC<Props> = props => {
    return (
        <h1>
            Hello from {props.compiler} and {props.server}!
        </h1>
    );
};

export { App };
