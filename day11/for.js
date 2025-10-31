// 1.Print numbers from 1 to 10 using a for loop.

// for(i=1;i<=10;i++){
//     console.log(i);
// }
// 2. Print even numbers between 1 and 20
// for(var i=2;i<=20;i+=2){
//     console.log(i);
// }
// // 3. Print odd numbers between 1 and 20
// for(i=1;i<=20;i+=2){
//     console.log(i)
// }

// 4. Find the sum of the first 10 natural numbers
// var sum=0
// for(i=1;i<=10;i++){
//     sum+=i;
//     // console.log(sum)
// }
// console.log(sum)
// // 5. Print the multiplication table of a given number
// var num=3
// for (i=1;i<11;i++){
//     console.log(`${num}*${i}=${num*i}`)
// }
// // 6. Print numbers in reverse order (from 10 to 1)
// for(i=10;i>=1;i--){
//     console.log(i)
// }
// 7. Print the squares of numbers from 1 to 10
// for (i=1;i<=10;i++){
//     console.log(`${i}*2=${i*i}`);
// }
// 8. Find the factorial of a given number using a for loop
// var num=5;
// var fact=1;
// for (i=1;i<=num;i++){
//     fact*=i
// }
// console.log(fact)
// 9. Print the first 10 multiples of 5
// for (i=1;i<=10;i++){
//     console.log(5*i)
// }
// 10. Count how many numbers between 1 and 50 are divisible by 3
// var count=0;
// for(i=1;i<=50;i++){
//   if(i%3==0){
//     count++;
//   }

// }
// console.log(count)

// While Loop – Basic Questions

// 1.Print numbers from 1 to 5 using a while loop.
// var i=1;
// while(i<=5){
//     console.log(i)
//     i++
// }

// 2.Print numbers from 10 down to 1.
// var i=10
// while(i>=1){
//     console.log(i)
//     i--;
// }

// 3.Find the sum of numbers from 1 to n.
// var num=10
// var sum=0
// var i=1
// while(i<=num){
//     sum+=i;
//     i++;
// }
// console.log(sum)


// 4.Print even numbers from 2 to 20.

// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }
// 5.Reverse a number (e.g., input = 123 → output = 321).
// var num=123;
// var rev=0;

// while(num>0){
//     var ld=num%10;
//     rev=rev*10+ld;
//     num=Math.floor(num/10);

// }
// console.log(rev)
// 6.Count the digits in a number.
// var num=12345;
// var count=0
// while(num>0){
//     count++;
//     num=Math.floor(num/10);

// }
// console.log("total digits=",count);
// // 7.Print the Fibonacci series up to n terms.
// var n=10;
// var a=0,b=1,i=1;
// while
// (i<=n){
//     console.log(a);
//     var c=a+b;
//     a=b;
//     b=c
//     i++;
// }
// // 8.Find the factorial of a number using a while loop.
// var num=5
// var fact=1
// i=1
// while(i<=num){
//     fact*=i
//     i++
// }
// console.log(fact)
// // 9.Check if a number is a palindrome.
// var num=121;
// var temp=num;
// var rev=0;
// while(num>0){
//     var ld=num%10;
//     rev=rev*10+ld;
//     num=Math.floor(num/10);

// }
// if(rev==temp){
//     console.log("pali")
// }
// else{
//     console.log("not pail")
// }

// // 10.Print numbers until the sum becomes greater than 100.

// var i=1;
// var sum=0
// while(sum<=100){
//     sum+=i;
//     console.log("number:",i,"sum:",sum)
//     i++;
// }
// 🔄 Do...While Loop – Basic Questions

// 1.Print numbers from 1 to 5 using a do...while loop.
// var i=1;
// do{
//     console.log(i);
//     i++
// }while(i<=5);
// // 2.Print numbers from 10 down to 1.
// var i=10;
// do{
//     console.log(i);
//     i--;
// }while(i>=1);
// 3.Find the sum of numbers from 1 to 10.
// var i=1
// sum=0
// do{
//     sum+=i;
//     i++
// }while(i<=10);
// console.log(sum)

// 4.Display the multiplication table of a given number.
// var num=4;
// var i=1;
// do{
//     console.log(`${num}X${i}=${num*i}`);
//     i++;
// }while(i<=10);

// 5.Print even numbers from 2 to 10.
// var i=2;
// do{
//     console.log(i);
//     i+=2;

// }while(i<=10);

// 6.Keep asking the user for input until they enter “stop”.

// 7.Calculate the factorial of a given number.
// var num=5
// var fact=1
// var i=1
// do{
//     fact*=i;
//     i++;
// }while(i<=num);
// console.log(fact)

// // 8.Print the digits of a number one by one.
// var num=1234
// do{
//     var ld=num%10;
//     console.log(ld);
//     num=Math.floor(num/10);

// }while(num>0);

// 9.Print numbers from 1 to n, even if n is 0.
var n=0;
var i=1;
do{
    console.log(i);
    i++;

}while(i<=n);
//  Even if n = 0 (condition false), the loop still runs once because do executes before checking the condition.


// 10.Demonstrate that a do...while loop runs at least once even if the condition is false.
var i=10;
do{
    console.log("this run at least once");

}while(i<5);
// The condition i < 5 is false at the start.

// But the code inside the do block still runs once before checking it.