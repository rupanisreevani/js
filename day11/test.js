// 1.     Use the spread operator to merge two arrays: [1,2,3] and [4,5,6].
// var a=[1,2,3]
// var b=[4,5,6]
// var merged=[...a,...b]
// console.log(merged)
// console.log(...a,...b)

// 2.     Use array destructuring to extract the first two values from an array.
// var num=[10,20,30,40]
// // var[first,second]=num;
// // console.log(first,second)

// // 3.     Create an object car with properties brand, model, and price. Use object destructuring to access these values.
// var car={brand:"ktm",model:"250",price:25000};
// var{brand,model,price}=car
// console.log(model,brand,price)
// 4.     Write a program that prints only odd numbers from 1 to 20 using continue.

// for(let i=1; i<=20; i++){
//  	if(i % 2 === 0) continue;
//  	console.log(i);
//  }

// 5.     Write a function calculateGrade(marks) that returns A, B, C, D, or F based on score.

// var marks=67;{
// if(marks>=90 && marks<=100){
//     console.log("grade is A")
// }
// else if(marks<=90 && marks>=85){
//     console.log("gradeis B")
// }
// else if(marks<=80 && marks>=60){
//     console.log("grade is c")
// }

// else if(marks<=60 && marks>=35){
//     console.log("grade is D")

// }
// else {
//     console.log("failed")
// }
// }
// 6.     Write a program that uses template literals to print student details.
var name="sareevani"
var age=23
var place="hyd"
console.log(`stusent name:${name},age:${age},place:${place}`)
// 7.     Write a program using switch to print the day of the week.
var day = "sunday";

switch (day) {
    case "sunday":
        console.log("it's a weekend");
        break;
    case "monday":
        console.log("working day");
        break;
    case "tuesday":
        console.log("non-veg day");
        break;
    case "saturday":
        console.log("it's a party day");
        break;
    default:
        console.log("you have passed an invalid day");
        break;
}
// 8.     Write a program that uses array methods like push(), pop(), shift(), unshif
var fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);
fruits.pop();
fruits.shift();
fruits.unshift("Mango");
console.log(fruits);
