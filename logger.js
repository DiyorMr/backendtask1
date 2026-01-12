import { writeFile, appendFile, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, "logs.txt");

export async function log(message) {
  const time = new Date().toISOString();
  const line = `${time} - ${message}
`;

  try {
    await appendFile(logFilePath, line);
  } catch (err) {
    await writeFile(logFilePath, line);
  }
}

export async function readLogs() {
  try {
    const data = await readFile(logFilePath, "utf-8");
    return data;
  } catch (err) {
    console.log("❗ Log fayli topilmadi yoki o‘qishda xatolik.");
    return "";
  }
}
