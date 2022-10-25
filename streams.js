console.log('STREAMS');

const fs = require('fs');

const readStream = fs.createReadStream('./files/blogStream.txt', { encoding: 'utf-8' });

// event listener - .on
readStream.on('data', (chunk) => {
    console.log('------ CHUNK ------');
    console.log(chunk);
})