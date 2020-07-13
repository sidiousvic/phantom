# Changelog

All notable changes to [Phantom](https://github.com/sidiousvic/phantom) will be documented in this file.

## [Unreleased]

👻

## [v1.7.7] — 2020.07.13

### Changed

- Replaced Webpack for build, building with Typescript.

## [v1.6.0] — 2020.07.11

### Added

- Danger JS for automated PR messaging.
- Kermitoid is implemented, and will respond to certain PR events. 🐸
- Added `CHANGELOG.md`.

## [v1.4.94] — 2020.07.08

### Changed

- Implemented `throw DOMException` for dangerous nodes in `phantom.ts` and `sanitizer.ts`
- Added test coverage for `<iframe>` elements

## [v1.4.7] — 2020.07.07

### Added

- `sanitizer/` dir
- `sanitizer/sanitizer.ts`
- `sanitizer/allowlist.ts` allowlists for attrs, tags and css

### Changed

- In `phantom.ts` instances of `innerHTML` injection were reinforced with the sanitizer. HMTL is now sanitized before rendering to DOM.

[unreleased]: https://github.com/sidiousvic/phantom/compare/v1.6.0...HEAD
[v1.7.7]: https://github.com/sidiousvic/phantom/compare/v1.6.0...v1.7.7
[v1.6.0]: https://github.com/sidiousvic/phantom/compare/v1.4.94...v1.6.0
[v1.4.94]: https://github.com/sidiousvic/phantom/compare/v1.4.93...v1.4.94
[v1.4.7]: https://github.com/sidiousvic/phantom/compare/v1.4.6...v1.4.7

<sub>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).</sub>
