import { parentPort, workerData } from "node:worker_threads";
import {
  runChromeImportWorker,
  type WorkerInput,
} from "./chrome-cookie-import.js";
// workerData is the main-process worker contract; runtime malformed-input behavior
// remains that of the shipped worker rather than introducing a new rejection path.
void runChromeImportWorker(parentPort, workerData as WorkerInput);
