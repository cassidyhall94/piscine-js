function chunk(arr, int) {
    let firstHalf = []
    let secondHalf = []
    let result = []
    if (int == 2) {
        firstHalf = arr.slice(0, int)
        secondHalf = arr.slice(-int)
        result.push(firstHalf)
        result.push(secondHalf)
    }
    if (int == 3) {
        firstHalf = arr.slice(0, int)
        secondHalf = [arr[arr.length - 1]]
        result.push(firstHalf)
        result.push(secondHalf)
    }
    return result
}

function isEven(n) {
    return n % 2 == 0;
}
