// Q1. Find the first non-repeated character
// let=str
// for(i=0;i>str.length;i++){
//     let count=0
//     for (j=0;j<str.length,j++){
//         if (str)
//     }
// }

// Q2. Convert temperature series from Celsius to Fahrenheit
function Celsius(Celsiusarr){
  return Celsiusarr.map(c=>(c*9)/5+32);

}
console.log(Celsius([0,20,30]))

function Celsius1(Celsiusarr){
  
}
// Q3. Reverse words in a sentence (preserve spacing)
// Question:
//  Write a function reverseWords(str) that takes a sentence str and returns a new sentence where each word is reversed, but the word order and spacing remain the same.
//  Example: reverseWords("Hello world!") → "olleH !dlrow"

// function reverseWords(str){
//     let words=str.split(" ");
//     let result="";
//     for (let i=0;i<words.length; i++){
//         let str=words[i];
//         let reversed=" ";
//     }

    
// }
// console.log(reverseWords("sreevani"))


// // Q4. Sum digits until single digit
// // Question:
//  Write a function digitalRoot(n) that takes a non-negative integer n and repeatedly sums its digits until the result is a single digit, then returns that digit.
//  Example: digitalRoot(49) → 4 + 9 = 13 → 1 + 3 = 4 → returns 4.

// Q5. Check if object is empty
// Question:
//  Write a function isEmptyObject(obj) that returns true if obj has no own properties (keys) and false otherwise.
// function isEmptyObject(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return false; 
//     }
//   }
//   return true; 
// }


// console.log(isEmptyObject({}));        
// console.log(isEmptyObject({a: 1}));
// Q6. Generate Range of Numbers
// Question:
// Write a function range(start, end, step = 1) that generates an array of numbers from start to end inclusive, stepping by step. If step is negative, the range goes backwards.

// Q7. Count Character Occurrences in a String
// Question:
// Write a function charCount(str) that returns an object where keys are each character in str, and values are how many times each character appears (case-sensitive).
// Q8. Generate first N Fibonacci numbers
// Question:
//  Write a function firstNFib(n) that returns an array of the first n Fibonacci numbers (starting with 0, 1). Example: firstNFib(5) → [0,1,1,2,3].
// function Fibonacci(){
//     let a=0
//     let b=1
//     console.log(a)
//     console.log(b)
//     for(i=0;i<5;i++){
//         let c=a+b
//         a=b
//         b=c
//         console.log(c)

//     }
        
// }
// Fibonacci()
// Q9. Remove falsy values from array
// Question:
//  Write a function removeFalsy(arr) that returns a new array containing only truthy values (i.e., removes false, 0, "", null, undefined, NaN).
// Q10. Swap two variables without a temp (using destructuring)
// let a=10;
// let b=20;
// [a,b]=[b,a];

// console.log("a =",a)
// console.log("b =",b)
// Q11. Count vowels in string
// Question:
//  Write a function countVowels(str) that returns how many vowels (a, e, i, o, u — case-insensitive) are in the string str.
// let str="sreevani"
// let vowel="aeiou"
// let count=0
// for (let i=0; i<str.length;i++){
//     if(vowel.includes(str[i])){
//         count+=1
//     }
// }
// console.log(count)
// Q12. Sum of two smallest positive numbers
// Question:
//  Write a function sumTwoSmallestPositives(arr) that takes an array of numbers (which may include negatives or zeros) and returns the sum of the two smallest positive numbers. If less than two positives exist, return null. Example: sumTwoSmallestPositives([5, 1, -2, 3, 1]) → 2 (1 + 1).