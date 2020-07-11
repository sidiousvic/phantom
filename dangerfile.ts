import { message, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files.join("🍍<br>");
message("**You have modified these files.** <br>" + modifiedMD);

// this is x test.
