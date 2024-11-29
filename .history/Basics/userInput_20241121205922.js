// Taking user input in terminal using Node.js

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("What is your name? ", (name) => {
    // console.log(`Hello, ${name}`);
    r1.close();
});

// Taking user input in web console

const name = prompt ('What is your name?');
console.log(`Hello, ${name}`);