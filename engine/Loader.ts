/*
 * Platformer Class Loader
 */
/// <reference path="../node.d.ts" />

function load(Class:String) {
    var fs = require("fs"), vm = require("vm");
    if(Class.substr(Class.length-3) != ".js") Class += ".js";
    var script = fs.readFileSync(Class, "utf-8");
    var node = node;
    vm.runInThisContext(script, Class);
};
export = load;