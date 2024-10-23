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
        let expression = display.value
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/√/g, 'Math.sqrt')
        .replace(/π/g, 'Math.PI')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/\^/g, '**');
        display1.value = eval(display2.value);}
    catch{
        display2.value = 'Error';
    }
    
}