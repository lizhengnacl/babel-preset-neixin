/**
 * * Created by lizheng11
 * Date: 2017/7/19
 */
'use strict';
var assign = require('object.assign');

var modules = [require('babel-plugin-transform-es2015-modules-commonjs'), {
    strict: false
}];

var defaultTargets = {
    chrome: "55",
    safari: "10.1"
};

function buildTargets(options){
    return assign({}, defaultTargets, options.additionalTargets);
}

module.exports = function(context, options){
    var transpileTargets = (options && options.targets) || buildTargets(options || {});
    var debug = (options && typeof options.debug === 'boolean') ? !!options.debug : false;

    return {
        presets: [
            require('babel-preset-env').default(null, {
                debug: debug,
                modules: false,
                targets: transpileTargets
            }),
            require('babel-preset-react')
        ],
        plugins: [
            options && options.modules === false ? null : modules,
            [require('babel-plugin-transform-es2015-template-literals'), {
                spec: true
            }],
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
        ].filter(Boolean)
    }
};