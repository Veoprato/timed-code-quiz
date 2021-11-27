// Variables 
// start page
const startButton = document.getElementById('startbutton');
const startContainer = document.getElementById('mainpage');
// main game
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtnElement = document.getElementById('answer-buttons');
// end of game
const endContainer = document.getElementById('endgame');
const scoreElement = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
//Highscore Board
const noScoresElement = document.getElementById('no-score');
const hiScoreContainer = document.getElementById('highscores');
const hiScoreList = document.getElementById('score-list');
const clearHiScoreButton = document.getElementById('clear-button');
// Game Variables
let quiz = [];
let currentQuestionIndex = 0;
var currentQuestion = {};
let score = 0;
var timerEl = document.getElementById('timer');
let timeLeft = 75;

// Event Listeners
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", startGame);
submitButton.addEventListener('click', function(){
    saveScore(score)
});
clearHiScoreButton.addEventListener('click', clearScore);


// Functions

// starts the quiz and hides main start page
function startGame() {
    console.log("Game Start");
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerEl.classList.remove("hide");
    currentQuestionIndex = 0;
    quiz = quizQuestions;
    showQuestion();
}

function showQuestion() {
    // Sets text for current question
    currentQuestion = (quiz[currentQuestionIndex]); 
    questionElement.innerText = currentQuestion.q;

    // creates buttons for choices 
    for (i=0; i<currentQuestion.choices.length; i++) {
        const button = document.createElement('button');
        button.classList.add('btn')
        button.innerText = currentQuestion.choices[i];
        button.addEventListener('click', function() {
            checkAnswer(event);
            resetState();
        });
        answerBtnElement.appendChild(button);
    }
}

//is the selected choice right or wrong
function checkAnswer(event) {
    var selectedElement = event.target;
    var selected = selectedElement.innerText;


    if (selected === currentQuestion.a) {
        console.log("Correct")
    }
    else {
        console.log("Wrong")
        timeLeft -= 15;
    }

}

// resets buttons for next question 
function resetState() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        while (answerBtnElement.firstChild) {
            answerBtnElement.removeChild(answerBtnElement.firstChild)
        }
        showQuestion();
    } else {
        questionContainer.classList.add("hide");
        endContainer.classList.remove("hide");
        timerEl.classList.add("hide");
        endScore();
        clearInterval(timeInterval);
        scoreElement.textContent = score;
    }
}

// Score = Time Remaining
function endScore() {
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    console.log(timeLeft);
    return score = timeLeft;
}

//Score Submit to Highscores
function saveScore() {
    endContainer.classList.add("hide");
    hiScoreContainer.classList.remove("hide");

    var scoreLineElement = document.createElement('li');
    scoreLineElement.innerText = initialsInput.value + " - " + score;
    hiScoreList.appendChild(scoreLineElement);
    initialsInput.value = "";
}

// clears score list
function clearScore() {
    while (hiScoreList.firstChild){
        hiScoreList.removeChild(hiScoreList.firstChild);
    }
    console.log(hiScoreList.firstChild);
    noScoresElement.classList.remove("hide");
}

function countdown() {
    timeInterval = setInterval(function() {
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
