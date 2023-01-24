/*
Nested Conditional
if (cond1) {
    true
} else {
    if (cond2) {
        true
    } else {
        false
    }
}
*/

var age = 30

if (age < 16) {
    console.log(`Don't vote`)
} else if (age < 18 || age > 65) {
    console.log(`Optional Vote`)
} else {
    console.log(`Compulsory Vote`)
}