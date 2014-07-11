/// <reference path="../../engine/Item.ts" />

module Game {
    export module Items {
        export class Ticket implements Engine.Item {
            ID:string = "Ticket";
            Name:string = "Ticket to museum";
            Color:string = "yellow";

            use():void {
                console.info("If you have this item in possession, you can enter the museum")
            }
        }
    }
}