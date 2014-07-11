/// <reference path="../Item.ts" />
/// <reference path="../Player.ts" />

module Engine {
    export module Commands {
        export class Inventory implements Command {
            name:String = "inventory";
            names:Array<string> = [
                "backpack"
            ];
            description:String = "See the items in your inventory";

            run(params:String):void {
                if(Player.Inventory.length == 0) {
                    console.warn("There are no items in your inventory");
                    return;
                }

                if(Player.Inventory.length  > 1) var out = "You're currently in the possession of the following items: ";
                else var out = "You're currently in the possession of the following item: ";

                Player.Inventory.forEach(function(item:Item) {
                    out += node.color(item.Name, item.Color) + ", ";
                })

                out = out.substr(0, out.length - 2);
                console.info(out);
            }
        }
    }
}

Engine.Logic.Commands.push(new Engine.Commands.Inventory());