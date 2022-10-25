const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index', { title: "Home" });
});

app.get("/about", (req, res) => {
    res.render('about', { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render('createBlog', { title: "Create Blog" });
})

app.use((req, res) => {
    res.status(404).render('404', { title: "404 Error" });
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});