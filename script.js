//Psuedocode

//Global Variables
//==============================================================================
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 20;
var intervalID;
var index = 0;
var answered = false;
var correct;
var triviaGame = [
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()},
  {question:"",answers:["","","",""], correct:, image:()}
];
//Functions
//==============================================================================
funciton startGame(){
  console.log("game start")
  $('#start-button').remove();//removes data and events from element
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = 0;
  loadQsandAs();
};

function loadQsandAs(){
  console.log(correctAnswers)
  console.log(incorrectAnswers)
  console.log(unansweredQuestions)
  console.log(index)
  answered = false;
  timeRemaining = 20;
  intervalID = setInterval(timer, 1000);
  if(answered === false){
    timer();
  }
  correct = triviaGame[index].correct;
}

//Main Process
//==============================================================================
