//! variable declaration 
//? var - global Scope variable assining , can change the value 
//? let -  local Scope variable assining , can change the value
//? const - can't change the value of the variable after assining

// var price = 100000
// var productName = "Laptop"
// var tax = 0.1
// console.log("Product Name = " + productName)
// var totalPrice = price + (price * tax)
// console.log ("Total Price = " + totalPrice)

// var fruitName = "Apple"
// var count = 10
// var price = 100
// var totalPrice = count * price
// console.log ("Fruit Name - "+ fruitName)
// console.log("Total Price = " + totalPrice)

//! Incriment and Decriment operator
//? ++ - Incriment operator
//? -- - Decriment operator
// var a = 10 
// var b = a++ 
 //* is equal to b = a, a = a + 1 so b = 10, a = 11
// var d = 10
// var c = ++d 
 //* is equal to d = d + 1, b = d so d = 11 , b = 11

//! Data types

//? String - "Hello" , 'Hello'
// var greet = "Hello"
// console.log(typeof(greet))

//? Number - 10, 10.5
// var age = 10
// console.log(typeof(age))

//? Boolean - true, false
// var isTrue = true
// console.log(typeof(isTrue))

//? Undefined - undefined
// var name
// console.log(typeof(name))

//? Null - null
// var nullValue = null
// console.log(typeof(nullValue))

//! JS Functions
//? function declaration
// function greet(){
//     console.log("Hello")
// }

//? function calling
// greet()

//? function with parameters
// function add(a,b){
//     console.log(a+b)
// }
// add (10,20)

//? function with return value
function add(a,b){
    return a + b
}
console.log (add(10,20))