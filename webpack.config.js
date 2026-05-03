// webpack.config.js

const dotenv = require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
    // ... other config
    resolve: {
/*
        "crypto": require.resolve("crypto-browserify"),
*/
        fallback: {
            "path": false,
/*
            "crypto": require.resolve("crypto-browserify")
*/
            //"crypto": false
        },
        //"crypto": require.resolve("crypto-browserify")
    },
/*    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
        }),
    ].filter(Boolean),*/

};