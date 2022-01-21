import { getFilePath } from "../../sys/io";
import fs from "fs";
import yaml from "yaml";
import { Statement } from "../parse";
import { error, ErrorType } from "../../utils/error";

export const get = (stmt: Statement) => {
    const path = getFilePath();
    const code = fs.readFileSync(path, "utf-8");
    if (stmt.statement.split(" ").length != 2) {
        error(ErrorType.WRONG_ARGS, stmt);
        return;
    }
    const obj = yaml.parse(code);
    const arr = stmt.statement.split(" ");
    const key = arr[1];
    const val = obj[key];
    if (!val) {
        console.log("(null)");
        return;
    }
    console.log(`"${val}"`);
};
