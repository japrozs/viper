import { getFilePath } from "../../sys/io";
import fs from "fs";
import { Statement } from "../parse";

export const update = (stmt: Statement) => {
    const path = getFilePath();
    let code = fs.readFileSync(path, "utf-8").split("\n");
    const arr = stmt.statement.split(" ");
    const key = arr[1];
    const value = arr.splice(2, arr.length - 1).join(" ");

    // Add key value pair to array
    code = code.filter((c) => c != "" && !c.startsWith(`${key}`));
    code.push(`${key}: ${value}`);

    const body: string = code.join("\n");
    fs.writeFileSync(path, body);
    console.log("Done!");
};
