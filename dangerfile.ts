import { markdown, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files
  .map((fileName) => `<sup>🍍&nbs>p;&nbsp;\`${fileName}\`</sup>`)
  .join("<br>");
markdown("**<h4>You have been messing with these files.**</h4>" + modifiedMD);

// this is z test.
