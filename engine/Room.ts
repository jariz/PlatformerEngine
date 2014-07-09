/// <reference path="NPC.ts" />
module Engine {
    export interface Room {
        X: number;
        Y: number;
        NPCs:NPC[];

        enter():void;
        leave():void;
        attemptEnter():boolean;
        attemptLeave():boolean;
    }
}