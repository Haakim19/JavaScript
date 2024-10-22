const display = document.getElementById('display');

function appentToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = '';
}
function calculate(){
    try{
        display.value = eval(display.value);}
    catch{
        display.value = 'Error';
    }
    
}