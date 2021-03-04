const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

const newTexts = ["Cook Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

const day = date.getDate();

    res.render("list", {listTitle: day, newActions: newTexts});
});

app.post("/", function(req, res){

  const newText = req.body.newTexted;

  if (req.body.list === "Work"){
    workItems.push(newText);
    res.redirect("/work");
  } else {
    newTexts.push(newText);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newActions: workItems});
});

app.post("/work", function(req, res){
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
