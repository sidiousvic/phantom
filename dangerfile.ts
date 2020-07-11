import { danger, markdown } from "danger";

const baseBranch = danger.github.pr.base.ref;

markdown(
  `<h3>Sick human, you have opened a PR against <code>${baseBranch}</code>!</h3>Hop outta here before I destroy you with my alien frog lasers! 🐸&nbsp;&nbsp;💥`
);
