// Variables 
const startButton = document.getElementById('startbutton');
const startContainer = document.getElementById('mainpage');

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtnElement = document.getElementById('answer-buttons');
let quiz = [];
let currentQuestionIndex = 0;

const endContainer = document.getElementById('endgame');
const resultsContainer = document.getElementById('highscores');

var timerEl = document.getElementById('timer');
var timeLeft = 74;

// Event Listeners
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", startGame);


// Functions
function startGame() {
    console.log("Game Start");
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerEl.classList.remove("hide");
    currentQuestionIndex = 0;
    quiz = quizQuestions;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(quiz[currentQuestionIndex]);
}

function showQuestion(q) {
    questionElement.innerText = q.q;

    for  (i=0; i<q.choices.length; i++) {
        const button = document.createElement('button');
        button.classList.add('btn')
        button.innerText = q.choices[i];

        answerBtnElement.appendChild(button);
    }
}

function resetState() {
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

function checkAnswer(e) {
    
    var selectedEl = e.target;
    var selected = selectedEl.innerText;

    
    if (resultEl.firstChild !== null) {
        resultEl.removeChild(resultEl.firstChild);
    }

    if (selected === q.a) {
        const msgEl = document.createElement('h4');
        msgEl.innerText = "Correct!";
        resultEl.appendChild(msgEl);
    }
    else {
        const msgEl = document.createElement('h4');
        msgEl.innerText = "Wrong!";
        resultEl.appendChild(msgEl);
        timeLeft -= 15;
    }

}

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            questionContainer.classList.add("hide");
            endContainer.classList.remove("hide");
            timerEl.classList.add("hide");
            clearInterval(timeInterval);
        }
    }, 1000);
 }

 // Quiz Questions Array 
const quizQuestions = [
    {
        q: "Commonly used datatypes DO NOT include:",
        choices: ['1. string', '2. boolean', '3. alerts', '4. numbers'],
        a: "3. alerts"
    },
    {
        q: "The condition in an if/else statement is enclosed with ____.",
        choices: ['1. quotes', '2. curly braces', '3. parenthesis', '4. square brackets'],
        a: "3. parenthesis"
    },
    {
        q: "Arrays in javascript can be used to store ____.",
        choices: ['1. numbers an strings', '2. booleans', '3. other arrays', '4. all of the above'],
        a: "4. all of the above"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        a: "4. console.log"
    }
];
