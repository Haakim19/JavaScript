var gusesNumber = document.getElementById("gusesNumber");
var result = document.getElementById("result");
var randomNumber = Math.floor(Math.random()*10)+1
var score = 10;
function Check(){
    var enterdNumber = gusesNumber.value;
    if(enterdNumber == randomNumber){
        console.log("You are right");
        result.textContent = "You are right";
    }
    else {
        score -= 1;
        score.textContent = "Score: " + score;
        console.log("You are wrong");
        result.textContent = "You are wrong";
    }
}
