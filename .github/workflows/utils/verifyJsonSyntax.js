import fs from "fs";
import path from "path";

export function verifyJsonSyntax(json) {
  try {
    const jsonString = typeof json !== "string" ? JSON.stringify(json) : json;
    JSON.parse(json);
    return true;
  } catch (e) {
    console.error({ e });
    return false;
  }
}

