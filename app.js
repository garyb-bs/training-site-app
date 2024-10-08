const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/form.html');
})

app.listen(port, console.log(`listening on port ${port}`));