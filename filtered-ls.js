'use strict'
const fs = require('fs');

const pathname = process.argv[2];
const extension = process.argv[3];

fs.readdir(pathname, (error, list) => {
    if (error) {
        console.log(error);
        return;
    }
    for (let i = 0; i < list.length; i++) {
        const split = list[i].split(".");
        if (split[1] === extension) {
            console.log(list[i]);
        }
    }
});


