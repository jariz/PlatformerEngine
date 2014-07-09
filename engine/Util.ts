module Engine {
    export class Util {

        /**
         * Returns true if the command (partially) matches an item in the commands array
         */
        public static MatchCommands(command:string, commands:string[]):boolean {
            var yes = false;
            commands.forEach(function(cmd:string) {
                if(cmd.substr(0, command.length) == command) yes = true;
            });
            return yes;
        }

        /**
         * Returns a random item from the possibilities parameter
         * @param possibilities
         */
        public static ReturnRandom(possibilities:string[]):string {
            return possibilities[Math.floor(Math.random() * possibilities.length)];
        }
    }
}