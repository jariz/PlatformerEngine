/// <reference path="../../engine/Room.ts" />
/// <reference path="../../engine/Logic.ts" />

module Game {
    export module Rooms {
        export class Hall1 implements Engine.Room {
            attemptLeave():boolean {
                return true;
            }
            attemptEnter():boolean {
                return true;
            }
            leave():void {
            }
            enter():void {
                console.log("You're in a room which hasn't been finished yet");
            }

            X:number = -1;
            Y:number = 0;
            NPCs:Engine.NPC[] = [];
        }
    }
}

Engine.Logic.Rooms.push(new Game.Rooms.Hall1());