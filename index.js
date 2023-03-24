const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Question = require("./database/Question");

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
  Question.findAll({ raw: true, order:[
    ['id','DESC']
  ]}).then(questions => {
    response.render("index", {
      questions: questions
    });
  });
  
});

app.get("/question", (request, response) => {
  response.render("question");
});

app.post("/savequestion",(request, response) => {
  var title = request.body.title;
  var description = request.body.description;

  Question.create({
    title: title,
    description: description
  }).then(() => {
     response.redirect("/");
  });
});

app.get("/question/:id",(request, response) => {
  var id = request.params.id;
  Question.findOne({
    where: {id: id}
  }).then(question => {
    if (question != undefined){ //question was found
      response.render("questionPage",{
        question: question
      });
    }else{  //question is not found.
      response.redirect("/");
    }
  });
});



app.listen(4000,() => {console.log("App is working now...");});