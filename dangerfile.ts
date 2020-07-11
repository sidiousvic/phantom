import { markdown, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files
  .map((fileName) => `🍍 ${fileName}`)
  .join("<br>");
markdown(
  "**<h3>You have been messing with these files.**<h3> <br>" + modifiedMD
);

// this is x test.
