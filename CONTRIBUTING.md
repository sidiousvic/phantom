# Contributing to [Phantom](https://github.com/sidiousvic/phantom) <img src="https://thumbs.gfycat.com/RequiredCriminalKitten-max-1mb.gif" width="40px">

### Thank you for taking the first step in contributing to [Phantom](https://github.com/sidiousvic/phantom)!

**Please follow the workflow below to ensure your contribution is reviewed.**

⚠️ Before contributing code, be sure to associate your work with an [existing issue, or create your own](https://github.com/sidiousvic/phantom/labels).

### Instructions

`0` **Mind** the [Code of Conduct](./CODE_OF_CONDUCT.md)  
`1` [**Fork** the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) on GitHub  
`2` [**Clone** the project](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github) to your machine  
`3` [**Install** dependencies](https://docs.npmjs.com/cli/install) with `npm i`  
`4` [Create a `new-feature` or `bug-fix` branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#creating-a-branch)

```bash
git checkout -b your-branch
```

`5` [**Commit** your updates](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits) to your branch.

```bash
git add my-changed-file.js
git commit -m "My commit message"
```

`6` **Push** your work to `your-branch`.

```bash
git push -u your-branch
```

Only use the `-u` flag the **first time** you push. This will publish your local branch to your remote, and only needs to be done once.

`7` [Make a **Pull request** on GitHub from `your-branch` against Phantom's `dev` branch](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request)

### `sidiousvic:dev` ← `yourUsername:yourBranch`

`8` [**Make yourself a piña colada**](https://www.foodnetwork.com/recipes/pina-colada-recipe0-1956362) 🍍 while you wait for your changes to be reviewed

### Making Pull Requests

- [ ] Make sure you are making a pull request against the **`dev` branch**. PRs against `production` will **not** be considered.
- [ ] Make sure you are requesting to pull a **`feature` or `bug-fix`** branch. Don't request your fork's `master` branch.
- [ ] Please complete the PR template that appears before submitting your PR.

### Issues

- [ ] Please [label your issue](https://github.com/sidiousvic/phantom/labels) properly.
- [ ] [Be as descriptive as possible.](https://medium.com/nyc-planning-digital/writing-a-proper-github-issue-97427d62a20f) What's wrong? What error messages (if any) did you have? What do you want to change? What's the user story?
- [ ] Please complete the issue template.

### Checks

The following checks are currently running in the Phantom repository.

#### [Build](https://github.com/sidiousvic/phantom/blob/production/.github/workflows/phantomBuildAndTest.yml) <sup><sup>`on:push:branches:[production]`</sup></sup>

Builds the package using Typescript, runs tests from `src/`.

#### [Publish](https://github.com/sidiousvic/phantom/blob/production/.github/workflows/publishNpmGitHubPackage.yml) <sup><sup>`on:release:types:[created]`</sup></sup>

Publishes the `@sidiousvic/phantom` package to npm and GitHub Packages.

#### [Kermitoid](https://github.com/sidiousvic/phantom/blob/production/.github/workflows/danger.yml) <sup><sup>`on:pull_request:branches:*`</sup></sup>

Runs `Kermitoid`, our resident amphibian bot, on PRs for the Phantom repo. Only for Phantom collaborators.
<br>
<br>
<br>

### Thanks for contributing! 👻
