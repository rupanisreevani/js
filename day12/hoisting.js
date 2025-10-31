// var
// ·      var variables are hoisted to the top of their scope and initialized with undefined.
// ·      Accessing them before the line of assignment gives undefined.


// console.log(a);
// var a=10;
// console.log(a);

// // let and const
// // ·      Both are hoisted but not initialized.
// // ·      Accessing them before declaration triggers ReferenceError due to Temporal Dead Zone (TDZ), the period between hoisting and initialization.

// console.log(b)
// let b=20;
// console.log(b)


// // const
// console.log(c)
// const c=30;
// console.log(c)

// . Function Declarations
// ·      Entire function body is hoisted.
// ·      Can be called before declaration in the code.
// name();
// function name(){
//     console.log("sreevani");
// }

// . Function Expressions
// ·      If using var, only the variable name is hoisted, not the function definition.
// ·      Accessing before initialization gives TypeError.

// name1()
// var name1=function(){
//     console.log("sai")
// }


// forIn()

// var person = {
//     name: "sai",
//     age: 23,
//     place: "hyd"
// };

// for (var per in person) {
//     console.log(`${per} : ${person[per]}`);
// }

// var person = {
//     name: "sai",
//     age: 23,
//     place: "hyd"
// };

// for (var per of person) {
//     console.log(`${per} : ${person[per]}`);
// }


// for Of()
// var colors=["blue","white","red","green","yellow","black"]
// for (var col of colors){
//     console.log(`the colors are ${col}`)

// }

// var colors=["blue","white","red","green","yellow","black"]
// for (var col in colors){
//     console.log(`the colors are ${col}`)
    
// }