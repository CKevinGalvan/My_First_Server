//jshint esversion:6

const express = require("express");
const app = express();

app.listen(3000, function()
{
    console.log("Server started on port 3000");
});

app.get("/", function(request, response){
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res)
{
res.send("Contact me ate: galvancarlkevin@gmail.com");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>playing instruments</li><li>reading</li><li>programming</li></ul>");
});

app.get("/about", function(req, res){
    res.send("Mr. CK is the owner of this server!");
});
