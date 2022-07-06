function multiply(a, b) {
    let result = 0;

    if ((b < 0 && a < 0) && (b > 0 && a < 0) || (b < 0 && a < 0)) {
        b = -b
        for (let i = 1; i <= b; i++) {
            result = result + a;
        }
        return -result
    }
    if ((b < 0 && a > 0) && !(b > 0 || a < 0)) {
        b = -b
        for (let i = 1; i <= b; i++) {
            result = result + a;
        }
        return -result
    } else {
        for (let i = 1; i <= b; i++) {
            result = result + a;
        }
        return result
    }
}

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
let q = 0;
let p = 0;
q = divide(a,b);
p = multiply(q,b);
return a - p
}