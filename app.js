const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// IMPORTING ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTE
app.get('/', (req, res) => {
    res.send('home')
})

// CONNECT TO DB
mongoose.connect('mongo "mongodb+srv://cluster0.2gkjj.mongodb.net/myFirstDatabase" --username mohit',
    { useNewUrlParser: true }, 
    () => {
        console.log('connected')
})


// START LISTENING
app.listen(3000);