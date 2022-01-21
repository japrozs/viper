import fs from "fs";
import { FILENAME } from "../constants";

export const getFilePath = () => {
    const root = process.env.HOME;
    const dir = `${root}/.viper/`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const file = `${dir}${FILENAME}`;
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, "");
    }
    return file;
};
