var startButtonEl = document.getElementById("start-btn")
var questionCountEl = document.getElementById("numberCount")
var timeLeftEl = document.getElementById("timeRemaining")
var nextButtonEl = document.getElementById("next-button")
var containerEl= document.getElementById('quizContainer')
var questionEl = document.getElementById('question')
var qindex = 0


var myQuestions = [
    {
    id: '0',
    question: "What is JavaScript used for?",
    answers: [
         'Web Applications',
         'Mobile Apps',
         'Game Development',
         'All of the above',

    ],
    correctAnswer: 'All of the above'
},
{
    id: '1',
    question: 'Which of the following keywords is used to define a variable in JavaScript?',
    answers: [
        	'Var',
        	'Let',
        	'Both A and B',
        	'None of the above',

    ],
    correctAnswer: 'Let'
},
{
    id: '2',
    question: 'Which built in method combines the text of two strings and returns a new string?',
    answers: [
        	'Append',
        	'Concat',
        	'Attach',
        	'None of the above',

    ],
    correctAnswer: 'Concat'
},
{
    id: '3',
    question:'Inside which HTML element do we put JavaScript?',
    answers: [
        	'<script>',
        	'<javascript>',
        	'<scripting>',
        	'<js>',

],
    correctAnswer: '<script>'
}
];

function nextQuestion() {
    console.log(myQuestions[qindex].question)
    qindex = qindex + 1
    for (let i = 0; i <myQuestions[qindex].answers.length; i++) {
        console.log(myQuestions[qindex].answers[i])
        
    }
    // i++;
    // containerEl.innerHTML = '';
    // gameStart();
}


// startButtonEl.addEventListener('click', gameStart);
nextButtonEl.addEventListener('click', nextQuestion);