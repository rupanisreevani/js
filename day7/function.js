//  name function:
// function fun_name(){
//     var a=4;
//     var b=3;
//     var c=a+b;
//     console.log(c);
// }
// fun_name()
// 2. Parameterized Function
// Definition: A function that takes parameters (placeholders) to accept input values when it is called.
// Syntax:
// function functionName(param1, param2) {
//  	// use parameters
//  }
//  functionName(arg1, arg2);
// function fun_name(a,b){
//     console.log(a-b)

// }
// fun_name(5,10)

// return function
// function fun_name(){
//     var a=10
//     var b=20
//     var c=a+b
//     console.log(c)
//     var d=a-b

//     return d

// }
// var result=fun_name()
// console.log(result)

// function name(a,b){
//     console.log(a+b)


// }
// name(2,4)
// le
// normal arror function
var place=()=>{
    console.log("bangalore");
    // document.write("hyd")
    
}
place();
 
// parameterized arrow function
var num=(a,b)=>{
    console.log(a+b)


}
num(1,2)
// parameterized returned function
var num1=(a,b)=>{
    console.log(a-b);
    var c=a*b
    return c
    console.log("sreevani")
}
console.log(num1(9,15))