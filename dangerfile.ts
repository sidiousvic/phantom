import { markdown, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files.join("<br>");
markdown("**You have modified these files.** <br>" + modifiedMD);

// this is y test.
