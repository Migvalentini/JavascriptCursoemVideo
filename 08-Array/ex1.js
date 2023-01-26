/* 
Arrays:
let num = [0,1,2,3,etc]
*/

let num = [0,1,2,3]
num[4] = 4 // create a new element
num.push(5) // create an element at the last position of the array
num.sort() // order the numbers in the array

//console.log(num[3])p
//console.log(num.length)

console.log(num)
console.log(num.indexOf(3))
for (var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for (let pos in num) { // array and object
    console.log(num[pos])
}