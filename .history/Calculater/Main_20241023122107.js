// const display1 = document.getElementById('display1');
// const display2 = document.getElementById('display2');

// function appentToDisplay(input){
//     display2.value += input;
// }
// function clearDisplay(){
//     display1.value = '';
//     display2.value = '';
// }
// function calculate(){
//     try{
//         let expression = display2.value
//         .replace(/sin/g, 'Math.sin()')
//         .replace(/cos/g, 'Math.cos()')
//         .replace(/tan/g, 'Math.tan()')
//         .replace(/√/g, 'Math.sqrt()')
//         .replace(/π/g, 'Math.PI')
//         .replace(/log/g, 'Math.log10()')
//         .replace(/ln/g, 'Math.log()')
//         .replace(/\^/g, '**');
        
//         display1.value = eval(display2.value);}
//     catch{
//         display2.value = 'Error';
//     }
    
// }
// Main.js

// Function to append values to the display
function appentToDisplay(value) {
    const display1 = document.getElementById("display1");
    const display2 = document.getElementById("display2");
    if (value === "π") {
        display2.value += Math.PI;
    } else if (value === "e()") {
        display2.value += Math.E;
    } else if (value === "log") {
         Math.log10(display2.value);
    } else if (value === "sqrt()") {
        display2.value += Math.sqrt();
    } else if (value === "sin()") {
        display2.value += Math.sin();
    } else if (value === "cos()") {
        display2.value += Math.cos();
    } else if (value === "tan()") {
        display2.value += Math.tan();
    } else if (value === "ln()") {
        display2.value += Math.log();
    } else {
        display2.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display1").value = "";
    document.getElementById("display2").value = "";
}

// Function to calculate the result
function calculate() {
    const display1 = document.getElementById("display1");
    const display2 = document.getElementById("display2");
    try {
        // Use eval to calculate the expression in display1
        let result = eval(display2.value);
        display1.value = result;
    } catch (error) {
        display2.value = "Error";
    }
}

// Additional functions for mathematical operations
function appendToDisplay(value) {

}