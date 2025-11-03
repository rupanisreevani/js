

// function fun_sum(a,b,c){
//     if (a===13 || b===13 || c===13){
//         return "sum not return"
//     } 
//     else{
//         return a+b+c
//     }
// }   
// console.log((fun_sum(5,5,3)))

// function sum(a,b,c){
//     if (a==13){
//         return "sum is zero"
//     }
//     else{
//         return a+b+c
//     }



// }
// console.log(sum(5,5,3))



// global scope:


// var a=9
// function fun_name(){
//     console.log(a)
//     if (true){
//         console.log(a)
//     }

// }
// console.log(a)
// fun_name()

// var a=10;
// function show(){
//     console.log(a);

// }
// show()


// local scope:


// function add(){
//     var name="sai"
//     console.log(`The boy name is :${name}`)
// }
// var a="sreevani"
// console.log(a)
// add()


// function test(){
//     var x=5;
//     console.log(x);

// }
// test()
// console.log(x)



// Block scope 

// function num(){
//     if (true){
//         let name="sreevani"
//         console.log(name+ "like mysore bonda")

//     }
// }

// num()

// function sum(){
//     let a=20;
//     const b=30;
//     console.log(a,b);

// }
// console.log(a,b)
// sum()


// Lexical scope:

// function parent() {
//     var a = 20;
//     function child() {
//         var b = 24;
//         var c = a + b;
//         console.log(c);
//     }
//     child();
// }

// parent();


// function parent(){
//     var a=10;
//     function child(){
//         console.log(a)
//     }
//     child();
// }
// parent();

// closures 

// function outer(){
//     var a=10
//     function inner(){
//         console.log(a)

//     }
//     return inner()
// }
// var resalt=outer();
// resalt


// if(true){
//     var x=10;
//     let y=20;
//     const z=30
// }
// console.log(x)
// console.log(y)
// console.log(z)



// function outer(){
//     var a=5;
//     function inner(){
//         console.log(a);
//     }
//     inner();

// }
// outer();