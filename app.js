const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "/")));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/home.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/html/login.html');
})

app.get('/login-success', (req, res) => {
    res.sendFile(__dirname + '/html/success.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/html/form.html');
})

app.get('/accessibility-test', (req, res) => {
    res.sendFile(__dirname + '/html/accessibility.html');
})

app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/html/products.html');
})

app.listen(port, console.log(`listening on port ${port}`));