#!/usr/bin/env node

const find = require('find');

const prepend = require('prepend-file');

const removeNodeModules = require('./util/removeNodeModules.js');

const getLicense = require('./licenses/getLicense.js');

find.file(/\package.json$/, process.cwd(), (files) => {

    let packageJson = removeNodeModules(files);

    if(!packageJson) return;

    findJSFiles();
});

findJSFiles = ()=>{
    find.file(/\.js$/, process.cwd(), (files)=>{
        let JSfiles = removeNodeModules(files);
        JSfiles.forEach((fileName)=>{
            prepend(fileName,getLicense('mit', 'Fantastic Waddle'),(err)=>{
                console.log(err);
            })
        });
    })
}

