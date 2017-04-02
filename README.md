# add-license
A CL utility to add `License` text to all your **JS** files.

[![npm](https://img.shields.io/npm/dm/add-license.svg?style=flat-square)](https://www.npmjs.com/package/add-license)

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Legal Stuff](#legal-stuff)

## Installation

We love yarn. And we are using **global** because it'd be `stupid` to add it to every project, if it's only going to be used at the dev's machine, and that too, only once.


```bash
$ yarn add global add-license
```

If you like npm, do this:

```bash
$ npm install -g add-license
```
This adds the `add-license` command to your path, so that you can use it everywhere. Wicked, I know!

## Usage

Pretty Straight Forward: Navigate to any project that has a package.json file, and run the following command:

```bash
$ add-license [license-name] [author-name]
```

**`license-name`**: Yes. That's it. MIT, or Apache.

**`author-name`**: Whatsoever you wanna call yourself.

This will add the License Text to all the JS files in your project. :tada:

## Legal Stuff

MIT License

Copyright (c) 2017 &ndash; eternity Abhishek Soni

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.