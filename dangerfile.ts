import { message, danger } from "danger";

// show modified files in PR
const modifiedMD = danger.git.modified_files.join("🍍 ");
message("You have modified these files. \n - " + modifiedMD);

// this is x test.
