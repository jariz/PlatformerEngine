/// <reference path="../../engine/NPC.ts" />
/// <reference path="../../engine/Logic.ts" />

module Game {
    export module NPCs {
        export class Jari implements Engine.NPC {
            Name:string = "Jari";

            whereYouGoingBruh() {
                Engine.IO.npcTalk(this, "Where do you think you're going? You need a ticket!");
            }

            talk(message:String):void {
            }

            timeOut;
            enter(room:Engine.Room):void {
                var t = this;
                var r = -1;
                var m = [
                    "Welcome to the PlatformerTS museum!",
                    "Do you have tickets?",
                    "Tickets are $ 2,- a person",
                    "Can't get in without a ticket."
                ];

                var f = function() {
                    r++;
                    if(r > m.length-2) r = 0;
                    Engine.IO.npcTalk(t, m[r]);
                    t.timeOut = setTimeout(f, 5000);
                };

                t.timeOut = setTimeout(f, 5000);
            }

            leave(room:Engine.Room):void {
                clearTimeout(t.timeOut);
            }

        }
    }
}
