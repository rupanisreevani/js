// 
// var marks=67
// if (marks>=90 && marks<=100){
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



var marks=prompt("enter the marks");{
if(marks>=90 && marks<=100){
    document.write("grade is A")
}
else if(marks<=90 && marks>=85){
    document.write("gradeis B")
}
else if(marks<=80 && marks>=60){
    document.write("grade is c")
}

else if(marks<=60 && marks>=35){
    document.write("grade is D")

}
else {
    document.write("failed")
}
}

// function garde(m){
    
// if (m>=90 & m<=100){
//     console.log("grade is A")
// }
// else if(m<=90 & m>=85){
//     console.log("grade is B")
// }
// else if(m<85 & m>60){
//     console.log("grade is c")
// }
// else if(m<60 & m>=35){
//     console.log("grade is d")
// }else {
//     console.log("failed")
// }

// }
// garde(100)


// template literals-->string literals
// basic intrpolation
// var place ="hyd"
// console.log(`sai is from ${place}`)
// console.log("sai is from"+ place)
// // add the expressions
// var num1=30
// var num2=20
// console.log("The addition of" + num1+"and" + num2+"are"+(num1+num2))
// console.log(`the addition of ${num1} and ${num2} are ${num1+num2}`)
// // we can include the additional quotes
// console.log(`sreevani ,"meghane birgani is" famous`)
// // we can write a multi string
// console.log(`sreevani
//                     sai`)

// conditional statement

// if sts
// var sai=18
// if(sai>=18){
//     console.log("eligible to marry with sreevani")
// }


// // if else

// var sai=18
// if(sai>=18){
//     console.log("eligible to marry with sreevani")
// }
// else{
//     console.log("sai is wait for the 12 mos")
// }

// // else if

// var marks=76
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


// break

// for (i=0;i<=10;i++){
//     if(i==5){
//         break
//     }
//     console.log(i)
// }

// // countinu:

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         continue;  // <-- Correct spelling
//     }
//     console.log(i);
// }


// switch op
/*
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


var day = prompt("Enter the day:")

switch (day) {
    case "sunday":
        console.log("It's a weekend");
        break;
    case "monday":
        console.log("Working day");
        break;
    case "tuesday":
        console.log("Non-veg day");
        break;
    case "saturday":
        console.log("It's a party day");
        break;
    default:
        console.log("You have entered an invalid day");
        break;
}

function fun_name(){

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
}
fun_name(sunday)
*/