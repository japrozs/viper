import { getFilePath } from "../../sys/io";
import { Statement } from "../parse";
import fs from "fs";
import { error, ErrorType } from "../../utils/error";

export const set = (stmt: Statement) => {
    const path = getFilePath();
    let code = fs.readFileSync(path, "utf-8").split("\n");
    if (stmt.statement.split(" ").length != 3) {
        error(ErrorType.WRONG_ARGS, stmt);
        return;
    }
    const arr = stmt.statement.split(" ");
    const key = arr[1];
    const value = arr[2];

    // Add key value pair to array
    code.push(`${key}: ${value}`);
    code = code.filter((c) => c != "");

    const body: string = code.join("\n");
    fs.writeFileSync(path, body);
    console.log("Done!");
};
