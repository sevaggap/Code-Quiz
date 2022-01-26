let timerEl = document.querySelector(".timer");
let scoreEl = document.querySelector(".score");
let startscreenEl = document.getElementById("start-screen");
let questionsEl = document.getElementById("questions");
let answersEl = document.getElementById("answers");
let feedbackEl = document.getElementById("feedback");
let resultsscreenEl = document.getElementById("results-screen");

let titleEl = document.createElement("h1");
let descriptionEl = document.createElement("p");
let startbuttonEl = document.createElement("button");

startscreenEl.appendChild(titleEl);
startscreenEl.appendChild(descriptionEl);
startscreenEl.appendChild(startbuttonEl);

let questionEl = document.createElement("h1");
let option1El = document.createElement("button");
let option2El = document.createElement("button");
let option3El = document.createElement("button");
let option4El  = document.createElement("button");
let feedEl = document.createElement("p");

let resultsscreentitleEl = document.createElement("h1");
let finalscoreEl = document.createElement("p");
let inputlabelEl = document.createElement("p");
let inputEl = document.createElement("input");
let submitbuttonEl = document.createElement("button");

let questionbank = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is encolsed within _____.", "Arrays in JavaScript can be used to store _____.", "String values must be enclosed within _____ when being assigned to variables.", "A very useful tool used during development and bedugging for printing contet to the debugger is:"];
let options = ["strings","booleans","alerts","numbers","quotes","curly brackets","parentheses","square brackets","numbers and strings","other arrays","booleans","all the above","commas","curly brackets","quotes","parentheses","JavaScript","terminal.bash","for loops","console log"]
let answers = ["alerts","parentheses","all the above","quotes","console log"];

timerEl.textContent = "Timer";
titleEl.textContent = "Welcome to the Coding Quiz Challenge!";
descriptionEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by ten seconds! Correct answers will score you 5 points, and incorrect answers will deduct 2 points.";
startbuttonEl.textContent = "Start Quiz";

console.log(questionbank);
console.log(options);
console.log(answers);

let scoreStor = localStorage.getItem("score");
let initialsStor = localStorage.getItem("initials");

let score = 0;
let i=0;
let j=3;
let a=0;
let timeLeft = 60;

function startquiz () {
  startscreenEl.className = "hide";

  countdown ();
  createquestions ();
  logscore ();
}

function countdown() {
  let timeInterval = setInterval(function () {
  
  timeLeft--;
  timerEl.textContent = "Time Left: " + timeLeft +  " seconds left!";

  if(timeLeft === 0 || timeLeft < 0 || i ==5)  {
    clearInterval(timeInterval);
    timerEl.textContent = "";
    resultsscreen ();
  }
}, 1000);
};

function createquestions () {
  questionEl.textContent = questionbank[i];
  option1El.textContent = options[i];
  option2El.textContent = options[i+1];
  option3El.textContent = options[i+2];
  option4El.textContent = options[i+3];
  feedEl.textContent = "";

  questionsEl.appendChild(questionEl);
  answersEl.appendChild(option1El);
  answersEl.appendChild(option2El);
  answersEl.appendChild(option3El);
  answersEl.appendChild(option4El);
  feedbackEl.appendChild(feedEl);
}

function logscore() {
  localStorage.setItem("score", score);
  scoreEl.textContent = "Your score is: " + score +  " points";
}

startbuttonEl.addEventListener("click", startquiz);

answersEl.addEventListener("click", function(event) {
  event.stopPropagation;
  let choice = event.target;
  let text = choice.textContent;

  console.log(choice);
  console.log(text);

    if(text==answers[a]) {
      feedEl.textContent = "That's Right! :)";
      score=score+5;
    } else {
      feedEl.textContent = "That's Wrong! :(";
      score=score-2;
      timeLeft = timeLeft - 10;
      
    }
    
    questionEl.textContent = questionbank[i+1];
    option1El.textContent = options[j+1];
    option2El.textContent = options[j+2];
    option3El.textContent = options[j+3];
    option4El.textContent = options[j+4];
    i=i+1;
    j=j+4;
    a=a+1;
    logscore ();
    console.log(score);

    if (i==5) {
      resultsscreen ();
        }

  }
);

function resultsscreen () {
  questionsEl.className = "hide";
  option1El.className = "hide";
  option2El.className = "hide";
  option3El.className = "hide";
  option4El.className = "hide";
  feedbackEl.className = "hide";
  
  inputEl.className = "initials";

  resultsscreentitleEl.textContent = "All Done!";
  finalscoreEl.textContent= "Your final score is: " + localStorage.getItem("score") + " points!";
  inputlabelEl.textContent = "Please enter your initials: ";
  submitbuttonEl.textContent = "Submit";
  scoreEl.textContent = "";

  resultsscreenEl.appendChild(resultsscreentitleEl);
  resultsscreenEl.appendChild(finalscoreEl);
  resultsscreenEl.appendChild(inputlabelEl);
  resultsscreenEl.appendChild(inputEl);
  resultsscreenEl.appendChild(submitbuttonEl);
}

submitbuttonEl.addEventListener("click", function() {
  finalscoreEl.className = "hide";
  inputEl.className = "hide"
  submitbuttonEl.className = "hide";
  inputEl.className = "initials";

  let initials = document.querySelector(".initials").value;
  console.log(initials);
  localStorage.setItem("initials",initials);
  
  inputEl.className = "hide";
  resultsscreentitleEl.textContent = "High Scores";

  inputlabelEl.textContent = "1. " + localStorage.getItem("initials") + " , " + localStorage.getItem("score") + " points";
})
    




   