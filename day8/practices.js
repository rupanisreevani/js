// name function
// Q1. Write a function that prints “Hello, World!”.
function greet(){
    console.log("Hello,world")
}
greet()
// // parameter function
// // Q2. Write a function that takes a name and prints “Hello, [name]”.

function fun_name(name){
    console.log(`Hello${name}`)

}
fun_name("sreevani")

// Function that adds two numbers return

// Q3. Write a function that returns the sum of two numbers.
function add(){
    var a=10
    var b=20
    var c=a+b
    console.log(c)
    return


}
add()
// Function that finds the square of a number

// Q4. Write a function that returns the square of a number.

function square(num){
    return num*num
}
console.log(square(4));
// 5️ Function that checks if a number is even or odd

// Q5. Write a function that checks if a number is even or odd.

function checkEvenOdd(num) {
    if (num % 2 === 0)
        console.log(`num ${num} is even`);
    else
        console.log(`num ${num} is odd`);
}

checkEvenOdd(10);
// 6️⃣ Function that returns the largest of two numbers

// Q6. Write a function that returns the largest of two numbers.



function maxNum(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
console.log(maxNum(10, 20));

// 7️ Function with return and no parameters

// Q7. Write a function that returns a fixed message like “Welcome to JavaScript”.

function message(){
    return "welocom to js"

}
console.log(message());

// 8️ Function to calculate factorial

// Q8. Write a function that returns the factorial of a number.
function fact(n){
    var fact=1;
    for (var i=1; i<=n;i++){
        fact*=i

    }
    console.log(fact)
}
(fact(5))
// // Function with default parameter

// // Q9. Write a function that greets a user, with a default name “Guest”.
function greet(name="guest"){
    console.log(`hello ${name}`);
}
greet();
greet("sai")


// Arrow function example

// Q10. Write an arrow function that multiplies two numbers

var mul=(a,b)=>{
    var c=a*b
    console.log(c)
}
mul(5,8)
// Function Declaration (Named Function)

//  This is the most common type — it has a name and can be called anywhere in the code.

function name(){
    console.log("Hello,iam sreevani")
}
name()
// 2️ Function Expression

//  The function is stored in a variable. It’s not hoisted — you can only call it after it’s defined.

var name=function(){
    console.log("sreevani")
}
name()

// // 3️ Arrow Function (ES6 Feature)

// // A shorter syntax for writing functions.

var add = (a, b) => {
    var c = a + b;
    console.log(c);
};

add(4, 5);

// Anonymous Function

// A function without a name, often used inside another function.

// Immediately Invoked Function Expression (IIFE)

// A function that runs immediately after it’s defined.
(function(){
    console.log("iife executed immediately")

})()
// 6️ Function with Parameters and Return

// A function that takes input and returns output.
function mul(a,b){
    var c=a*b
    return c
    
}
var res=mul(10,20)
console.log(res)
// 6️ Function with Parameters and Return

//  A function that takes input and returns output.

function fun_name(name="guest"){
    console.log(`Hello ${name}`)


}
fun_name("tharun")

// Callback Function

//  A function passed as an argument to another function.

function Display(result){
    console.log("result is:",result);

}
function calculate(a,b,callback){
    var sum=a+b;
    callback(sum);

}
calculate(10,5,Display);
