# `check-edux`

[![Build Status](https://img.shields.io/travis/lukaszklis/check-edux/master.svg?style=flat-square)](https://travis-ci.org/lukaszklis/check-edux) [![git3moji](https://img.shields.io/badge/git3moji-%E2%9A%A1%EF%B8%8F%F0%9F%90%9B%F0%9F%93%BA%F0%9F%91%AE%F0%9F%94%A4-fffad8.svg?style=flat-square)](https://robinpokorny.github.io/git3moji/) [![check-edux](https://img.shields.io/npm/v/check-edux.svg?style=flat-square)](https://www.npmjs.com/package/check-edux) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

`check-edux` allows you to easily check the EDUX platform for new updates in courses and global announcements.

![check-edux](https://user-images.githubusercontent.com/11782/47214439-39093b80-d39e-11e8-9e6c-c04a08ac8b75.gif)

## Installation

```bash
npm i -g check-edux
```

## How to use

```bash
check-edux
```

## Help

```
$ check-edux -h

Usage: check-edux [options]

Options:
  -c, --clear    clear check-edux's storage on your computer
  -V, --version  output the version number
  -h, --help     output usage information
```

## Development

### Dependencies

* Node `8.12.0`+
* npm `6.4.1`+

## Development flow

1. Clone this repository.
1. Install dependencies via: `npm i`.
1. Run the development environment via: `npm run-script watch`.
1. Run the tool manually via `npm start [-- OPTIONS]`.
1. A list of all of the notifications will be shown with links to a specific course.
