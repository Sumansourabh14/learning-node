const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://test-user:test1234@node-tuts.spvpwoh.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db');
        app.listen(3000, () => {
            console.log('App is listening on port 3000');
        });
    })
    .catch((error) => console.log(error));

app.set('view engine', 'ejs');

// Middleware function - between request and response
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// save data to mongodb through mongoose
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog',
//         snippet: 'About new blog',
//         body: 'This is a blog about FIFA World Cup 2022 - Qatar'
//     });

//     blog.save()
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById("636fb95ba8ec3d8cdb6c6ab8")
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

app.get("/", (req, res) => {
    res.redirect("/blog");
});

app.get("/about", (req, res) => {
    res.render('about', { title: "About" });
});

app.get("/blog", (req, res) => {
    Blog.find()
        .then(result => res.render('index', { title: 'All Blogs', blogs: result }))
        .catch(err => console.log(err));
})

app.get("/blogs/create", (req, res) => {
    res.render('createBlog', { title: "Create Blog" });
});

app.post("/blogs", (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then(result => res.redirect("/blog"))
        .catch(err => console.log(err));
});

app.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => res.render('details', {blog: result, title: "blog details"}))
        .catch(err => console.log(err));
});

app.use((req, res) => {
    res.status(404).render('404', { title: "404 Error" });
});