import { getFilePath } from "../../sys/io";
import fs from "fs";
import { error, ErrorType } from "../../utils/error";
import yaml from "yaml";
import { Statement } from "../parse";

export const list = (stmt: Statement) => {
    const path = getFilePath();
    const code = fs.readFileSync(path, "utf-8");
    if (stmt.statement.split(" ").length != 1) {
        error(ErrorType.WRONG_ARGS, stmt);
        return;
    }
    const obj = yaml.parse(code);
    Object.keys(obj).map((key) => {
        console.log(`  ${key} : "${obj[key]}"`);
    });
};
