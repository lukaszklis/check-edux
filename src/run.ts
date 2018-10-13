const pkg = require("../package.json");
import * as program from "commander";
import { clear } from "./command/clear";
import { checkEdux } from "./command/check-edux";

program
    .option("-c, --clear", "clear check-edux's storage on your computer")
    .version(pkg.version)
    .parse(process.argv);

async function run(): Promise<void> {
    if (program.clear) {
        return await clear();
    }

    await checkEdux();
}

run().catch(err => console.error(err));
