import fs from "fs";
import path from "path";
import {verifyJsonSyntax} from './verifyJsonSyntax.js'

export function executeSytaxValidation() {
    /**Get filename add as param in GitHub Actions*/
  const gthActFileName = process.argv[2];

  if (!gthActFileName) {
    console.error("No files were specified in the workflow!");
    process.exit(1);
  }

  const filePath = path.resolve('./.github/workflows/utils/verifyJsonSyntax.js');

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");

    const isAValidJson = verifyJsonSyntax(fileContent);

    if (isAValidJson) {
      console.log(`The file '${gthActFileName}' is a valid JSON.`);
      process.exit(0);
    } else {
      console.error(`Syntax error foude at '${gthActFileName}':`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error to read '${gthActFileName}':`);
    console.error(error);
    process.exit(1);
  }
}

