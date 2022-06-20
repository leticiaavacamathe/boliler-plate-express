require('dotenv').config();
const mySecret = process.env['MESSAGE_STYLE']
let express = require('express');
let app = express();

console.log('Hello World');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    res.json({
        message: "Hello json"
    });
});
app.use("/public", express.static(__dirname + "/public"));

