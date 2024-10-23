const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');

function appentToDisplay(input){
    display1.value += input;
}
function clearDisplay(){
    display1.value = '';
    display2.value = '';
}
function calculate(){
    try{
        display2.value = eval(display.value);}
    catch{
        display2.value = 'Error';
    }
    
}