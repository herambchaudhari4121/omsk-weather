import {
  readCSV,
  readJSON,
  writeCSV,
} from "https://deno.land/x/flat@0.0.10/mod.ts";
import { processTemperature } from "./utils.ts";

const filename = Deno.args[0];
const date = Deno.args[1]
const json = await readJSON(filename);

const newFilename = "history.csv";
const history = await readCSV(newFilename);

await writeCSV(newFilename, [{
  "temperature in °C": processTemperature(json.temperature),
  description: json.description,
  date: new Date(date).toISOString(),
}, ...history]);
