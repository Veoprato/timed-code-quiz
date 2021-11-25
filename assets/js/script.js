// Variables 
const startButton = document.getElementById('startbutton');
const startContainer = document.getElementById('mainpage');
const quizContainer = document.getElementById('quiz-container');
const endContainer = document.getElementById('endgame');
const resultsContainer = document.getElementById('highscores');


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

// Event Listeners
startButton.addEventListener("click", startGame);

// Functions
function startGame() {
    console.log("Game Start");
    startContainer.classList.add("hide");
    quizContainer.classList.remove("hide");
}

