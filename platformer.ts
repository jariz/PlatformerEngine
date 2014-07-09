/// <reference path="node.d.ts" />
/// <reference path="engine/Bootstrap.ts" />

//load classloader
var load = require("./engine/Loader.js");

//node modules
class node {
    public static readline = require("readline");
    public static fs = require("fs");
    public static vm = require("vm");
    public static util = require("util");
    public static color = require("eyehurt");
}
global.node = node;

//load core classes
load("engine/Bootstrap");
load("engine/Room");
load("engine/IO");
load("engine/Logic");
load("engine/Player");
load("engine/NPC");
load("engine/Util");

//load game specific classes
var gameClasses = [];
var loadDir = function(dir:String) {
    var files = node.fs.readdirSync(dir);
    files.forEach(function(e, i, a) { a[i] = dir+"/"+e; } );
    gameClasses = gameClasses.concat(files);
}

//add classes
loadDir("game/commands");
loadDir("game/npcs");
loadDir("game/rooms");
loadDir("engine/commands"); //core commands

//load classes
gameClasses.forEach(function(file) {
    if(file.substr(file.length-3) == ".js")
        load(file);
});

//start the engine
Engine.Bootstrap();

//start the game
//Game.Bootstrap();