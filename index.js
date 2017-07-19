/**
 * * Created by liz
 * Email: lizheng11@163.com
 * Tel: 18686768624
 * Date: 2017/7/19
 */
'use strict';

module.exports = {
    presets: [],
    plugins: [
        require("babel-plugin-syntax-async-functions"),
        require("babel-plugin-transform-async-to-generator"),
        require("babel-plugin-transform-class-properties"),
        require("babel-plugin-transform-decorators-legacy").default,
        require("babel-plugin-transform-es2015-modules-commonjs"),
        require("babel-plugin-transform-export-extensions"),
        require("babel-plugin-transform-function-bind"),
        require("babel-plugin-transform-inline-environment-variables"),
        require("babel-plugin-transform-node-env-inline"),
        require("babel-plugin-transform-object-rest-spread")
    ]
};