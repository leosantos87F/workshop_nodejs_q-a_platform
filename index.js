const express = require("express");
const app = express();

//using EJS as view engine
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
   response.render("main/profile");
});

app.listen(4000,() => {console.log("App is working now...");});