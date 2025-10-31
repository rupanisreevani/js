// JavaScript Strings
// String Methods
// charAt()
// Definition: Returns the character at a specified index in a string.
// Syntax: string.charAt(index)
// var str="Sreevani"
// console.log(str.charAt(1))
// charCodeAt()
// Definition: Returns the Unicode value of the character at a given index.
// Syntax: string.charCodeAt(index)

// var str="sreevani"
// console.log(str.charCodeAt(0))
// at()
// Definition: Returns the character at a specified index. Allows negative indexing (from the end).
// Syntax: string.at(index)
// var str="sai"
// console.log(str.at(-1))
// concat()
// Definition: Joins two or more strings together.
// Syntax: string.concat(string2, string3, ...)
// var str1="sreevani"
// var str2="sai"
// console.log(str1.concat("",str2))
// includes()
// Definition: Checks if a string contains a specified substring. Returns true or false.
// Syntax: string.includes(searchString, position)
// var str="Hello JavaScript";
// console.log(str.includes("Hello"))
// indexOf()
// Definition: Returns the index of the first occurrence of a substring.
// Returns -1 if not found.
// Syntax: string.indexOf(“Word to search”)
// var str=" sreevani sai"
// console.log(str.indexOf("sai"))
// startsWith()
// Definition: Checks if a string starts with a specified substring.
// Syntax: string.startsWith(searchString)
// var str="JavaScript"
// console.log(str.startsWith("java"))
// endsWith()
// Definition: Checks if a string ends with a specified substring.
// Syntax: string.endsWith(searchString)
// var str="programming"
// console.log(str.endsWith("mong"))
// slice()
// Definition: Extracts a section of a string and returns it as a new string.
// Syntax: string.slice(startIndex, endIndex)
// var str="sreevanisai"
// console.log(str.slice(1,6))
// substring()
// Definition: Returns a substring between two indices.
// Syntax: string.substring(startIndex, endIndex)
// var str="sareevani"
// console.log(str.substring(2,5))
// toUpperCase()
// Definition: Converts all characters to uppercase.
// Syntax: string.toUpperCase()
// var str="sai"
// console.log(str.toUpperCase())
// toLowerCase()
// Definition: Converts all characters to lowercase.
// Syntax: string.toLowerCase()
// var str="SAI"
// console.log(str.toUpperCase())
// trim()
// Definition: Removes whitespace from both ends of a string.
// Syntax: string.trim()
// var str="   Hello   "
// console.log(str.trim())
// // trimStart()
// // Definition: Removes whitespace only from the start of a string.
// // Syntax: string.trimStart()
// var str="   Hello"
// console.log(str.trim())
// trimEnd()
// Definition: Removes whitespace only from the end of a string.
// Syntax: string.trimEnd()
// var str="Hello   "
// console.log(str.trim())
// replace()
// Definition: Replaces the first occurrence of a substring with another.
// Syntax: string.replace(searchValue, newValue)
// var str = "I like cats";
// console.log(str.replace("cats", "dogs")); 
// replaceAll()
// Definition: Replaces all occurrences of a substring with another.
// Syntax: string.replaceAll(searchValue, newValue)
// Example:
// var str = "apple apple apple";
// console.log(str.replaceAll("apple", "orange"))
// split()
// Definition: Splits a string into an array based on a separator.
// Syntax: string.split(separator)
// Example:
// var str = "a,b,c";
// console.log(str.split(",")); // ["a","b","c"]
// padStart()
// Definition: Pads the beginning of a string with specified characters until it reaches a certain length.
// var str="5"
// console.log(str.padStart(3,"1"))
// padEnd()
// Definition: Pads the end of a string with specified characters until it reaches a certain length.
// Syntax: string.padEnd(targetLength, padString)
// Example:
// let str = "5";
// console.log(str.padEnd(3, "0")); 
// toString()
// Definition: Converts an object to a string representation.
// Syntax: value.toString()
// var num = 123;
// console.log(num.toString()); 
// localeCompare()
// Definition: Compares two strings according to the locale (alphabetical order).
// Syntax: string1.localeCompare(string2)
// Example:
// let a = "apple";
// let b = "banana";
// console.log(a.localeCompare(b)); // -1
// repeat()
// Definition: Repeats a string a specified number of times.
// Syntax: string.repeat(count)
// Example:
let str = "Hi";
console.log(str.repeat(3)); // "HiHiHi"

























