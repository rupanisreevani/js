// Array Basics
// 1. Create an array of 5 colors and print the second and last color.
// var color=["red","yewllo","green","pink","blue"]
// console.log(color)
// console.log[2];
// console.log[4]
// 2. Create an array of numbers and replace the first element with 100.
// var num=[1,2,3,4]
// console.log(num);
// num.unshift(100)
// console.log(num);
// 3. Create an array with mixed data types (string, number, boolean). Print the type of each element using a loop.
// var arr=["sarrevani",22,true]
// for (var)
// console.log(typeof(arr))
// 4. Create a nested array and print the inner array’s second element.
// var num=[[1,2,3],[4,5],[8,9,6]]
// console.log(num[0][1])

// 5. Create an array using the Array constructor and display its length.
// var num=[1,2,3,4];
// console.log(num);
// console.log(num.length);
// 2. push(), pop(), shift(), unshift()
//6. Create an array of fruits and add one fruit at the end using push().
// var fruits=["apple","banana"]
// fruits.push("mango")
// console.log(fruits)

// //7. Remove the last element from the array using pop() and display the updated array.
// fruits.pop()
// console.log(fruits)
// //8. Add two new fruits at the beginning using unshift().
// fruits.unshift("graphes","kiwi")
// console.log(fruits)
// //9. Remove the first element using shift() and print the new array.
// fruits.shift()
// console.log(fruits)
// 10.use a combination of push() and pop() to keep only 3 elements in your array.
// var name=["sreevani","sai","nani"]
// name.push("tharun")
// console.log(name)
// name.pop()
// console.log(name)


// 3. slice() and splice()
//11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].
// var num=[10, 20, 30, 40, 50]
// console.log(num.slice(1,3))
// //   12. Using the same array, use splice() to replace 30 with 35.
// console.log(num.splice(2,1,35))
// console.log(num)
// //   13. Insert 25 before 30 using splice().
// console.log(num.splice(2,0,25))
// console.log(num)
// //   14. Remove the last two elements using splice().
// console.log(num.splice(-2,2))
// console.log(num)
// 15. Use slice() to copy the first three elements into a new array.
// var num=[1,3,5,6,7]
// console.log(num.slice(1,3))
// 4. concat(), join(), toString()
// 16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat().
// var num1=[1,2,3]
// var num2= [4,5,6]
// var num3=[9,8,7]
// // console.log(num1.concat(num2))

// // // 17. Convert an array of names into a string separated by commas using join().
// // var name=["sareevani","sai"]
// // console.log(name.join("-"))

// // 18. Use toString() on an array and display the output.
// console.log(num1.toString())
// //19. Merge three arrays using concat() and find the length of the new array.
// console.log(num1.concat(num2,num3))
// //20. Create an array of city names and join them using ' - ' as a separator.
// console.log(num1.join("-"))
// 5. Search Methods (indexOf, lastIndexOf, includes)
// 21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'.
// var arr=['apple', 'banana', 'orange', 'banana', 'grape'] 
// console.log(arr.indexOf("banana"))
// // 22. Find the last index of 'banana' using lastIndexOf().
// console.log(arr.lastIndexOf("banana"))
// // 23. Check if 'mango' exists in the array using includes().
// console.log(arr.includes("mango"))
// // 24. Write code to check if a specific number exists in an array, if not, push it.

// // 25. Use includes() to verify if 'kiwi' is present in your fruit array and print a message accordingly
// arr.includes("kiwi")
// console.log("Kiwi is present in the fruit array.");
// console.log(arr)

// 6. find() and findIndex()
// 26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.
// var num=[5, 12, 8, 130, 44];
// num.find(num>10);
// console.log("first number greater than10:")
//  27. Use findIndex() to locate the position of the first element greater than 50.
// 28. Find the first even number in an array using find().
// 29. Find the index of the first odd number in an array using findIndex().
// 30. Use find() to search for a string longer than 5 characters in an array of words.

// 7. sort(), reverse(), copyWithin(), flat()
// 31. Sort an array [5,3,8,1,2] in ascending order.
// var num=[5,3,8,1,2]
// console.log(num.sort())
// // 32. Reverse the sorted array and print it.
// console.log(num.reverse())
// //33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].
// var numbers=[10, 20, 30, 40, 50];
// numbers.copyWithin(3,0,2)
// console.log(numbers)
// 34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().
// var arr=['a','b',['c','d'],['e',['f']]];
// var newarr=arr.flat(5);
// console.log(newarr);
// 35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]].
// var arr=['x',['y',['z',['w']]]];
// console.log(arr.flat(2))
// console.log(arr)

// 8. length, Destructuring & Misc
// 36. Create an array of 10 numbers and print its length.
// var number=[5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// console.log(number.length)
// // 37. Remove the last element using pop() and print the new length.
// console.log(number.pop())
// console.log(number.length)
// 38. Use array destructuring to extract first three elements into variables.


// 39. Create a constant array and modify one element (to show arrays are mutable).
// const fruits=["apple","banana","mango"]
// fruits[1]="kiwi"
// console.log(fruits)
// 40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.
// var data=[20,5,15,10]
// data.push(25);
// data.splice(2,0,12);
// data.sort();
// data.reverse()
// console.log("final manipulated array:",data);
