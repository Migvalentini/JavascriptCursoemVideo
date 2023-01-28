let number = document.querySelector('#number')
let list = document.querySelector('#select')
let res = document.querySelector('#res')
let array = []

function add() {
    if (isNumber(number.value) && !inList(number.value, array)) {
        array.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Value ${number.value} added!`
        list.appendChild(item)
        res.innerHTML = ""
    } else {
        alert(`Invalid number or already found in the list!`)
    }
    number.value = ''
    number.focus()
}

function finalize() {
    if (array.length == 0) {
        alert('[ERROR] Please, enter a number')
    } else {
        let total = array.length
        let biggest = array[0]
        let smallest = array[0]
        let sum = 0
        let average = 0

        for (let pos in array) {
            sum += array[pos]
            if (array[pos] > biggest) {
                biggest = array[pos]
            } else if (array[pos] < smallest) {
                smallest = array[pos]
            }
        }
        average = sum / total

        res.innerHTML = ''
        res.innerHTML += `<p>In total, we have ${total} registered numbers</p>`
        res.innerHTML += `<p>Biggest Registered Number: ${biggest} <br>Smallest Registered Number: ${smallest}</p>`
        res.innerHTML += `<p>The sum of the numbers is ${sum}</p>`
        res.innerHTML += `<p>The average of the numbers is ${average}</p>`
    }
}

function isNumber(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}