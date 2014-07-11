module Engine {
    export interface Item {
        ID:string;
        Name:string;
        Color:string;
        use():void;
    }
}