// Node.js - By Net Ninja on YouTube

const newData = require("./data");  // an empty object (at the start)

// console.log(newData);

// No window object in Node, only global object
// console.log(global);

// global.setTimeout(() => {
//     console.log("setTimeout function ran");
// }, 2000);

// const greet = setInterval(() => {
//     console.log("setInterval function ran!");
// }, 500);

// setTimeout(() => {
//     clearInterval(greet);
// }, 4000);

// console.log(__dirname);
// console.log(__filename);

const os = require('os');  // os - built into Node.js
// console.log(os.platform());
// console.log(os.homedir());


//FILE SYSTEM
const fs = require('fs');

//read files
fs.readFile('./files/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

//write files
fs.writeFile('./files/blog.txt', 'hello, world', () => {
    console.log('file was written');
});

//create directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('new folder created!');
    })
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted!');
    })
}

//delete files
if (fs.existsSync('./files/deleteMe.txt')) {
    fs.unlink('./files/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}