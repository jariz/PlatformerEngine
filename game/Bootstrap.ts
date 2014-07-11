/// <reference path="../engine/Player.ts" />
/// <reference path="../engine/Item.ts" />
/// <reference path="items/Money.ts" />

module Game {
    export function Bootstrap() {
        Engine.Player.giveItem(new Game.Items.Money(), false);
    }
}