import React from "react";

export interface Props {
    compiler: string;
    framework: string;
}

const App: React.FC<Props> = props => {
    return (
        <h1>
            Hello from {props.compiler} and {props.framework}!
        </h1>
    );
};

export { App };
