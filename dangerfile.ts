import { danger, markdown } from "danger";

const baseBranch = danger.github.pr.base.ref;

// BRANCH PROTECTION
if (baseBranch === "production") {
  // PR against production
  markdown(
    `<h3>Sick human, you have opened a pull request against <code>${baseBranch}</code>!</h3>Hop outta here before I destroy you with my alien frog lasers! 🐸&nbsp;&nbsp;💥<br></br><!--`
  );
} else if (baseBranch === "dev")
  // PR against dev
  markdown(
    `<h3>Gee thanks for your pull request, ribbit!</h3>Go fix yourself a pina colada while the checks pass and someone reviews your code. 🐸&nbsp;&nbsp;🍍<br></br><!--`
  );

// INCLUDE CHANGELOG WHEN MODIFYING PHANTOM.TS
const hasModifiedPhantom = danger.git.modified_files.includes("src/phantom.ts");
const includesChangelog = danger.git.modified_files.includes("CHANGELOG.md");

if (hasModifiedPhantom && !includesChangelog) {
  markdown(
    `<h3>Where's CHANGELOG.md?</h3>You've been playing with <code>phantom.ts</code>, so you got to log your changes in CHANGELOG.md! 🐸&nbsp;&nbsp;⚠️<br></br><!--`
  );
}
