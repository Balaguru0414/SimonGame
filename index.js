var buttonColours = ["red","blue","green","yellow"];

var gamePattern  = [];
var userChosenPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!false) {
    $("#level-title").text("level "+ level);
    nextSequence();
  }
});

$(".btn").click(function () {
  
  var buttonChosenColour = $(this).attr("id");

  userChosenPattern.push(buttonChosenColour);

  animatePressed(buttonChosenColour);
  playSound(buttonChosenColour);

  checkAnswer(userChosenPattern.length-1);

});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userChosenPattern[currentLevel]) {
    if (userChosenPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      },1000);
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    $("#level-title").text("Game-Over Press any Key Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);

    startOver();
  }
}

function nextSequence() {
  userChosenPattern = [];
  level++;
  $("#level-title").text("level "+level);
  
  var ranodmNumber = Math.floor(Math.random()*4);
  var ranodmChosenColour = buttonColours[ranodmNumber];

  gamePattern.push(ranodmChosenColour);

  animatePressed(ranodmChosenColour);
  playSound(ranodmChosenColour);
}

function animatePressed(currentColour) {

  $("#"+currentColour).addClass("pressed");

  setTimeout(function () {
    $("#"+currentColour).removeClass("pressed");
  },100);
}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  started =false;
  gamePattern =[];
}




























