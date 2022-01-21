import { match } from "./utils";
import rl from "readline-sync";
import { parse } from "./core/parse";

const main = async () => {
    const argv = process.argv;
    if (argv.length == 2) {
        for (;;) {
            const cmd = rl.question(">>> ");
            parse(cmd);
        }
    }
    if (argv.length >= 3) {
        if (match(argv[2], "--help") || match(argv[2], "-h")) {
            console.log("help message");
        }
        if (match(argv[2], "--version") || match(argv[2], "-v")) {
            console.log("versioning message");
        }
    }
};

main().catch((err: Error) => console.log(err.message));
