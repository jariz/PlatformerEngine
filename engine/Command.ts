module Engine {
    export interface Command {
        name:String;
        names:Array<string>;
        description:String;

        run(params:String): void;
    }
}