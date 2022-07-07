function round(num) {
    num = multiply(num, 100);
    num = num + .5
    num = divide(num, 100);
    if (num == 2) {
        num = num + 1
    } else if (num == -2) {
        num = num - 1
    }
    return num
}

function ceil(num) {
    if (num == null) {
        num = 0
    }
    num = multiply(num, 1000.0);
    num = num + .5
    num = divide(num, 1000.0);
    if ((num == 2) || (num == 3)) {
        num = num + 1
    }
    return num
}

function floor(num) {

    let n = modulo(num, 1)
    if (n > 0) {
        let result = num - n
        return result
    }
    if (n < 0) {
        let result = num - n
        result = result - 1
        return result
    }
    if (num == 0) {
        return 0
    }
}

function trunc(num) {
    let isBig = false;
    if (num >= 0xfffffffff) {
        num -= 0xfffffffff
        isBig = true
    }
    let n = modulo(num, 1)
    if (n > 0) {
        num -= n
        if (isBig) {
            num += 0xfffffffff
            console.log(num)
            return num
        }
        // console.log(num)
        return num
    }
    if (n < 0) {
        num -= n
        return num
    }
    if (num == 0) {
        return 0
    }
    
}

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
    q = divide(a, b);
    p = multiply(q, b);
    return a - p
}