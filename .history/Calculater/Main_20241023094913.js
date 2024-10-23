const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');

function appentToDisplay(input){
    display2.value += input;
}
function clearDisplay(){
    display1.value = '';
    display2.value = '';
}
function calculate(){
    try{
        display1.value = eval(display2.value);}
    catch{
        display2.value = 'Error';
    }
    
}