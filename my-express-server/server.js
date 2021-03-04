const express = require("express");
const app = express ();

app.get ("/", function(request, response){
  response.send("<h1>Hello, world!<h1>");
});

app.get ("/contact", function(req, res){
  res.send("Contact me at: bekberata@gmail.com");
})

app.get ("/about", function(req, res){
  res.send("I am a human and tomorrow will be doing the preparation and analysis for the friday operation on my sinusitus");
})

app.get ("/beer", function(req, res){
  res.send("beer");
})

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
