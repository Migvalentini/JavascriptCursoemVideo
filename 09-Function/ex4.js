function factorial(n) {
    var fat = 1
    for (var c = 1; c <= n; c++) {
        fat *= c
    }
    return fat
}

console.log(factorial(5))