var time = new Date()
var hour = time.getHours()

console.log(`Now it's ${hour} o'clock`)

if (hour < 12) {
    console.log('Good Morning')
} else if (hour <= 18) {
    console.log('Good Afternoon!')
} else if (hour <= 22) {
    console.log('Good Night!')
} else {
    console.log('Good Daybreak!')
}