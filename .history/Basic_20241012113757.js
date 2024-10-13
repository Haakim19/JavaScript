//! variable declaration in javascript
//? var - global Scope variable assining , can change the value 
//? let -  local Scope variable assining , can change the value
//? const - can't change the value of the variable after assining

var price = 100000
var productName = "Laptop"
var tax = 0.1
console.log("Product Name = " + productName)
var totalPrice = price + (price * tax)
console.log ("Total Price = " + totalPrice)