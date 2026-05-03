const { override } = require('customize-cra');
const {resolve} = require("crypto-browserify/example/bundle");

module.exports = override(
    (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            /*require.resolve("crypto-browserify"),*/
        };
        return config;
    }
);