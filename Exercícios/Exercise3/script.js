var start = document.querySelector('#start')
var end = document.querySelector('#end')
var step = document.querySelector('#step')
var res = document.querySelector('#res')
var area = document.querySelector('#area')
var c = 0
var count2 = ''

function count() {
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('[ERROR!] Are missing data!')
    } else {
        var sa = Number(start.value)
        var en = Number(end.value)
        var se = Number(step.value)
        area.innerHTML = 'Counting: '
        if (se <= 0) {
            alert('[ERROR] Invalid Step! Considering Step as 1')
            se = 1
        }
        if (sa < en) {
            for (c = sa; c <= en; c += se) {
                area.innerHTML += `${c}\u{27A1}`
            }
        } else {
            for (c = sa; c >= en; c -= se) {
                area.innerHTML += `${c}\u{27A1}`
            }
        }
    }
}