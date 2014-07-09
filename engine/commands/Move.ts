/// <reference path="../Command.ts" />
/// <reference path="../Util.ts" />
/// <reference path="../../engine/Logic.ts" />

module Engine {
    export module Commands {
        export class Move implements Engine.Command {
            name:String = "move";
            names:Array<string> = [
                "go",
                "walk"
            ];
            description:String = "Move to a certain position";

            run(params:string):void {
                var X = Player.X;
                var Y = Player.Y;

                if (Util.MatchCommands(params, [
                    "up",
                    "north",
                    "forward",
                    "next"
                ])) X--;
                else if (Util.MatchCommands(params, [
                    "back",
                    "down",
                    "backward",
                    "south"
                ])) X++;
                else if (Util.MatchCommands(params, [
                    "left",
                    "west"
                ])) Y--;
                else if (Util.MatchCommands(params, [
                    "right",
                    "east"
                ])) Y++;

                if(X == Player.X && Y == Player.Y) {
                    console.warn("I haven't heard of that direction yet.");
                    return;
                }

                if (Player.roomExistsAt(X, Y)) {
                    Player.enterRoomAt(X, Y);
                } else {
                    console.warn(Util.ReturnRandom([
                        "You can't go that way.",
                        "Not possible.",
                        "That's not an option",
                        "Yea, that's not gonna happen.",
                        "I can't go that way"
                    ]));
                }
            }

        }
    }
}

Engine.Logic.Commands.push(new Engine.Commands.Move());