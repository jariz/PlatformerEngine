/// <reference path="../../engine/Command.ts" />
/// <reference path="../../engine/IO.ts" />
/// <reference path="../../engine/Player.ts" />
/// <reference path="../items/Money.ts" />
/// <reference path="../items/Ticket.ts" />

module Game {
    export module Commands {
        export class Buy implements Engine.Command {
            name:String = "buy";
            names:Array<string> = [
                "ticket"
            ];
            description:String;

            run(params:String):void {
                //is player at the reception?
                if(Engine.Player.X == 0 && Engine.Player.Y == 0) {
                    if(Engine.Player.hasItem("Money")) {
                        Engine.IO.npcTalk(Engine.Player.currentRoom.NPCs[0], "Here you go!");
                        Engine.Player.giveItem(new Game.Items.Ticket(), true);
                        Engine.Player.takeItem("Money", true);
                    }
                    else console.warn("You don't have enough money to do that.");
                }
                else console.warn("Can't do that here.");
            }
        }
    }
}

Engine.Logic.Commands.push(new Game.Commands.Buy());