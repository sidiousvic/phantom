# Changelog

All notable changes to [Phantom](https://github.com/sidiousvic/phantom) will be documented in this file.

## [Unreleased]

👻

### Upcoming Features

- [ ] Implemented phantomStore, annihilated Redux from Phantom

### APIs

- [ ] `createStore (from redux)` > `createPhantomStore (from phantom)`
- [ ] `sanitizeHTML` > `phantomExorciser`
- [ ] `phantom.launch` > `phantom.appear`

## [v1.7.7] — 2020.07.13

### Changed

- [x] Replaced Webpack for build, building with Typescript.

## [v1.6.0] — 2020.07.11

### Added

- [x] Danger JS for automated PR messaging.
- [x] Kermitoid is implemented, and will respond to certain PR events. 🐸
- [x] Added `CHANGELOG.md`.

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

- [x] In `phantom.ts` instances of `innerHTML` injection were reinforced with the sanitizer. HMTL is now sanitized before rendering to DOM.

[unreleased]: https://github.com/sidiousvic/phantom/compare/v1.6.0...HEAD
[v1.7.7]: https://github.com/sidiousvic/phantom/compare/v1.6.0...v1.7.7
[v1.6.0]: https://github.com/sidiousvic/phantom/compare/v1.4.94...v1.6.0
[v1.4.94]: https://github.com/sidiousvic/phantom/compare/v1.4.93...v1.4.94
[v1.4.7]: https://github.com/sidiousvic/phantom/compare/v1.4.6...v1.4.7

<sub>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).</sub>
