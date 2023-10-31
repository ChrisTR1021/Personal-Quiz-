var startButtonEl = document.getElementById("start-btn")
var questionCountEl = document.getElementById("numberCount")
var timeLeftEl = document.getElementById("timeRemaining")
var nextButtonEl = document.getElementById("next-button")
var containerEl= document.getElementById('quizContainer')
var questionEl = document.getElementById('question')
var i = 0


var myQuestions = [
    {
    id: '0',
    question: "What is JavaScript used for?",
    answers: {
        a: 'Web Applications',
        b: 'Mobile Apps',
        c: 'Game Development',
        d: 'All of the above',

    },
    correctAnswer: 'b'
},
{
    id: '1',
    question: 'Which of the following keywords is used to define a variable in JavaScript?',
    answers: {
        a:	'Var',
        b:	'Let',
        c:	'Both A and B',
        d:	'None of the above',

    },
    correctAnswer: 'b'
},
{
    id: '2',
    question: 'Which built in method combines the text of two strings and returns a new string?',
    answers: {
        a:	'Append',
        b:	'Concat',
        c:	'Attach',
        d:	'None of the above',

    },
    correctAnswer: 'b'
},
{
    id: '3',
    question:'Inside which HTML element do we put JavaScript?',
    answers: {
        a:	'<script>',
        b:	'<javascript>',
        c:	'<scripting>',
        d:	'<js>',

    },
    correctAnswer: 'a'
}
];

function gameStart() {
    console.log('game has started');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    var h1El = document.createElement('h1');

    li1.textContent = question[0].answers[0];
    li2.textContent = question[1].answers[1];
    li3.textContent= question[2].answers[2];
    li4.textContent =question[3].answers[3];
    
    quizContainer.appendChild(h1El);
    quizContainer.appendChild(listEL);
}

startButtonEl.addEventListener('click', gameStart);