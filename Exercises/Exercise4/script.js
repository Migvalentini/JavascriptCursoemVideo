function generate() {
    var number = document.querySelector('#number')
    var area = document.querySelector('#area')

    if (number.value.length == 0) {
        alert('Please, enter a number!')
    } else {
        let n = Number(number.value)
        area.innerHTML = ''
        for (pos = 1; pos <= 10; pos++) {
            let item = document.createElement('option')
            item.text = `${n} X ${pos} = ${n * pos}`
            area.appendChild(item)
        }
    }
}