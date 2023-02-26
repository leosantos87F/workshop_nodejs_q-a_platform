const express = require("express");
const app = express();

//using EJS as view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("index");
});

app.listen(4000,() => {console.log("App is working now...");});