import { getFilePath } from "../../sys/io";
import { Statement } from "../parse";
import fs from "fs";

export const set = (stmt: Statement) => {
    const path = getFilePath();
    let code = fs.readFileSync(path, "utf-8").split("\n");
    const arr = stmt.statement.split(" ");
    const key = arr[1];
    const value = arr.splice(2, arr.length - 1).join(" ");

    // Add key value pair to array
    code.push(`${key}: ${value}`);
    code = code.filter((c) => c != "");

    const body: string = code.join("\n");
    fs.writeFileSync(path, body);
    console.log("Done!");
};
