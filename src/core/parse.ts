import { exec } from "./exec";

export enum Command {
    SET = "SET",
    GET = "GET",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    CLEAR = "CLEAR",
    EXIT = "EXIT",
    AUTH = "AUTH",
    INFO = "INFO",
    LIST = "LIST",
    GETUSER = "GETUSER",
    HELP = "HELP",
    WHOAMI = "WHOAMI",
    UNKNOWN = "UNKNOWN",
}

export interface Statement {
    type: Command;
    cmd: string;
    statement: string;
}

export const parse = (stmt: string) => {
    const cmd = stmt.split(" ")[0].toLowerCase();
    let commandType: Command;
    switch (cmd) {
        case "set":
            commandType = Command.SET;
            break;
        case "get":
            commandType = Command.GET;
            break;
        case "update":
            commandType = Command.UPDATE;
            break;
        case "delete":
            commandType = Command.DELETE;
            break;
        case "help":
            commandType = Command.HELP;
            break;
        case "list":
            commandType = Command.LIST;
            break;
        case "clear":
            commandType = Command.CLEAR;
            break;
        case "exit":
            commandType = Command.EXIT;
            break;
        case "auth":
            commandType = Command.AUTH;
            break;
        case "info":
            commandType = Command.INFO;
            break;
        case "getuser":
            commandType = Command.GETUSER;
            break;
        case "whoami":
            commandType = Command.WHOAMI;
            break;
        default:
            commandType = Command.UNKNOWN;
            break;
    }
    const object: Statement = {
        type: commandType,
        cmd,
        statement: stmt,
    };
    exec(object);
};
