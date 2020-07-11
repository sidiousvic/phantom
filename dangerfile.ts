import { markdown, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files
  .map((fileName) => `🍍 ${fileName}`)
  .join("<br>");
markdown(
  "**<h4>You have been messing with these files.**</h4> <br>" + modifiedMD
);

// this is z test.
