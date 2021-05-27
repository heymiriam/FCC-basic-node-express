var express = require('express');
var app = express();
const mySecret = process.env['MESSAGE_STYLE'];
require('dotenv').config()
console.log("Hello World");

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function(req, res){
  res.json({"message": "Hello json"})
});

app.get("/json", (req, res) => {
     if(process.env.MESSAGE_STYLE === "uppercase"){
       res.json({"message" : "HELLO JSON"});
     }
     res.json({"message" : "Hello json"});
   });

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/", function(req, res) {
res.send('Hello Express');
});


















































 module.exports = app;
