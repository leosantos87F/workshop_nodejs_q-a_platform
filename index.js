const express = require("express");
const app = express();

//using EJS as view engine
app.set('view engine', 'ejs');

//variables and get method settings
app.get("/:name/:language", (request, response) => {
   var name = request.params.name;
   var language = request.params.language;
   var showMsg = true;

   var products = [
      {name: "Doritos", price: 3.14},
      {name: "Coca-Cola", price: 5.00},
      {name: "Milk", price: 1.45},
      {name: "Meat", price: 5.00},
      {name: "Red Bull", price: 6.00},
      {name: "Chocolate Powder", price: 4.00},
  ]

   //rendering variables values
   response.render("index",{
      name: name,
      language: language,
      company: "Guia do programador",
      subscribes: 8000,
      msg: showMsg,
      products: products
   });
});

app.listen(4000,() => {console.log("App is working now...");});