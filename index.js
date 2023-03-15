const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Database connection schema authenticate
connection.authenticate()
.then(() => {
  console.log("Database connection has done succesfully");
})
.catch((msgError) => {
  console.log(msgError);
});

//using EJS as view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));

//body parser api configuration
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/question", (request, response) => {
  response.render("question");
});

app.post("/savequestion",(request, response) => {
  var title = request.body.title;
  var description = request.body.description;
  response.send("Form has been received! title " + title + " " + " description " + description);
});


app.listen(4000,() => {console.log("App is working now...");});