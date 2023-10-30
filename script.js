var startButtonEl = document.getElementById("start-btn")
var questionCountEl = document.getElementById("numberCount")
var timeLeftEl = document.getElementById("timeRemaining")
var nextButtonEl = document.getElementById("next-button")


var myQuestions = [
    {
    question: "What is JavaScript used for?",
    answers: {
        a. 'Web Applications',
        b. 'Mobile Apps',
        c. 'Game Development',
        d. 'All of the above' 

    }, 
    correctAnswer: 'b'
},
{
    question: 'Which of the following keywords is used to define a variable in JavaScript?',
    answers: {
        a.	'Var'
        b.	'Let'
        c.	'Both A and B'
        d.	'None of the above'

    },
    correctAnswer: 'b'
},
{
    question: 'Which built in method combines the text of two strings and returns a new string?'
    answers: {
        a.	'Append'
        b.	'Concat'
        c.	'Attach'
        d.	'None of the above'

    },
    correctAnswer: 'b'
},
{
    question:'Inside which HTML element do we put JavaScript?'
    answers: {
        a.	'<script>'
        b.	'<javascript>'
        c.	'<scripting>'
        d.	'<js>'

    },
    correctAnswer: 'a'
}
];

function gameStart() {
    console.log('game has started');
}

startButtonEl.addEventListener('click', gameStart);