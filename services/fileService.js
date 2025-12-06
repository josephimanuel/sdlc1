import fs from "fs";

export function readFile(filename) {
  const filePath = `./data/${filename}`;
  return fs.readFileSync(filePath, "utf8");
}