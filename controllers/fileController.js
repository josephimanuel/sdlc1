import { readFile } from "../services/fileService.js";

export function getFile(req, res) {
  const { name } = req.query;
  try {
    const content = readFile(name); // no validation
    res.type("text/plain").send(content);
  } catch (err) {
    res.status(500).send("Unable to read file");
  }
}