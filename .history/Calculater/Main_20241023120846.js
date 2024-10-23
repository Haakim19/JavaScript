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
        display1.value += Math.PI;
    } else if (value === "e") {
        display1.value += Math.E;
    } else if (value === "log") {
        display1.value += "Math.log10(";
    } else if (value === "√") {
        display1.value += "Math.sqrt(";
    } else if (value === "sin") {
        display1.value += "Math.sin(";
    } else if (value === "cos") {
        display1.value += "Math.cos(";
    } else if (value === "tan") {
        display1.value += "Math.tan(";
    } else if (value === "ln") {
        display1.value += "Math.log(";
    } else {
        display1.value += value;
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
