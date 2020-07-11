import { markdown, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files
  .map((fileName) => `🍍&nbsp;&nbsp;\`${fileName}\``)
  .join("<br>");
markdown("**<h4>You have been messing with these files.**</h4>" + modifiedMD);

// this is z test.
