var gusesNumber = document.getElementById("gusesNumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var randomNumber = Math.floor(Math.random()*10)+1
var num = 10;
function Check(){
    var enterdNumber = gusesNumber.value;
    if(enterdNumber == 8){
        console.log("You are right");
        result.textContent = "You are right";
    }
    else {
        num -= 1;
        score.textContent = "Score: " + num;
        console.log("You are wrong");
        result.textContent = "You are wrong";
    }
    if(num == 0){
        alert("Game Over");
        location.reload();
    }
}
