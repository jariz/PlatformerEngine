/// <reference path="../../engine/Command.ts" />
/// <reference path="../../engine/Logic.ts" />
/// <reference path="../../engine/Util.ts" />

module Game {
    export module Commands {
        export class Unknown implements Engine.Command {
            name:String = "unknown";
            names:Array<string> = [];
            description:String = "Called by engine when no commands are found";

            run(params:String):void {
                console.warn(Engine.Util.ReturnRandom([
                    "Didn't catch that.",
                    "Care to elaborate?",
                    "Could you be a bit more specific?",
                    "It appears you made a typo",
                    "Nope, not working here.",
                    "Not going to happen."
                ]));
            }

        }
    }
}

Engine.Logic.Commands.push(new Game.Commands.Unknown());