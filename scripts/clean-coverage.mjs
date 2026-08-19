import { rmSync } from "node:fs";
import { resolve } from "node:path";

const target = process.argv[2];

if (!target || !target.startsWith("coverage")) {
  throw new Error("Coverage cleanup target must be inside coverage/");
}

rmSync(resolve(target), { recursive: true, force: true });
