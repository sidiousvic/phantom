import { markdown } from "danger";

// show modified files in PR
// const modifiedMD = danger.git.modified_files
//   .map((fileName) => `🍍&nbsp;&nbsp;\`${fileName}\``)
//   .join("<br>");
markdown(
  "**<h4>Sick human, you opened a PR against `production`!</h4><br>Hop outta here before I destroy you with my alien frog lasers! 🐸💥**"
);

// this is x test.
