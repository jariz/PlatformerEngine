/// <reference path="Room.ts" />
/// <reference path="Logic.ts" />

module Engine {
    export class Player {
        public static X:number;
        public static Y:number;
        public static currentRoom:Room;

        /**
         * Let the player enter a room at the specified coordinates
         * @param X
         * @param Y
         */
        public static enterRoomAt(X:number, Y:number) {
            var found:Room = undefined;
            Logic.Rooms.forEach(function(room:Room) {
                if(room.X == X && room.Y == Y)
                    found = room;
            });
            if(found) this.enterRoom(found);
            else throw new Error("Tried to enter a room that doesn't exist");
        }

        /**
         * Returns whether a room exists at the specified coordinates
         * @param X
         * @param Y
         */
        public static roomExistsAt(X:number, Y:number) {
            var found:boolean = false;
            Logic.Rooms.forEach(function(room:Room) {
                if(room.X == X && room.Y == Y)
                    found = true;
            });
            return found;
        }

        /**
         * Let the player enter a room
         * Checks if player is allowed to leave first
         * Changes the current room, X & Y of the player, calls the leave and enter events of NPCs and the room itself
         * @param room
         */
        public static enterRoom(room:Room) {
            var currRoom:Room = this.currentRoom;

            //can we leave the current room?
            if(currRoom && !currRoom.attemptLeave())
                return;

            //can we enter this new room?
            if(!room.attemptEnter())
                return;

            //leave current room (if there's one)
            if(currRoom) {
                currRoom.leave();
                currRoom.NPCs.forEach(function(npc:NPC) {
                    npc.leave(currRoom);
                })
            }

            //change player props
            this.X = room.X;
            this.Y = room.Y;
            this.currentRoom = room;

            //call room enter
            room.enter();

            //call/describe npcs
            if(room.NPCs.length > 0) {
                var desc = "";
                if(room.NPCs.length == 1) desc += "You can see the following person: "
                else if(room.NPCs.length == 1) desc += "You can see the following persons: "

                room.NPCs.forEach(function(npc:NPC) {
                    npc.enter(room);
                    desc += npc.Name + ", ";
                })

                desc = desc.substr(0, desc.length-2);
                console.info(desc);
            }
        }
    }
}