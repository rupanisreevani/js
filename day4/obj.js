// using object literals
// var person={name:"sai",age:23,favfood:"egg",movie:"kaluki"}
// console.log(person)
// var person={}
// person.name="sai"
// person.age=23
// person.color="blue"
// person.movie="kalura"
// console.log(person)
// console.log(person.name)
// console.log(person["name"])
// console.log(person["favfood"])
// person.gender="male"
// person.age=31
// console.log(person)
// delete person.movie
// console.log(person)
// console.log(delete person.movie)
// object methods
//  object.key()
// var obj={a:1,b:2,c:3}
// // console.log(Object.keys(obj))
// // Object.values(): 
// // Returns an array of a given object’s own enumerable property values.
// // console.log(Object.values(obj))
// // Object.entries()
// // Returns an array of a given object’s own enumerable string-keyed property [key, value] pair
// console.log(Object.entries(obj))
// Object.assign():
//  Copies the values of all enumerable own properties from one or more sou
// var target={name:"sai",age:23}
// var source={place:"hyd",bike:"ninja"}
// Object.assign(target,source)
// console.log(target)
// Object.create():
//  Creates a new object with the specified prototype object and properties.
// var obj1=Object.create({price:"1ors"})
// console.log(obj1.price)
// Object.freeze(): 
// Freezes an object, preventing new properties from being added, existing properties from being removed, and values from being changed.
// var obj1={name:"nani",age:23}
// Object.freeze(obj1)
// console.log(obj1)
// obj1.place="hyd"
// console.log(obj1)
// Object.seal():
//  Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
// var obj={a:1,b:2}
// Object.seal(obj)
// console.log(obj)
// obj.a=5
// console.log(obj)
// delete obj.a
// console.log(obj)
// Object.hasOwnProperty(): 
// Returns a boolean indicating whether the object has the specified property as its own property.
var person={name:"sai",age:23,favfood:"egg",movie:"kaluki"}
console.log(Object.hasOwnProperty('name'))