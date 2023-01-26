function load() {
    var clockTxt = document.querySelector('#clockTxt')
    var img = document.querySelector('#photo')
    var time = new Date()
    var hour = time.getHours()
    var minutes = time.getMinutes()
    
    clockTxt.innerHTML = `Now it's ${hour} hours and ${minutes} minutes`
    if (hour >= 0 && hour < 12) {
        img.src = 'images/day.jpg'
        document.body.style.background = '#2770C6'
    } else if (hour >= 12 && hour < 18) {
        img.src = 'images/afternoon.jpg'
        document.body.style.background = '#622D0D'
    } else {
        img.src = 'images/night.jpg'
        document.body.style.background = '#0D0100'
    }
}