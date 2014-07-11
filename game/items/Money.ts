/// <reference path="../../engine/Item.ts" />

module Game {
    export module Items {
        export class Money implements Engine.Item {
            ID:string = "Money";
            Name:string = "$2";
            Color:string = "green";

            use():void {
                console.info("2 dollar, inside your wallet")
            }
        }
    }
}