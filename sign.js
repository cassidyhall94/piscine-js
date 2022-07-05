function sign(n) {
    if (n > 0) {
        return 1
    }
    if (n < 0) {
        return -1
    }
    if (n == 0) {
        return 0
    }
}

function sameSign(n, m) {
    if (n < 0 && m < 0 || n > 0 && m > 0 || n == 0 && m == 0) {
        console.log("true")
        return true
    } else {
        console.log("false")
        return false
    }
}