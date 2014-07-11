/// <reference path="../node.d.ts" />
/// <reference path="../platformer.ts" />
/// <reference path="Logic.ts" />
/// <reference path="Command.ts" />
/// <reference path="NPC.ts" />

module Engine {
    export class IO {
        private rl;
        private interface;
        constructor() {
            var moi = this, rl = node.readline;
            this.rl = node.readline;

            this.interface = this.rl.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            var Interface = this.interface;

            if(typeof Interface.line == "undefined")
                throw Error("Your shell is not supported by PlatformerTS. Try again in another.")

            //clear prompt line when outputting
            var fu = function(type, args) {
                if(args.length > 0 && typeof args[0] == "string") {
                    var formatted = args[0];
                    switch(type) {
                        case "error":
                            formatted = node.color(formatted, "red");
                            break;
                        case "warn":
                            formatted = node.color(formatted, "yellow");
                            break;
                        case "info":
                            formatted = node.color(formatted, "blue");
                            break;
                    }
                    args[0] = formatted;
                }
                var t = Math.ceil((Interface.line.length + 3) / process.stdout.columns);
                var text = node.util.format.apply(console, args);
                Interface.output.write("\n\x1B[" + t + "A\x1B[0J");
                Interface.output.write(text + "\n");
                Interface.output.write(Array(t).join("\n\x1B[E"));
                Interface._refreshLine();
            };

            console.log = function() {
                fu("log", arguments);
            };
            console.warn = function() {
                fu("warn", arguments);
            };
            console.info = function() {
                fu("info", arguments);
            };
            console.error = function() {
                fu("error", arguments);
            };

            this.interface.on('line', function (cmd) {
                moi.processCommand(cmd);
            });

            this.interface.prompt();
        }

        public static npcTalk(npc:NPC, message:String) {
//            this.rl.clearLine(process.stdout, 0);
//            this.rl.moveCursor(process.stdout, -2, 0)
//            this.interface.pause();
            console.info(npc.Name + ": '" + message + "'");
//            this.interface.write("> ");
//            this.interface.resume();
        }

        commandLookup(command:string, params:string):Engine.Command {
            var found:Engine.Command = undefined;
            Engine.Logic.Commands.forEach(function(cmd:Engine.Command) {
                if(cmd.name == command || cmd.names.indexOf(command) != -1)
                    found = cmd;
            });
            if(found == undefined) {
                return this.commandLookup("unknown", params);
            }
            return found;
        }

        processCommand(command:string):void {
            try {
                command = command.trim();
                var carr = command.split(/ /);
                if(carr.length == 0) throw "";
                var first = carr[0];
                var params = command.substr(first.length+1);

                var cmd:Command = this.commandLookup(first, params);
                cmd.run(params);
            }
            catch(e) {
                console.error(e);
            }

            this.interface.prompt();
        }
    }
}