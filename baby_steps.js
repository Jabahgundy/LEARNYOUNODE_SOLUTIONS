'use strict'

// console.log(process.argv);

let answer = 0;

for (let i = 2; i < process.argv.length; i++) {
    // console.log(process.argv[i]);
    // add the numbers togther and update the value of answer
    answer = answer + Number(process.argv[i]);
    // Another option
    // answer = answer + parseInt(process.argv[i]);
    // answer += Number(process.argv[i]);
}

console.log(answer)