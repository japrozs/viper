import { Statement } from "src/core/parse";

export enum ErrorType {
    WRONG_ARGS = "WRONG_ARGS",
    UNKNOWN = "UNKNOWN",
}

export const error = (type: ErrorType, stmt: Statement) => {
    switch (type) {
        case ErrorType.WRONG_ARGS:
            console.log(
                `ERR :: Wrong number of arguments for '${stmt.cmd}' command`
            );
            break;
        default:
            console.log(`ERR :: Unknown or disabled command '${stmt.cmd}'`);
            break;
    }
};
