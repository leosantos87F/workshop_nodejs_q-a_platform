const express = require("express");
const app = express();

//using EJS as view engine
app.set('view engine', 'ejs');

app.get("/:name/:language", (request, response) => {
   var name = request.params.name;
   var language = request.params.language;
   var showMsg = true;

   response.render("index",{
      name: name,
      language: language,
      company: "Guia do programador",
      subscribes: 8000,
      msg: showMsg
   });
});

app.listen(4000,() => {console.log("App is working now...");});