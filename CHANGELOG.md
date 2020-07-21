# Changelog

All notable changes to [Phantom](https://github.com/sidiousvic/phantom) will be documented in this file.

## [Unreleased]

👻

<!-- ## [v0.0.0] — y.m.d
[v0.0.0]: https://github.com/sidiousvic/phantom/compare/vz.z.z...v0.0.0 -->

## [v2.1.3] — 2020.07.21

- [x] Updated README.

## [v2.1.2] — 2020.07.21

- [x] Upgraded, renamed, reorganized types from `types/phantomDOM` into `types/phantom`

## [v2.1.1] — 2020.07.20

- [x] Fixed exporting/importing bug

## [v2.1.0] — 2020.07.20

- [x] Using `rollup` for builds
- [x] Package exports type definitions
- [x] [Added tsc types test](./spec/types.test.ts)

## [v2.0.0] — 2020.07.19

## Features

- [x] Implemented [phantomStore](https://github.com/sidiousvic/phantom#manage-state), annihilated Redux from Phantom

### APIs

- [x] `createStore (from redux)` > `createPhantomStore (from phantom)`
- [x] `sanitizeHTML` > `phantomExorciser`
- [x] `phantom.launch` > `phantom.appear`

## [v1.7.7] — 2020.07.13

### Changed

- [x] Replaced Webpack for build, building with Typescript

## [v1.6.0] — 2020.07.11

### Added

- [x] Danger JS for automated PR messaging
- [x] Kermitoid is implemented, and will respond to certain PR events 🐸
- [x] Added `CHANGELOG.md`

## [v1.4.94] — 2020.07.08

### Changed

- [x] Implemented `throw DOMException` for dangerous nodes in `phantom.ts` and `sanitizer.ts`
- [x] Added test coverage for `<iframe>` elements

## [v1.4.7] — 2020.07.07

### Added

- [x] `sanitizer/` dir
- [x] `sanitizer/sanitizer.ts`
- [x] `sanitizer/allowlist.ts` allowlists for attrs, tags and css

### Changed

- [x] In `phantom.ts` instances of `innerHTML` injection were reinforced with the sanitizer. HMTL is now sanitized before rendering to DOM

[unreleased]: https://github.com/sidiousvic/phantom/compare/v2.1.2...HEAD
[v2.1.3]: https://github.com/sidiousvic/phantom/compare/v2.1.2...v2.1.3
[v2.1.2]: https://github.com/sidiousvic/phantom/compare/v2.1.1...v2.1.2
[v2.1.1]: https://github.com/sidiousvic/phantom/compare/v2.1.0...v2.1.1
[v2.1.0]: https://github.com/sidiousvic/phantom/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/sidiousvic/phantom/compare/v1.7.7...v2.0.0
[v1.7.7]: https://github.com/sidiousvic/phantom/compare/v1.6.0...v1.7.7
[v1.6.0]: https://github.com/sidiousvic/phantom/compare/v1.4.94...v1.6.0
[v1.4.94]: https://github.com/sidiousvic/phantom/compare/v1.4.93...v1.4.94
[v1.4.7]: https://github.com/sidiousvic/phantom/compare/v1.4.6...v1.4.7

<sub>This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).</sub>
