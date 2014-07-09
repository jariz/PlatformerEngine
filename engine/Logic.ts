/// <reference path="Command.ts" />
/// <reference path="Room.ts" />
/// <reference path="IO.ts" />

module Engine {
    export class Logic {
        public static Rooms:Array<Room> = [];
        public static Commands:Array<Command> = [];
        public static IO:IO;

        public static runSanityChecks():void {
            var zerozeroRoomExists = false;
            this.Rooms.forEach(function(room:Room) {
                if(room.Y == 0 && room.X == 0)
                    zerozeroRoomExists = true;
            });
            if(!zerozeroRoomExists) throw new Error("There's no room at 0,0 defined. This is needed in order for the game to run.");

            var unknownCommandExists = false;
            this.Commands.forEach(function(cmd:Command) {
                if(cmd.name == "unknown")
                    unknownCommandExists = true;
            });
            if(!unknownCommandExists) throw new Error("There's no command with the name 'unknown'. This command is called whenever the engine can't find a suitable command and is required.");
        }
    }
}