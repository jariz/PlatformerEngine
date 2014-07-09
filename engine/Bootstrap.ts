/// <reference path="IO.ts" />
/// <reference path="Logic.ts" />
/// <reference path="Player.ts" />

module Engine {
    export function Bootstrap() {
        Logic.runSanityChecks();
        Logic.IO = new IO();
        Player.enterRoomAt(0, 0);
    }
}