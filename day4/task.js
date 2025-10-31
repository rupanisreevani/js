// Create an object named student with properties:
//  name, age, course, and marks.
// var obj1={name:"sreevani",age:23,course:"python",marks:80}
// console.log(obj)
// Add a new property grade and modify the marks value.
// obj.grade="a"
// obj.marks=85
// console.log(obj)
// Use Object.keys() and Object.values() to display all property names and their values separately.
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// Use Object.entries() to print key–value pairs together in array format.
// console.log(Object.entries(obj))
// Create another object extraDetails with properties like city and rollNo,
//  and merge it into the student object using Object.assign().
// var obj2={city:"hyd",rollno:"250"}
// var obj3=Object.assign(obj1,obj2)
// console.log(obj3)
// Use Object.hasOwnProperty() to check if the student object has the property course and address.
// console.log(Object.hasOwnProperty('course'))
// console.log(Object.hasOwnProperty('address'))
// Make a copy of the student object and apply Object.freeze() on it.
//  Try adding or modifying properties and observe that no changes happen.
// Object.freeze(obj1)
// console.log(obj1)
// obj1.age=24
// Apply Object.seal() on another copy of the object and verify that:
// You cannot add or delete properties,
// But you can modify existing values.
// Object.seal(obj1)
// console.log(obj1)
// obj1.age=22
// console.log(obj1)

// var obj1={name:"sreevani",age:23,food:"egg"}
// console.log(...obj1)
// var obj2=[obj1]
// console.log(obj2)
// var obj1={name:"sreevani",age:23,place:"hyd",food:"egg"}
// var obj2={rollno:234,phono:2345,course:"python",hi:5.8}
// var obj3={...obj1,...obj2}
// console.log(obj3)
var a=6
var b=10
console.log(a==b)
console.log(a+=b)
