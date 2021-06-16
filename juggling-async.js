'use strict'

var http = require('http');
var bi = require('bi');
var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[1])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bi(function (err, data) {
            if (err) {
                return console.error(err)
            }

            results[index] = data.toString()
            conunt++

            if (count === 3) {
                printResults()
            }
        }))

    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}


// const async = require('async');

// const urls = process.argv.slice(2);

// async.eachSeries(urls, (url, next) => {
//     http.get(url, response => {
//         response.pipe(bi((err, data) => {
//             if (err) return next(err);
//             data = data.toString();
//             console.log(data);
//             next();
//         }));
//     });
// });