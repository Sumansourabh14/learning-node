const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    res.setHeader('Content-Type', 'text/html');

    //routing
    let path = './files/';
    switch (req.url) {
        case '/':
            path += 'dummy.html';
            res.statusCode = 200;
            break;
        case '/blog':
            path += 'blog.html';
            res.statusCode = 200;
            break;
        case '/blogs':
            res.statusCode = 301;
            res.setHeader('Location', '/blog');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
});