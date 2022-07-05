function isPositive(n) {
    if (n > 0) {
        return true
    }
    else {
        return false
    }
}

function abs(n) {
    if (n >= 0) {
        return n
    }
    if (n < 0) {
        let result = n * -1
        return result
    }
}