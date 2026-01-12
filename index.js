import { log, readLogs } from "./logger.js";

await log("APP STARTED");

setTimeout(async () => {
  await log("FIRST TIMEOUT EVENT");
}, 2000);

let counter = 0;
const intervalId = setInterval(async () => {
  counter++;
  await log("INTERVAL TICK");

  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);

setTimeout(async () => {
  const allLogs = await readLogs();
  console.log("\n===== ALL LOGS =====");
  console.log(allLogs);
}, 6000);
