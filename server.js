var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");
var app = express();
// var routes = require("./controllers/burgers_controller.js");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


app.listen(PORT, ()=>{
  console.log("Server up and Running on Port: " + PORT);
});
