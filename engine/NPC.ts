/// <reference path="Room.ts" />
module Engine {
    export interface NPC {
        Name:string;

        /**
         * Invoked when the talk command is used on this NPC
         * @param message
         */
        talk(message:String):void;

        /**
         * Invoked whenever the player enters a room
         * @param room
         */
        enter(room:Room):void;

        /**
         * Invoked whenever the player leaves the room
         * @param room
         */
        leave(room:Room):void;
    }
}