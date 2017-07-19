/**
 * * Created by lizheng11
 * Date: 2017/7/19
 */
'use strict';

module.exports = {
    presets: [],
    plugins: [
        require("babel-plugin-transform-es2015-modules-commonjs"),
        require("babel-plugin-transform-async-to-generator"),
        require("babel-plugin-syntax-async-functions"),
        require("babel-plugin-transform-decorators-legacy").default,
        require("babel-plugin-transform-export-extensions"),
        require("babel-plugin-transform-object-rest-spread"),
        require("babel-plugin-transform-class-properties"),
        require("babel-plugin-transform-node-env-inline"),
        require("babel-plugin-transform-inline-environment-variables"),
        require("babel-plugin-transform-function-bind")
    ]
};