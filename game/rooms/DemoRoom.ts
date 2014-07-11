/// <reference path="../../engine/Room.ts" />
/// <reference path="../../engine/Logic.ts" />
/// <reference path="../../engine/Player.ts" />
/// <reference path="../npcs/Jari.ts" />

module Game {
    export module Rooms {
        export class DemoRoom implements Engine.Room {
            attemptLeave():boolean {
                var reception:NPCs.Jari = <NPCs.Jari>this.NPCs[0];
                if(!Engine.Player.hasItem("Ticket"))  {
                    reception.whereYouGoingBruh();
                    return false;
                } else return true;
            }
            attemptEnter():boolean {
                return true;
            }
            leave():void {
            }
            enter():void {
                console.log("You're in a white room, in front of a reception desk.\nThere's a big billboard that says 'PlatformerEngine'.");
            }

            X:number = 0;
            Y:number = 0;
            NPCs:Engine.NPC[] = [
                new NPCs.Jari()
            ];
        }
    }
}

Engine.Logic.Rooms.push(new Game.Rooms.DemoRoom());