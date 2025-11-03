// // math methods
// // 1. Math.abs()
// // Returns the absolute (positive) value of a number.

// var num=-12
// console.log(Math.abs(-12))

// // 2. Math.round()
// // Rounds a number to the nearest integer.


// var num1=24.245
// console.log(Math.round(num1))

// var num1=25.245
// console.log(Math.round(num1))

// // 2. Math.ceil()
// // Rounds a number up to the nearest integer.

// var a=26.6434
// console.log(Math.ceil(a))

// console.log(Math.ceil(a))

// // 3. Math.floor()
// // Rounds a number down to the nearest integer.


// var a=25.6434
// console.log(Math.floor(a))
// console.log(Math.floor(a))



// // 5. Math.trunc()
// // Removes the fractional part, returning the integer part.

// var b=5987.9865
// console.log(Math.trunc(b))


// // 6. Math.max() & Math.min()
// // Finds the largest/smallest number among arguments.

// console.log(Math.max(1, 2, 3, 10)); 
// console.log(Math.min(1, 2, 3, 10));

// // 7. Math.pow()
// // Calculates exponentiation (base^exponent).

// console.log(Math.pow(2,3))

// // // 8. Math.sqrt()
// // Calculates square root.


// console.log(Math.sqrt(9))

// // 9. Math.random()
// // Generates a random number between 0 (inclusive) and 1 (exclusive).


// console.log(Math.random())


// // JavaScript Number Methods
// // JavaScript provides multiple methods to work with numbers, including parsing, formatting, and type checking.

// // 1. toFixed()
// // toFixed() converts a number into a string, keeping a specified number of decimals. It is mainly used for rounding numbers to a certain precision.
// // Syntax:
// // number.toFixed(digits)

// var num=123.456778;
// console.log(num.toFixed(2))
// console.log(num.toFixed(8))
// console.log(num.toFixed(5))
// console.log(num.toFixed(0))

// // 2. parseInt()
// // parseInt() converts a string to an integer, ignoring any trailing non-numeric characters.
// // Syntax:
// // parseInt(string)

// var a="1234"
// console.log(typeof(a))
// var a=Number.parseInt(a)
// console.log(a)
// console.log(typeof(a))

// // 3. parseFloat()
// // parseFloat() converts a string into a floating-point number, preserving decimals.
// // Syntax:
// // parseFloat(string)

// var num1="123.654"
// console.log(typeof(num1))
// console.log(typeof(Number.parseFloat(num1)))

// // 4. isNaN()
// // isNaN() checks if a value is Not-a-Number.
// // Syntax:
// // isNaN(value)


// console.log(Number.isNaN(90))
// console.log(isNaN("sai"))


// // isFinite
// var u="sree"
// console.log(Number.isFinite(u))


// // // isinteger

// var sum=123
// console.log(Number.isInteger(sum))

// // toprecision

// var e=123.4567
// console.log(e.toPrecision(7))



// JavaScript Math Methods Practice Questions

//1. What will be the output of Math.abs(-25)?

// console.log(Math.abs(-25))

// // 2.How does Math.ceil(7.1) differ from Math.floor(7.9)?
// console.log(Math.ceil(7.1))
// console.log(Math.floor(7.9))

// // 3.What is the purpose of Math.round()? Give one example.
// console.log(Math.round(7.5))
// console.log(Math.round(7.4))

// //4. What does Math.trunc(9.99) return and why?
// console.log(Math.trunc(9567.99))


// // 5.Write a program to find the largest number among 15, 28, 37, and 42 using Math methods.
// console.log(Math.max(15,28,37,42))

// // 6.What is the output of Math.pow(3, 4)?
// console.log(Math.pow(3,4))

// // 7.Write a small code snippet to generate a random number between 1 and 50.
// console.log(Math.floor(Math.random()*50)+1);

// // 8.Which Math method is best suited for removing the decimal part without rounding?
// Math.trunc()
// What is the difference between Math.random() and Math.floor(Math.random() * 10)?
// Math.random() → returns a decimal number between 0 and 1 (like 0.736)

// Math.floor(Math.random() * 10) → returns an integer between 0 and 9


// JavaScript Number Methods – Practice Questions

// What does num.toFixed(2) do in JavaScript?
// var num=123.456
// console.log(num.toFixed(5))

// What is the difference between parseInt("45.67") and parseFloat("45.67")?
// var a="45.67"
// console.log(typeof(a))
// var a=Number.parseInt(a)
// console.log(a)
// console.log(typeof(a))
// var a="45.67"
// console.log(typeof(a))
// var a=Number.parseFloat(a)
// console.log(a)
// console.log(typeof(a))

// What is the output of parseInt("123abc") and why?
var a="123abc"
console.log(typeof(a))
var a=Number.parseInt(a)
console.log(a)
console.log(typeof(a))


// How does isNaN("hello") differ from isNaN(123)?
var b="hello"
console.log(isNaN(b))

// Convert the string "567" into a number using a Number method.
var c="567"
console.log(typeof(c))
var c=Number.parseInt(a)
console.log(c)
console.log(typeof(c))
console.log(Number(c))
// What happens when you run Number(true) and Number(false)?
console.log(Number(true))
console.log(Number(false))

// How can you check if a given input is not a number?
var d="abc"
console.log(isNaN(d))

// What is the output of Number("123abc")? Explain.
var num1="123abc"
console.log(Number(num1))

// When should you use toFixed() in a real-world project (for example, in an e-commerce site)?
var p=49.9999
console.log(p.toFixed(9))