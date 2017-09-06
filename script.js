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
  var question = triviaGame[index].question;
  $('#question').html(question);
  for(var i = 0; i < 4; i++){
    var answer = triviaGame[index].answer[i];
    $('#answer').append("<h4 class = allAnswers id=" + i + ">" + answer + "</h4>");
  };
  $("h4").on('click', function(){
    var id = $(this).attr('id');
    alert(id)
    if(id === correct){
      answered  =true;//stops timer
      $('#question').text("CORRECT!! THE CORRECT ANSWER WAS: " + triviaGame[index].answer[correct]);
      correctAnswer();
    }
    else{
      answered = true;//stops timer
      $('#question').text("YOU CHOSE " + triviaGame[index].answer[index] + "WHICH IS INCORRECT. THE CORRECT ANSWER WAS: " + triviaGame[index].answer[correct]);
      incorrectAnswer();
    }
  });
}

function timer(){
  if(timeRemaining === 0){
    answered = true;
    clearInterval(intervalID);
    $('#question').text("THE CORRECT ANSWER IS " + triviaGame[index].answer([correct]));
    unAnswered();
  }
  else if(answered === true){
    clearInterval(intervalID);
  }
  else{
    timeRemaining--;
    $('#timeRemaining').text("YOU HAVE " + timeRemaining + "SECONDS TO CHOOSE!!").removeClass('animate pulse infinite');
  }
}

function correctAnswer(){
  correctAnswers++;
  $('timeRemaining').text("YOU ANSWERED CORRECTLY!").css().addClass('animate pulse infinite');
  resetRound();
}

function incorrectAnswer(){
  incorrectAnswers++;
  $('timeRemaining').text("YOU ANSWERED INCORRECTLY!").css().addClass('animate pulse infinite');
  resetRound();
}

function unAnswered(){
  unansweredQuestions++;
  $('timeRemaining').text("YOU FAILED TO ANSWER THE QUESTION.").css().addClass('animate pulse infinite');
  resetRound();
}

function resetRound(){
  $('')
  $('')
  index++;
  if(index < triviaGame.length){

  }
  else{
    setTimeout(function(){
      $('#question').remove();
      $('#timeRemaining').remove();
      $('#answerImage').remove();
      $('#answers').append("<h4 class = allAnswers>CORRECT ANSWERS: " + correctAnswers + "</h4>");
      $('#answers').append("<h4 class = allAnswers>INCORRECT ANSWERS: " + incorrectAnswers + "</h4>");
      $('#answers').append("<h4 class = allAnswers>UNANSWERED ANSWERS: " + unansweredQuestions + "</h4>");
      setTimeout(function(){location.reload();}, 7000);
    }, 5000);
  }
}
//Main Process
//==============================================================================
$('#start-button').on('click', function(){
  $('#start-button').removeClass('infinite').addClass('animate fadeOutDown');
  startGame();
});
