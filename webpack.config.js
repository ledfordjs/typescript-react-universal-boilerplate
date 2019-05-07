const configList = {
    development: require('./webpack/config.development'),
}

function getConfig(env) {
    return Object.assign({}, configList[env]())
}

module.exports = getConfig(process.env.NODE_ENV)
