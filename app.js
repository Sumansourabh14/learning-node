const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const blogs = [
        {title: 'Blog 1', snippet: 'This is a snippet 1'},
        {title: 'Blog 2', snippet: 'This is a snippet 2'},
        {title: 'Blog 3', snippet: 'This is a snippet 3'},
    ];
    res.render('index', { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
    res.render('about', { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render('createBlog', { title: "Create Blog" });
});

app.use((req, res) => {
    res.status(404).render('404', { title: "404 Error" });
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});