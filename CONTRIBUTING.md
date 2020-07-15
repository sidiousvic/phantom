# Contributing to [Phantom](https://github.com/sidiousvic/phantom)

<img src="https://thumbs.gfycat.com/RequiredCriminalKitten-max-1mb.gif" width="40px">

**Please follow the workflow below to ensure your contribution is reviewed.**

Before contributing code, be sure to associate your work with an [existing issue, or create your own](https://github.com/sidiousvic/phantom/labels).

### Instructions

`0` **Read** the [Code of Conduct](./CODEOFCONDUCT.md)  
`1` **Fork** the repo on GitHub  
`2` **Clone** the project to your machine  
`3` **Install** dependencies with `npm i`  
`4` **Commit** your updates to a `new-feature` or `bug-fix` branch.

```
git checkout -b your-branch
```

`5` **Push** your work to `your-branch`, not your `master`.

```
git push -u your-branch
```

`6` **Pull request** against Phantom's `dev` branch for your changes to be reviewed

### Pull Requests

- [ ] Make sure you are making a pull request against the **`dev` branch**.
- [ ] Make sure you are requesting to pull a **`feature` or `bug-fix`** branch. Don't request your `master`!
- [ ] Please complete the PR template.

### Issues

- [ ] Please [label your issue](https://github.com/sidiousvic/phantom/labels) properly.
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
