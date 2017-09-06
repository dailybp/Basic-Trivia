//Psuedocode
// Create an array of objects with: quesitons, answers, correct answers, and an image.
//
// Have counters that count: how many correct answers the player has made,
// the number of incorrect anwsers the player has made, and number of unanswered questions
// the player has made.
//
// Have a variable that denotes whether or not a question as been answered to allow
// for the time to stop when a question HAS been answered.
//
// Create functions that update the counters when ever the player makes an action
// that corresponds to an increase in the counter.
//
// Create a function that sets all the counters to zero and loads the quesitons and
// answers.

// Create a function that restarts the round.
//
// Create a timer function that begins to count down at a rate of a second and stops
// when a question has been answered or when it reaches zero: notifies the player
// of the correct answer or that they didn't answer the question.
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
  {question:"WHO WAS AWARDED THE FIRST U.S. PATENT FOR THE TELEPHONE?",answers:["ALEXANDER GRAHAM BELL","NICOLA TESLA","ELON MUSK","ALBERT EINSTIEN"], correct:0, image:("images/telephone.jpg")},
  {question:"AN ANIMAL THAT LIVES PART OF ITS LIFE ON LAND AND PART ON WATER?",answers:["A DUCK","A MAMMAL","AN AMPHIBIAN","A CRUSTACEAN"], correct:2, image:("images/amphibian.jpg")},
  {question:"WHEN WAS THE NINTENDO 64 RELEASED?",answers:["1996","1998","1964","1994"], correct:0, image:("images/N64.jpg")},
  {question:"HOW OLD MUST A PERSON BE TO RUN FOR U.S. PRESIDENT?",answers:["31","35","37","40"], correct:1, image:("images/president.jpg")},
  {question:"WHAT POPULAR SODA BEVERAGE WAS ORIGINALLY DEVELOPED AS A MIXER FOR WHISKY?",answers:["COKE","PEPSI","SURGE","MT DEW"], correct:3, image:("images/mtdew.jpg")},
  {question:"WHAT DOES CSS STAND FOR?",answers:["CRYPTIC STYLE STANDARDS","CASCADING STYLE STANDARDS","CASCADING STYLE SHEET","COMPUTER STUFFITY STUFF"], correct:2, image:("images/css.jpg")},
  {question:"IN PHOTO EDITING PROGRAMS, WHAT DOES RGB STAND FOR?",answers:["RED GREEN BLUE","REALLY GREAT BALANCE","RED GREAN BLUE","RED GREEN BLEW"], correct:0, image:("images/rgb.jpg")},
  {question:"HTML AND CSS ARE COMPUTER LANGUAGES USED TO CREATE WHAT?",answers:["APPS","GAMES","MUSIC","WEBSITES"], correct:3, image:("images/website.jpg")},
  {question:"THE FIRST PERSON SHOOTER VIDEO GAME \"DOOM\" WAS FIRST RELEASED IN WHAT YEAR?",answers:["1999","1989","1993","1997"], correct:2, image:("images/doom.jpg")},
  {question:"WHAT DOES THE ACRONYM \"LOL\" STAND FOR WHEN USED ON THE INTERWEBS OR ON YOUR PHONE?",answers:["LOVE OR LUST","LAUGH OUT LOUD","LEAGUE OF LEGENDS","LABOR OF LOVE"], correct:1, image:("images/lol.jpg")}
];
//Functions
//==============================================================================
function startGame(){
  console.log("game start")
  $('.start-button').remove();//removes data and events from element
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
  $('.question').html(question);
  for(var i = 0; i < 4; i++){
    var answer = triviaGame[index].answer[i];
    $('.answer').append("<h4 class = allAnswers id=" + i + ">" + answer + "</h4>");
  };
  $("h4").on('click', function(){
    var id = $(this).attr('id');
    alert(id)
    if(id === correct){
      answered  =true;//stops timer
      $('.question').text("CORRECT!! THE CORRECT ANSWER WAS: " + triviaGame[index].answer[correct]);
      correctAnswer();
    }
    else{
      answered = true;//stops timer
      $('.question').text("YOU CHOSE " + triviaGame[index].answer[index] + "WHICH IS INCORRECT. THE CORRECT ANSWER WAS: " + triviaGame[index].answer[correct]);
      incorrectAnswer();
    }
  });
};

function timer(){
  if(timeRemaining === 0){
    answered = true;
    clearInterval(intervalID);
    $('.question').text("THE CORRECT ANSWER IS " + triviaGame[index].answer([correct]));
    unAnswered();
  }
  else if(answered === true){
    clearInterval(intervalID);
  }
  else{
    timeRemaining--;
    $('.timeRemaining').text("YOU HAVE " + timeRemaining + "SECONDS TO CHOOSE!!").removeClass('animate pulse infinite');
  }
};

function correctAnswer(){
  correctAnswers++;
  $('.timeRemaining').text("YOU ANSWERED CORRECTLY!").css("color : green").addClass('animate pulse infinite');
  resetRound();
};

function incorrectAnswer(){
  incorrectAnswers++;
  $('.timeRemaining').text("YOU ANSWERED INCORRECTLY!").css("color : red").addClass('animate pulse infinite');
  resetRound();
};

function unAnswered(){
  unansweredQuestions++;
  $('.timeRemaining').text("YOU FAILED TO ANSWER THE QUESTION.").css("color : yellow").addClass('animate pulse infinite');
  resetRound();
};

function resetRound(){
  $('.allAnswers').remove();
  $('.answers').append("<img class=answerImage src=\"" + triviaGame[index].image + "\">");
  index++;
  if(index < triviaGame.length){
    setTimeout(function(){loadQsandAs(); $('#answerImage').remove();}, 5000);
  }
  else{
    setTimeout(function(){
      $('.question').remove();
      $('.timeRemaining').remove();
      $('.answerImage').remove();
      $('.answers').append("<h4 class = allAnswers>CORRECT ANSWERS: " + correctAnswers + "</h4>");
      $('.answers').append("<h4 class = allAnswers>INCORRECT ANSWERS: " + incorrectAnswers + "</h4>");
      $('.answers').append("<h4 class = allAnswers>UNANSWERED ANSWERS: " + unansweredQuestions + "</h4>");
      setTimeout(function(){location.reload();}, 7000);
    }, 5000);
  }
};
//Main Process
//==============================================================================
$('.start-button').on('click', function(){
  $('.start-button').removeClass('infinite').addClass('animate fadeOutDown');
  startGame();
});
