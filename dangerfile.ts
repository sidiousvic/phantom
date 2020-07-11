import { danger, markdown } from "danger";

const baseBranch = danger.github.pr.base.ref;

switch (baseBranch) {
  // when opening a PR against the production branch
  case "production":
    markdown(
      `<h3>Sick human, you have opened a PR against <code>${baseBranch}</code>!</h3>Hop outta here before I destroy you with my alien frog lasers! 🐸&nbsp;&nbsp;💥`
    );
    break;
  case "dev":
    // when opening a PR against the dev branch
    markdown(
      `<h3>Good, good... you have opened a PR against <code>${baseBranch}</code>.</h3>Go fix yourself a pina colada while the checks pass and someone reviews your code. 🐸&nbsp;&nbsp;🍍`
    );
}

// tests
