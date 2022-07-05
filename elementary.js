function multiply(a, b) {
    let result = 0;
    for (let i = 1; i <= b; i++) {
        result = result + a;
    }
    for (let i = -1; i >= b; i--) {
        result = result + a;
    }
    return result
}
console.log(multiply(123, -22))

function divide(a, b) {
    var sign = 1;
    if (a < 0) {
        a = -a;
        sign = -sign;
    }
    if (b < 0) {
        b = -b;
        sign = -sign;
    }
    var result = 0;
    while (a >= 0) {
        a -= b;
        result++;
    }
    return multiply((result - 1), sign);
}

function modulo(a, b) {

}