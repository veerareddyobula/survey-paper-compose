// Require packages and set the port
const express = require("express");
const port = 3002;
const bodyParser = require("body-parser");
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var loki = require("lokijs");
db = new loki("SurveyQuestions.json");
var questions = db.addCollection("questions");
var questionOptions = db.addCollection("options");

app.get("/api/question/all", (request, response) => {
  const question = questions
    .chain()
    .simplesort("question")
    .data();
  const questionniers = [];
  question.forEach(item => {
    const answers = questionOptions
      .chain()
      .find({ questionId: item.id })
      .data();
    questionniers.push({ ...item, options: answers });
  });
  response.send(questionniers);
});

app.post("/api/question/add", (request, response) => {
  let seq = questions
    .chain()
    .simplesort("question")
    .count();
  const questionId = seq + 1;
  console.log("--== Question Table Sequence --== ", seq);
  const { question } = request.body;
  questions.insert({ id: questionId, question: question.question });
  const { options } = question;
  options.forEach(item => {
    questionOptions.insert({
      questionId,
      answer: item.answer,
      isValid: item.isValid
    });
  });
  response.send({ ...question, id: questionId });
});

app.put("/api/question/update", (request, response) => {
  const { question } = request.body;
  questions
    .chain()
    .find({ id: question.id })
    .update(entity => {
      entity.question = question.question;
    });
  questionOptions
    .chain()
    .find({ questionId: question.id })
    .remove();
  const { options } = question;
  options.forEach(item => {
    console.log("--- Update the new option ", question.id, item);
    questionOptions.insert({
      questionId: question.id,
      answer: item.answer,
      isValid: item.isValid
    });
  });
  response.send(question);
});

app.post("/api/question/delete", (request, response) => {
  response.send({
    message: "--- /api/question/add ----"
  });
});
// Start the server
const server = app.listen(port, error => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
