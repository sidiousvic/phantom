import { danger, markdown } from "danger";

const userIsAdmin = danger.github.pr.user.login === "sidiousvic";
const baseBranch = danger.github.pr.base.ref;
const PRAgainstProd = baseBranch === "production";
const PRAgainstDev = baseBranch === "dev";
const hasModifiedPhantom = danger.git.modified_files.includes("src/phantom.ts");
const includesChangelog = danger.git.modified_files.includes("CHANGELOG.md");

// MESSAGES
const YouForgotAChangelogFile =
  `<h3>🐸 You forgot CHANGELOG.md!</h3>You've been playing with <code>phantom.ts</code>. Please describe your changes in <code>CHANGELOG.md</code>. 💻<br></br>` +
  "<!--";

const YouOpenedAPRAgainstProd =
  `<h3>🐸 Sick human, you have opened a pull request against <code>${baseBranch}</code>!</h3>Hop outta here before I destroy you with my alien frog lasers! 💥<br></br>` +
  "<!--";

const YouOpenedAPRAgainstDev =
  `<h3>🐸 Gee thanks for your pull request, ribbit!</h3>Go fix yourself a pina colada while the checks pass and someone reviews your code. 🍍<br></br>` +
  "<!--";

let message = YouOpenedAPRAgainstProd;

// BRANCH PROTECTION
if (PRAgainstProd && !userIsAdmin) message += YouOpenedAPRAgainstProd;
else if (PRAgainstDev) message += YouOpenedAPRAgainstDev;

// INCLUDE CHANGELOG WHEN MODIFYING PHANTOM.TS
if (hasModifiedPhantom && !includesChangelog) {
  message += YouForgotAChangelogFile;
}

markdown(message);
