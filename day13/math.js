// math methods
// 1. Math.abs()
// Returns the absolute (positive) value of a number.

var num=-12
console.log(Math.abs(-12))

// 2. Math.round()
// Rounds a number to the nearest integer.


var num1=24.245
console.log(Math.round(num1))

var num1=25.245
console.log(Math.round(num1))

// 2. Math.ceil()
// Rounds a number up to the nearest integer.

var a=26.6434
console.log(Math.ceil(a))

console.log(Math.ceil(a))

// 3. Math.floor()
// Rounds a number down to the nearest integer.


var a=25.6434
console.log(Math.floor(a))
console.log(Math.floor(a))



// 5. Math.trunc()
// Removes the fractional part, returning the integer part.

var b=5987.9865
console.log(Math.trunc(b))


// 6. Math.max() & Math.min()
// Finds the largest/smallest number among arguments.

console.log(Math.max(1, 2, 3, 10)); 
console.log(Math.min(1, 2, 3, 10));

// 7. Math.pow()
// Calculates exponentiation (base^exponent).

console.log(Math.pow(2,3))

// // 8. Math.sqrt()
// Calculates square root.


console.log(Math.sqrt(9))

// 9. Math.random()
// Generates a random number between 0 (inclusive) and 1 (exclusive).


console.log(Math.random())


// JavaScript Number Methods
// JavaScript provides multiple methods to work with numbers, including parsing, formatting, and type checking.

// 1. toFixed()
// toFixed() converts a number into a string, keeping a specified number of decimals. It is mainly used for rounding numbers to a certain precision.
// Syntax:
// number.toFixed(digits)

var num=123.456778;
console.log(num.toFixed(2))
console.log(num.toFixed(8))
console.log(num.toFixed(5))
console.log(num.toFixed(0))

// 2. parseInt()
// parseInt() converts a string to an integer, ignoring any trailing non-numeric characters.
// Syntax:
// parseInt(string)

var a="1234"
console.log(typeof(a))
var a=Number.parseInt(a)
console.log(a)
console.log(typeof(a))

// 3. parseFloat()
// parseFloat() converts a string into a floating-point number, preserving decimals.
// Syntax:
// parseFloat(string)

var num1="123.654"
console.log(typeof(num1))
console.log(typeof(Number.parseFloat(num1)))

// 4. isNaN()
// isNaN() checks if a value is Not-a-Number.
// Syntax:
// isNaN(value)


console.log(Number.isNaN(90))
console.log(isNaN("sai"))


// isFinite
var u="sree"
console.log(Number.isFinite(u))


// // isinteger

var sum=123
console.log(Number.isInteger(sum))

// toprecision

var e=123.4567
console.log(e.toPrecision(7))