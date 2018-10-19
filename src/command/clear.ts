const pkg = require("../../package.json");
import * as Listr from "listr";
import { clearStore } from "../helper/store-helper";

export async function clear(): Promise<void> {
    const steps = new Listr([
        {
            title: `Clear ${pkg.name}'s state`,
            task: () => clearStore()
        }
    ]);

    await steps.run().catch(err => console.error(err));
}
