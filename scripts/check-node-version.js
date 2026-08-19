const required = [20, 19, 5];
const actual = process.versions.node.split(".").map(Number);

const isSupported = actual[0] > required[0]
  || (actual[0] === required[0] && (
    actual[1] > required[1]
    || (actual[1] === required[1] && actual[2] >= required[2])
  ));

if (!isSupported) {
  console.error(`This repository requires Node ${required.join(".")} or newer. Active Node is ${process.versions.node}.`);
  console.error("Switch Node versions before running npm commands (for example: nvm use).");
  process.exit(1);
}
