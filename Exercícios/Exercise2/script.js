var year = document.querySelector('input#inumber')
var res = document.querySelector('#res')
var genre = document.getElementsByName('sex')
var date = new Date()
var current_year = date.getFullYear()

function calc() {
    if (year.value.length == 0 || year.value > current_year) {
        window.alert('Invalid Data')
    } else {
        var age = current_year - Number(year.value)
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (genre[0].checked) {
            sex = 'Male'
            if (age >= 0 && age < 10) {
                img.setAttribute('src','images/baby-boy.jpg')
            } else if (age < 21) {
                img.setAttribute('src','images/adolescent-boy.png')
            } else if (age < 50) {
                img.setAttribute('src','images/adult-boy.png')
            } else {
                img.setAttribute('src','images/old-boy.png')
            }
        } else {
            sex = 'Female'
            if (age >= 0 && age < 10) {
                img.setAttribute('src','images/baby-girl.png')
            } else if (age < 21) {
                img.setAttribute('src','images/adolescent-girl.png')
            } else if (age < 50) {
                img.setAttribute('src','images/adult-girl.png')
            } else {
                img.setAttribute('src','images/old-girl.png')
                img.style.backgroundPosition = 'top center'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${sex} with ${age} years <br>`
        res.appendChild(img)
    }   
}