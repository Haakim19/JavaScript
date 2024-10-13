//? var - global Scope variable assining , can change the value 
//? let -  local Scope variable assining , can change the value
//? const - can't change the value of the variable after assining

const price = 1000
const productName = "Laptop"
var tax = 0.1
console.log("Product Name = " + productName)
var totalPrice = price + (price * tax)