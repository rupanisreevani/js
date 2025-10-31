// name="sreevani"
// console.log(name)
// output statement
// console.log("sai")
// console.warn("mhb")
// console.error("nani")
// console.info("sareevani")
// // document type
// document.write('yes')
// alert()/window.alert()
// variables

// name="sareevani"
// console.log(name)
// var,let,cons
// var age=23;
// var age=24
// console.log(age)
// let age=23;
// console.log(age)
// const pi=3.14;
// console.log(pi)
// data types
// var num=25
// console.log(num)
// console.log(typeof(num));
// var name="sreevani"
// console.log(name)
// console.log(typeof(name))

// var name=true
// console.log(name)
// console.log(typeof(name))
// bigint
// var num=9007199254740669n;
// console.log(num)
// console.log(typeof(num))
// data sunnary
// var name="rahul"
// var num=75
// var marks=true
// console.log(name)
// console.log(num)
// console.log(marks)

// 3.	Quiz - Guess the Datatype
// Create tricky cases and ask students to guess the datatype/output:
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof [1,2,3]);
// console.log(typeof {a:1});
// console.log(typeof (() => {}));
console.log(typeof(null)) //object
//null is primitive value no value or empty
//In the C implementation of JavaScript, null was represented as 
//a null pointer — basically, a memory address with all bits set to 0 (00000000).
//When the typeof operator checked its first bits (which started with 0), it mistakenly
//identified it as an “object”, because objects also started with a binary 0.


var num=[1,2,3];
console.log(typeof[1,2,3]) //object
//typeof cannot tell the difference between plain objects and arrays.
//Arrays in JavaScript are a special kind of object (with numeric keys and extra features).


var arr={a:1}//object
//{a:1} is a regular object literal.
//typeof correctly identifies it as "object".


console.log(typeof {a:1})
console.log(typeof NaN);//number

//typeof NaN gives "number" because in JavaScript, NaN (Not-a-Number) is still stored as a numeric 
//value—it represents a special “invalid number” result (like 0/0 or parseInt("abc")), so its type remains "number".

console.log(typeof (() => {}));//function
//() => {} is an arrow function.
//Functions in JavaScript are callable objects, but JavaScript gives them their own type label "function" for convenience.
//Technically, all functions are objects, but typeof distinguishes them specially.

arr=Array.isArray([1,2,3]); 
console.log(arr)
