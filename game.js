


var buttonColours= ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0 ;
var gameStart = false;


$(".start-button").click(function(){

  if (!gameStart){
  $("#level-title").html("level "+level);
  nextSequence();
  gameStart = true;

}
})

$(".btn").click( function (){

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);


checkAnswer(userClickedPattern.length-1)
}
 );



function checkAnswer(currentLevel){

  if (gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    if (gamePattern.length  == userClickedPattern.length){

      setTimeout ( function(){nextSequence()} , 1000);

    }
  }else{
    playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").html("Game Over, Press start button to Restart");
      setTimeout( function() {$("body").removeClass(" game-over");}, 200);
     startOver();

  }

}


function nextSequence(){
  userClickedPattern= [];
level++ ;
$("#level-title").html("level "+level);

var randomNunber = Math.floor(Math.random() *4);
var randomChosenColour  = buttonColours[randomNunber]
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();

}

function animatePress(currentColour){

 $("#"+currentColour).addClass("pressed");
 setTimeout( function() {$("#"+currentColour).removeClass("pressed")}, 100)


}


 function startOver() {
    gamePattern = [];
     level = 0 ;
     userClickedPattern=[];
     gameStart = false;


    }
