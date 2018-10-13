import * as Listr from "listr";
import { clearStore } from "../helper/store-helper";

export async function clear(): Promise<void> {
    const steps = new Listr([
        {
            title: `Clear ${process.env.npm_package_name}`,
            task: () => clearStore()
        }
    ]);

    await steps.run().catch(err => console.error(err));
}
