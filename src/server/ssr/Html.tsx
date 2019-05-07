import React from "react";

interface Props {
    app: React.ReactFragment;
    assets: Assets;
}

interface Assets {
    app?: string | string[];
    vendor?: string | string[];
}

const renderJS = (assets: string | string[]) => {
    const normalizeAssets = [assets];

    return normalizeAssets.map((path, key) => {
        return <script key={key} type="text/javascript" src={`/static/${path}`} />;
    });
};

const Html: React.FC<Props> = ({ app, assets }) => {
    return (
        <html lang="en">
            <head>
                <title>React SSR</title>
            </head>

            <body>
                <div id="root">{app}</div>

                {renderJS(assets.app)}
            </body>
        </html>
    );
};

const DOCTYPE = "<!DOCTYPE html>";

export { Html, DOCTYPE };
