// Greeting Function
//  Define a named function called greetUser(name, times) that takes:


// name (a string) → the person’s name


// times (an integer) → how many times to greet
//  The function should print (or return) the greeting "Hello, {name}!" exactly times times.
//  Bonus: If times is less than 1, print a warning message instead.

// function greetUser(name, times) {
//   if (times < 1) {
//     console.log("Warning: Number of times must be at least 1.");
//   } else {
//     for (let i = 0; i < times; i++) {
//       console.log(`Hello, ${name}`);
//     }
//   }
// }

// greetUser("Sreevani", 3);
// greetUser("Sai", 0);

// Rectangle Area & Perimeter Function
//  Define a named function calcRectangle(width, height) that takes two numeric parameters: width and height. It should return an object or tuple containing:


// area = width × height


// perimeter = 2 × (width + height)
//  Bonus: If either width or height is zero or negative, return an error value/message.
// function calcRectangle(width, height) {
//   if (width <= 0 || height <= 0) {
//     return "Error: Width and height must be positive numbers.";
//   }

//   var area = width * height;
//   var perimeter = 2 * (width + height);

//   return {
//     area: area,
//     perimeter: perimeter
//   };
// }

// console.log(calcRectangle(15, 4));

// function calcRectangle(width,height){
//     var area=width*height
//     console.log(area)
//     var perimeter=2*(width+height)
//     console.log(perimeter)
// }
// calcRectangle(15,4)

// Flexible String Repeater Function
//  Define a named function repeatString(str, count, separator) that takes:


// str (a string) → the substring to repeat


// count (integer) → how many times to repeat


// separator (string) → what to place between the repeats
//  The function should build and return a string that repeats str exactly count times separated by separator.
//  Example: repeatString("ha", 3, "-") → "ha-ha-ha".
//  Bonus: If separator is omitted (or null), use a default separator of "" (empty string).


// Parameterized Filter Function
//  Define a named function filterByLength(wordList, minLen, maxLen) that takes:
// function filterByLength(wordList,minLen,maxLen){
//     console.log(wordList)
//     console.log(minLen)
//     console.log(maxLen)


// }
// filterByLength(["apple","mango"])
// filterByLength(["Hello","hii","sai"])
    


