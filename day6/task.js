// Concepts: charAt(), charCodeAt(), at()
// Write a program that:
// ·     - Takes a string 'JavaScript'
//  - Prints:
//    • The character at index 4
//    • The ASCII value of the character at index 2
//    • The last character using a negative index with .at()
// var str="javaScript"
// console.log(str.charAt(4))
// console.log(str.charCodeAt(2))
// console.log(str.at(-1))
// Task 2: Combine & Search
// Concepts: concat(), includes(), indexOf(), lastIndexOf()
// Write a program that:
// ·     - Combines 'Hello' and 'World' using concat()
//  - Checks if the final string includes 'lo'
//  - Finds the first and last index of 'l'
// var str1="hello"
// // var str2="World"
// // console.log(str1.concat("",str2))
// console.log(str1.includes("lo"))
// console.log(str1.indexOf("l"))
// console.log(str1.lastIndexOf("l"))
//  Task 3: Text Formatting
// Concepts: toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd()
// Write a program that:
// ·     - Takes a string '   JavaScript Methods   '
//  - Removes leading and trailing spaces
//  - Converts the result into uppercase, then lowercase
//  - Also print separately trimmed-start and trimmed-end results
// var str="      javaScript Methods   "
// console.log(str.trim())
// console.log(str.toUpperCase())
// console.log(str.trimStart())
// console.log(str.trimEnd())
// Task 4: Extract Substrings
// Concepts: slice(), substring()
// Write a program that:
// ·     - Takes 'Learning JavaScript is fun!'
//  - Extracts:
//    • 'JavaScript' using slice(9, 19)
//    • 'Learning' using substring(0, 8)
// var str="Learning JavaScript is fun!"
// console.log(str.slice(9,19))
// confirm.log(str.substring(0,8))
// ask 5: Padding Magic
// Concepts: padStart(), padEnd()
// Write a program that:
// ·     - Takes a string '50'
//  - Pads it:
//    • With '0' at start until length 5
//    • With '*' at end until length 10

// var num="50"
// console.log(num.padStart(5,"0"))
// console.log(num.padEnd(10,"*"))
// Task 6: Replace & Compare
// Concepts: replace(), replaceAll(), localeCompare()
// Write a program that:
// ·     - Takes the string 'I love JavaScript, JavaScript is powerful!'
//  - Replaces the first 'JavaScript' with 'JS'
//  - Then replaces all 'JavaScript' occurrences with 'JS'
//  - Compare 'apple' and 'banana' using localeCompare()
// var str="I love JavaScript, JavaScript is powerful"
// console.log(str.replace('JavaScript','JS'))
// console.log(str.replaceAll("I love JavaScript, JavaScript is powerful","js"))
// var str1="apple"
// var str2="banana"
// console.log(str1.localeCompare(str2))
// Task 7: Mixed Operations (Mini Project)
// Concepts Covered: Almost All Above
// Write a function analyzeString(str) that:
// ·     - Returns an object with the following info:
//    • Length of string
//    • First and last character
//    • Uppercase & lowercase versions
//    • Whether it includes the word 'JS'
//    • A sliced portion (first 5 chars)
//    • Trimmed string
// var str="sreevani"
// console.log(str.length)
// console.log(str.charAt("0"))
// console.log(str.charAt("7"))
var str="sreevani"
console.log(str.startsWith("s"))
console.log(str.endsWith("i"))
console.log(str.repeat(5))
var num="1,2,3,4,5"
console.log(num.split(","))