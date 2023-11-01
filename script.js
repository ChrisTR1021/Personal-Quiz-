var startButtonEl = document.getElementById("start-btn");
var questionCountEl = document.getElementById("numberCount");
var timeLeftEl = document.getElementById("timeRemaining");
var nextButtonEl = document.getElementById("next-button");
var containerEl = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var qindex = 0;

var myQuestions = [
  {
    id: "0",
    question: "What is JavaScript used for?",
    answers: [
      "Web Applications",
      "Mobile Apps",
      "Game Development",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    id: "1",
    question:
      "Which of the following keywords is used to define a variable in JavaScript?",
    answers: ["Var", "Let", "Both A and B", "None of the above"],
    correctAnswer: "Let",
  },
  {
    id: "2",
    question:
      "Which built in method combines the text of two strings and returns a new string?",
    answers: ["Append", "Concat", "Attach", "None of the above"],
    correctAnswer: "Concat",
  },
  {
    id: "3",
    question: "Inside which HTML element do we put JavaScript?",
    answers: ["<script>", "<javascript>", "<scripting>", "<js>"],
    correctAnswer: "<script>",
  },
];

function nextQuestion() {
  console.log(qindex);
  console.log(myQuestions[qindex].question);
  for (let i = 0; i < myQuestions[qindex].answers.length; i++) {
    console.log(myQuestions[qindex].answers[i]);
  }
  qindex = qindex + 1;
  if (qindex >= 4) {
    alert("GAME OVER");
    return;
  }
}

function renderQuestion(question) {
  questionEl.innerHTML = "";
  var questionNum = parseInt(question.number, 10)
  questionCountEl.textContent = questionNum + 1;

  var ol = document.createElement("ol");

    ol.dataset.questionNum = questionNum;


  var questionHeading = document.createElement('h1');
  questionHeading.textContent = question.question;
  questionEl.appendChild(questionHeading);
  for (var i = 0; i < question.answers.length; i++) {
    var answer = question.answers[i];

    var li = document.createElement("li");
    li.textContent = answer;
    li.setAttribute("data-index", i);

    ol.appendChild(li);
  }
  questionEl.appendChild(ol);
  var answerList = document.getElementsByTagName('li');
  answerList.addEventListener('click', nextQuestion);
}

function gameStart() {
  startButtonEl.setAttribute("style", "display: none;");
  renderQuestion(myQuestions[0]);
}

startButtonEl.addEventListener("click", gameStart);

