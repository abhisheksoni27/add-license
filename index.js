#!/usr/bin/env node

/**
* MIT License
*
* Copyright (c) 2017 Abhishek Soni
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


const find = require('find');

const prepend = require('prepend-file');

const removeNodeModules = require('./util/removeNodeModules.js');

const getLicense = require('./licenses/getLicense.js');

const conArgv = ['mit', 'Anonymous'];

let argv = process
    .argv
    .slice(2);

if (argv.length === 0) {
    argv = conArgv;
}

const license = argv[0];

const name = argv.slice(1).join(' ');

find.file(/\package.json$/, process.cwd(), (files) => {

    let packageJson = removeNodeModules(files);

    if (!packageJson) 
        return;
    
    findJSFiles();
});

const licenseText = getLicense(license, name);

findJSFiles = () => {
    find.file(/\.js$/, process.cwd(), (files) => {
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName) => {
            prepend(fileName, licenseText, (err) => {
                console.log(err);
            })
        });
    })
}
