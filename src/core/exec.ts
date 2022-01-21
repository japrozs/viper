import { info } from "console";
import { error, ErrorType } from "../utils/error";
import { get } from "./cmd/get";
import { help } from "./cmd/help";
import { list } from "./cmd/list";
import { set } from "./cmd/set";
import { update } from "./cmd/update";
import { Command, Statement } from "./parse";

export const exec = (stmt: Statement) => {
    switch (stmt.type) {
        case Command.SET:
            set(stmt);
            break;
        case Command.GET:
            get(stmt);
            break;
        case Command.UPDATE:
            update(stmt);
            break;
        case Command.DELETE:
            break;
        case Command.LIST:
            list(stmt);
            break;
        case Command.CLEAR:
            break;
        case Command.HELP:
            help(stmt);
            break;
        case Command.EXIT:
            console.log("Bye!");
            process.exit(0);
            break;
        case Command.AUTH:
            break;
        case Command.INFO:
            info(stmt);
            break;
        case Command.GETUSER:
            break;
        case Command.WHOAMI:
            break;
        case Command.UNKNOWN:
            error(ErrorType.UNKNOWN, stmt);
            break;
        default:
            error(ErrorType.UNKNOWN, stmt);
            break;
    }
};
