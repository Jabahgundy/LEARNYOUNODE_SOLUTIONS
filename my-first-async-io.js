'use strict'

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, string) => {
    if (err) return console.error(err);
    const result = string.split('\n').length - 1;
    console.log(result);
});




// const file = process.argv[2];

// fs.readFile(file, function (err, content) {
//     if (err) {
//         return console.log(err);
//     }
//     // fs.readFile(file, 'utf8, callback) can also be used. 
//     // const lines = contents.toString().split('\n').length - 1
//     // console.log(lines)
// })